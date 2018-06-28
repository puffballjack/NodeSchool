var http = require('http');

function httpCollect(callback) {
  var str = "";
  http.get(process.argv[2], function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
      //console.log(data);
      str += data;
    });
    res.on('error', console.error);
    res.on('end', function () {
      console.log(str.length);
      console.log(str);
    });
  }).on('error', console.error);
}

httpCollect();
