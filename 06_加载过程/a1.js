let count=1;
console.log(count);
let plusCout=function(){
  count++;
}
setTimeout(function(){
  console.log('a.js-1',count);
},1000)
module.exports={count,plusCout};