//引入依赖，现代模块实现的基石
(function(window,$){
  let msg='module4';
  function foo(){
    console.log('foo()',msg);
  }
  //向外暴露立即执行函数里面的逻辑
  window.module4=foo;
  //使用引入依赖
  $('body').css('background','red')
})(window,jQuery);

//问题是
//相互依赖的时候，顺序不能调换，请求过多
//利用模块化规范