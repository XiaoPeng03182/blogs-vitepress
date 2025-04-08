# ==反射==

# 一、反射的概述

## 1、概述

![image-20250321173533670](%E5%8F%8D%E5%B0%84-Local.assets/image-20250321173533670.png)

![image-20250321173602725](%E5%8F%8D%E5%B0%84-Local.assets/image-20250321173602725.png)

**专业的解释（了解一下）：**

​       是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；

​       对于任意一个对象，都能够调用它的任意属性和方法；

​       这种动态获取信息以及动态调用对象方法的功能称为Java语言的反射机制。

​	**通俗的理解：（掌握）**

* 利用**反射**创建的对象**可以无视修饰符**调用类里面的内容

* 可以跟**配置文件结合起来使用**，把要创建的对象信息和方法写在配置文件中。

  读取到什么类，就创建什么类的对象

  读取到什么方法，就调用什么方法

  此时当需求变更的时候不需要修改代码，只要修改配置文件即可。



## 2、反射的作用？

![image-20250321194132274](%E5%8F%8D%E5%B0%84-Local.assets/image-20250321194132274.png)

反射**都是从class字节码文件中获取的内容**。

* 如何**获取class字节码文件的对象**
* 利用反射如何**获取构造方法**（创建对象）
* 利用反射如何**获取成员变量**（赋值，获取值）
* 利用反射如何**获取成员方法**（运行）



# 二、字节码文件和==字节码文件对象==

**java文件**：就是我们自己编写的java代码。

**字节码文件：就是通过java文件编译之后的class文件**（是在硬盘上真实存在的，用眼睛能看到的）

**字节码文件对象：**当class文件加载到内存之后，虚拟机自动创建出来的对象。

​				这个对象里面至少包含了：构造方法，成员变量，成员方法。

而我们的反射获取的是什么？字节码文件对象，这个对象在内存中是唯一的。



# 三、获取==*字节码文件对象*==的三种方式-==Class==

## 1、概述

![image-20250321174034063](%E5%8F%8D%E5%B0%84-Local.assets/image-20250321174034063.png)

* Class这个类里面的**==静态方法forName（“全类名”）（最常用）==**
* 通过**class属性获取**  
* **通过对象获取字节码文件对象**



## 2、代码示例

**Student类**

```java
package com.itheima.myreflect1;

public class Student {
    private String name;
    private int age;

    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    /**
     * 获取
     * @return name
     */
    public String getName() {
        return name;
    }

    /**
     * 设置
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取
     * @return age
     */
    public int getAge() {
        return age;
    }

    /**
     * 设置
     * @param age
     */
    public void setAge(int age) {
        this.age = age;
    }

    public String toString() {
        return "Student{name = " + name + ", age = " + age + "}";
    }
}
```

**测试**

```java
package com.itheima.myreflect1;

public class MyReflectDemo1 {
    public static void main(String[] args) throws ClassNotFoundException {

        /*
        * 获取class对象的三种方式：
        *   1. Class.forName("全类名");
        *   2. 类名.class
        *   3. 对象.getClass();
        *
        * */


        //1. 第一种方式
        //全类名 ： 包名 + 类名
        //最为常用的
        //1.Class这个类里面的静态方法forName
		//Class.forName("类的全类名")： 全类名 = 包名 + 类名
        Class clazz1 = Class.forName("com.itheima.myreflect1.Student");
		//源代码阶段获取 --- 先把Student加载到内存中，再获取字节码文件的对象
		//clazz 就表示Student这个类的字节码文件对象。
		//就是当Student.class这个文件加载到内存之后，产生的字节码文件对象
        
        //2. 第二种方式-   类名.class
        // 一般更多的是当做参数进行传递,锁对象
        Class clazz2 = Student.class;
        
        //因为class文件在硬盘中是唯一的，所以，当这个文件加载到内存之后产生的对象也是唯一的
System.out.println(clazz1 == clazz2);//true


       //3.第三种方式
        //当我们已经有了这个类的对象时，才可以使用。
        Student s = new Student();
        Class clazz3 = s.getClass();

        System.out.println(clazz1 == clazz2);//true
		System.out.println(clazz2 == clazz3);//true
    }
}
```





## 3、Class.forName(“全类名”)

- Class.forName("类的全类名")： 全类名 = 包名 + 类名
- Class clazz1 = Class.forName("com.itheima.myreflect1.Student");
- 源代码阶段获取 
  - 先把**Student加载到内存中**，再获取字节码文件的对象
  - clazz 就表示Student这个类的字节码文件对象。
  - 就是当Student.class这个文件**加载到内存之后**，**产生的字节码文件对象**

```java
//1. 第一种方式
//全类名 ： 包名 + 类名
//最为常用的
//1.Class这个类里面的静态方法forName
//Class.forName("类的全类名")： 全类名 = 包名 + 类名
	Class clazz1 = Class.forName("com.itheima.myreflect1.Student");
//源代码阶段获取 --- 先把Student加载到内存中，再获取字节码文件的对象
//clazz 就表示Student这个类的字节码文件对象。
//就是当Student.class这个文件加载到内存之后，产生的字节码文件对象
```



## 4、类名.class

- Class clazz2 = Student.class;
- 一般更多的是当做参数进行传递,**锁对象**
  - ​    ![image-20250321175237138](%E5%8F%8D%E5%B0%84-Local.assets/image-20250321175237138.png)

```java
//第二种方式-   类名.class
    // 一般更多的是当做参数进行传递,锁对象
    Class clazz2 = Student.class;
```



## 5、对象.getClass()

第三种方式

- 当我们已经有了这个类的对象时，才可以使用。
  - Student s = new Student();
  - Class clazz3 = **s.getClass()**;



# 四、获取==*构造方法*==-Constructor

## 1、概述

![image-20250321200315528](%E5%8F%8D%E5%B0%84-Local.assets/image-20250321200315528.png)

**规则：**

