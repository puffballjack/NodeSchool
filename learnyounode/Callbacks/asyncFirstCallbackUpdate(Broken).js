var fs = require('fs');
var myNumber = undefined;

function addOne(num, callback) {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    num = parseInt(fileContents);
    num++;
    callback();
  })
}

// function logMyNumber() {
//   console.log(myNumber)
// }

// addOne(logMyNumber)

addOne(myNumber, function logMyNumber() {
  console.log(num)
})
