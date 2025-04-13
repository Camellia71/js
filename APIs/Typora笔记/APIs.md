# APIs

在以后变量声明先用const，尤其是数组和对象

### 1.web API的基本认知

#### 1.作用和分类

作用：就是使用js来操作浏览器和html标签

分类：DOM（文档对象模型），BOM（浏览器对象模型）

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250413170712022.png" alt="image-20250413170712022" style="zoom:50%;" />

关于DOM：用来呈现以及与任意html或者xml文档交互的API；作用是开发网页内容特效以及实现用户交互

#### 2.DOM树

将html文件以树状结构表示出来，我们称之为文档树或DOM树，它是描述网页内容关系的名词；能够更直观地体现标签之间的关系

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250413212632568.png" alt="image-20250413212632568" style="zoom: 67%;" />

#### 3.DOM对象

其实是浏览器根据html标签生成的js对象

1.所有的标签对象都可以在这个对象上面找到

2.修改这个对象的属性会自动映射到标签身上

DOM的**核心思想**是将网页内容当作对象来处理

**document对象**是DOM里提供的一个对象，所以他提供的属性和方法都是用来访问和操作网页内容的，比如document.write()，而网页所有的内容都在document里面

