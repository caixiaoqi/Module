//将其他的模块汇集到主模块
let uniq=require('uniq');//第三方直接包名

let module1=require('./modules/module1')
let module2=require('./modules/module2')
let module3=require('./modules/module3')

module1.fun();
module2();
module3.foo();
module3.bar();
let arr=uniq(module3.arr);
console.log(arr);//uniq出了去重，还会排序，但是是按照ASCII编码排序
//module1
//module2
//foo() module3
//bar() module3
//服务器端没有问题