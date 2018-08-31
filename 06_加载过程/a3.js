import {counter} from './b3'
console.log(counter.count);  //1
// counter=[]  error:是只读引用
counter.count=3; //这时候a.js和b.js中的counter都会发生变化，因为引用的是同一个对象，用法和const一样
