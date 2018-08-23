//定义一个没有依赖的模块
(function(window){
  let name='data-serverice.js'
  function getName(){
    return name;
  }
  window.dataService={getName}
})(window)