//立即执行函数模式：利用闭包

(function(){
  var msg='module3';
  function foo(){
    console.log('foo()',msg);

  }
  //怎么暴露？
  //如果不return，拿不到立即执行函数内部的函数和数据
  window.module3={foo};//同名属性可写可不写
  //定义一个对象,暴露出来 
})()