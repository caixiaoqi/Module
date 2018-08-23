//定义一个有依赖的模块
(function (window) {
  let msg='alter.js';
  function showMsg(){
    console.log(msg,dataService.getName());
  }
  window.alerter={showMsg}
})(window,dataService)