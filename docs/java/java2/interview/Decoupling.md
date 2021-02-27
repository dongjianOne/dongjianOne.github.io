# 我们经常说高内聚第低耦合，那什么是耦合？又如何解耦呢？

在项目的开发过程中，我们经常强调项目的代码模块尽量做到低耦合高内聚，但是什么是耦合？怎样做到低耦合？又怎么实现解耦合？

## 什么是耦合？

耦合指的就是两个类之间的联系的紧密程度,例如下面这段代码：

```java
 public class A{
        public int i;
    }

    public class B{
        public void put(A a){
            System.out.println(a.i);
        }
    }
```

上面这个例子B类的put方法必须以A类为参数传入，不能是非A类的参数，这样A类和B类就产生了一种强耦合关系。也有弱耦合关系，例如

```java
public interface Animal {
    void eat();
}

class Dog implements Animal{
    @Override
    public void eat() {
        System.out.println("我是Dog, 我喜欢吃骨头！");
    }
}

class Cat implements Animal {
    @Override
    public void eat() {
        System.out.println("我是小猫，我很可爱，我爱吃鱼！");
    }
}

class People {
    public void put(Animal animal) {
        animal.eat();
    }
}
```

上面这段代码People类与 Dog和Cat类是弱耦合关系，put方法参数可以是Dog也可以是Cat.



实现低耦合就是对类进行解耦，解除两个类之间的直接关系，将直接关系改为间接关系，下面有两种思路实现解耦：

### 1.使用类的向上转型或者接口回调的方式进行解耦

上面的代码就是接口回调的方式，下面通过类向上转型这种方法对上面的代码进行改造：

```java
public class Animal {
    void eat() {
      System.out.println("我是Animal, 我会吃东西！");   
    }
}

class Dog extends Animal{
   	
    public void eat() {
        System.out.println("我是Dog, 我喜欢吃骨头！");
    }
}

class Cat extends Animal {
    
    public void eat() {
        System.out.println("我是小猫，我很可爱，我爱吃鱼！");
    }
}

class People {
    public void put(Animal animal) {
        animal.eat();
    }
}
```

可以看出代码跟上面的接口回调的代码实现很相似，一个是用类的继承，一个是接口的实现，其实是一种思想，***都是利用继承思想实现的多态性***。

### 2.利用适配器模式进行解耦

所谓的强耦合不就是类之间存在着直接关系，从而使得他们俩联系特别紧密，那我在他们之间加一层，使直接关系变成间接关系，请看下面这段代码：

```java
public class Animal {
    void eat() {
        System.out.println("我是Animal,我会吃东西！");
    };
}

/**
 *中间类
 */
class Base {
    Animal animal;
    
    public Base(Animal animal) {
        this.animal = animal;
    }
    
    public void baseEat() {
       animal.eat(); 
    }
}

class People {
    public void put(Base base) {
        base.baseEat();
    }
}

```

上面这个代码就是适配器模式实现解耦的例子了，可能会有人看着代码觉得这样实现有什么意义，明明可以直接调用，非要再写一个多余的中间类，其实不然，上面只是一个例子，但是在实现的开发过程中，如果Animal类需求发生了更改，我们只需要改Base类就行，否则我们不仅不要改需求更改的Animal类，还要修改所有直接调用它的类。



### 总结：

***解耦的本质就是将类之间的直接关系转为间接关系***，不管是类向上转型还是接口的回调以及适配器模式都是在类之间加了一层，将原来的直接关系变为间接关系，使得两个类与中间类强耦合，从而达到两个类之间解耦的目的。
