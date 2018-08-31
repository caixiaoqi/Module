let mod=require('./a1');
console.log('b.js-1',mod.count);
mod.plusCout();
console.log('b.js-2',mod.count);
setTimeout(function(){
  mod.count=3;
  console.log('b.js-3',mod.count)
},2000)

//说明是复制