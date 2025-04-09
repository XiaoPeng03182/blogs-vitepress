# 类加载器

# 一、概念

![image-20250322131349668](%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8-Local.assets/image-20250322131349668.png)

类加载器（ClassLoader）是 **==Java 虚拟机（JVM）用于加载类的组件==**，它负责**将字节码（`.class` 文件）加载到内存中，并转换为 `Class` 对象**，以便程序使用。



# 二、类加载的时机

![image-20250322131757590](%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8-Local.assets/image-20250322131757590.png)

**类加载时机**

简单理解：字节码文件什么时候会被加载到内存中？

有以下的几种情况：

+ 创建类的实例（对象）
+ 调用类的类方法
+ 访问类或者接口的类变量，或者为该类变量赋值
+ 使用反射方式来强制创建某个类或接口对应的java.lang.Class对象
+ 初始化某个类的子类
+ 直接使用java.exe命令来运行某个主类

总结而言：**用到了就加载，不用不加载**





# 三、类加载的过程

![image-20250322131922781](%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8-Local.assets/image-20250322131922781.png)

Java 类的加载过程主要分为以下几个阶段：

1. **加载（Loading）**
   - 通过类的全限定名（如 `com.example.MyClass`）查找 `.class` 文件，并读取其字节码，最终转换为 `Class` 对象。
2. **链接（Linking）**
   - **验证（Verification）：** 确保字节码符合 JVM 规范，保证安全性。
   - **准备（Preparation）：** 为静态变量分配内存，并赋默认值（如 `int` 默认 0）。
   - **解析（Resolution）：** 将符号引用转换为直接引用（指向方法区的实际地址）。
3. **初始化（Initialization）**
   - 执行类的静态初始化代码（`static {}` 块、静态变量的赋值）。



## 1、加载

![image-20250322132131535](%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8-Local.assets/image-20250322132131535.png)

+ 通过包名 + 类名，获取这个类，准备用流进行传输
+ 在这个类加载到内存中
+ 加载完毕创建一个class对象

![image-20250322132219812](%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8-Local.assets/image-20250322132219812.png)



## 2、链接

### （1）验证

确保Class文件字节流中包含的信息**符合当前虚拟机的要求**，并且不会危害虚拟机自身安全

(文件中的信息是否符合虚拟机规范有没有安全隐患)

![image-20250322132325110](%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8-Local.assets/image-20250322132325110.png)



### （2）准备

- 负责为类的类变量（被static修饰的变量）分配内存
- 并**设置默认初始化值** (**==只会初始化静态变量==**) **null 等其他默认初始化值**

![image-20250322132417689](%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8-Local.assets/image-20250322132417689.png)



### （3）解析

- 将类的二进制数据流中的**符号引用替换为直接引用** 
-  (本类中如果用到了其他类，此时就需要找到对应的类)

![image-20250322132644686](%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8-Local.assets/image-20250322132644686.png)

![image-20250322132812011](%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8-Local.assets/image-20250322132812011.png)



## 3、初始化

- 根据程序员**通过程序制定的主观计划**去==初始化类变量和其他资源==

- **(静态变量赋值以及初始化其他资源)**

![image-20250322132918454](%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8-Local.assets/image-20250322132918454.png)





## 4、小结

+ 当一个类被使用的时候，才会加载到内存
+ 类加载的过程: 加载、验证、准备、解析、初始化

![image-20250322133624865](%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8-Local.assets/image-20250322133624865.png)



# 四、类加载器的分类

![image-20250322133718060](%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8-Local.assets/image-20250322133718060.png)

+ 分类
  + Bootstrap class loader：虚拟机的内置类加载器，通常表示为null ，并且没有父null
  + Platform class loader：平台类加载器,负责加载JDK中一些特殊的模块
  + System class loader：系统类加载器,负责加载用户类路径上所指定的类库

+ 类加载器的继承关系

  + System的父加载器为Platform
  + Platform的父加载器为Bootstrap

