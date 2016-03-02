/**
 * Created by edward67 on 16/2/15.
 */
var fs = require("fs");
var jade = require('jade');
var https = require("https");
var express = require('express');
var marked = require('marked');

var catchList = [{
    name: 'context',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-context/master/README.md'
},{
    name: 'style',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-style/master/README.md'
},{
    name: 'icon',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-icon/master/README.md'
},{
    name: 'slot',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-slot/master/README.md'
},{
    name: 'collection',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-collection/master/README.md'
},{
    name: 'box',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-box/master/README.md'
},{
    name: 'group',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-group/master/README.md'
},{
    name: 'slide',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-slide/master/README.md'
},{
    name: 'avatar',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-avatar/master/README.md'
},{
    name: 'tab',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-tab/master/README.md'
},{
    name: 'rate',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-rate/master/README.md'
},{
    name: 'button',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-button/master/README.md'
},{
    name: 'on-off',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-on-off/master/README.md'
},{
    name: 'time',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-grid/time/README.md'
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

curl();
function curl() {
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
                        handleMarkdown()
                    }
                });
                console.log(item.name + ' done');
            });

        })
    })
}

//handleMarkdown()

// 处理markdown
function handleMarkdown() {

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
                    if (item.slice(0, 4) == '<img') {
                        isContinuity = false;
                        return;
                    } else if (item.slice(0,4 ) == '![](') {
                        isContinuity = false;
                        return;
                    } else if (item.slice(0, 10) == '## Install') {
                        isContinuity = false;
                        return;
                    } else if (item.slice(0, 17) == '## Simple Usage') {
                        isContinuity = false;
                        return;
                    } else if (item.slice(0, 8) == '## Links') {
                        isContinuity = false;
                        return;
                    }
                    result.push(item)
                } else {
                    if (item.slice(0, 2) == '# ') {
                        result.push(item);
                        isContinuity = true;
                    } else if (item.slice(0, 8) == '## Props') {
                        result.push(item);
                        isContinuity = true;
                    } else if (item.slice(0, 8) == '## Event') {
                        result.push(item);
                        isContinuity = true;
                    }
                }
            })
            resultMap[item.name] = result.join('\n');
            if (++nums >= catchList.length) {
                saveDocs()
            }
        });
    })
}

// save
function saveDocs() {
    var md = [];
    var res = [];
    catchList.map(function (item) {
        md.push('<div id="' + item.name + '">' + marked(resultMap[item.name]) + '</div>')
    })


    //res.push(header);saqw

    res.push(jade.renderFile('./tpl/docs.jade', {
        catchList: catchList,
        md: md.join('')
    }));

    //console.log(111);
    //console.log(marked(md.join('\n')))

    //res.push(marked(md.join('\n')));

    //res.push(footer);

    fs.open("dist/docs.html", "w", 0644, function (e, fd) {
        if (e) throw e;
        fs.write(fd, res.join(''), 0, 'utf8', function (e) {
            if (e) throw e;
            fs.closeSync(fd);

        })
    });
    //console.log(resultMap)w
}