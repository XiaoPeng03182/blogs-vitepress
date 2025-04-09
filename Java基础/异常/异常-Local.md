# 异常-Exception

# 一、异常体系介绍

## 1、引入

![image-20250312215000899](%E5%BC%82%E5%B8%B8.assets/image-20250312215000899.png)



![image-20250312215047835](%E5%BC%82%E5%B8%B8.assets/image-20250312215047835.png)



## 2、==异常分类==

![image-20250312215240038](%E5%BC%82%E5%B8%B8.assets/image-20250312215240038.png)



![image-20250312215251335](%E5%BC%82%E5%B8%B8.assets/image-20250312215251335.png)

## 3、小结

![image-20250312215332761](%E5%BC%82%E5%B8%B8.assets/image-20250312215332761.png)



# 二、运行时异常和编译时异常 

## 1、代码引入

```java
package com.pyw.a48exceptionDemo;

import java.text.ParseException;

public class ExceptionDemo1 {
    public static void main(String[] args) {

        //编译时异常(在编译阶段，必须要手动处理，否则代码报错)
        /*String time = "2030年1月1日";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日");
        Date date = sdf.parse(time);
        System.out.println(date);*/


        //运行时异常（在编译阶段是不需要处理的，是代码运行时出现的异常）
        int[] arr = {1,2,3,4,5};
        System.out.println(arr[10]);//ArrayIndexOutOfBoundsException

    }
}
```

## 2、==特点==

![image-20250312220241733](%E5%BC%82%E5%B8%B8.assets/image-20250312220241733.png)



![image-20250312220514422](%E5%BC%82%E5%B8%B8.assets/image-20250312220514422.png)

![image-20250312220640000](%E5%BC%82%E5%B8%B8.assets/image-20250312220640000.png)



## 3、常见异常

#### （1）编译时异常

![image-20250312220827406](%E5%BC%82%E5%B8%B8.assets/image-20250312220827406.png)



#### （2）运行时异常

![image-20250312220911208](%E5%BC%82%E5%B8%B8.assets/image-20250312220911208.png)



## 4、小结

![image-20250312220016730](%E5%BC%82%E5%B8%B8.assets/image-20250312220016730.png)



# 三、异常的==作用==

## 1、作用

![image-20250312221528298](%E5%BC%82%E5%B8%B8.assets/image-20250312221528298.png)

## 2、示例

### （1）示例1-查询bug

**Student类**

```java
package com.pyw.a48exceptionDemo;

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
     * @param age
     */
    public void setAge(int age) {
        if(age < 18 || age > 40){
            //System.out.println("年龄超出范围");
            throw new RuntimeException();
        }else{
            this.age = age;
        }
    }

    public String toString() {
        return "Student{name = " + name + ", age = " + age + "}";
    }
}
```

**测试：**

```java
package com.pyw.a48exceptionDemo;

public class ExceptionDemo2 {
    public static void main(String[] args) {
        /*
            异常作用一：异常是用来查询bug的关键参考信息
            异常作用二：异常可以作为方法内部的一种特殊返回值，以便通知调用者底层的执行情况
        */

        Student[] arr = new Student[3];// null null null

        String name = arr[0].getName();
        System.out.println(name);
    }
}
```

**异常信息：**

```java
Exception in thread "main" java.lang.NullPointerException: Cannot invoke "com.pyw.a48exceptionDemo.Student.getName()" because "arr[0]" is null
	at com.pyw.a48exceptionDemo.ExceptionDemo2.main(ExceptionDemo2.java:12)
```



### （2）示例1-查询bug

**Student2类**

```java
package com.pyw.a48exceptionDemo;

public class Student2 {
    private String name;
    private int age;


    public Student2() {
    }

    public Student2(String str) {//"张三,23"
        String[] arr = str.split("-"); //分割元素指定错误
        //arr 0: 张三,23
        this.name = arr[0];
        this.age = Integer.parseInt(arr[1]); //数组越界异常
    }

    public Student2(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String toString() {
        return "Student2{name = " + name + ", age = " + age + "}";
    }
}
```

**测试**