- get表示获取
- **Declared表示已经声明了的构造方法，==包括私有构造方法==**
- 最后的s表示所有，复数形式
- 如果当前获取到的是私有的，必须要临时修改访问权限，否则无法使用



 **Class类中用于获取构造方法的方法：**

   - Constructor<?>[] getConstructors()：
     获取所有 `public` 访问权限的构造方法，返回数组。

   - Constructor<?>[] getDeclaredConstructors()：
     **获取所有构造方法，包括 `private`、`protected`、`public`**，返回数组。

   - Constructor`<T>` getConstructor(Class<?>... parameterTypes)：
     获取**单个**指定参数类型的 **`public` 构造方法**。

   - Constructor`<T>` getDeclaredConstructor(Class<?>... parameterTypes)：
     获取**单个**指定参数类型的构造方法**（无论权限修饰符）**。

     

**Constructor类中用于创建对象的方法：**

- **T ==newInstance==(Object... initargs)：**
  **使用构造方法实例化对象**。
- **==setAccessible==**(boolean flag)：
  **设为 `true` 以取消访问权限检查，允许访问 `private` 构造方法。**

| 方法名                                                       | 说明                                           |
| ------------------------------------------------------------ | ---------------------------------------------- |
| Constructor<?>[] getConstructors()                           | 获得**所有**的构造（**只能获得public修饰的**） |
| Constructor<?>[] **getDeclaredConstructors()**               | 获得**所有**的构造（**包含private修饰**）      |
| Constructor`<T>` getConstructor(Class<?>... parameterTypes)    | 获取指定构造（只能public修饰）                 |
| Constructor`<T>` getDeclaredConstructor(Class<?>... parameterTypes) | 获取指定构造（**包含private修饰**）            |



## 2、**反射获取构造方法**

### **（1）获取 `Class` 对象**

要使用反射获取类的构造方法，首先需要获取该类的 `Class` 对象：

```java
Class clazz = Class.forName("com.itheima.myreflect2.Student");
```

------

### **（2）获取==所有构造==方法**

#### **① 获取 `public` 访问权限的构造方法**

```java
Constructor<?>[] constructors = clazz.getConstructors();
```

- **返回值：** `Constructor<?>[]`（仅 `public` 访问权限的构造方法）。

- 示例：

  ```java
  for (Constructor<?> constructor : constructors) {
      System.out.println(constructor);
  }
  ```

------

#### **② 获取所有构造方法（包括 `private`、`protected`、`public`）**

```java
Constructor<?>[] declaredConstructors = clazz.getDeclaredConstructors();
```

- **返回值：** `Constructor<?>[]`（包含 `private`、`protected`、`public`）。

- 示例：

  ```java
  for (Constructor<?> constructor : declaredConstructors) {
      System.out.println(constructor);
  }
  ```

------

### **（3）获取==指定参数类型==的构造方法**

使用 `getConstructor(Class<?>... parameterTypes)` 或 `getDeclaredConstructor(Class<?>... parameterTypes)` 获取指定参数类型的构造方法：

```java
Constructor<?> constructor = clazz.getDeclaredConstructor(String.class, int.class);
System.out.println(constructor);
```

- **`getConstructor()`** 只能获取 `public` 修饰的构造方法。
- **`getDeclaredConstructor()`** 可以获取任意权限修饰的构造方法。



## **3、 反射操作构造方法**

### **（1）获取构造方法的修饰符**-getModifiers

使用 `getModifiers()` 获取构造方法的修饰符：

```java
//获取构造方法的修饰符
    int modifiers = con4.getModifiers();
System.out.println(modifiers); //私有的返回1 
```

![image-20250321201140012](%E5%8F%8D%E5%B0%84-Local.assets/image-20250321201140012.png)



### **（2）获取构造方法的==参数列表==**-getParameters

使用 `getParameters()` 获取构造方法的参数：

```java
Parameter[] parameters = constructor.getParameters();
for (Parameter parameter : parameters) {
    System.out.println(parameter);
}
```

------

### **（3）通过构造方法==实例化对象==**-newInstance

使用 `newInstance(Object... initargs)` 调用构造方法创建对象：

- **如果构造方法是 `private`，需要先调用 `setAccessible(true)` 进行暴力反射**。
- **`newInstance()` 方法传入参数必须与构造方法参数匹配**。



**Constructor类中用于创建对象的方法：**

- **T ==newInstance==(Object... initargs)：**
  **使用构造方法实例化对象**。
- **==setAccessible==**(boolean flag)：
  **设为 `true` 以取消访问权限检查，允许访问 `private` 构造方法。**

```java
// 5. 取消权限校验（暴力反射）,设为 `true` 以取消访问权限检查，允许访问 `private` 构造方法
con4.setAccessible(true);

// 6. 使用获取到的构造方法实例化 `Student` 对象
Student stu = (Student) con4.newInstance("张三", 23);

// 7. 输出实例化后的对象
System.out.println(stu);
```



------

## **4. 总结**

| 方法                                                 | 作用                                                      |
| ---------------------------------------------------- | --------------------------------------------------------- |
| `getConstructors()`                                  | 获取所有 `public` 访问权限的构造方法                      |
| `getDeclaredConstructors()`                          | 获取所有构造方法（包括 `private`、`protected`、`public`） |
| `getConstructor(Class<?>... parameterTypes)`         | 获取指定参数类型的 `public` 构造方法                      |
| `getDeclaredConstructor(Class<?>... parameterTypes)` | 获取指定参数类型的构造方法（无论权限修饰符）              |
| `getModifiers()`                                     | 获取构造方法的修饰符                                      |
| `getParameters()`                                    | 获取构造方法的参数列表                                    |
| `setAccessible(true)`                                | 取消权限校验，允许访问 `private` 构造方法                 |
| `newInstance(Object... initargs)`                    | 通过构造方法实例化对象                                    |



## 5、完整代码示例

**Student**

