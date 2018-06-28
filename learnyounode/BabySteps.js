//console.log(process.argv);
//console.log(process.argv.length);
//console.log(process.argv[2]);
var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
  //console.log(process.argv[i]);
  sum += Number(process.argv[i]);
}
console.log(sum);