```java
package com.pyw.a48exceptionDemo;

public class ExceptionDemo3 {
    public static void main(String[] args) {
        /*
            异常作用一：异常是用来查询bug的关键参考信息
            异常作用二：异常可以作为方法内部的一种特殊返回值，以便通知调用者底层的执行情况
        */
        Student2 stu = new Student2("张三,23");

        System.out.println(stu);

    }
}
```

**异常信息**

```java
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 1 out of bounds for length 1
	at com.pyw.a48exceptionDemo.Student2.<init>(Student2.java:15)
	at com.pyw.a48exceptionDemo.ExceptionDemo3.main(ExceptionDemo3.java:9)
```



### （3）示例3-==手动抛出异常==

**学生类Student**

```java
package com.pyw.a48exceptionDemo;

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
     * 设置
     * @param age
     */
    public void setAge(int age) {
        if(age < 18 || age > 40){
            //System.out.println("年龄超出范围");
            throw new RuntimeException(); //手动抛出异常
        }else{
            this.age = age;
        }
    }

    public String toString() {
        return "Student{name = " + name + ", age = " + age + "}";
    }
}
```

**测试**

```java
package com.pyw.a48exceptionDemo;

public class ExceptionDemo4 {
    public static void main(String[] args) {
        /*
            异常作用一：异常是用来查询bug的关键参考信息
            异常作用二：异常可以作为方法内部的一种特殊返回值，以便通知调用者底层的执行情况
        */


        //1.创建学生对象
        Student s1 = new Student();
        //年龄：（同学） 18~40岁
        s1.setAge(50);//就知道了50赋值失败
                    //选择1：自己悄悄处理
                    //选择2：打印在控制台上
        
    }
}
```

**异常信息**

```java
Exception in thread "main" java.lang.RuntimeException
	at com.pyw.a48exceptionDemo.Student.setAge(Student.java:47)
	at com.pyw.a48exceptionDemo.ExceptionDemo4.main(ExceptionDemo4.java:14)
```



# 四、异常的处理方式

## 1、JVM默认的处理方式

![image-20250312222622842](%E5%BC%82%E5%B8%B8.assets/image-20250312222622842.png)

```java
package com.pyw.a48exceptionDemo;

public class ExceptionDemo5 {
    public static void main(String[] args) {
        /*
        JVM默认处理异常的方式：
            1. 把异常的名称，异常原因及异常出现的位置等信息输出在了控制台
            2. 程序停止执行，异常下面的代码不会再执行了
        */

        System.out.println("狂踹瘸子那条好腿");
        System.out.println(2/0);//算术异常 ArithmeticException
        System.out.println("是秃子终会发光");
        System.out.println("火鸡味锅巴");
    }
}
```

**异常信息**

```java
狂踹瘸子那条好腿
Exception in thread "main" java.lang.ArithmeticException: / by zero
	at com.pyw.a48exceptionDemo.ExceptionDemo5.main(ExceptionDemo5.java:13)
```



## 2、自己处理(==捕获异常==)-_==try catch==_

### （1）格式

```java
try {
    可能出现异常的代码;
} catch(异常类名 变量名) {
    异常的处理代码;
} finally{
    一定会执行的代码，除非JVM退出
}
好处:可以让程序继续往下执行，不会停止
```

![image-20250312223050220](%E5%BC%82%E5%B8%B8.assets/image-20250312223050220.png)

### （2）示例

```java
package com.pyw.a48exceptionDemo;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class ExceptionDemo6 {
    public static void main(String[] args) throws IOException {
        /*
            //自己处理（捕获异常）
            格式：
                try {
                   可能出现异常的代码;
                } catch(异常类名 变量名) {
                   异常的处理代码;
                } finally{
                    一定会执行的代码，除非JVM退出
                }
             好处:可以让程序继续往下执行，不会停止
         */


        int[] arr = {1, 2, 3, 4, 5, 6};
        try{
            //可能出现异常的代码;
            System.out.println(arr[10]);//此处出现了异常，程序就会在这里创建一个ArrayIndexOutOfBoundsException对象
                                        //new ArrayIndexOutOfBoundsException();
                                        //拿着这个对象到catch的小括号中对比，看括号中的变量是否可以接收这个对象
                                        //如果能被接收，就表示该异常就被捕获（抓住），执行catch里面对应的代码
                                        //当catch里面所有的代码执行完毕，继续执行try...catch体系下面的其他代码
        }catch(ArrayIndexOutOfBoundsException e){
            //如果出现了ArrayIndexOutOfBoundsException异常，我该如何处理
            System.out.println("索引越界了");
        }

        System.out.println("看看我执行了吗？");

        
        FileOutputStream fos = new 			FileOutputStream("src\\com\\pyw\\a50bytestream\\temp\\a.txt");
        try {
            //1.创建对象
            //写出 输出流 OutputStream
            //本地文件 FileOutputStream
            //2.写出数据
            fos.write(97);//输出a
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //一定会执行的代码，除非JVM退出
            //3。释放资源
            fos.close();
        }

    }
}

```