```java
package com.itheima.myreflect2;

public class Student {
    private String name;
    private int age;

    public Student() {
    }

    public Student(String name) {
        this.name = name;
    }

    protected Student(int age) {
        this.age = age;
    }

    private Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String toString() {
        return "Student{name = " + name + ", age = " + age + "}";
    }
}
```

**测试**

```java
package com.itheima.myreflect2;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

public class MyReflectDemo {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        /*
            Class类中用于获取构造方法的方法：
                - Constructor<?>[] getConstructors()：
                  获取所有 `public` 访问权限的构造方法。
                - Constructor<?>[] getDeclaredConstructors()：
                  获取所有构造方法，包括 `private`、`protected`、`public`。
                - Constructor`<T>` getConstructor(Class<?>... parameterTypes)：
                  获取指定参数类型的 `public` 构造方法。
                - Constructor`<T>` getDeclaredConstructor(Class<?>... parameterTypes)：
                  获取指定参数类型的构造方法（无论权限修饰符）。
        
            Constructor类中用于创建对象的方法：
                - T newInstance(Object... initargs)：
                  使用构造方法实例化对象。
                - setAccessible(boolean flag)：
                  设为 `true` 以取消访问权限检查，允许访问 `private` 构造方法。
        */

        // 1. 通过反射获取 `Student` 类的 `Class` 对象
        Class clazz = Class.forName("com.itheima.myreflect2.Student");

        // 2. 获取所有 `public` 构造方法（仅能获取 `public` 修饰的）
        Constructor[] cons1 = clazz.getConstructors();
        for (Constructor con : cons1) {
            System.out.println(con);
        }

        // 3. 获取所有构造方法（包括 `private`、`protected`）
        Constructor[] cons2 = clazz.getDeclaredConstructors();
        for (Constructor con : cons2) {
            System.out.println(con);
        }

        // 4. 获取指定的构造方法：
        // 获取无参构造
        Constructor con1 = clazz.getDeclaredConstructor();
        System.out.println(con1);

        // 获取带 `String` 参数的构造方法
        Constructor con2 = clazz.getDeclaredConstructor(String.class);
        System.out.println(con2);

        // 获取带 `int` 参数的构造方法
        Constructor con3 = clazz.getDeclaredConstructor(int.class);
        System.out.println(con3);

        // 获取带 `String` 和 `int` 参数的构造方法
        Constructor con4 = clazz.getDeclaredConstructor(String.class, int.class);
        System.out.println(con4);

        
        // 获取构造方法的修饰符
        int modifiers = con4.getModifiers();
        System.out.println(modifiers);

        // 获取构造方法的参数列表
        Parameter[] parameters = con4.getParameters();
        for (Parameter parameter : parameters) {
            System.out.println(parameter);
        }
        

        // 5. 取消权限校验（暴力反射）,设为 `true` 以取消访问权限检查，允许访问 `private` 构造方法
        con4.setAccessible(true);

        // 6. 使用获取到的构造方法实例化 `Student` 对象
        Student stu = (Student) con4.newInstance("张三", 23);

        // 7. 输出实例化后的对象
        System.out.println(stu);
    }
}
```



# 五、获取==*成员变量*==-Field

![image-20250321200415672](%E5%8F%8D%E5%B0%84-Local.assets/image-20250321200415672.png)

## **1. ==获取成员变量==的方法**

Java 的 `Class` 类提供了一些方法用于获取类的字段（`Field`）对象：

| 方法                                  | 说明                                                         |
| ------------------------------------- | ------------------------------------------------------------ |
| `Field[] getFields()`                 | 获取所有 **public** 修饰的成员变量（包括父类继承的）         |
| `Field[] getDeclaredFields()`         | 获取本类中 **所有**（包括 `private`、`protected`、默认访问权限）的成员变量 |
| `Field getField(String name)`         | 获取指定名称的 **public** 成员变量                           |
| `Field getDeclaredField(String name)` | 获取指定名称的成员变量（包括 `private`）                     |

### **示例**

```java
Class<?> clazz = Class.forName("com.itheima.myreflect3.Student");

// 获取所有public成员变量
Field[] fields = clazz.getFields();
for (Field field : fields) {
    System.out.println(field);
}

// 获取所有成员变量（包括private、protected、默认）
Field[] declaredFields = clazz.getDeclaredFields();
for (Field field : declaredFields) {
    System.out.println(field);
}

// 获取指定的成员变量
Field nameField = clazz.getDeclaredField("name");
System.out.println(nameField);
```



## 2、**获取成员变量的==属性==**

`Field` 类提供了多个方法来获取成员变量的详细信息：

| 方法                 | 说明                                              |
| -------------------- | ------------------------------------------------- |
| `int getModifiers()` | 获取成员变量的修饰符（public、private、static等） |
| `String getName()`   | 获取成员变量的名称                                |
| `Class<?> getType()` | 获取成员变量的数据类型                            |

### **示例**

```java
Field nameField = clazz.getDeclaredField("name");

// 获取修饰符
int modifiers = nameField.getModifiers();
System.out.println("修饰符: " + modifiers);

// 获取成员变量名称
String fieldName = nameField.getName();
System.out.println("成员变量名称: " + fieldName);

// 获取成员变量的数据类型
Class<?> fieldType = nameField.getType();
System.out.println("数据类型: " + fieldType);
```



## 3、**==访问和修改==成员变量的值**

反射允许我们读取和修改对象的字段，即使是 `private` 修饰的字段。

### **（1）读取字段值**

| 方法                     | 说明                            |
| ------------------------ | ------------------------------- |
| `Object get(Object obj)` | 获取指定对象 `obj` 的成员变量值 |

```java
Student student = new Student("zhangsan", 23, "男");
Field nameField = clazz.getDeclaredField("name");

// 取消权限检查，允许访问 private 字段
nameField.setAccessible(true);

// 获取成员变量的值
String value = (String) nameField.get(student);
System.out.println("原始值: " + value);
```

------

