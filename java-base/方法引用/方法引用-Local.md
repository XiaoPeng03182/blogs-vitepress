# 方法引用

# 一、方法引用==概述==

### 1、概述

#### **方法引用==使用条件==**

- 1、**引用处必须是函数式接口**
- 2、被引用的方法需要**已存在**（可以是java写好的，也可以是第三方的工具类）
- 3、**被引用的形参和返回值**需要跟**抽象方法的形参和返回值**==保持一致==
- 4、被引用的方法的功能需要**满足当前的要求**

![image-20250312155231559](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312155231559.png)

![image-20250312155510739](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312155510739.png)

![image-20250312155453765](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312155453765.png)

### 2、示例代码

```java
package com.pyw.a47function;

import java.util.Arrays;
import java.util.Comparator;

public class FunctionDemo1 {
    public static void main(String[] args) {
        //TODO 需求：创建一个数组，进行倒序排列
        Integer[] arr = {3, 5, 4, 1, 6, 2};

        //匿名内部类
        Arrays.sort(arr, new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o2 -o1;
            }
        });
        System.out.println(Arrays.toString(arr));

        //Lambda表达式简化格式
        Arrays.sort(arr,(o1,o2) -> o2-o1);
        System.out.println(Arrays.toString(arr));

        //方法引用
        //1、引用处必须是函数式接口
        //2、被引用的方法需要已存在（可以是java写好的，也可以是第三方的工具类）
        //3、被引用的形参和返回值需要跟抽象方法的形参和返回值保持一致
        //4、被引用的方法的功能需要满足当前的要求

        //表示引用FunctionDemo1类里面的subAbstract方法
        //把这个方法当作抽象方法的方法体
        //::方法引用符
        Arrays.sort(arr,FunctionDemo1::subAbstract);
        System.out.println(Arrays.toString(arr));

    }

    public static int subAbstract(int num1,int num2){
        return num1 - num2;
    }
}
```



# 二、方法引用的==分类==

![image-20250312160000385](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312160000385.png)

## 1、引用==静态方法==

![image-20250312160311706](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312160311706.png)

```java
package com.pyw.a47function;

import java.util.ArrayList;
import java.util.Collections;
import java.util.function.Function;

public class FunctionDemo2 {
    public static void main(String[] args) {
        /*
            方法引用（引用静态方法）
            格式
                类::方法名
            需求：
                集合中又一下数字，要求把他们都变成int类型
                "1","2","3","4","5"
         */

        //1.创建集合并添加元素
        ArrayList<String> list = new ArrayList<>();
        Collections.addAll(list,"1","2","3","4","5");

        //2.把他们都变成int类型
        //匿名内部类
        list.stream().map(new Function<String, Object>() {
            @Override
            public Object apply(String s) {
                return Integer.parseInt(s);
            }
        }).forEach(s -> System.out.println(s));

        //方法引用
        //方法引用
        //1、引用除必须是函数式接口
        //2、被引用的方法需要已存在（可以是java写好的，也可以是第三方的工具类）
        //3、被引用的形参和返回值需要跟抽象方法的形参喝返回值保持一致
        //4、被引用的方法的功能需要满足当前的要求
        System.out.println("====方法引用====");
        list.stream()
                .map(Integer::parseInt)
                .forEach(s -> System.out.println(s));
    }
}
```



## 2、引用==成员方法==

![image-20250312161949296](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312161949296.png)

### （1）引用==其他类==的方法

![image-20250312161950975](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312161950975.png)

##### ①示例代码

![image-20250312160958467](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312160958467.png)

