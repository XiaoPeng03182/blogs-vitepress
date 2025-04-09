# 注解

# 一、注解的概述

## 1、什么是注解

![image-20250322162707732](%E6%B3%A8%E8%A7%A3-Local.assets/image-20250322162707732.png)



## 2、注解的理解

1. **注解(Annotation)**也被称为元数据(Metadata)，用于修饰解释 包、类、方法、属性、构造器、局部变量等**数据信息**。
2. 和注释一样，注解不影响程序逻辑，但**注解可以被编译或运行**，相当于**嵌入在代码中的补充信息**。
3. 在 **JavaSE** 中，注解的使用目的比较简单，例如**标记过时的功能，忽略警告**等。在 **JavaEE** 中注解占据了更重要的角色，例如用来配置应用程序的任何切面，**代替 java EE 旧版中所遗留的繁冗代码和 XML 配置等**。





# 二、==基本的注解==

## 1、三种基本的注解介绍

使用 Annotation 时要在其前面增加 **@ 符号**, 并把**该 Annotation 当成一个修饰符使用**。用于修饰它支持的程序元素；

​	三个基本的 Annotation:

- **@Override**: 限定某个方法，是**重写父类方法**, 该注解**只能用于方法**；
- **@Deprecated**: 用于表示某个程序元素(类, 方法等)**已过时；**
- **@SuppressWarnings**: **抑制编译器警告** （常用==**@SuppressWarnings({"all"})**,来抑制**所有类型的警告**；==）



## 2、第三方框架的注解-JUint

除此之外，还需要掌握第三方框架中提供的注解：

比如：Junit

- @Test 表示运行测试方法

- @Before 表示在Test之前运行，进行数据的初始化

- @After 表示在Test之后运行，进行数据的还原



## 3、**==@Override==**-重写

![image-20230804154314553](%E6%B3%A8%E8%A7%A3-Local.assets/image-20230804154314553-1742632238671-9.png)

![image-20230804154331883](%E6%B3%A8%E8%A7%A3-Local.assets/image-20230804154331883-1742632238671-10.png)



## 4、==@Deprecated==-过时

![img](%E6%B3%A8%E8%A7%A3-Local.assets/image-20230804154548680-1742632238671-11.png)

```java
public class Deprecated_ {
    public static void main(String[] args) {
        A a = new A();
        a.hi();
        System.out.println(a.n1);
    }
}
//1. @Deprecated 修饰某个元素, 表示该元素已经过时
//2. 即不在推荐使用，但是仍然可以使用
//3. 查看 @Deprecated 注解类的源码
//4. 可以修饰方法，类，字段, 包, 参数 等等
//5. @Deprecated 可以做版本升级过渡使用
/*
          @Documented
          @Retention(RetentionPolicy.RUNTIME)
          @Target(value={CONSTRUCTOR, FIELD, LOCAL_VARIABLE, METHOD, PACKAGE, PARAMETER,                  TYPE})
          public @interface Deprecated {
          }
  */
@Deprecated
class A {
    @Deprecated
    public int n1 = 10;
    @Deprecated
    public void hi(){
    }
}
```



## 5、==@SuppressWarnings==-抑制警告

1. 当我们不希望看到这些警告的时候，可以使用 SuppressWarnings 注解来抑制警告信息

2. 在 {" "}  中，可以写入你希望抑制(不显示)警告信息

   3.常用**@SuppressWarnings({"all"})**,来抑制**所有类型的警告**；

![image-20230804154930796](%E6%B3%A8%E8%A7%A3-Local.assets/image-20230804154930796-1742632238671-12.png)



## 6、JDK的元Annotation(==元注解==) 

​	JDK 的元 Annotation ==用于**修饰**其他 Annotation**元注解**==： 本身作用不大，看源码时，可以知道他是干什么. 

1. **@Retention** //**指定注解的作用范围**，三种 SOURCE,CLASS,RUNTIME
2. **@Target** // 指定注解可以**在哪些地方使用**
3. **@Documented** //指定该注解**是否会在 javadoc 体现**
4. **@Inherited** //**子类会继承父类注解**



# 三、==*自定义注解*==

## 1、自定义注解的格式

![image-20250322163654323](%E6%B3%A8%E8%A7%A3-Local.assets/image-20250322163654323.png)



## 2、自定义注解和==使用==

![image-20250322163758431](%E6%B3%A8%E8%A7%A3-Local.assets/image-20250322163758431.png)

### （1）代码实例

**自定义注解-Demo1**

```java
package com.pyw.a82annotation.annotationdemo1;

/**
 * 自定义注解
 *
 * 注解本质是一个接口继承了Annotation接口，调用注解类实际上就是创建了Annotation接口的实现类
 * 注解中的属性都是抽象方法
 */
public @interface AnnotationDemo1 {
    String aaa();

    //提供默认值 default
    boolean flag() default true;

    String[] ccc();
}
```

**自定义注解-Demo2**

```java
package com.pyw.a82annotation.annotationdemo1;

/*
    如果注解中只有一个属性value() 特殊属性，value可以省略不写
 */
public @interface AnnotationDemo2 {
    String value();

    int age() default 23;
}
```

**使用注解**

