var pathL = require('path');
var fs = require('fs');

var path = process.argv[2];
var ft = '.' + process.argv[3];
//var final = undefined;

function listSort() {
  fs.readdir(path, function sort(err, files){
    // console.log(temp);
    // console.log(ft);
    if(err)
    {
      return console.error(err);
    }
    for(i = 0; i < files.length; i++)
    {
      if(pathL.extname(files[i]) === ft)
      {
        console.log(files[i]);
      }
    }
  })
}

listSort();
