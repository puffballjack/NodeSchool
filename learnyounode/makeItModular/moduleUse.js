var myModule = require('./myModule');

var path = process.argv[2];
var ft = process.argv[3];

myModule(path, ft, function (err, list){
  if(err) {
    return console.error(err);
  }
  for(i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
});
