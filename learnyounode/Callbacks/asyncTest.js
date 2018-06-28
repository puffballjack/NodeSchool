console.time("time");
var sum1 = 1;
var sum2 = 1;

function fun1(callback) {
  for(i = 1; i<1000000000; i++){
    sum1 += i;
  }
  callback();
}

function logFun1() {
  console.log(sum1);
}

function fun2(callback) {
  for(i = 1; i<1000000000; i++){
    sum2 += i;
  }
  callback();
}

function logFun2() {
  console.log(sum2);
}

fun2(logFun2);
fun1(logFun1);
console.timeEnd("time");