### （3）==_finally和return的执行顺序_==

是的，在 `try` 代码块中如果有 `return` 语句，`finally` 块的代码仍然会执行。

#### ①**执行流程**

当 `try` 代码块中的 `return` 语句执行时，**返回值已经确定，但方法返回前会先执行 `finally` 代码块**，然后再真正返回。

#### ②**示例**

```java
public class FinallyTest {
    public static int test() {
        try {
            System.out.println("try block executed");
            return 10; // 这里 return 10，但不会立即返回
        } catch (Exception e) {
            System.out.println("catch block executed");
        } finally {
            System.out.println("finally block executed");
        }
        return 0; // 实际不会执行到这里
    }

    public static void main(String[] args) {
        System.out.println("Returned value: " + test());
    }
}
```

#### ③**执行结果**

```
try block executed
finally block executed
Returned value: 10
```

#### ④**为什么？**

1. `try` 代码块执行并遇到 `return 10`，此时**方法的返回值已经确定为 10**。
2. 在真正返回前，`finally` 代码块会执行。
3. `finally` 代码块执行完成后，方法才真正返回 `10`。

------

#### ⑥**==特殊情况：`finally` 修改了返回值==**

如果 `finally` 代码块中修改了 `return` 的值，则最终返回的是 `finally` 中的值，而不是 `try` 代码块中的值。例如：

```java
public class FinallyTest {
    public static int test() {
        try {
            System.out.println("try block executed");
            return 10;
        } catch (Exception e) {
            System.out.println("catch block executed");
        } finally {
            System.out.println("finally block executed");
            return 20; // 这里会覆盖 try 中的 return 10
        }
    }

    public static void main(String[] args) {
        System.out.println("Returned value: " + test());
    }
}
```

**执行结果：**

```
try block executed
finally block executed
Returned value: 20
```

**原因：**

- `try` 中 `return 10` 先执行，但 `finally` 里的 `return 20` **覆盖了之前的返回值**，最终返回 `20`。

------

#### ⑦==**总结**==

1. **`finally` 代码块一定会执行**（除非 JVM 退出）。
2. **`try` 代码块的 `return` 语句执行后，`finally` 仍然会执行**，但 `return` 语句的返回值已经确定。
3. **如果 `finally` 代码块中也有 `return`，它会覆盖 `try` 的返回值**，因此**避免在 `finally` 里写 `return` 语句**，否则可能导致意外的结果。



### （4）==灵魂四问==

![image-20250312223822243](%E5%BC%82%E5%B8%B8.assets/image-20250312223822243.png)

![image-20250312224802486](%E5%BC%82%E5%B8%B8.assets/image-20250312224802486.png)

#### ①如果try中没有遇到问题，怎么执行？

**会把try里面所有的代码全部执行完毕，==不会执行catch里面的代码==**
		注意：

- **只有当出现了异常才会执行catch里面的代码**

```java
package com.pyw.a48exceptionDemo;

public class ExceptionDemo7 {
    public static void main(String[] args) {
        /*
            自己处理（捕获异常）灵魂四问：
                灵魂一问：如果try中没有遇到问题，怎么执行？
                            会把try里面所有的代码全部执行完毕，不会执行catch里面的代码
                            注意：
                                只有当出现了异常才会执行catch里面的代码

         */

        int[] arr = {1, 2, 3, 4, 5, 6};

        try {
            System.out.println(arr[0]);//1
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("索引越界了");
        }
        System.out.println("看看我执行了吗？");//看看我执行了吗？
    }
}
```



#### ②如果try中可能会遇到多个问题，怎么执行？

**会写多个catch与之对应**

**细节：**

