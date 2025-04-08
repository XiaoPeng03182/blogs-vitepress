# 单元测试

# 一、单元测试概述

## 1、单元测试

![image-20250322154628559](%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95-Local.assets/image-20250322154628559.png)

## 2、==JUnit==单元测试框架

![image-20250322154705630](%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95-Local.assets/image-20250322154705630.png)



## 3、小结

![image-20250322154728105](%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95-Local.assets/image-20250322154728105.png)





# 二、单元测试的快速入门

![image-20250322154932917](%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95-Local.assets/image-20250322154932917.png)



![image-20250322155213525](%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95-Local.assets/image-20250322155213525.png)



```java
    /**
       测试方法
       注意点：
            1、必须是公开的，无参数 无返回值的方法
            2、测试方法必须使用@Test注解标记。
     */
    @Test
    public void testLoginName(){
        UserService userService = new UserService();
        String rs = userService.loginName("admin","123");

        // 进行预期结果的正确性测试：断言。
        //参数一：信息
        //参数二：预测结果
        //参数三：实际结果
        Assert.assertEquals("您的登录业务可能出现问题", "登录成功", rs );
    }
```



# 三、Junit==常用注解==

![image-20250322155308471](%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95-Local.assets/image-20250322155308471.png)

## 1、断言-==assert==

![image-20250322155914821](%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95-Local.assets/image-20250322155914821.png)

![image-20250322155935944](%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95-Local.assets/image-20250322155935944.png)



## 2、测试代码==不能污染源数据==

### 解析

![image-20250322160438657](%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95-Local.assets/image-20250322160438657.png)



**需求：** 测试File类中的delete方法是否书写正确？？？



**利用@Before注解-先备份文件**



![image-20250322160526995](%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95-Local.assets/image-20250322160526995.png)



**@Test进行测试**-执行删除文件的逻辑

![image-20250322160704217](%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95-Local.assets/image-20250322160704217.png)

**@After-还原数据**

![image-20250322160745100](%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95-Local.assets/image-20250322160745100.png)



### 示例代码

```java
public class JunitDemo3 {
    //在实际开发中，真正完整的单元测试该怎么写？
    //前提：
    //以后在工作的时候，测试代码不能污染原数据。（修改，篡改）
    //1.利用Before去对数据做一个初始化的动作
    //2.利用Test真正的去测试方法
    //3.利用After去还原数据
    
    //需求：测试File类中的delete方法是否书写正确？？？
    @Before
    public void beforemethod() throws IOException {
        //先备份
        File src = new File("C:\\Users\\moon\\Desktop\\a.txt");
        File dest = new File("C:\\Users\\moon\\Desktop\\copy.txt");

        FileInputStream fis = new FileInputStream(src);
        FileOutputStream fos = new FileOutputStream(dest);
        int b;
        while((b = fis.read()) != -1){
            fos.write(b);
        }
        fos.close();
        fis.close();
    }

    //作为一个标准的测试人员，运行完单元测试之后，不能污染原数据
    //需要达到下面两个要求：
    //1.得到结果
    //2.a.txt还在而且其他的备份文件消失
    @Test
    public void method(){
        File file = new File("C:\\Users\\moon\\Desktop\\a.txt");
        boolean delete = file.delete();

        //检查a.txt是否存在
        boolean exists = file.exists();

        //只有同时满足了下面所有的断言，才表示delete方法编写正确
        Assert.assertEquals("delete方法出错了",delete,true);
        Assert.assertEquals("delete方法出错了",exists,false);
    }


    @After
    public void aftermethod() throws IOException {
        //还要对a.txt做一个还原
        File src = new File("C:\\Users\\moon\\Desktop\\copy.txt");
        File dest = new File("C:\\Users\\moon\\Desktop\\a.txt");

        FileInputStream fis = new FileInputStream(src);
        FileOutputStream fos = new FileOutputStream(dest);
        int b;
        while((b = fis.read()) != -1){
            fos.write(b);
        }
        fos.close();
        fis.close();

        //备份数据要删除
        src.delete();

    }
}
```

### 作业：

​	测试Properties类中的**store方法**是否书写正确？

**开发心得：**

1.Before  准备数据

2.Test  测试方法

3.After 还原



Before

```java
准备数据
1.创建Properties的对象
2.put数据到集合当中
//只不过在下面的方法中，我们也需要用到Properties的对象，所以写完之后要挪到成员位置
```

Test

```java
调用store方法，保存数据到本地文件

断言1：
	判断当前文件是否存在
断言2：
	文件的大小一定是大于0
断言3：
	再次读取文件中的数据，判断是否跟集合中一致

结论：
	如果所有的断言都通过了，表示store方法是正确的
```

After

```java
把本地文件给删除
```

### 扩展点

在单元测试中，相对路径是相对当前模块而言的。

代码示例：

```java
File file = new File("aweihaoshuai.txt");
file.createNewFile();
//此时是把aweihaoshuai.txt这个文件新建到模块中了。
```





## 3、案例练习

**业务方法**

```java
package com.pyw.a81junit;

/**
   业务方法
 */
public class UserService {
    public String loginName(String loginName , String passWord){
        if("admin".equals(loginName) && "123456".equals(passWord)){
            return "登录成功";
        }else {
            return "用户名或者密码有问题";
        }
    }

    public void selectNames(){
        System.out.println(10/2);
        System.out.println("查询全部用户名称成功~~");
    }
}
```



**测试类**

```java
package com.pyw.a81junit;


import org.junit.*;

/**
   测试类
 */
public class TestUserService {

    // 修饰实例方法的

    //每个测试方法运行之前都执行一次
    @Before
    public void before(){
        System.out.println("===before方法执行一次===");
    }

    //每个测试方法运行之后都执行一次
    @After
    public void after(){
        System.out.println("===after方法执行一次===");
    }

    // 修饰静态方法
    //在执行所有的测试方法之前执行一次
    @BeforeClass
    public static void beforeClass(){
        System.out.println("===beforeClass方法执行一次===");
    }

    //在执行所有的测试方法之后执行一次
    @AfterClass
    public static void afterClass(){
        System.out.println("===afterClass方法执行一次===");
    }


    /**
       测试方法
       注意点：
            1、必须是公开的，无参数 无返回值的方法
            2、测试方法必须使用@Test注解标记。
     */
    @Test
    public void testLoginName(){
        UserService userService = new UserService();
        String rs = userService.loginName("admin","123");

        // 进行预期结果的正确性测试：断言。
        //参数一：信息
        //参数二：预测结果
        //参数三：实际结果
        Assert.assertEquals("您的登录业务可能出现问题", "登录成功", rs );
    }

    @Test
    public void testSelectNames(){
        UserService userService = new UserService();
        userService.selectNames();
    }
}
```



## 4、扩展点-相对路径

![image-20250322161021755](%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95-Local.assets/image-20250322161021755.png)

![image-20250322161038698](%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95-Local.assets/image-20250322161038698.png)

