### （2）**修改字段值**

| 方法                                 | 说明                            |
| ------------------------------------ | ------------------------------- |
| `void set(Object obj, Object value)` | 为指定对象 `obj` 的成员变量赋值 |

```java
// 修改对象的 name 字段
nameField.set(student, "lisi");

System.out.println("修改后: " + student);
```



## 2、完整的示例代码

**Student**

```java
package com.itheima.myreflect3;

public class Student {
    private String name;
    private int age;
    public String gender;

    public Student() {
    }

    public Student(String name, int age, String gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public String toString() {
        return "Student{name = " + name + ", age = " + age + ", gender = " + gender + "}";
    }
}
```

**测试**

```java
package com.itheima.myreflect3;

import java.lang.reflect.Field;

public class MyReflectDemo {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchFieldException, IllegalAccessException {
    /*
       Class类中用于获取成员变量的方法
            Field[] getFields()：                返回所有公共成员变量对象的数组
            Field[] getDeclaredFields()：        返回所有成员变量对象的数组
            Field getField(String name)：        返回单个公共成员变量对象
            Field getDeclaredField(String name)：返回单个成员变量对象

       Field类中用于创建对象的方法
            void set(Object obj, Object value)：赋值
            Object get(Object obj)              获取值

    */

        //1.获取class字节码文件的对象
        Class clazz = Class.forName("com.itheima.myreflect3.Student");

        //2.获取所有的public的成员变量
        Field[] fields = clazz.getDeclaredFields();
        for (Field field : fields) {
            System.out.println(field);
        }

        //获取单个的成员变量
        Field name = clazz.getDeclaredField("name");
        System.out.println(name);

        //获取权限修饰符
        int modifiers = name.getModifiers();
        System.out.println(modifiers);

        //获取成员变量的名字
        String n = name.getName();
        System.out.println(n);

        //获取成员变量的数据类型
        Class<?> type = name.getType();
        System.out.println(type);

        //获取成员变量记录的值
        Student s = new Student("zhangsan",23,"男");
        name.setAccessible(true);
        String value = (String) name.get(s);
        System.out.println(value);

        //修改对象里面记录的值
        name.set(s,"lisi");

        System.out.println(s);
    }
}
```



# 六、获取==*成员方法*==-Method

## 1、概述

![image-20250321203231607](%E5%8F%8D%E5%B0%84-Local.assets/image-20250321203231607.png)



## 2、**Class 类用于==获取成员方法==的方法**

| 方法                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `Method[] getMethods()`                                      | 获取 **所有 public** 方法，包括 **继承** 的方法              |
| `Method[] getDeclaredMethods()`                              | 获取 **==本类中==** 声明的所有方法（**包括 `private`、`protected`、`default` 访问权限**），但 **不包含继承** 的方法 |
| `Method getMethod(String name, Class<?>... parameterTypes)`  | 获取 **指定的 单个 public 方法**，包括继承的方法             |
| `Method getDeclaredMethod(String name, Class<?>... parameterTypes)` | 获取 **本类中声明的指定的单个方法**（可获取 `private` 方法） |



## 3、**Method 类用于==操作成员方法==**

| 方法                                            | 说明                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| ==`Object invoke(Object obj, Object... args)`== | ==**运行方法**==，其中：**`obj` 是调用该方法的对象，`args` 是传递给方法的参数** |
| `int getModifiers()`                            | 获取方法的修饰符（可使用 `Modifier` 类解析）                 |
| `String getName()`                              | 获取方法名称                                                 |
| `Parameter[] getParameters()`                   | 获取方法的**参数列表**                                       |
| `Class<?> getReturnType()`                      | 获取方法的返回类型                                           |
| `Class<?>[] getExceptionTypes()`                | **获取方法声明抛出的异常类型**                               |
| ==`setAccessible(boolean flag)`==               | 设置访问权限（`true` 取消权限检查，可访问 `private` 方法）   |



## 4、==获取成员方法对象==

### （1）获取所有公共方法

- **方法**: `Method[] getMethods()`
- **说明**: 返回当前类及其父类中所有 **public** 的方法（包括继承的）。

```java
Method[] methods = clazz.getMethods();
for (Method method : methods) {
    System.out.println(method);
}
```

### （2）获取当前类中所有声明的方法

- **方法**: `Method[] getDeclaredMethods()`
- **说明**: 返回当前类中声明的所有方法（包括 `private`、`protected`、默认访问权限的方法），但不包括父类中继承的方法。

```java
Method[] declaredMethods = clazz.getDeclaredMethods();
for (Method method : declaredMethods) {
    System.out.println(method);
}
```

### （3）获取指定的方法

- 方法:
  - `Method getMethod(String name, Class<?>... parameterTypes)`：获取指定名称及参数类型的 **public** 方法。
  - `Method getDeclaredMethod(String name, Class<?>... parameterTypes)`：获取指定名称及参数类型的方法，不受权限限制。

```java
// 例如：获取 Student 类中带有 String 参数的 eat 方法
Method m = clazz.getDeclaredMethod("eat", String.class);
System.out.println(m);
```

------



## 5、方法对象的==基本信息==

通过 `Method` 类可以获取方法的各种属性，包括修饰符、名称、参数列表、返回值类型以及抛出的异常等。

### （1）获取方法修饰符

- **方法**: `int getModifiers()`
- **说明**: 返回一个整型数值，表示该方法的访问权限（如 public、private、static 等）。

```java
int modifiers = m.getModifiers();
System.out.println(modifiers);
```

### （2）获取方法名称

- **方法**: `String getName()`
- **说明**: 返回方法名。

```java
String name = m.getName();
System.out.println(name);
```

### （3）获取方法参数列表

- **方法**: `Parameter[] getParameters()`
- **说明**: 返回一个 `Parameter` 数组，包含了方法中声明的所有参数信息。

```java
Parameter[] parameters = m.getParameters();
for (Parameter parameter : parameters) {
    System.out.println(parameter);
}
```

