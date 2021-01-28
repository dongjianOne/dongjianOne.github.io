(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{517:function(t,s,e){"use strict";e.r(s);var n=e(31),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"equal-与-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#equal-与-区别"}},[t._v("#")]),t._v(" equal 与 == 区别")]),t._v(" "),e("p",[t._v("前言：")]),t._v(" "),e("p",[t._v("误导：==是比较内存地址， equals是比较值")]),t._v(" "),e("p",[t._v("这是一种片面的认识")]),t._v(" "),e("ul",[e("li",[t._v("==： 比较基本数据类型的时候比较的值，引用数据类型比较的地址（new的对象，==比较结果永远说false)")]),t._v(" "),e("li",[t._v("equals: 属于object类（基类）中方法，如果我们没有重写这个方法，那么它就是==，但是字符串里的equals说被重写过的，所以比较的是值")])]),t._v(" "),e("p",[t._v("代码一：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('        // 下面也会用到\n\t\tString s1 = new String("abc");\n        String s2 = new String("abc");\n\n        System.out.println(s1 == s2); // false\n        System.out.println(s1.equals(s2)); // true\n\n       // set:无序不可重复\n        Set<String> strSet = new HashSet<>();\n        strSet.add(s1);\n        strSet.add(s2);\n        System.out.println(strSet.size()); // 1\n')])])]),e("p",[t._v("代码二：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('        // 下面会用到\n        String s3 = "abc";\n        String s4 = "abc";\n\n        System.out.println(s3 == s4); // true 字符串常量池，相同字符串会只想常量池中同一个对象\n        System.out.println(s3.equals(s4)); // true\n\n        Set<String> set2 = new HashSet<>();\n        set2.add(s3);\n        set2.add(s4);\n        System.out.println(set2.size());  // 1\n')])])]),e("p",[t._v("代码三：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('        Set<String> set2 = new HashSet<>();\n        set2.add(s3);\n        set2.add(s4);\n        System.out.println(set2.size());\n\n        User u1 = new User("dong");\n        User u2 = new User("dong");\n        System.out.println(u1 == u2); // false\n        System.out.println(u1.equals(u2)); // false 此处是Object类中equals()\n')])])]),e("p",[t._v("补充：HashSet的底层实现是HashMap,HashMap内部调用的是equals和hashCode，但是String内部也对equals和hashCode进行类重写。")]),t._v(" "),e("p",[t._v("代码四：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('        String str1 = "abc";\n        String str2 = new String("abc");\n        String str3 = "abc";\n        String str4 =  "xxx";\n        String str5 = "abc" + "xxx";\n        String str6 = str3 + str4;\n\n        System.out.println("str1==str2:" + (str1 == str2)); // false\n        System.out.println("str1.equals(str2):" + (str1.equals(str2))); // true\n        System.out.println("str1==str5:" + (str1 == str5)); // false\n        System.out.println("str1==str6:" + (str1 == str6)); // false\n        System.out.println("str5==str6:" + (str5 == str6)); // false\n        System.out.println("str5.equals(str6):" + (str5.equals(str6))); // true\n        System.out.println("str1.equals(str2.intern()):" + str1.equals(str2.intern())); // true\n')])])]),e("p",[t._v("补充说明：intern()：从常量池中获取对象；字符串常量池最初为空，由类字符串私下维护；")]),t._v(" "),e("p",[t._v("调用intern方法时，如果池中已包含由equals(Object)方法确定的与此String对象相等的字符串，则返回池中的字符串，否者，此字符串添加到池中，并返回对此字符串对象的引用；因此，对于任意两个字符串s和t，s1.intern() == \ts2.intern() ,当且仅当 s1.equals(s2) 为 true时候,所有文字字符串和字符串值常量表达式都会被插入。")])])}),[],!1,null,null,null);s.default=r.exports}}]);