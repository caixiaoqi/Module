
(function(){

  requirejs.config({
    //baseUrl:''  //基本路径
    paths:{
      dataService:'./modules/dataService',  //不要加.js,AMD会默认帮我们加上一个.js，你如果写.js就相当于.js.js
      alerter:'./modules//alerter'
    }
  })

  require(['alerter'],function(alerter){
    alerter.showMsg();
  })

})()