### （4）获取方法抛出的异常类型

- **方法**: `Class[] getExceptionTypes()`
- **说明**: 返回该方法声明抛出的异常类型的数组。

```java
Class[] exceptionTypes = m.getExceptionTypes();
for (Class exceptionType : exceptionTypes) {
    System.out.println(exceptionType);
}
```

------



## 6、==运行方法==（方法调用）

通过反射可以在运行时动态调用方法，这对框架开发和工具类编程非常有用。

### （1）调用方法

- **方法**: `Object invoke(Object obj, Object... args)`
- 说明: 调用当前 Method 对象表示的方法。
  - **参数一**: 调用该方法的对象实例。
  - **参数二**: 调用方法时传入的实际参数。
  - **返回值**: 方法执行后的返回值（无返回值则为 `null`）。

> **注意**: 如果方法不是 `public`，则必须先调用 `setAccessible(true)` 取消权限检查。

```java
// 创建 Student 对象
Student s = new Student();

// 取消权限校验（如果方法为 private）
m.setAccessible(true);

// 调用方法，传入参数 "汉堡包"，返回结果为 String 类型
String result = (String) m.invoke(s, "汉堡包");
System.out.println(result);
```



## 7、完整示例代码

**Student**

```java
package com.itheima.myreflect4;

import java.io.IOException;

public class Student {
    private String name;
    private int age;

    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void sleep(){
        System.out.println("睡觉");
    }

    private String eat(String something) throws IOException,NullPointerException,ClassCastException {
        System.out.println("在吃" + something);
        return "奥利给";
    }

    private void eat(String something,int a) {
        System.out.println("在吃" + something);
    }

    public String toString() {
        return "Student{name = " + name + ", age = " + age + "}";
    }
}
```

**测试**

```java
package com.itheima.myreflect4;


import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;

public class MyReflectDemo {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, InvocationTargetException, IllegalAccessException {
    /*
       Class类中用于获取成员方法的方法
            Method[] getMethods()：返回所有公共成员方法对象的数组，包括继承的
            Method[] getDeclaredMethods()：返回所有成员方法对象的数组，不包括继承的
            Method getMethod(String name, Class<?>... parameterTypes) ：返回单个公共成员方法对象
            Method getDeclaredMethod(String name, Class<?>... parameterTypes)：返回单个成员方法对象


       Method类中用于创建对象的方法
            Object invoke(Object obj, Object... args)：运行方法
            参数一：用obj对象调用该方法
            参数二：调用方法的传递的参数（如果没有就不写）
            返回值：方法的返回值（如果没有就不写）

        获取方法的修饰符
        获取方法的名字
        获取方法的形参
        获取方法的返回值
        获取方法的抛出的异常

    */

        // 1. 获取class字节码文件对象
        Class clazz = Class.forName("com.itheima.myreflect4.Student");

        // 2. 获取里面所有的方法对象(包含父类中所有的公共方法)
        Method[] methods = clazz.getMethods();
        for (Method method : methods) {
            System.out.println(method);
        }

        // 3. 获取里面所有的方法对象(不能获取父类的，但是可以获取本类中私有的方法)
        Method[] methods = clazz.getDeclaredMethods();
        for (Method method : methods) {
            System.out.println(method);
        }

        // 4. 获取指定的单一方法 ，例如 `eat(String food)`
        Method m = clazz.getDeclaredMethod("eat", String.class);
        System.out.println(m);

  		// 5. 获取方法修饰符
        System.out.println("Modifiers: " + method.getModifiers());

        // 6. 获取方法名
        System.out.println("Method Name: " + method.getName());

        // 7. 获取方法参数
        Parameter[] parameters = method.getParameters();
        for (Parameter parameter : parameters) {
            System.out.println("Parameter: " + parameter);
        }

        // 8. 获取方法的返回类型
        System.out.println("Return Type: " + method.getReturnType());

        // 9. 获取方法的抛出的异常
        Class[] exceptionTypes = m.getExceptionTypes();
        for (Class exceptionType : exceptionTypes) {
             System.out.println("Throws Exception: " + exceptionType);
        }

        //方法运行
        /*Method类中用于创建对象的方法
        Object invoke(Object obj, Object... args)：运行方法
        参数一：用obj对象调用该方法
        参数二：调用方法的传递的参数（如果没有就不写）
        返回值：方法的返回值（如果没有就不写）*/

		// 10. 通过反射调用方法
        Student s = new Student();
        m.setAccessible(true);  // 取消访问限制，允许访问 private 方法
        //参数一s：表示方法的调用者
        //参数二"汉堡包"：表示在调用方法的时候传递的实际参数
        String result = (String) m.invoke(s, "汉堡包");
        System.out.println(result);
    }
}
```



# 七、反射的作用

![image-20250321204705884](%E5%8F%8D%E5%B0%84-Local.assets/image-20250321204705884.png)

## 1、**动态加载和运行代码**

- **运行时获取类信息**：反射可以在程序运行时获取类、方法、字段、构造方法等详细信息，而不需要在编译时就确定所有细节。
- **动态创建对象**：可以通过反射在运行时实例化对象，即使类的名称和构造方法在编译时未知。
- **动态调用方法**：根据需要调用任意方法，使程序具有更高的灵活性。

------

## 2、**降低耦合度**

- **解耦代码**：使用反射可以让代码不直接依赖具体的类，通过接口和配置文件动态加载实现类，提高系统的扩展性和灵活性。
- **插件化和框架设计**：许多框架（如 Spring、Hibernate、MyBatis）依赖反射来实现自动装配、依赖注入、ORM 映射等功能，使得业务逻辑与底层实现分离。

------

## 3、方便工具开发和调试

- **测试工具**：利用反射可以在不修改源码的情况下访问私有成员，这对于编写单元测试、调试和性能分析工具非常有帮助。
- **序列化和反序列化**：反射使得对象与其字节流之间的转换更加通用和自动化，例如 JSON、XML 等数据格式的解析。

