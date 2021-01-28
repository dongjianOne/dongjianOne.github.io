# equal 与 == 区别

前言：



误导：==是比较内存地址， equals是比较值

这是一种片面的认识

* ==： 比较基本数据类型的时候比较的值，引用数据类型比较的地址（new的对象，==比较结果永远说false)
* equals: 属于object类（基类）中方法，如果我们没有重写这个方法，那么它就是==，但是字符串里的equals说被重写过的，所以比较的是值



代码一：

```java
        // 下面也会用到
        String s1 = new String("abc");
        String s2 = new String("abc");

        System.out.println(s1 == s2); // false
        System.out.println(s1.equals(s2)); // true

       // set:无序不可重复
        Set<String> strSet = new HashSet<>();
        strSet.add(s1);
        strSet.add(s2);
        System.out.println(strSet.size()); // 1
```

代码二：       

```java
        // 下面会用到
        String s3 = "abc";
        String s4 = "abc";

        System.out.println(s3 == s4); // true 字符串常量池，相同字符串会只想常量池中同一个对象
        System.out.println(s3.equals(s4)); // true

        Set<String> set2 = new HashSet<>();
        set2.add(s3);
        set2.add(s4);
        System.out.println(set2.size());  // 1
```

代码三：

```java
        Set<String> set2 = new HashSet<>();
        set2.add(s3);
        set2.add(s4);
        System.out.println(set2.size());

        User u1 = new User("dong");
        User u2 = new User("dong");
        System.out.println(u1 == u2); // false
        System.out.println(u1.equals(u2)); // false 此处是Object类中equals()
```

补充：HashSet的底层实现是HashMap,HashMap内部调用的是equals和hashCode，但是String内部也对equals和hashCode进行类重写。





代码四：

````java
        String str1 = "abc";
        String str2 = new String("abc");
        String str3 = "abc";
        String str4 =  "xxx";
        String str5 = "abc" + "xxx";
        String str6 = str3 + str4;

        System.out.println("str1==str2:" + (str1 == str2)); // false
        System.out.println("str1.equals(str2):" + (str1.equals(str2))); // true
        System.out.println("str1==str5:" + (str1 == str5)); // false
        System.out.println("str1==str6:" + (str1 == str6)); // false
        System.out.println("str5==str6:" + (str5 == str6)); // false
        System.out.println("str5.equals(str6):" + (str5.equals(str6))); // true
        System.out.println("str1.equals(str2.intern()):" + str1.equals(str2.intern())); // true
````

补充说明：intern()：从常量池中获取对象；字符串常量池最初为空，由类字符串私下维护；

调用intern方法时，如果池中已包含由equals(Object)方法确定的与此String对象相等的字符串，则返回池中的字符串，否者，此字符串添加到池中，并返回对此字符串对象的引用；因此，对于任意两个字符串s和t，s1.intern() == 	s2.intern() ,当且仅当 s1.equals(s2) 为 true时候,所有文字字符串和字符串值常量表达式都会被插入。





