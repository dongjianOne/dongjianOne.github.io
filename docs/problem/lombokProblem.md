# lombok命名不规范导致的数据问题

## 前言
最近两年开发人员对于lombok插件的使用越来越多，既解放了双手又避免了
做一些重复的简单工作(Getter/setter/toString等方法的编写),但是有些公司、团队也有明令禁止使用lombok的规范。

## getter-setter 方法的坑
我们在开发中使用最多的lombok注解就是@Data，这是一个组合注解，包含了Getter-Setter注解，
在配合Mybatis插入数据的时候有可能会遇到下面这个问题:

待续....


