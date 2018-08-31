let obj={
  count:1
}
let plusCount=function(){
  obj.count++;
}
setTimeout(function(){
  console.log('b.js-1',obj.count);
},1000)
setTimeout(function(){
  console.log('b.js-2',obj.count);
},3000)
module.exports={obj,plusCount}