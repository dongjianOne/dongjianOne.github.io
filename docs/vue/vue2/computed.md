## 计算属性

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>计算属性</title>
		<script src="js/vue.js" type="text/javascript" charset="utf-8"></script>
	</head>
	<body>
		<div id="app">
			<!-- 一般写法：每次不管变量是否被修改，获取时都会重新计算 -->
			<h1>{{firstName+lastName}}</h1>
			<!-- 计算属性：会对计算的结果进行缓存，如果变量没有改变则将缓存的结果取出 -->
			<h1>{{fullName}}</h1>
			<!--例子： 逆序显示一个英文单词 -->
			<!-- 1.常规写法 -->
			<h1>{{word.split("").reverse().join("")}}</h1>
			<!-- 2.计算属性写法 -->
			<h1>{{reverseWord}}</h1>
			<!-- 3.循环偶数年龄展示 -->
			<h1>循环偶数年龄</h1>
			<ul>
				<li v-for="item,index in oddStudents">
					<h2>学生姓名：{{item.studentName}}</h2>
					<h3>年龄：{{item.age}} ---- 学校：{{item.school}}</h3>
				</li>
			</ul>
			<h1>当前时间:{{now1}}</h1>
		</div>
		<script type="text/javascript">
			let app = new Vue({
				el: "#app",
				data: {
					firstName: "曹",
					lastName: "操",
					word: "Hello",
					students: [
						// 对象
						{
							studentName: "曹操",
							age: 16,
							school: "北大",
							imgHeader: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2268159400,2249403105&fm=26&gp=0.jpg"
						},
						{
							studentName: "关羽",
							age: 17,
							school: "清华"
						},
						{
							studentName: "刘备",
							age: 18,
							school: "浙大"
						}
					]
				},
				computed: {
					fullName: function() {
						console.log(this)
						// 只要this.firstName和this.lastName内容不发生变化就不会重新计算
						return this.firstName + this.lastName
					},
					reverseWord: function() {
						return this.word.split("").reverse().join("")
					},
					oddStudents: function() {
						let results = this.students.filter((item, i) => {
							// 偶数
							return item.age % 2 == 0
						})
						return results
					},
					now1: function() {
						// 不是响应式依赖
						return Date.now()
					}
				}
			})
		</script>
	</body>
</html>
```
我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算
属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要
firstName和lastName 还没有发生改变，fullName 多次访问计算属性会立即返回之前的计算结果，而不必再次执行函数。

