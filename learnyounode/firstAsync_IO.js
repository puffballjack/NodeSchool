var fs = require('fs');
var lines = undefined;

function newLines(callback) {
  fs.readFile(process.argv[2], function count(err, fileContents){
    lines = fileContents.toString().split("\n").length - 1;
    callback();
  })
}

function logNewLines() {
  console.log(lines);
}

newLines(logNewLines);