```java
package com.pyw.a47function;

import java.util.ArrayList;
import java.util.Collections;
import java.util.function.Predicate;

public class FunctionDemo3 {
    public static void main(String[] args) {
        /*
        方法引用（引用成员方法）
        格式
         *       静态  类名::方法名
         *       成员方法 在哪儿？
         *              如果流里面时Student类型，并且方法再Student方法当中 类名::方法名
         *              如果方法在其他类 对象名::方法名
         *              如果方法在本类   this::方法名
         *              如果方法在父类   super::方法名
         *       构造方法  类名：：new
        需求：
            集合中有一些名字，按照要求过滤数据
            数据："张无忌","周芷若","赵敏","张强","张三丰"
            要求：只要以张开头，而且名字是3个字的
       */

        //1.创建集合
        ArrayList<String> list = new ArrayList<>();
        //2.添加数据
        Collections.addAll(list,"张无忌","周芷若","赵敏","张强","张三丰");
        //3.过滤数据（只要张开头的数据而且名字是3个字的）
        //lambda
        list.stream()
                .filter(s->s.startsWith("张"))
                .filter(s->s.length() == 3)
                .forEach(s -> System.out.println(s));
        //匿名内部类
        list.stream()
                .filter(new Predicate<String>() {
                    @Override
                    public boolean test(String s) {
                        return s.startsWith("张") && s.length() ==3;
                    }
                })
                .forEach(s -> System.out.println(s));
        //方法引用（引用其他类的成员方法）
        StringOperation so = new StringOperation();
        list.stream()
                .filter(so::stringJudege)
                .forEach(s -> System.out.println(s));
        //方法引用（本类成员方法）
        //静态方法中是没有this的- main方法是静态方法无法调用本类中的非静态方法。
        list.stream().filter(new FunctionDemo3()::stringJudege) //通过new本类的对象z再调用本类的方法
                .forEach(s-> System.out.println(s));

    }

    //非静态方法可能通过this::方法名，调用本类的成员方法
    public void test(ArrayList<String> list){
        //方法引用（本类成员方法）
        list.stream()
                .filter(this::stringJudege)
                .forEach(s -> System.out.println(s));
    }

    public boolean stringJudege(String s){
        return s.startsWith("张") && s.length() ==3;
    }
}

```

**StringOperation类：**

```java
package com.pyw.a47function;

public class StringOperation {
    public boolean stringJudege(String s){
        return s.startsWith("张") && s.length() ==3;
    }
}
```



### （2）引用==本类==的方法

![image-20250312161955102](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312161955102.png)

**==注意==：**

- **静态方法中是没有this的**-比如 main方法是静态方法**无法调用本类中的非静态方法**。
  - 只能通过**new本类的对象**再调用本类的方法
  - ![image-20250312161537012](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312161537012.png)
- 非静态方法可能通过**this::方法名**，**调用本类的成员方法**
  - ![image-20250312161635671](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312161635671.png)

##### ①示例代码

如果在本类中有一个成员方法，我们可以使用 `this::方法名` 进行方法引用。例如：

```java
@FunctionalInterface
interface MyFunction {
    void execute(String msg);
}

public class MethodReferenceDemo {
    public void printMessage(String message) {
        System.out.println("本类方法: " + message);
    }

    public void testMethodReference() {
        MyFunction func = this::printMessage; // 引用本类方法
        func.execute("Hello from this::printMessage");
    }

    public static void main(String[] args) {
        new MethodReferenceDemo().testMethodReference();
    }
}
```

**输出：**

```
本类方法: Hello from this::printMessage
```



### （3）引用==父类==的方法

![image-20250312161956947](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312161956947.png)

##### ①示例代码

在子类中，我们可以使用 `super::方法名` 来引用父类的成员方法。例如：

```java
@FunctionalInterface
interface MyFunction {
    void execute(String msg);
}

class Parent {
    public void showMessage(String message) {
        System.out.println("父类方法: " + message);
    }
}

public class Child extends Parent {
    public void testMethodReference() {
        MyFunction func = super::showMessage; // 引用父类方法
        func.execute("Hello from super::showMessage");
    }

    public static void main(String[] args) {
        new Child().testMethodReference();
    }
}
```

**输出：**

```
父类方法: Hello from super::showMessage
```



## 3、引用==构造方法==

![image-20250312162924413](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312162924413.png)

##### ①示例代码

```java
package com.pyw.a47function;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public class FunctionDemo4 {
    public static void main(String[] args) {
        /*
        方法引用（引用构造方法）
        格式
                类名::new
        目的：
                创建这个类的对象

        需求：
             集合里面存储姓名和年龄，要求封装成Student对象并收集到List集合中

        方法引用的规则：
            1.需要有函数式接口
            2.被引用的方法必须已经存在
            3.被引用方法的形参和返回值，需要跟抽象方法的形参返回值保持一致
            4.被引用方法的功能需要满足当前的需求
            
       */
        //1.创建集合对象
        ArrayList<String> list = new ArrayList<>();
        //2.添加数据
        Collections.addAll(list, "张无忌,15", "周芷若,14", "赵敏,13", "张强,20", "张三丰,100", "张翠山,40", "张良,35", "王二麻子,37", "谢广坤,41");

        //3.封装成Student对象到List集合中
        List<Student> students = list.stream().map(Student::new).collect(Collectors.toList());
        System.out.println(students);
    }
}
```

