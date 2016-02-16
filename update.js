/**
 * Created by edward67 on 16/2/15.
 */
var fs = require("fs");
var https = require("https");
var express = require('express');

var app = express();

var catchList = [{
    name: 'tab',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-tab/master/README.md'
    }, {
    name: 'button',
    url: 'https://raw.githubusercontent.com/tinglejs/tingle-button/master/README.md'
}];

function download(url, callback) {
    https.get(url, function(res) {
        var data = "";
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on("end", function() {
            callback(data);
        });
    }).on("error", function() {
        callback(null);
    });
}

catchList.map(function(item) {
    download(item.url, function(data) {
        fs.open("docs/" + item.name + ".md","w",0644,function(e,fd){
            if(e) throw e;
            fs.write(fd,data,0,'utf8',function(e){
                if(e) throw e;
                fs.closeSync(fd);
            })
        });
        console.log(item.name + ' done')
    })
})

