# vue官方文档练习
[vue官网](https://cn.vuejs.org/)
## 模板语法
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
		<style type="text/css">
			#login{
				background-color: #ff0000;
			}
			#register{
				background-color: pink;
			}
		</style>
		<script src="js/vue.js" type="text/javascript" charset="utf-8"></script>
	</head>
	<body>
		<div id="app">
			<h1>{{msg}}</h1>
			<!-- v-once 一次性插入 不再改变 -->
			<h1 v-once>{{msg}}</h1>
			<!-- 插入HTML内容 -->
			<h1 v-html="htmlTxt">{{htmlTxt}}</h1>
			<!-- 绑定动态属性 -->
			<div v-bind:id= "idName">
				<h2>登录</h2>
			</div>
			<!-- 模板语言表达式运算 -->
			<div>
				<h1>模板语言表达式运算+</h1>
				<h2>姓名：{{firstName+lastName}}</h2>
			</div>
			<div>
				<h1>三元运算符</h1>
				<h2>{{isFlag?"您是VIP享有蓝光权限":"对不起您是普通用户，请充值"}}</h2>
			</div>
		</div>
		<script type="text/javascript">
			var app = new Vue({
				el:"#app",
				data:{
					msg: "hello Vue!",
					htmlTxt: "<span>vue</span>",
					idName: "login",
					firstName: "曹",
					lastName: "操",
					isFlag: true
				}
			})
		</script>
		
	</body>
</html>
```

补充：可以通过浏览器console修改变量值观察效果!

