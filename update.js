/**
 * Created by edward67 on 16/2/15.
 */
var fs = require("fs");
var https = require("https");
var express = require('express');
var marked = require('marked');

var app = express();

var catchList = [{
    name: 'tab',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-tab/master/README.md'
}, {
    name: 'button',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-button/master/README.md'
}];
var resultMap = {};

function download(url, callback) {
    https.get(url, function (res) {
        var data = "";
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on("end", function () {
            callback(data);
        });
    }).on("error", function () {
        callback(null);
    });
}

function init() {
    var nums = 0;

    // 抓取catchList的数据
    catchList.map(function (item) {
        download(item.url, function (data) {
            fs.open("docs/" + item.name + ".md", "w", 0644, function (e, fd) {
                if (e) throw e;
                fs.write(fd, data, 0, 'utf8', function (e) {
                    if (e) throw e;
                    fs.closeSync(fd);
                    if (++nums >= catchList.length) {
                        packaging()
                    }
                })
            });
            console.log(item.name + ' done')
        })
    })


}


//init();
packaging()
// 生成页面
function packaging() {

    var nums = 0;
    // 过滤文档
    catchList.map(function (item) {
        fs.readFile('docs/' + item.name + '.md', function (err, data) {
            if (err) {
                return console.error(err);
            }

            var src = data.toString().split('\n'),
                result = [],
                isContinuity = false;


            src.map(function (item) {
                if (isContinuity) {

                    if (item.slice(0, 13) == '## Links 相关链接') {
                        isContinuity = false;
                        return;
                    }
                    result.push(item)

                } else {
                    if (item.slice(0, 2) == '# ') {
                        result.push(item);
                        result.push('');
                    } else if (item.slice(0, 15) == '## Simple Usage') {
                        result.push(item);
                        isContinuity = true;
                    } else if (item.slice(0, 7) == '## 可用配置') {
                        result.push(item);
                        isContinuity = true;
                    }


                }

            })

            resultMap[item.name] = result.join('\n');
            if (++nums >= catchList.length) {
                next()
            }


            //res.send(src.split('\n'))
            //res.send(result.join('\n'))


            //res.send(header + marked(data.toString()) + footer);
            //console.log("异步读取: " + data.toString());
        });
    })
}

// save
function next() {
    var html = [];
    catchList.map(function(item) {
        html.push(resultMap[item.name])
    })

    var header = fs.readFileSync('tpl/header.html'),
        footer = fs.readFileSync('tpl/footer.html');

    fs.open("dist/index.html", "w", 0644, function (e, fd) {
        if (e) throw e;
        fs.write(fd, header + marked(html.join('\n')) + footer, 0, 'utf8', function (e) {
            if (e) throw e;
            fs.closeSync(fd);

        })
    });
    //console.log(resultMap)
}