var fs = require("fs");
fs.watch('./', function(event, fileName) {
    //console.log(event, fileName)
    require('./update.js')
})