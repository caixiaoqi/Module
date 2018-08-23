# Module
use module test

what?
把一个复杂的程序按照一定的规则封装成几个块，并组合在一起。

error？
1.耦合性高了，不利于维护
2.容易污染全局环境
3.功能点都不明确，找都不好找

-----根据功能点划分模块------
1.数据私有，方便维护，也可以达到复用的效果
当然需要暴露接口与其他模块通信，也需要引入其他模块
2.也利于部署，不需要的模块完全没有理由引用
3.也可以避免命名冲突

进化史
1.全部都在一起
2.放在对象里面。全局变量少了，但是本质还是对象，但是数据还是一样不安全
  完全可以通过obj.x=5等去修改数据
3.立即执行函数模式
  var module=(function(){
    var _private='safe move';
    function foo(){
      console.log(_private);
    }
    return {
      foo:foo;
    }
  })()
  module.foo();
  module._private; undefined
  数据是相对安全的，因为作用域链的缘故，外部是读取不到函数里面的数据，也无法修改
4.升级一下，添加依赖
  var module=(function($){
    var _private='safe move';
    function foo(){
      console.log(_private);
    }
    return {
      foo:foo;
    }
  })(jQuery)
比如jQuery，就是最外层就是一个立即执行函数，传入的是window

但是可能的后果：
可能需要多个<script>请求
<script scr='1.js'>
<script scr='2.js'>
<script scr='3.js'>
<script scr='4.js'>
且顺序不能打算，因为后一个需要前一个模块的依赖。因为加载后就要执行了。

CommanJS:
每个JS文件都是一个模块
同步加载。在服务器端还好，都是本地的，付费多等待一会会
浏览器端很可能用户一直在等，用户体验很差，而且浏览器是不认识require的，需要提前编译打包处理


AMD:Asynchronous Module Definition
专门用于浏览器端，模块加载是异步的。
1.定义没有依赖的模块
define(function(){
  return 模块
})
2.定义有依赖的模块
define(['module1','module2'],function(m1,m2){
  return 模块
})
3.引入,通常是主模块
requirejs(['module1','module2'],function(m1,m2){
  因为一般是咋主模块中，所以一般不用再return模块了
})

ES6
需要编译打包处理(require浏览器不认识)，当然ES6需要babel转码
引入模块的时候必须使用解构赋值
babel配置:
.babelrc(run control)运行时控制文件,运行的时候要读取的文件
presets:[]
babel干活之前先读配置文件，它读取配置文件之后他就知道要干什么了
比如es2015是去转换ES6，react是去转换jsx文件，你不设置它不干活
命令行模式: babel ... -d ...     可将inport转换为require的ES5