- 如果我们要捕获多个异常，这些异常中**如果存在父子关系的话**，**==那么父类一定要写在下面==**

**了解性：**

- 在**JDK7之后**，我们可以**在catch中同时捕获多个异常**，**中间用|进行隔开**
- 表示如果出现了A异常或者B异常的话，**采取同一种处理方案**

```java
package com.pyw.a48exceptionDemo;

public class ExceptionDemo8 {
    public static void main(String[] args) {
        /*
            自己处理（捕获异常）灵魂四问：
                灵魂二问：如果try中可能会遇到多个问题，怎么执行？
                        会写多个catch与之对应
                        细节：
                            如果我们要捕获多个异常，这些异常中如果存在父子关系的话，那么父类一定要写在下面

                        了解性：
                            在JDK7之后，我们可以在catch中同时捕获多个异常，中间用|进行隔开
                            表示如果出现了A异常或者B异常的话，采取同一种处理方案

         */

        //JDK7
        int[] arr = {1, 2, 3, 4, 5, 6};

        try{
            System.out.println(arr[10]);//ArrayIndexOutOfBoundsException
            System.out.println(2/0);//ArithmeticException
            String s = null;
            System.out.println(s.equals("abc"));
        }catch(ArrayIndexOutOfBoundsException | ArithmeticException e){ //JDK7以后
            System.out.println("索引越界了");
        }catch(NullPointerException e){
            System.out.println("空指针异常");
        }catch (Exception e){
            System.out.println("Exception");
        }
        System.out.println("看看我执行了吗？");
    }
}
```



#### ③如果try中遇到的问题没有被捕获，怎么执行？

**相当于try...catch的代码白写了，==最终还是会交给虚拟机进行处理。==**

```java
package com.pyw.a48exceptionDemo;

public class ExceptionDemo9 {
    public static void main(String[] args) {
        /*
            自己处理（捕获异常）灵魂三问：
                如果try中遇到的问题没有被捕获，怎么执行？
                相当于try...catch的代码白写了，最终还是会交给虚拟机进行处理。
         */

        int[] arr = {1, 2, 3, 4, 5, 6};

        try{
            System.out.println(arr[10]);//new ArrayIndexOutOfBoundsException();
        }catch(NullPointerException e){
            System.out.println("空指针异常");
        }
        System.out.println("看看我执行了吗？");
    }
}
```



#### ④如果try中遇到了问题，那么try下面的其他代码还会执行吗？

- 下面的代码就不会执行了，**直接跳转到对应的catch当中**，执行catch里面的语句体
-  但是如果**没有对应catch与之匹配**，那么还是会**交给虚拟机进行处理**

```java
package com.pyw.a48exceptionDemo;

public class ExceptionDemo10 {
    public static void main(String[] args) {
        /*
            自己处理（捕获异常）灵魂四问：
                如果try中遇到了问题，那么try下面的其他代码还会执行吗？
                下面的代码就不会执行了，直接跳转到对应的catch当中，执行catch里面的语句体
                但是如果没有对应catch与之匹配，那么还是会交给虚拟机进行处理
         */

        int[] arr = {1, 2, 3, 4, 5, 6};

        try{
            System.out.println(arr[10]);
            System.out.println("看看我执行了吗？... try");
        }catch(ArrayIndexOutOfBoundsException e){
            System.out.println("索引越界了");
        }
        System.out.println("看看我执行了吗？... 其他代码");
    }
}
```



## 3、抛出异常-_==throw和throws==_

![image-20250312225535645](%E5%BC%82%E5%B8%B8.assets/image-20250312225535645.png)

