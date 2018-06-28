var pathL = require('path');
var fs = require('fs');

// var path = process.argv[2];
// var ft = '.' + process.argv[3];
//var final = undefined;

module.exports = function listSort(path, ft, callback) {
  fs.readdir(path, function sort(err, list){
    // console.log(temp);
    // console.log(ft);
    if(err)
    {
      return callback(err);
    }
    // var uft = '.' + ft;
    // var filteredList = [];
    // for(i = 0; i < files.length; i++)
    // {
    //   if(pathL.extname(files[i]) === uft)
    //   {
    //     filteredList.push(files[i]);
    //   }
    // }
    list = list.filter(function (file) {
      return pathL.extname(file) === '.' + ft;
    })
    callback(null, list);
  })
}