**学生对象-Student**

```java
public class Student {
    private String name;
    private int age;

    //参数含义为：接收stream流里面的数据对象
    public Student(String str) {
        String[] arr = str.split(",");
        this.name = arr[0];
        this.age = Integer.parseInt(arr[1]);
    }
}
```



## 4、==其他==调用方式

![image-20250312164012325](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312164012325.png)

### （1）使用==类名引用其他成员==方法

##### ①**==注意==：**

**和引用其他类的方法的==_区别_==：**

- **对象::方法名**，要求被引用方法的形参，需要跟抽象方法的**形参完全一致**
- **类名::方法名**，只需要被引用方法的**形参，需要==跟抽象方法的第二个形参到最后一个形参保持一致==，返回值需要保持一致**

**方法引用的规则：**

- 1.需要又函数式接口
- 2.被引用的方法必须已经存在
- 3.被引用方法的**形参，需要==跟抽象方法的第二个形参到最后一个形参保持一致==，返回值需要保持一致**
- 4.被引用的功能需要满足当前的需求

==**抽象方法详解：**==

- **第一个参数：表示被引用方法的调用者，决定了可以引用哪些类中的方法**
- 再Stream流中，第一个参数一般都表示流里面的每一个数据。
- 架设流里面的数据是字符串，那么这种方式进行方法引用，只能**引用String这个类中的方法**
- **第二个参数到最后一个参数：**跟被引用方法的形参保持一致，如果**没有第二个参数**，说明被引用的方法需要是**无参的成员方法**

**局限性：**

- **不能引用所有类中的成员方法。**
- 是跟**抽象方法的第一个参数有关，这个参数是什么类型的，那么就只能引用这个类中的方法。**

##### ②示例代码

```java
package com.pyw.a47function;

import java.util.ArrayList;
import java.util.Collections;
import java.util.function.Function;

public class FunctionDemo5 {
    public static void main(String[] args) {
        /*
            方法引用(类名引用成员方法)
            语法：
                类名::成员方法

            集合里面添加字符串，变成大写后再输出

            方法引用的规则：
            1.需要又函数式接口
            2.被引用的方法必须已经存在
            3.被引用方法的形参，需要跟抽象方法的第二个形参到最后一个形参保持一致，返回值需要保持一致
            4.被引用的功能需要满足当前的需求

            抽象方法详解：
            第一个参数：表示被引用方法的调用者，决定了可以引用哪些类中的方法
                        再Stream流中，第一个参数一般都表示流里面的每一个数据。
                        架设流里面的数据是字符串，那么这种方式进行方法引用，只能引用String这个类中的方法

            局限性：
            不能引用所有类中的成员方法。
            是跟抽象方法的第一个参数有关，这个参数是什么类型的，那么就只能引用这个类中的方法。
         */
        ArrayList<String> list = new ArrayList<>();
        Collections.addAll(list,"aaa","bbb","ccc");

        //匿名内部类
        list.stream().map(new Function<String, String>() {
            @Override
            public String apply(String s) { //抽象方法的第一个参数
                return s.toUpperCase();
            }
        }).forEach(System.out::println);

        list.stream()
                //拿着流里面的每一个数据，去调用String类中的toUpperCase方法，方法的返回值就是转换之后的结果。
                .map(String::toUpperCase)
                .forEach(System.out::println);
    }
}
```



### （2）引用==数组的构造方法==

![image-20250312165217907](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312165217907.png)

##### ①==细节==

- **==数组的类型，需要跟流中数据的类型保持一致。==**

##### ②示例代码

```java
package com.pyw.a47function;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.function.IntFunction;

public class FunctionDemo6 {
    public static void main(String[] args) {
        /*
        方法引用（数组的构造方法）
        格式
                数据类型[]::new
        目的：
                创建一个指定类型的数组
        需求：
             集合中存储一些整数，收集到数组当中

        细节：
            数组的类型，需要跟流中数据的类型保持一致。
       */

        //1.创建集合并添加元素
        ArrayList<Integer> list = new ArrayList<>();
        Collections.addAll(list, 1, 2, 3, 4, 5);
        //2.收集到数组当中
        //匿名内部类
        Integer[] arr = list.stream().toArray(new IntFunction<Integer[]>() {
            @Override
            public Integer[] apply(int value) {
                //value表示集合长度
                return new Integer[value];
            }
        });
        System.out.println(Arrays.toString(arr));
        //方法引用
        Integer[] arr2 = list.stream().toArray(Integer[]::new);
        System.out.println(Arrays.toString(arr2));
    }
}
```