------

## 4、**支持框架和中间件**

- **框架内部机制**：很多大型框架和中间件通过反射来动态扫描类、加载配置、生成代理对象，进而实现 AOP（面向切面编程）、IOC（控制反转）等设计模式。
- **注解处理**：反射结合注解（Annotation）可以实现灵活的配置管理、元数据分析等功能。

------

## 5、**灵活扩展和动态配置**

- **扩展性**：通过反射，可以在程序运行时根据配置加载和使用不同的类，从而实现灵活扩展和动态配置，而无需重新编译程序。
- **插件架构**：支持插件架构的应用程序通常使用反射来动态加载和管理插件，提高系统的灵活性和可扩展性。





# 八、==综合练习==

## 1、保存对象信息

![image-20250321204758798](%E5%8F%8D%E5%B0%84-Local.assets/image-20250321204758798.png)

**Student**

```java
package com.itheima.myreflect5;

public class Student {
    private String name;
    private int age;
    private char gender;
    private double height;
    private String hobby;

    public Student() {
    }

    public Student(String name, int age, char gender, double height, String hobby) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.hobby = hobby;
    }

    public String toString() {
        return "Student{name = " + name + ", age = " + age + ", gender = " + gender + ", height = " + height + ", hobby = " + hobby + "}";
    }
}
```

**Teacher**

```java
package com.itheima.myreflect5;

public class Teacher {
    private String name;
    private double salary;

    public Teacher() {
    }

    public Teacher(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public String toString() {
        return "Teacher{name = " + name + ", salary = " + salary + "}";
    }
}
```

**测试**

```java
package com.itheima.myreflect5;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Field;

public class MyReflectDemo {
    public static void main(String[] args) throws IllegalAccessException, IOException {
    /*
        对于任意一个对象，都可以把对象所有的字段名和值，保存到文件中去
    */
       Student s = new Student("小A",23,'女',167.5,"睡觉");
       Teacher t = new Teacher("播妞",10000);
       saveObject(s);
    }

    //把对象里面所有的成员变量名和值保存到本地文件中
    public static void saveObject(Object obj) throws IllegalAccessException, IOException {
        //1.获取字节码文件的对象
        Class clazz = obj.getClass();
        //2. 创建IO流
        BufferedWriter bw = new BufferedWriter(new FileWriter("myreflect\\a.txt"));
        //3. 获取所有的成员变量
        Field[] fields = clazz.getDeclaredFields();
        for (Field field : fields) {
            field.setAccessible(true); //临时取消访问权限
            //获取成员变量的名字
            String name = field.getName();
            //获取成员变量的值
            Object value = field.get(obj);
            //写出数据
            bw.write(name + "=" + value);
            bw.newLine();
        }
        bw.close();
    }
}
```



## 2、结合配置文件

![image-20250321205330318](%E5%8F%8D%E5%B0%84-Local.assets/image-20250321205330318.png)

**Student**

```java
package com.itheima.myreflect6;

public class Student {
    private String name;
    private int age;

    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void study(){
        System.out.println("学生在学习！");
    }

    public String toString() {
        return "Student{name = " + name + ", age = " + age + "}";
    }
}
```

**Teacher**

```java
package com.itheima.myreflect6;

public class Teacher {
    private String name;
    private double salary;

    public Teacher() {
    }

    public Teacher(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public void teach(){
        System.out.println("老师在教书！");
    }
    
    public String toString() {
        return "Teacher{name = " + name + ", salary = " + salary + "}";
    }
}
```

**prop.properties配置文件**

```java
classname=com.itheima.myreflect6.Student
method=study
```



**测试**

```java
package com.itheima.myreflect6;

import java.io.FileInputStream;
import java.io.IOException;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Properties;

public class MyReflectDemo {
    public static void main(String[] args) throws IOException, ClassNotFoundException, NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
    /*
        反射可以跟配置文件结合的方式，动态的创建对象，并调用方法
    */
        //1.读取配置文件中的信息
        Properties prop = new Properties();
        FileInputStream fis = new FileInputStream("myreflect\\prop.properties");
        prop.load(fis);
        fis.close();
        System.out.println(prop);

        //2.获取全类名和方法名
        String className = (String) prop.get("classname"); //获取全类名
        String methodName = (String) prop.get("method");  //获取方法名

        System.out.println(className);
        System.out.println(methodName);

        //3.利用反射创建对象并运行方法
        Class clazz = Class.forName(className); //获取字节码文件对象

        //获取构造方法
        Constructor con = clazz.getDeclaredConstructor();
        Object o = con.newInstance();
        System.out.println(o);

        //获取成员方法并运行
        Method method = clazz.getDeclaredMethod(methodName);
        method.setAccessible(true);
        method.invoke(o);
    }
}
```



# 九、总结

![image-20250321210146664](%E5%8F%8D%E5%B0%84-Local.assets/image-20250321210146664.png)





#  

# ==动态代理==

![image-20250321211006840](%E5%8F%8D%E5%B0%84-Local.assets/image-20250321211006840.png)

- 无侵入式的给方法增强功能

![image-20250321211130432](%E5%8F%8D%E5%B0%84-Local.assets/image-20250321211130432.png)

![image-20250321210948780](%E5%8F%8D%E5%B0%84-Local.assets/image-20250321210948780.png)

动态代理是一种**在运行时创建代理对象**的技术，它能够在不修改原有代码的情况下，**对目标对象的方法调用进行拦截和增强**，从而实现如日志记录、权限校验、事务管理等横切关注点的统一处理。

------

## 1、动态代理是什么？

- **定义**：动态代理指在程序运行时，根据指定接口自动生成代理类，并通过该代理类调用目标对象的方法，同时在调用前后插入额外的逻辑。

