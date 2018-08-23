//定义没有依赖的模块
//这是一种规范，规范的意思就是，你按照我的写法，就能实现某种功能，不用那么麻烦了
define(function(){
  let name='dataService.js';
  function getName(){
    return name 
  }
  return {getName};
})