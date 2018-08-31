let mod=require('./b2');    //b2开始执行
console.log('a.js-1',mod.obj.count);
mod.plusCount();           //b2中的obj变换
console.log('a.js-2',mod.obj.count);    //因为是浅复制，所以，这里也发生变化
// console.log(mod.obj);    { count: 2 }
setTimeout(()=>{
  mod.obj.count=3;
  console.log('a.js-3',mod.obj.count);
},2000)

// a.js-1 1    浅复制
// a.js-2 2    
// b.js-1 2
// a.js-3 3
// b.js-2 3