var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);
var arr = file.toString().split("\n");
var nl = arr.length - 1
console.log(nl);