+ 代码演示

  ```java
  public class ClassLoaderDemo1 {
      public static void main(String[] args) {
          //获取系统类加载器
          ClassLoader systemClassLoader = ClassLoader.getSystemClassLoader();
  
          //获取系统类加载器的父加载器 --- 平台类加载器
          ClassLoader classLoader1 = systemClassLoader.getParent();
  
          //获取平台类加载器的父加载器 --- 启动类加载器
          ClassLoader classLoader2 = classLoader1.getParent();
  
          System.out.println("系统类加载器" + systemClassLoader);
          System.out.println("平台类加载器" + classLoader1);
          System.out.println("启动类加载器" + classLoader2);
      }
  }
  ```



Java 的类加载器可分为**三种主要类型**：

1. **Bootstrap ClassLoader（启动类加载器）**
   - 加载 JDK 的核心类，如 `java.lang.*`、`javax.*`（从 `lib` 目录的 `rt.jar` 加载）。
   - 由 C++ 代码实现，不是 `ClassLoader` 的子类。
2. **Extension ClassLoader（扩展类加载器）**
   - 加载 `lib/ext` 目录或 `java.ext.dirs` 指定的 JAR 包。
   - 由 `sun.misc.Launcher$ExtClassLoader` 负责加载。
3. **Application ClassLoader（应用类加载器）**
   - 加载用户应用的类，即 `classpath` 目录下的 `.class` 文件。
   - 由 `sun.misc.Launcher$AppClassLoader` 负责加载。

此外，还可以自定义 `ClassLoader` 以实现特殊的类加载方式（如热部署、动态代理）。



# 五、==双亲委派模型==-向上委托

**Parent Delegation Model**

**介绍**

如果一个**类加载器收到了类加载请求，它并不会自己先去加载**，而是把这个请求委托给父类的加载器去执行，如果父类加载器还存在其父类加载器，则**进一步向上委托，依次递归**，请求最终将到达顶层的启动类加载器，如果父类加载器可以完成类加载任务，就成功返回，**==倘若父类加载器无法完成此加载任务，子加载器才会尝试自己去加载==**，这就是**双亲委派模式**

![image-20250322134257858](%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8-Local.assets/image-20250322134257858.png)

**代码演示**

```java
public class ClassLoaderDemo1 {
    public static void main(String[] args) {
        //获取系统类加载器
        ClassLoader systemClassLoader = ClassLoader.getSystemClassLoader();

        //获取系统类加载器的父加载器 --- 平台类加载器
        ClassLoader classLoader1 = systemClassLoader.getParent();

        //获取平台类加载器的父加载器 --- 启动类加载器
        ClassLoader classLoader2 = classLoader1.getParent();

        System.out.println("系统类加载器" + systemClassLoader);
        System.out.println("平台类加载器" + classLoader1);
        System.out.println("启动类加载器" + classLoader2);
    }
}
```

**结果**

![image-20250322134421247](%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8-Local.assets/image-20250322134421247.png)



# 六、ClassLoader的两种方法

![image-20250322134518413](%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8-Local.assets/image-20250322134518413.png)

- 方法介绍

  | 方法名                                              | 说明               |
  | --------------------------------------------------- | ------------------ |
  | public static ClassLoader getSystemClassLoader()    | 获取系统类加载器   |
  | public InputStream getResourceAsStream(String name) | 加载某一个资源文件 |

- 示例代码

  ```java
  public class ClassLoaderDemo2 {
      public static void main(String[] args) throws IOException {
          //static ClassLoader getSystemClassLoader() 获取系统类加载器
          //InputStream getResourceAsStream(String name)  加载某一个资源文件
  
          //获取系统类加载器
          ClassLoader systemClassLoader = ClassLoader.getSystemClassLoader();
  
          //利用加载器去加载一个指定的文件
          //参数：文件的路径（放在src的根目录下，默认去那里加载）
          //返回值：字节流。
          InputStream is = systemClassLoader.getResourceAsStream("prop.properties");
  
          Properties prop = new Properties();
          prop.load(is);
  
          System.out.println(prop);
  
          is.close();
      }
  }
  ```