- 实现方式：在 Java 中，主要有两种动态代理方式：

  - ==**JDK 动态代理**==：适用于目标对象实现了接口的情况，通过 `java.lang.reflect.Proxy` 和 `InvocationHandler` 接口实现。

  ![image-20250321211703865](%E5%8F%8D%E5%B0%84-Local.assets/image-20250321211703865.png)

  - ==**CGLIB 动态代理**==：适用于目标对象没有实现接口的情况，通过生成目标类的子类来实现代理。

------



## 2、为什么需要动态代理？

1. **解耦和扩展**
   - 将横切关注点（例如日志、事务、权限检查等）与业务逻辑分离，降低模块之间的耦合度。
2. **减少冗余代码**
   - 通过代理可以将公共的前置和后置逻辑封装在一个地方，避免在每个方法中重复编写相同代码。
3. **运行时灵活性**
   - 可以在运行时决定是否代理某个对象，以及如何增强其方法调用，不需要在编译期确定。
4. **==动态配置和切面编程==（AOP）**
   - 很多框架（如 Spring AOP）正是基于动态代理来实现横切逻辑的插入，使系统更灵活、**配置更简单**。

------



## 3、动态代理“长什么样”

**动态代理生成的代理对象**在外部看来**和目标对象完全一致**，因为它们**==实现了相同的接口或继承自同一个类==**。但在内部，代理对象包装了目标对象，并在调用目标方法时先执行一些额外逻辑。下面是一个简单的 JDK 动态代理示例，展示了代理对象的“长相”：

```java
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

// 目标接口
interface Service {
    void execute(String task);
}

// 目标对象实现类
class ServiceImpl implements Service {
    @Override
    public void execute(String task) {
        System.out.println("执行任务：" + task);
    }
}

// 动态代理处理器
class ServiceInvocationHandler implements InvocationHandler {
    // 目标对象
    private Object target;
    
    public ServiceInvocationHandler(Object target) {
        this.target = target;
    }
    
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        // 前置增强逻辑
        System.out.println("【代理前】记录日志或权限校验");
        
        // 调用目标方法
        Object result = method.invoke(target, args);
        
        // 后置增强逻辑
        System.out.println("【代理后】记录日志或事务提交");
        return result;
    }
}

public class DynamicProxyDemo {
    public static void main(String[] args) {
        // 创建目标对象
        Service service = new ServiceImpl();
        
        // 创建代理对象
        Service proxyInstance = (Service) Proxy.newProxyInstance(
                service.getClass().getClassLoader(),
                new Class[]{Service.class},
                new ServiceInvocationHandler(service)
        );
        
        // 通过代理对象调用方法
        proxyInstance.execute("发送邮件");
    }
}
```

**输出示例：**

```
【代理前】记录日志或权限校验
执行任务：发送邮件
【代理后】记录日志或事务提交
```

从这个示例中可以看出，代理对象 `proxyInstance` 与目标对象 `ServiceImpl` 实现了相同的接口 `Service`，调用时不仅执行了目标方法，还插入了前置和后置的增强逻辑。这就是动态代理“长什么样”的体现：外部接口不变，内部包装了一层拦截器，灵活地处理方法调用。

------

### 总结

- **动态代理**允许在运行时创建一个代理对象来包装目标对象，从而**在方法调用时动态插入额外逻辑**。
- **需要动态代理**主要是为了降低耦合、实现横切关注点（如日志、权限、事务）统一管理，并提高系统的灵活性和可扩展性。
- **代理对象的外观**与目标对象一致，但在内部会执行**预定义的前置、后置逻辑，使得代码更加简洁和易于维护。**



## 4、代码实现-==newProxyInstance==

1、真正干活的对象

2、代理对象

3、利用代理调用方法

**切记一点：代理可以增强或者拦截的方法都在接口中，==接口需要写在newProxyInstance的第二个参数里。==**



### （1）Star接口

```java
package com.itheima.mydynamicproxy1;

public interface Star {

    //我们可以把所有想要被代理的方法定义在接口当中

    //唱歌
    public abstract String sing(String name);

    //跳舞
    public abstract void dance();
}
```



### （2）BigStar实现类

```java
package com.itheima.mydynamicproxy1;

public class BigStar implements Star {
    private String name;


    public BigStar() {
    }

    public BigStar(String name) {
        this.name = name;
    }

    //唱歌
    @Override
    public String sing(String name){
        System.out.println(this.name + "正在唱" + name);
        return "谢谢";
    }

    //跳舞
    @Override
    public void dance(){
        System.out.println(this.name + "正在跳舞");
    }

    public String toString() {
        return "BigStar{name = " + name + "}";
    }
}
```



### （3）代理工具类-==ProxyUtil==

```java
package com.itheima.mydynamicproxy1;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

/*
*
* 类的作用：
*       创建一个代理
*
* */
public class ProxyUtil {

    /*
    *
    * 方法的作用：
    *       给一个明星的对象，创建一个代理
    *
    *  形参：
    *       被代理的明星对象
    *
    *  返回值：
    *       给明星创建的代理
    *
    *
    *
    * 需求：
    *   外面的人想要大明星唱一首歌
    *   1. 获取代理的对象
    *      代理对象 = ProxyUtil.createProxy(大明星的对象);
    *   2. 再调用代理的唱歌方法
    *      代理对象.唱歌的方法("只因你太美");
    * */
    public static Star createProxy(BigStar bigStar){
       /* java.lang.reflect.Proxy类：提供了为对象产生代理对象的方法：

        public static Object newProxyInstance(ClassLoader loader, Class<?>[] interfaces, InvocationHandler h)
        参数一：用于指定用哪个类加载器，去加载生成的代理类
        参数二：指定接口，这些接口用于指定生成的代理长什么，也就是有哪些方法
        参数三：用来指定生成的代理对象要干什么事情*/
        Star star = (Star) Proxy.newProxyInstance(
                ProxyUtil.class.getClassLoader(),//参数一：用于指定用哪个类加载器，去加载生成的代理类
                new Class[]{Star.class},//参数二：指定接口，这些接口用于指定生成的代理长什么，也就是有哪些方法
                //参数三：用来指定生成的代理对象要干什么事情
                new InvocationHandler() {
                    @Override
                    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                        /*
                        * 参数一：代理的对象
                        * 参数二：要运行的方法 sing
                        * 参数三：调用sing方法时，传递的实参
                        * */
                        if("sing".equals(method.getName())){
                            System.out.println("准备话筒，收钱");
                        }else if("dance".equals(method.getName())){
                            System.out.println("准备场地，收钱");
                        }
                        //去找大明星开始唱歌或者跳舞
                        //代码的表现形式：调用大明星里面唱歌或者跳舞的方法
                        return method.invoke(bigStar,args);
                    }
                }
        );
        return star;
    }
}
```



