# 泛型-基础总结

### 概述
* 泛型就是类型参数化，处理的数据不是固定的，并且可以当作参数传入
* 泛型核心：告诉编译器想使用什么类型，然后编译器帮助你处理一切

说明：
* Java有java编译器和java虚拟机，编译器将java源代码编译成.class文件，虚拟机加载并运行.class文件
* 对于泛型类，**Java编译器会将泛型类转换成普通的非泛型类，会将泛型类型在编译阶段擦除，虚拟机在运行的时候实际是不知道泛型这回事，泛型只存在于编译阶段**

使用泛型的好处：
* 更好的安全性
* 更高的可读性


### 泛型方法

* 要定义泛型方法，只需要将**泛型参数列表**置于返回值前；
* 注意: **一个方法是不是泛型的, 和它所在的类是不是泛型没有任何关系**；
* 泛型方法调用的时候，不需要指定类型参数的实际类型，Java编译器会推断出来；


关键字：
1.extends: **为参数类型设置上界,给定的类型或者其子类型,可以是类也可以是接口以及其他参数类型**
2.通配符`?`
3.super:**与extends正好相反**规定了一个下界
* `<T extends E>`用于**定义类型参数**，它声明了一个类型参数`T`，可放在泛型类中类名的后面、泛型方法返回值前面；
* `<? extends E>`用于实例化类型参数，它用于实例化泛型变量中的类型参数，只是这个具体类型是未知的，只知道它是`E`或`E`的子类型；
它们虽然不一样，但是经常可以达成同样的目标。

### 通配符`extends`、`super`比较

通配符比较: 

* 共同点: 目的都是为了使方法接口更为灵活，可以接受更为广泛的类型。

* `<? super E>`用于灵活**写入或比较**，使得对象可以**写入父类型的容器**(`>=`)，使得父类型的比较方法可以应用于子类对象。

* `<? extends E>`**用于灵活读取**，使得方法可以读取`E`或`E`的任意子类型的容器对象。

Java容器类的实现中，有很多这种用法，比如，`Collections`中就有如下一些方法：

```java
public static <T extends Comparable<? super T>> void sort(List<T> list)

public static <T> void sort(List<T> list, Comparator<? super T> c)

public static <T> void copy(List<? super T> dest, List<? extends T> src)

public static <T> T max(Collection<? extends T> coll, Comparator<? super T> comp)

```

### 泛型注意事项
* 1.基本类型不能用于实例化类型参数，也就是泛型类或者泛型方法中，不接受 8 种基本数据类型。
* 2.运行时类型信息不适用于泛型
* 3.`Java` 不能创建具体类型的泛型数组
* 4.不能通过类型参数创建对象
* 5.泛型类类型参数不能用于静态变量和方法，泛型类中泛型只能用在成员变量上，只能使用引用类型，在接口中泛型只能只能用在抽象方法中，全局常量不能使用泛型
* 6.子类继承父类泛型