# 反射基础
* [一、基本介绍](#一基本介绍)
* [二、反射和类的信息的相关API](#二反射和类的信息的相关API)
* [三、实例操作相关](#三实例操作相关)
* [四、反射的应用实例](#四反射的应用实例)
  * [1.通过配置文件生成类](#1通过配置文件生成类)
  * [2.反射略过泛型检查](#2反射略过泛型检查)
  * [3.编写一个可以为任何对象设置任何属性的方法](#3编写一个可以为任何对象设置任何属性的方法)

## 一、基本介绍
反射机制是在运行状态中：
* 对于任意一个类都能知道这个类的所有属性和方法。
* 对于任意一个对象,都能够调用它的方法和属性。

反射提供的功能：
* 在运行时判断任意一个对象所属的类
* 在运行时构造一个类的对象
* 在运行时判断一个对象的成员变量和方法
* 在运行时调用任意一个对象的方法
* 生成动态代理

## 二、反射和类的信息的相关API
1.创建反射对象发三种方法
* Class.forName(全类名)
* XX.class;
* 对象.getClass();

代码：
````java
        // 1.通过对象获得
        Class c1 = person.getClass();
        System.out.println(c1.hashCode());
        // 2.forName() 方式获得
        Class c2 = Class.forName("com.dong.reflection.Student");
        System.out.println(c2.hashCode());
        // 3.通过类名.class方式获得
        Class<Student> c3 = Student.class;
        System.out.println(c3.hashCode());
````
所以类型反射
```java
public static void main(String[] args){
          Class c1 = Object.class; // 类
          Class c2 = Comparable.class; //接口
          Class c3 = String[].class; // 一维数组
          Class c4 = int[][].class; // 二维数组
          Class c5 = Override.class; // 注解
          Class c6 = ElementType.class; // 枚举
          Class c7 = Integer.class; // 基本数据类型
          Class c8 = void.class; // void
          Class c9 = Class.class; // Class
  
          // 输出
          System.out.println(c1);
          System.out.println(c2);
          System.out.println(c3);
          System.out.println(c4);
          System.out.println(c5);
          System.out.println(c6);
          System.out.println(c7);
          System.out.println(c8);
          System.out.println(c9);
}
```
相关API代码：
````java
package com.dong.reflection;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

/**
 * @author DongJian
 * @date Created in 2020/10/20 16:13
 * Utils: Intellij Idea
 * @description: 通过反射获取类相关信息
 * @version:1.0
 */
public class getClassInfoTest {

    public static void main(String[] args) throws Exception {
        // 1.反射获取Class对象
        Class c1 = Class.forName("com.dong.lambda.User");

        // 获取类的名称
        String name = c1.getName(); //全称=包名+类名
        String simpleName = c1.getSimpleName(); // 类名
        System.out.println(simpleName);

        System.out.println("----------------------获取类的属性---------------------------");
        // 获取类的属性
        Field[] fields = c1.getFields();// 只能获取到public修饰的属性

        Field[] declaredFields = c1.getDeclaredFields(); // 获取所有属性
        System.out.println(declaredFields); // 全部属性

        Field field = c1.getDeclaredField("name"); // 获取指定属性
        System.out.println(field);
        System.out.println("----------------------获取类的方法---------------------------");
        // 获取类的方法
        System.out.println("----------------------1.获取类的方法 （getMethods）---------------------------");
        Method[] methods = c1.getMethods(); // 获取本类及其父类的public方法
        for (Method method : methods) {
            System.out.println(method);
        }
        System.out.println("----------------------2.获取类的方法 （declaredMethods）---------------------------");
        Method[] declaredMethods = c1.getDeclaredMethods(); // 获取本类的全部方法
        for (Method declaredMethod : declaredMethods) {
            System.out.println(declaredMethod);
        }
        System.out.println("----------------------3.获取指定的方法---------------------------");
        Method setName = c1.getDeclaredMethod("setName", String.class);
        Method getName = c1.getMethod("getName", null);
        System.out.println(setName);
        System.out.println(getName);

        System.out.println("----------------------获取构造器---------------------------");
        Constructor[] constructors = c1.getConstructors(); // 获取所有public构造器
        for (Constructor constructor : constructors) {
            System.out.println(constructor);
        }
        constructors = c1.getDeclaredConstructors(); // 获取所有构造器
        for (Constructor constructor : constructors) {
            System.out.println("*" + constructor);
        }
        // 获取指定的构造器 输入构造器参数列表
        Constructor declaredConstructor = c1.getDeclaredConstructor(String.class, String.class);
        System.out.println(declaredConstructor);
        // 获取接口
        Class<?>[] interfaces = c1.getInterfaces();
        for (Class<?> anInterface : interfaces) {
            System.out.println(anInterface);
        }
        // 利用反射获取父类
        Class<?> superclass = c1.getSuperclass();
        System.out.println("superclass:" + superclass);
        // 利用反射创建类的实例
        Object o = c1.newInstance();
        User user = (User) o;
        System.out.println("c1.newInstance():"+user);
        
    }
}
````

## 三、实例操作相关
1.获取到对象的实例并操作对象
```java
        Object o = c1.newInstance();
        User user = (User) o;
        user.setName("dongjian");
        System.out.println("c1.newInstance():"+user.getName());
````
2.上面我们获取到对象之后，操作属性是通过公有的`setter()`方法，但是也可以通过获取到属性，来给属性通过`set()`方法赋值，
但是这里要注意一个问题，因为我们的属性都是`private`，所以我们要通过一个`setAccessible()`函数来获得属性的访问权。
````java
        Object obj = c1.newInstance();
        User u2 = (User) obj;
        Field nameField = c1.getDeclaredField("name");
        // 添加访问权限
        nameField.setAccessible(true);
        nameField.set(u2, "dongjian");
        System.out.println("u2:" + u2);
````

3.上面是在成员变量上使用setAccessible() 还可以再方法上使用
````java
        Object o2 = c1.newInstance();
        User u3 = (User) o2;
        Method getName1 = c1.getDeclaredMethod("setName",String.class);
        getName1.setAccessible(true);
        // 参数1:调用方法的对象，参数2：调用方法的参数
        getName1.invoke(u3, "dongjianone");
        System.out.println(u3);
````
4.操作构造方法
````java
        // 操作构造方法
        Constructor constructor = c1.getDeclaredConstructor(String.class);
        constructor.setAccessible(true);
        // 构造对象实例
        User u5 = (User) constructor.newInstance("dongjianConstructor");
        System.out.println("getConstructor:"+u5.getName());
````

## 四、反射应用实例
1.通过配置文件生成类

首先添加一个方法
````java
   public void test(){
        System.out.println("执行了User类的test方法");
    }
````
准备配置文件class.txt
```jshelllanguage
    className =com.dong.lambda.User
    methodName=test
```
通过配置文件获取类和方法信息，利用反射动态生成类,如果配置文件变化则反射获取到的类和方法也相应变化
````java
package com.dong.reflection;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Method;
import java.util.Properties;

/**
 * <p>
 * 通过配置文件利用反射生成对象实例
 * </p>
 *
 * @author: dong
 * @Date: 17:16 2021/1/29
 */
public class GenerateClassByReflect {
    public static void main(String[] args) throws Exception{
        // 配置文件地址
        String propertyFilePath = "C:\\Users\\DJ\\Desktop\\class.txt";
        Properties prop = new Properties();
        // 读取配置文件
        prop.load(new FileReader(propertyFilePath));
        String className = prop.getProperty("className");
        String methodName = prop.getProperty("methodName");

        Class<?> aClass = Class.forName(className);
        Method method = aClass.getDeclaredMethod(methodName);
        method.invoke(aClass.newInstance());
    }
}

````
2.反射略过泛型检查
以集合List<Integer>为例，根据Java类型知道不可能往该集合中添加String类型数据，但是利用反射略过泛型检查达到目的。
````java
package com.dong.reflection;

import org.assertj.core.util.Lists;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 * 反射略过泛型检查
 * </p>
 *
 * @author: dong
 * @Date: 17:51 2021/1/29
 */
public class GenericIgnore {

    public static void main(String[] args) throws Exception {
        List<Integer> list = Lists.newArrayList();
        list.add(1);
        list.add(2);
        list.add(3);

//        list.add("dong"); 类型检查编译不通过,无法强行加入

        // 反射实现
        Class<? extends List> listClass = list.getClass();
        Method addMethod = listClass.getDeclaredMethod("add", Object.class);
        addMethod.invoke(list, "dong");
        System.out.println(list);
    }
}

````
输出：
````
[1, 2, 3, dong]
````