### （4）测试类Test

```java
package com.itheima.mydynamicproxy1;

public class Test {
    public static void main(String[] args) {

    /*
        需求：
            外面的人想要大明星唱一首歌
             1. 获取代理的对象
                代理对象 = ProxyUtil.createProxy(大明星的对象);
             2. 再调用代理的唱歌方法
                代理对象.唱歌的方法("只因你太美");
     */

        //1. 获取代理的对象
        BigStar bigStar = new BigStar("鸡哥");
        Star proxy = ProxyUtil.createProxy(bigStar);

        //2. 调用唱歌的方法
        String result = proxy.sing("只因你太美");
        System.out.println(result);
    }
}
```



### （5）额外扩展-==拦截方法==

动态代理，还可以**拦截方法**

比如：

​	在这个故事中，经济人作为代理，如果别人让邀请大明星去唱歌，打篮球，经纪人就增强功能。

​	但是如果别人让大明星去扫厕所，经纪人就要拦截，不会去调用大明星的方法。

```java
/*
* 类的作用：
*       创建一个代理
* */
public class ProxyUtil {
    public static Star createProxy(BigStar bigStar){
        public static Object newProxyInstance(ClassLoader loader, Class<?>[] interfaces, InvocationHandler h)
        Star star = (Star) Proxy.newProxyInstance(
                ProxyUtil.class.getClassLoader(),
                new Class[]{Star.class},
                new InvocationHandler() {
                    @Override
                    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                        if("cleanWC".equals(method.getName())){
                            System.out.println("拦截，不调用大明星的方法");
                            return null;
                        }
                        //如果是其他方法，正常执行
                        return method.invoke(bigStar,args);
                    }
                }
        );
        return star;
    }
}
```



## 5 、动态代理的==练习==-对List集合的add方法增强

 对**add方法进行增强**，**对remove方法进行拦截**，对其他方法不拦截也不增强

```java
public class MyProxyDemo1 {
    public static void main(String[] args) {
        //动态代码可以增强也可以拦截
        //1.创建真正干活的人
        ArrayList`<String>` list = new ArrayList<>();

        //2.创建代理对象
        //参数一：类加载器。当前类名.class.getClassLoader()
        //                 找到是谁，把当前的类，加载到内存中了，我再麻烦他帮我干一件事情，把后面的代理类，也加载到内存

        //参数二：是一个数组，在数组里面写接口的字节码文件对象。
        //                  如果写了List，那么表示代理，可以代理List接口里面所有的方法，对这些方法可以增强或者拦截
        //                  但是，一定要写ArrayList真实实现的接口
        //                  假设在第二个参数中，写了MyInter接口，那么是错误的。
        //                  因为ArrayList并没有实现这个接口，那么就无法对这个接口里面的方法，进行增强或拦截
        //参数三：用来创建代理对象的匿名内部类
        List proxyList = (List) Proxy.newProxyInstance(
                //参数一：类加载器
                MyProxyDemo1.class.getClassLoader(),
                //参数二：是一个数组，表示代理对象能代理的方法范围
                new Class[]{List.class},
                //参数三：本质就是代理对象
                new InvocationHandler() {
                    @Override
                    //invoke方法参数的意义
                    //参数一：表示代理对象，一般不用（了解）
                    //参数二：就是方法名，我们可以对方法名进行判断，是增强还是拦截
                    //参数三：就是下面第三步调用方法时，传递的参数。
                    //举例1：
                    //list.add("阿玮好帅");
                    //此时参数二就是add这个方法名
                    //此时参数三 args[0] 就是 阿玮好帅
                    //举例2：
                    //list.set(1, "aaa");
                    //此时参数二就是set这个方法名
                    //此时参数三  args[0] 就是 1  args[1]"aaa"
                    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                        //对add方法做一个增强，统计耗时时间
                        if (method.getName().equals("add")) {
                            long start = System.currentTimeMillis();
                            //调用集合的方法，真正的添加数据
                            method.invoke(list, args);
                            long end = System.currentTimeMillis();
                            System.out.println("耗时时间：" + (end - start));
                            //需要进行返回，返回值要跟真正增强或者拦截的方法保持一致
                            return true;
                        }else if(method.getName().equals("remove") && args[0] instanceof Integer){
                            System.out.println("拦截了按照索引删除的方法");
                            return null;
                        }else if(method.getName().equals("remove")){
                            System.out.println("拦截了按照对象删除的方法");
                            return false;
                        }else{
                            //如果当前调用的是其他方法,我们既不增强，也不拦截
                            method.invoke(list,args);
                            return null;
                        }
                    }
                }
        );

        //3.调用方法
        //如果调用者是list，就好比绕过了第二步的代码，直接添加元素
        //如果调用者是代理对象，此时代理才能帮我们增强或者拦截

        //每次调用方法的时候，都不会直接操作集合
        //而是先调用代理里面的invoke，在invoke方法中进行判断，可以增强或者拦截
        proxyList.add("aaa");
        proxyList.add("bbb");
        proxyList.add("ccc");
        proxyList.add("ddd");

        proxyList.remove(0);
        proxyList.remove("aaa");

        //打印集合
        System.out.println(list);
    }
}
```