```java
package com.pyw.a82annotation.annotationdemo1;


//注解中的属性必须全部添加，除非有默认值
@AnnotationDemo1(aaa = "张三", ccc = {"JAVA", "Web"})
public class AnnotationClassDemo {

    @AnnotationDemo1(aaa = "李四", ccc = {"运维", "测试"})
    public void test1() {
    }

    @AnnotationDemo2("王五") //如果注解中只有一个属性value() 特殊属性，value可以省略不写
    public void test2() {
    }
}
```



### （2）特殊属性-value

**value：**

​	**当注解中==只有"一个属性",并且属性名是"value"==,使用注解时,可以==省略value属性名==**

代码示例：

```java
//注解的定义
public @interface Anno2 {
    public String value();

    public int age() default 23;
}

//注解的使用
@Anno2("123")
public class AnnoDemo2 {

    @Anno2("123")
    public void method(){

    }
}
```





# 四、==*元注解*==

![image-20250322164606814](%E6%B3%A8%E8%A7%A3-Local.assets/image-20250322164606814.png)

## 1、JDK的元Annotation(==元注解==) 

​	JDK 的元 Annotation ==用于**修饰**其他 Annotation**元注解**==： 本身作用不大，看源码时，可以知道他是干什么. 

1. **@Retention** //**指定注解的作用范围**，三种 SOURCE,CLASS,RUNTIME
2. **@Target** // 指定注解可以**在哪些地方使用**
3. **@Documented** //指定该注解**是否会在 javadoc 体现**
4. **@Inherited** //**子类会继承父类注解**

![image-20250322164651183](%E6%B3%A8%E8%A7%A3-Local.assets/image-20250322164651183.png)

## 2、@==Retention==-指定作用阶段

**@Retention** //**指定注解的作用范围**，三种 SOURCE,CLASS,RUNTIME

![image-20250322164833776](%E6%B3%A8%E8%A7%A3-Local.assets/image-20250322164833776.png)

![image-20250322164757570](%E6%B3%A8%E8%A7%A3-Local.assets/image-20250322164757570.png)



## 3、@==Target==-指定作用位置

![image-20250322164939045](%E6%B3%A8%E8%A7%A3-Local.assets/image-20250322164939045.png)



![image-20250322164946077](%E6%B3%A8%E8%A7%A3-Local.assets/image-20250322164946077.png)



```java
package com.pyw.a82annotation.annotationdemo2;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/*
    TODO 元注解：修饰注解的注解
 */
@Target(ElementType.TYPE) //当前被修饰的注解只能用在类上
@Retention(RetentionPolicy.RUNTIME) //控制下面的注解一直保留到运行时
public @interface AnootationDemo2 {
}
```



# 五、==注解解析==和==应用场景==

## 1、注解的解析

![image-20250322165509725](%E6%B3%A8%E8%A7%A3-Local.assets/image-20250322165509725.png)



## 2、解析注解的技巧

![image-20250322165608785](%E6%B3%A8%E8%A7%A3-Local.assets/image-20250322165608785.png)



## 3、案例-模拟JUnit框架

![image-20250322165312165](%E6%B3%A8%E8%A7%A3-Local.assets/image-20250322165312165.png)

**MyTest**

```java
package com.pyw.a82annotation.annotationtest1;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

//表示着我们的注解可以写在方法上面，其他地方不能写
@Target(ElementType.METHOD) // 注解只能注解方法

//表示着我们的注解可以在任意时期都存在。
//如果写source，那么只能在源码阶段存在，利用反射无法解析
@Retention(RetentionPolicy.RUNTIME) // 让当前注解可以一直存活着
public @interface MyTest {
}
```

**测试类**

```java
package com.pyw.a82annotation.annotationtest1;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

/*
    需求：模拟Junit框架的设计
 */
public class Test {
    //表示程序运行时自动运行test2，test4
    
//    @MyTest
    public void test1(){
        System.out.println("============test1============");
    }

    @MyTest
    public void test2(){
        System.out.println("============test2============");
    }

//    @MyTest
    public void test3(){
        System.out.println("============test3============");
    }

    @MyTest
    public void test4(){
        System.out.println("============test4============");
    }
}
```

****

**利用反射解析注解**

```java
//模拟Test启动程序
public static void main(String[] args) throws InvocationTargetException, IllegalAccessException {
    //1.得到class对象
    Class clazz = Test.class;
    // Class clazz = Class.forName("com.itheima.demo1.Test");

    //提取全部成员方法
    Method[] methods = clazz.getMethods();
    //遍历数组中的每个方法，方法上是否存在@MyTest注解
    //存在：触发执行方法
    for (Method method : methods) {
        //4.临时修改权限,可能是私有的成员方法
        method.setAccessible(true);
        //是否存在@MyTest注解
        if(method.isAnnotationPresent(MyTest.class)){
            //存在：触发执行方法
            method.invoke(new Test());
        }
    }
}
```



# 六、小结

掌握如何使用已经存在的注解即可。

- @Override：表示方法的重写

- @Deprecated：表示修饰的方法已过时

- @SuppressWarnings("all")：压制警告

- @Test：表示要运行的方法


在以后的实际开发中，注解是使用框架已经提供好的注解。

**自定义注解+解析注解，一般会出现在框架的底层。**当以后我们要自己写一个框架的时候，才会用到自定义注解+解析注解。











































