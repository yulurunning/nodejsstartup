## 函数式编程
在javascript中，函数(function)作为一等公民，无论调用、作为参数、作为返回值均可。  

>高阶函数: 把函数作为参数，或是把函数作为返回值的函数。例如:  
>```js
>function foo(x) {
>   return function() {
>     return x;
>   }
>}
>```
