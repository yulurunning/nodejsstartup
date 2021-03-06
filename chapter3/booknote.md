## 异步I/O
伴随着**异步**I/O的还有:
- 事件驱动
- 单线程

Node给出的方案:
- **利用单线程**，远离多线程死锁、状态同步等问题
- **利用异步I/O**，让单线程远离阻塞，以更好地使用CPU

异步I/O和非阻塞I/O
> 操作系统内核对于I/O只有两种方式: 阻塞与非阻塞。  
> 操作系统的非阻塞I/O使用**轮询**去确认是否完全完成数据获取。  
> Linux下存在原生的异步I/O方式(AIO)，通过信号或回调来传递数据。  
*(缺陷: 只有Linux下有，而且支持内核中0_DIRECT方式读取，无法利用系统缓存)*

**Node的异步I/O**  
完成整个异步I/O环节的有:
- 事件循环
- 观察者
- 请求对象

非I/O的异步API
- 定时器  
*setTimeout()*  
*setInterval()*  

- process.nextTick()
- setImmediate()  
**process.tick()优先级高于setImmediate()**  
process.nextTick()属于idle观察者  
setImmediate()属于check观察者  
idle观察者 > I/O 观察者 > check观察者