```java
package com.pyw.a48exceptionDemo;

public class ExceptionDemo12 {
    public static void main(String[] args) {
/*
        //抛出异常
        throws：写在方法定义处，表示声明一个异常。告诉调用者，使用本方法可能会有哪些异常。
        throw ：写在方法内，结束方法。手动抛出异常对象，交给调用者。方法中下面的代码不再执行了。


        需求：
            定义一个方法求数组的最大值
*/

        int[] arr = null;
        int max = 0;
        try {
            max = getMax(arr);
        } catch (NullPointerException e) {
            System.out.println("空指针异常");
        } catch (ArrayIndexOutOfBoundsException e){
            System.out.println("索引越界异常");
        }

        System.out.println(max);


    }

    //告诉用户使用此方法会出现哪些异常
    //NullPointerException，下面的代码不会执行了属于运行时异常可以省略不写
    public static int getMax(int[] arr) /*throws NullPointerException,ArrayIndexOutOfBoundsException*/{
        if(arr ==null){
            //手动创建一个异常对象，并把这个异常交给方法的调用者处理
            //此时方法就会结束，下面的代码不会执行了
            throw new NullPointerException();
        }

        if(arr.length ==0){
            //手动创建一个异常对象，并把这个异常交给方法的调用者处理
            //此时方法就会结束，下面的代码不会执行了
            throw new ArrayIndexOutOfBoundsException();
        }
        System.out.println("看看我执行了吗？");
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if(arr[i] > max){
                max = arr[i];
            }
        }
        return max;
    }
}
```



## 4、小结

![image-20250312225933834](%E5%BC%82%E5%B8%B8.assets/image-20250312225933834.png)



# 五、异常的==常见方法==

## 1、Throwable的成员方法

![image-20250312225344957](%E5%BC%82%E5%B8%B8.assets/image-20250312225344957.png)

- public String **getMessage()**          返回此 throwable 的详细消息字符串

- public String **toString()**            返回此可抛出的简短描述

- public void **printStackTrace()**       在底层是利用System.**err**.println进行输出

  - **把异常的错误信息以红色字体输出在控制台**
    - ![image-20250312225313124](%E5%BC%82%E5%B8%B8.assets/image-20250312225313124.png)
  - **细节：==仅仅是打印信息，不会停止程序运行==**

  

## 2、示例代码

```java
package com.pyw.a48exceptionDemo;

public class ExceptionDemo11 {
    public static void main(String[] args) {
        /*
              public String getMessage()          返回此 throwable 的详细消息字符串
              public String toString()            返回此可抛出的简短描述

              public void printStackTrace()       在底层是利用System.err.println进行输出
                                                  把异常的错误信息以红色字体输出在控制台
                                                  细节：仅仅是打印信息，不会停止程序运行
        */


        int[] arr = {1, 2, 3, 4, 5, 6};

        try {
            System.out.println(arr[10]);
        } catch (ArrayIndexOutOfBoundsException e) {
            String message = e.getMessage();
            System.out.println(message);//Index 10 out of bounds for length 6

            String str = e.toString();
            System.out.println(str);//java.lang.ArrayIndexOutOfBoundsException: Index 10 out of bounds for length 6

            e.printStackTrace();

        }
        System.out.println("看看我执行了吗？");


        //正常的输出语句
        //System.out.println(123);

        //错误的输出语句（而是用来打印错误信息）
        //System.err.println(123);
    }
}
```



# 六、综合练习

![image-20250312225958262](%E5%BC%82%E5%B8%B8.assets/image-20250312225958262.png)

**GirlFriend类**

```java
package com.pyw.a48exceptionDemo;

public class GirlFriend {
    private String name;
    private int age;


    public GirlFriend() {
    }

    public GirlFriend(String name, int age) {
        this.name = name;
        this.age = age;
    }

    /**
     * 设置
     *
     * @param name
     */
    public void setName(String name) {
        int length = name.length();
        if (length < 3 || length > 10) {
            throw new RuntimeException(); //手动抛出异常
        }
        this.name = name;
    }

    /**
     * 设置
     *
     * @param age
     */
    public void setAge(int age) {
        if (age < 18 || age > 40) {
            throw new RuntimeException(); //手动抛出异常
        }
        this.age = age;
    }

    public String toString() {
        return "GirlFriend{name = " + name + ", age = " + age + "}";
    }
}
```

**测试**