# 三、==技巧==

**技巧：**

- 1.现在有没有一个方法符合我当前的需求
- 2.如果有这样的方法，这个方法是否满足引用的规则
  - **静态方法**   **类名：：方法名**
  - **成员方法** 在哪儿？
    - ==如果流里面时Student类型，**并且方法在Student方法当中** **类名::方法名**==
    - 如果方法在其他类 **对象名::方法名**
    - 如果方法在本类   this::方法名
    - 如果方法在父类   super::方法名
  - **构造方法**  **类名：：new**



# 四、小结

![image-20250312165559076](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312165559076.png)

![image-20250312165748704](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312165748704.png)



# 五、练习

![image-20250312165818342](%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.assets/image-20250312165818342.png)

## 1、练习1

```java
package com.pyw.a47function;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.function.Function;

public class FunctionTest1 {
    public static void main(String[] args) {
        /*
        需求：
             集合中存储一些字符串的数据，比如：张三,23。
             收集到Student类型的数组当中
       */
        ArrayList<String> list = new ArrayList<>();
        Collections.addAll(list, "张无忌,15", "周芷若,14", "赵敏,13", "张强,20", "张三丰,100", "张翠山,40", "张良,35", "王二麻子,37", "谢广坤,41");
        //2.先把字符串变成Student对象，然后再把Student对象收集起来
        Student[] students = list.stream()
                //注意使用stream转换时需要重写Student的构造方法，让他与map方法中需要重写的方法保持一致
                .map(Student::new)
                //创建新数组接收student
                .toArray(Student[]::new); //数组的类型，需要跟流中数据的类型保持一致
        System.out.println(Arrays.toString(students));
    }
}
```

**Student类**

```java
public Student(String str) {
    String[] arr = str.split(",");
    this.name = arr[0];
    this.age = Integer.parseInt(arr[1]);
}
```



## 2、练习2

```java
package com.pyw.a47function;

import java.util.ArrayList;
import java.util.Arrays;

public class FunctionTest2 {
    public static void main(String[] args) {
        /*
         *   需求：
         *       创建集合添加学生对象
         *       学生对象属性：name，age
         *   要求：
         *       获取姓名并放到数组当中
         *       使用方法引用完成
         *
         *   技巧：
         *       1.现在有没有一个方法符合我当前的需求
         *       2.如果有这样的方法，这个方法是否满足引用的规则
         *       静态   类名：：方法名
         *       成员方法 在哪儿？
         *              如果流里面时Student类型，并且方法在Student方法当中 类名::方法名
         *              如果方法在其他类 对象名::方法名
         *              如果方法在本类   this::方法名
         *              如果方法在父类   super::方法名
         *       构造方法  类名：：new
         *
         *
         * */

        //1.创建集合
        ArrayList<Student> list = new ArrayList<>();
        //2.添加元素
        list.add(new Student("zhangsan",23));
        list.add(new Student("lisi",24));
        list.add(new Student("wangwu",25));

        String[] strings = list.stream().map(Student::getName) //流中的数据类型 已经Student-》String
            .toArray(String[]::new); //数组的类型，需要跟流中数据的类型(此时是String)保持一致
        System.out.println(Arrays.toString(strings));
    }
}
```



## 3、练习3

```java
package com.pyw.a47function;

import java.util.ArrayList;
import java.util.Arrays;

public class FunctionTest3 {
    public static void main(String[] args) {
        /*
         *   需求：
         *       创建集合添加学生对象
         *       学生对象属性：name，age
         *   要求：
         *       把姓名和年龄拼接成：张三-23的字符串，并放到数组当中
         *       使用方法引用完成
         * */

        ArrayList<Student> list2 = new ArrayList<>();
        list2.add(new Student("zhangsan",23));
        list2.add(new Student("lisi",24));
        list2.add(new Student("wangwu",25));

        String[] strings = list2.stream().map(Student::toString).toArray(String[]::new);
        System.out.println(Arrays.toString(strings));

    }
}
```

