### javascript缺陷:
- 没有模块系统
- 标准库较少
- 没有标准接口
- 缺乏包管理系统

### CommonJS的模块规范
1. 模块引用
> require

2. 模块定义
> exports  
> module  

*exports是module的属性*

### Node的模块实现
在Node中引入模块，需要经历如下3个步骤:
1. 路径分析
> 模块分两类:
> 1. 核型模块(Node提供)  
> 2. 文件模块(用户编写)
2. 文件定位
3. 编译执行