```java
package com.pyw.a48exceptionDemo;

import java.util.Scanner;

public class ExceptionTest1 {
    public static void main(String[] args) {
        /*
            需求：
                键盘录入自己心仪的女朋友姓名和年龄。
                姓名的长度在 3 - 10之间，
                年龄的范围为 18 - 40岁,
                超出这个范围是异常数据不能赋值，需要重新录入,一直录到正确为止。
            提示：
                需要考虑用户在键盘录入时的所有情况。
                比如：录入年龄时超出范围，录入年龄时录入了abc等情况
        */


        //1.创建键盘录入的对象
        Scanner sc = new Scanner(System.in);
        //2.创建女朋友的对象
        GirlFriend gf = new GirlFriend();
        while (true) {
            try {
                //3.接收女朋友的姓名
                System.out.println("请输入你心仪的女朋友的名字");
                String name = sc.nextLine();
                gf.setName(name);
                //4.接收女朋友的年龄
                System.out.println("请输入你心仪的女朋友的年龄");
                String ageStr = sc.nextLine();
                int age = Integer.parseInt(ageStr);
                gf.setAge(age);
            } catch (NumberFormatException e) {
                System.out.println("输入年龄的格式有误，请输入数字");
            } catch (RuntimeException e){
                System.out.println("输入的姓名长度或年龄范围有误");
            }
            //如果所有的数据都是正确的，那么跳出循环
            break;
        }
        //5.打印
        System.out.println(gf);
    }
}
```



# 七、==自定义异常==

## 1、概念

![image-20250312230723340](%E5%BC%82%E5%B8%B8.assets/image-20250312230723340.png)

## 2、示例代码

**自定义NameFormatException异常**

```java
package com.pyw.a48exceptionDemo.customexception;

public class NameFormatException extends RuntimeException{
    public NameFormatException() {
    }

    public NameFormatException(String message) {
        super(message);
    }
}
```

**自定义AgeOutOfBoundsException异常**

```java
package com.pyw.a48exceptionDemo.customexception;

public class AgeOutOfBoundsException extends RuntimeException{
    public AgeOutOfBoundsException() {
    }

    public AgeOutOfBoundsException(String message) {
        super(message);
    }
}
```

**GirlFriend使用自定义异常**

```java
package com.pyw.a48exceptionDemo.customexception;

public class GirlFriend {
    private String name;
    private int age;


    public GirlFriend() {
    }

    public GirlFriend(String name, int age) {
        this.name = name;
        this.age = age;
    }

    /**
     * 设置
     *
     * @param name
     */
    public void setName(String name) {
        int length = name.length();
        if (length < 3 || length > 10) {
            throw new NameFormatException(name+"格式错误，长度应为3~10");
        }
        this.name = name;
    }

    /**
     * 设置
     *
     * @param age
     */
    public void setAge(int age) {
        if (age < 18 || age > 40) {
            throw new AgeOutOfBoundsException(age+"年龄超出范围，年龄应在18~40岁之间");
        }
        this.age = age;
    }

    public String toString() {
        return "GirlFriend{name = " + name + ", age = " + age + "}";
    }
}
```

**测试**

```java
package com.pyw.a48exceptionDemo.customexception;

import com.pyw.a48exceptionDemo.customexception.GirlFriend;
import java.util.Scanner;

public class ExceptionTest1 {
    public static void main(String[] args) {
        /*
            //TODO 自定义异常
                意义：就是为了让控制台的报错信息更加见名知意
            需求：
                键盘录入自己心仪的女朋友姓名和年龄。
                姓名的长度在 3 - 10之间，
                年龄的范围为 18 - 40岁,
                超出这个范围是异常数据不能赋值，需要重新录入,一直录到正确为止。
            提示：
                需要考虑用户在键盘录入时的所有情况。
                比如：录入年龄时超出范围，录入年龄时录入了abc等情况
        */


        //1.创建键盘录入的对象
        Scanner sc = new Scanner(System.in);
        //2.创建女朋友的对象
        GirlFriend gf = new GirlFriend();
        while (true) {
            try {
                //3.接收女朋友的姓名
                System.out.println("请输入你心仪的女朋友的名字");
                String name = sc.nextLine();
                gf.setName(name);
                //4.接收女朋友的年龄
                System.out.println("请输入你心仪的女朋友的年龄");
                String ageStr = sc.nextLine();
                int age = Integer.parseInt(ageStr);
                gf.setAge(age);
            } catch (NumberFormatException e) {
                System.out.println("输入年龄的格式有误，请输入数字");
            } catch (NameFormatException e){
                e.printStackTrace();
                System.out.println(e.getMessage());
            } catch (AgeOutOfBoundsException e){
                System.out.println(e.getMessage());
            }
            //如果所有的数据都是正确的，那么跳出循环
            break;
        }
        //5.打印
        System.out.println(gf);
    }
}
```

