var http = require('http');
var bl = require('bl');

function httpCollect() {
  http.get(process.argv[2], function (res) {
    res.pipe(bl(function (err, data) {
      data = data.toString();
      console.log(data.length);
      console.log(data);
    }));
  });
}

httpCollect();
