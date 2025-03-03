# js基础部分

### 1.js简介

##### 1.1

分号是结束符，可以不写；

```html
<body>
	<script>
		页面弹出警示框
		alert('xixixi')
	</script>
</body>
```

输入输出

```html
<body>
    <script>
    	document.write('我是div标签')
        document.write('<h1>我是标题</h1>')
        console.log('控制台打印')
    </script>
</body>
```

```html
<body>
    <script>
    	prompt('请输入：')
    </script>
</body>
```

js执行顺序：
1.按html文档流顺序执行js代码

2.alert( )和prompt( )会跳过页面渲染先被执行

