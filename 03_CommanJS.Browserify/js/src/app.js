let module1=require("./module1")
let module2=require("./module2")
let module3=require("./module3")

module1.foo();
module2();
module3.foo();
module3.bar();

//直接应用app.js是不行的，浏览器不认识require，需要Browserify进行编译打包
//app.js:1 Uncaught ReferenceError: require is not defined
//browserify js/src/app.js -o js/dist/bundle.js
//browserify干完活不会提示的