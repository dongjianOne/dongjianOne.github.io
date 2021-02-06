# 单例模式的几种实现方式

### 1.普通懒汉模式

说明：访问效率高，延迟初始化，用到时再创建资源利用率高，但是非线程安全
````java
/**
 * 懒汉式:访问效率高，延迟初始化，用到时再创建资源利用率高，但是非线程安全
 */
final class SingletonLazy {
    //1.定义一个静态的实例对象
    private static SingletonLazy instance = null;

    //2.私有构造方法，不允许外部直接new对象
    private SingletonLazy() {
    }

    //3.全局的访问方法
    public static SingletonLazy getInstance() {
        if (instance == null) {
            instance = new SingletonLazy();
        }
        return instance;
    }
}
````
### 2.普通饿汉模式

说明：访问性能高，线程安全，但是初始化即创建会造成一定的资源浪费
````java
/**
* 饿汉式:访问性能高，线程安全(JDK)，但是初始化即创建会造成一定的资源浪费
*/
public class Singleton {
    //1.定义一个静态的实例对象，类加载时初始化
    private static Singleton instance = new Singleton();

    //2.私有的构造方法，不允许外部直接new对象
    private Singleton() {
    }

    //3.提供一个全局的访问方法
    public static Singleton getInstance() {
        return instance;
    }

}
````
### 3.懒汉式+双检锁+volatile

说明：访问性能好,延迟初始化,线程安全(volatile+synchronized)
````java
/**
 * 懒汉式+DoubleCheck+volatile --访问性能好 延迟初始化 线程安全
 */
final class SingletonDoubleCheck{
    //定义一个静态的实例对象
    private static volatile SingletonDoubleCheck instance = null;
    //定义私有构造方法，不允许外界直接new 对象
    private SingletonDoubleCheck(){}
    //提供全局的访问方法
    private static SingletonDoubleCheck getInstance(){
        if (instance == null){
            synchronized(SingletonDoubleCheck.class){
                // Double Check -- 第一个线程已经创建对象了，instance不为null,此时不应该再创建对象
                if (instance == null){
                    instance = new SingletonDoubleCheck();
                }
            }
        }
        return instance;
    }
}
````

### 4.静态内部类(推荐)

说明：访问性能好 延迟初始化 线程安全(JDK/JVM加载机制)
````java
/**
 * 内部类 访问性能好 延迟初始化 线程安全
 */
final class SingtonByHolder{
    // 内部类持有SingtonByHolder对象，类加载机制决定一个类只能被初始化一次
    private static class Holder{
        // 多线程情况下也只会有一个实例
        private static SingtonByHolder instance = new SingtonByHolder();
    }
    //私有的构造方法，不允许外部直接new 对象
    private SingtonByHolder(){}

    public static SingtonByHolder getInstance(){
        return Holder.instance;
    }
}
````
### 静态内部类的优点

静态内部类的优点是：外部类加载时并不需要立即加载内部类，内部类不被加载则不去初始化INSTANCE，故而不占内存。
具体来说当SingleTon第一次被加载时，并不需要去加载SingleTonHoler，只有当getInstance()方法第一次被调用时，
使用INSTANCE的时候,才会导致虚拟机加载SingleTonHoler类。这种方法不仅能确保线程安全，也能保证单例的唯一性，同时也延迟了单例的实例化。

### 类的初始化
比如有一个类T，那么什么时候会进行类T的初始化？有以下5种情况：

    T 是一个类，而且一个 T 类型的实例被创建；
    T 是一个类，且 T 中声明的一个静态方法被调用；
    T 中声明的一个静态字段被赋值；
    T 中声明的一个静态字段被使用，而且这个字段不是一个常量字段；
    T 是一个顶级类（top level class，见 java 语言规范的§7.6），而且一个断言语句嵌套在 T 内部被执行。
    
而我们前面的代码则对应了第四种情况，一个静态字段被使用，因此此时则会进行静态内部类的初始化。又因为java是多线程语言，
作者也考虑到了可能存在“多个线程在同一时间尝试去初始化同一个类”的情况，因此java规定，**对于每一个类或接口 C，都有一个唯一的初始化锁 LC 与之对应**。

**JVM 在类初始化期间会获取这个初始化锁，并且每个线程至少获取一次锁来确保这个类已经被初始化过了。（但是只有第一个获得锁的线程，会执行初始化，执行完之后会设置一个标志位，表示已经初始化完成，后面其他的线程再次获得锁，检查标志位，发现已经初始化完了，直接释放锁，不会再次执行初始化。）**
