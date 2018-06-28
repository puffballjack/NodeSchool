var http = require('http');

function takeData() {
  var data
  http.get(process.argv[2], function (res) {
    res.setEncoding('utf8');
    res.on('data', console.log);
    res.on('error', console.error);
    // res.on("data", function (data) {
    //   console.log(data);
    // });
  }).on('error', console.error);
}

takeData();
