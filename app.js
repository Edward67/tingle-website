/**
 * Created by edward67 on 16/2/15.
 */
var fs = require("fs");
var express = require('express');
var marked = require('marked');
var app = express();

app.get('/', function (req, res) {

    var header = fs.readFileSync('tpl/header.html'),
        footer = fs.readFileSync('tpl/footer.html');

    // 读取文件并markdown转译输出到页面
    fs.readFile('docs/button.md', function (err, data) {
        if (err) {
            return console.error(err);
        }


        //res.send(src.split('\n'))
        res.send(result.join('\n'))


        //res.send(header + marked(data.toString()) + footer);
        console.log("异步读取: " + data.toString());
    });
});

app.listen(3005, function () {
    console.log('Example app listening on port 3005!');
});