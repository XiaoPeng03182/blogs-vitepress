## 一、Mybatis-Learning

### 1、mybatis介绍

![mybatis介绍](MybatisPlus-Learning-Local.assets/mybatis介绍.png)



### 2、lombok-简化Data数据类

![lombok-简化Data数据类](MybatisPlus-Learning-Local.assets/lombok-简化Data数据类.png)



### 3、数据库连接池（Connection）

![数据库连接池](MybatisPlus-Learning-Local.assets/数据库连接池.png)

![数据连接池-常用产品](MybatisPlus-Learning-Local.assets/数据连接池-常用产品.png)



### 4、==mybatis使用基本流程==

![mybatis使用基本流程](MybatisPlus-Learning-Local.assets/mybatis使用基本流程.png)



### 5、预编译SQL与SQL注入

![预编译SQL](MybatisPlus-Learning-Local.assets/预编译SQL.png)

![sql注入](MybatisPlus-Learning-Local.assets/sql注入.png)



### 6、参数占位符

![参数占位符](MybatisPlus-Learning-Local.assets/参数占位符.png)



### 7、Delete删除数据

![image-20240807194119315](MybatisPlus-Learning-Local.assets/image-20240807194119315.png)



### 8、Insert增加数据

![image-20240807194325959](./MybatisPlus-Learning-Local.assets/image-20240807194325959.png)

#### （1）主键返回

```java
//获取返回的主键，keyProperty的值表示返回到的位置，这里返回到Emp对象的id属性中。
@Options(useGeneratedKeys = true, keyProperty = "id")
```

![image-20240807194500921](./MybatisPlus-Learning-Local.assets/image-20240807194500921.png)

### 9、Update更新数据

```java
    //更新员工
    @Update("update emp set username = #{username}, name = #{name}, gender = #{gender}, image = #{image}," +
            " job = #{job}, entrydate = #{entrydate}, dept_id = #{deptId},update_time = #{updateTime} where id = #{id}")
    public void update(Emp emp);
```

![image-20240807195244632](./MybatisPlus-Learning-Local.assets/image-20240807195244632.png)



### 10、Select查询数据

#### (1)==mybatis驼峰命名自动映射开关==

**即从数据库字段名a_column映射到Java属性名aColumn。**

```properties
#开启mybatis的驼峰命名自动映射开关 a_column ------> aCloumn,即从数据库字段名a_column 映射到 Java属性名aColumn。
mybatis.configuration.map-underscore-to-camel-case=true
```

![image-20240807200136858](./MybatisPlus-Learning-Local.assets/image-20240807200136858.png)



![image-20240807200653452](./MybatisPlus-Learning-Local.assets/image-20240807200653452.png)



![image-20240807200716032](./MybatisPlus-Learning-Local.assets/image-20240807200716032.png)

```java
//方案三: 开启mybatis的驼峰命名自动映射开关 
// --- a_cloumn ------> aColumn

    //根据ID查询员工
    @Select("select * from emp where id = #{id}")
    public Emp getById(Integer id);

//方案一: 给字段起别名, 让别名与实体类属性一致
@Select("select id, username, password, name, gender, image, job, entrydate, dept_id deptId, create_time createTime, update_time updateTime from emp where id = #{id}")
	public Emp getById(Integer id);

//方案二: 通过@Results, @Result注解手动映射封装
    @Results({
           @Result(column = "dept_id", property = "deptId"),
           @Result(column = "create_time", property = "createTime"),
           @Result(column = "update_time", property = "updateTime")
    })
    @Select("select * from emp where id = #{id}")
    public Emp getById(Integer id);
```



#### (2)条件查询

![参数占位符](MybatisPlus-Learning-Local.assets/参数占位符.png)

不使用%${name}%,而使用java提供的==**字符拼接函数concat('%',#{name},'%')**==，来避免==SQL注入==的风险。

![image-20240807202007672](./MybatisPlus-Learning-Local.assets/image-20240807202007672.png)

==**版本差异**==

![image-20240807203018017](./MybatisPlus-Learning-Local.assets/image-20240807203018017.png)





### 11、XML映射文件

#### （1）==规范==

![image-20240807203436834](./MybatisPlus-Learning-Local.assets/image-20240807203436834.png)



#### （2）xml格式

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper> namespace="com.itheima.mapper.EmpMapper">
     <sql> id="commonSelect">
        select id, username, password, name, gender, image, job, entrydate, dept_id, create_time, 					update_time
        from emp
    </sql>

   <!-- 动态更新员工-->
    <update> id="update2">
        update emp
        <set>>
            <if> test="username != null">username = #{username},</if>
            <if> test="name != null">name = #{name},</if>
            <if> test="gender != null">gender = #{gender},</if>
            <if> test="image != null">image = #{image},</if>
            <if> test="job != null">job = #{job},</if>
            <if> test="entrydate != null">entrydate = #{entrydate},</if>
            <if> test="deptId != null">dept_id = #{deptId},</if>
            <if> test="updateTime != null">update_time = #{updateTime}</if>
        </set>
        where id = #{id}
    </update>
    
</mapper>
            
```

mybatis-3-mapper.dtd 文件后缀名为dtd, 英文为Document Type Definition，中文翻译为文档类型定义；

mapper表示根节点，mybatis-3-mapper.dtd被定义出来的意义，用来**验证<mapper>>*</mapper>中使用的节点的是不是符合规范用的。**



### 12、==Mybatis-动态SQL==

#### （1）< if > ,< where >,< set >标签

##### ①概述

![image-20240808180654788](./MybatisPlus-Learning-Local.assets/image-20240808180654788.png)

##### ②案例-==动态更新==

![image-20240808175641122](./MybatisPlus-Learning-Local.assets/image-20240808175641122.png)

![image-20240808180537543](./MybatisPlus-Learning-Local.assets/image-20240808180537543.png)

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper> namespace="com.itheima.mapper.EmpMapper">

   <!-- 动态更新员工-->
    <update> id="update2">
        update emp
        <set>>
            <if> test="username != null">username = #{username},</if>
            <if> test="name != null">name = #{name},</if>
            <if> test="gender != null">gender = #{gender},</if>
            <if> test="image != null">image = #{image},</if>
            <if> test="job != null">job = #{job},</if>
            <if> test="entrydate != null">entrydate = #{entrydate},</if>
            <if> test="deptId != null">dept_id = #{deptId},</if>
            <if> test="updateTime != null">update_time = #{updateTime}</if>
        </set>
        where id = #{id}
    </update>

</mapper>
```



#### （2）< foreach >标签-批量操作

![image-20240808181200639](./MybatisPlus-Learning-Local.assets/image-20240808181200639.png)

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper> namespace="com.itheima.mapper.EmpMapper">
    <!--批量删除员工 (18,19,20)-->
    <!--
        collection: 遍历的集合
        item: 遍历出来的元素
        separator: 分隔符
        open: 遍历开始前拼接的SQL片段
        close: 遍历结束后拼接的SQL片段
    -->
    <delete> id="deleteByIds">
        delete  from emp where id in
        <foreach> collection="ids" item="id" separator="," open="(" close=")">
            #{id}
        </foreach>
    </delete>

</mapper>

```



#### （3）< sql >,< include >标签

![image-20240808181947494](./MybatisPlus-Learning-Local.assets/image-20240808181947494.png)

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper> namespace="com.itheima.mapper.EmpMapper">

    <sql> id="commonSelect">
        select id, username, password, name, gender, image, job, entrydate, dept_id, create_time, update_time
        from emp
    </sql>

    <!--resultType: 单条记录封装的类型-->
    <select> id="list" resultType="com.itheima.pojo.Emp">
        <include> refid="commonSelect"/>
        <where>>
            <if> test="name != null">
                name like concat('%', #{name}, '%')
            </if>
            <if> test="gender != null">
                and gender = #{gender}
            </if>
            <if> test="begin != null and end != null">
                and entrydate between #{begin} and #{end}
            </if>
        </where>
        order by update_time desc
    </select>

</mapper>

```





大家在日常开发中应该能发现，单表的CRUD功能代码重复度很高，也没有什么难度。而这部分代码量往往比较大，开发起来比较费时。

因此，目前企业中都会使用一些组件来简化或省略单表的CRUD开发工作。目前在国内使用较多的一个组件就是MybatisPlus.

官方网站如下：

https://www.baomidou.com/

暂时无法在飞书文档外展示此内容

当然，MybatisPlus不仅仅可以简化单表操作，而且还对Mybatis的功能有很多的增强。可以让我们的开发更加的简单，高效。

通过今天的学习，我们要达成下面的目标：

- 能利用MybatisPlus实现基本的CRUD
- 会使用条件构建造器构建查询和更新语句
- 会使用MybatisPlus中的常用注解
- 会使用MybatisPlus处理枚举、JSON类型字段
- 会使用MybatisPlus实现分页



# 



# 二、MybatisPlus-Learning

# **==快速开始==**

### （1）数据库配置

**在`application.yaml`中修改jdbc参数为你自己的数据库参数：**

```YAML
spring:
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/mp?useUnicode=true&characterEncoding=UTF-8&autoReconnect=true&serverTimezone=Asia/Shanghai
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: MySQL123
logging:
  level:
    com.itheima: debug
  pattern:
    dateformat: HH:mm:ss
```



### （2）导入依赖

MybatisPlus提供了starter，实现了**自动Mybatis以及MybatisPlus的自动装配功能**，坐标如下：

```XML
<!--MybatisPlus-->
<dependency>>
    <groupId>com>.baomidou</groupId>
    <artifactId>>mybatis-plus-boot-starter</artifactId>
    <version>3>.5.3.1</version>
</dependency>
```

由于这个starter包含对mybatis的自动装配，因此完全可以替换掉Mybatis的starter。 最终，项目的依赖如下：

```XML
<dependencies>>
    <dependency>>
        <groupId>com>.baomidou</groupId>
        <artifactId>>mybatis-plus-boot-starter</artifactId>
        <version>3>.5.3.1</version>
    </dependency>
    <dependency>>
        <groupId>com>.mysql</groupId>
        <artifactId>>mysql-connector-j</artifactId>
        <scope>>runtime</scope>
    </dependency>
    <dependency>>
        <groupId>org>.projectlombok</groupId>
        <artifactId>>lombok</artifactId>
        <optional>>true</optional>
    </dependency>
    <dependency>>
        <groupId>org>.springframework.boot</groupId>
        <artifactId>>spring-boot-starter-test</artifactId>
        <scope>>test</scope>
    </dependency>
</dependencies>
```



### （3）MybatisPlus配置

MybatisPlus也支持基于yaml文件的自定义配置，详见官方文档：

[配置 | MyBatis-Plus (baomidou.com)](https://www.baomidou.com/getting-started/config/)

大多数的配置都有默认值，因此我们都无需配置。但还有一些是没有默认值的，例如:

- **实体类的别名扫描包**
- **全局id类型==>雪花算法生成**

```yaml
mybatis-plus:
  type-aliases-package: com.itheima.mp.domain.po  #别名扫描包
  mapper-locations: "classpath*:/mapper/**/*.xml" # Mapper.xml文件地址，当前这个是默认值。 其中/**/表示
  configuration:
	map-underscore-to-camel-cas: true #是否开启下划线和驼峰的映射
	cache-enabled: false #是否开启二级缓存
	global-config:
	  db-config:
		id-type: assign_id #id为雪花算法生成
		update-strategy: not_null #更新策略：只更新非空字段
```



```YAML
mybatis-plus:
  type-aliases-package: com.itheima.mp.domain.po
  global-config:
    db-config:
      id-type: auto # 全局id类型为自增长
```

需要注意的是，MyBatisPlus也支持手写SQL的，而mapper文件的读取地址可以自己配置：

```YAML
mybatis-plus:
  mapper-locations: "classpath*:/mapper/**/*.xml" # Mapper.xml文件地址，当前这个是默认值。
```

可以看到默认值是`classpath*:/mapper/**/*.xml`，也就是说我们只要把mapper.xml文件放置这个目录下就一定会被加载。



# **1.快速入门**

为了方便测试，我们先创建一个新的项目，并准备一些基础数据。

## **1.1.环境准备**

复制课前资料提供好的一个项目到你的工作空间（不要包含空格和特殊字符）：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-61.png)

然后用你的IDEA工具打开，项目结构如下：

![img](./MybatisPlus-Learning-Local.assets/1726234069794-1.png)

注意配置一下项目的JDK版本为JDK11。首先点击项目结构设置：

![img](./MybatisPlus-Learning-Local.assets/1726234069794-2.png)

在弹窗中配置JDK：

![img](./MybatisPlus-Learning-Local.assets/1726234069794-3.png)

接下来，要导入两张表，在课前资料中已经提供了SQL文件：

![img](./MybatisPlus-Learning-Local.assets/1726234069794-4.png)

对应的数据库表结构如下：

![img](./MybatisPlus-Learning-Local.assets/1726234069794-5.png)

最后，在`application.yaml`中修改jdbc参数为你自己的数据库参数：

```YAML
spring:
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/mp?useUnicode=true&characterEncoding=UTF-8&autoReconnect=true&serverTimezone=Asia/Shanghai
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: MySQL123
logging:
  level:
    com.itheima: debug
  pattern:
    dateformat: HH:mm:ss
```

## **1.2.快速开始**

比如我们要实现User表的CRUD，只需要下面几步：

- 引入MybatisPlus依赖
- 定义Mapper

### **1.2.1引入==依赖==**

MybatisPlus提供了starter，实现了**自动Mybatis以及MybatisPlus的自动装配功能**，坐标如下：

```XML
<!--MybatisPlus-->
<dependency>>
    <groupId>com>.baomidou</groupId>
    <artifactId>>mybatis-plus-boot-starter</artifactId>
    <version>3>.5.3.1</version>
</dependency>
```

由于这个starter包含对mybatis的自动装配，因此完全可以替换掉Mybatis的starter。 最终，项目的依赖如下：

```XML
<dependencies>>
    <dependency>>
        <groupId>com>.baomidou</groupId>
        <artifactId>>mybatis-plus-boot-starter</artifactId>
        <version>3>.5.3.1</version>
    </dependency>
    <dependency>>
        <groupId>com>.mysql</groupId>
        <artifactId>>mysql-connector-j</artifactId>
        <scope>>runtime</scope>
    </dependency>
    <dependency>>
        <groupId>org>.projectlombok</groupId>
        <artifactId>>lombok</artifactId>
        <optional>>true</optional>
    </dependency>
    <dependency>>
        <groupId>org>.springframework.boot</groupId>
        <artifactId>>spring-boot-starter-test</artifactId>
        <scope>>test</scope>
    </dependency>
</dependencies>
```

### **1.2.2.定义Mapper**

为了简化单表CRUD，MybatisPlus提供了一个**基础的`BaseMapper`接口**，其中已经实现了**单表的CRUD**：

![1726234069794-6](MybatisPlus-Learning-Local.assets/1726234069794-6.png)

因此我们自定义的Mapper只要实现了这个`BaseMapper`，就无需自己实现单表CRUD了。 修改mp-demo中的`com.itheima.mp.mapper`包下的`UserMapper`接口，让其**继承`BaseMapper`**：

![img](./MybatisPlus-Learning-Local.assets/1726234069794-7.png)

代码如下：

```Java
package com.itheima.mp.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.itheima.mp.domain.po.User;

public interface UserMapper extends BaseMapper<User>> {
}
```

### **1.2.3.测试**

新建一个测试类，编写几个单元测试，测试基本的CRUD功能：

```Java
package com.itheima.mp.mapper;

import com.itheima.mp.domain.po.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.List;

@SpringBootTest
class UserMapperTest {

    @Autowired
    private UserMapper userMapper;

    @Test
    void testInsert() {
        User user = new User();
        user.setId(5L);
        user.setUsername("Lucy");
        user.setPassword("123");
        user.setPhone("18688990011");
        user.setBalance(200);
        user.setInfo("{\"age\": 24, \"intro\": \"英文老师\", \"gender\": \"female\"}");
        user.setCreateTime(LocalDateTime.now());
        user.setUpdateTime(LocalDateTime.now());
        userMapper.insert(user);
    }

    @Test
    void testSelectById() {
        User user = userMapper.selectById(5L);
        System.out.println("user = " + user);
    }

    @Test
    void testSelectByIds() {
        List<User>> users = userMapper.selectBatchIds(List.of(1L, 2L, 3L, 4L, 5L));
        users.forEach(System.out::println);
    }

    @Test
    void testUpdateById() {
        User user = new User();
        user.setId(5L);
        user.setBalance(20000);
        userMapper.updateById(user);
    }

    @Test
    void testDelete() {
        userMapper.deleteById(5L);
    }
}
```

可以看到，在运行过程中打印出的SQL日志，非常标准：

```SQL
11:05:01  INFO 15524 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
11:05:02  INFO 15524 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
11:05:02 DEBUG 15524 --- [           main] c.i.mp.mapper.UserMapper.selectById      : ==>  Preparing: SELECT id,username,password,phone,info,status,balance,create_time,update_time FROM user WHERE id=?
11:05:02 DEBUG 15524 --- [           main] c.i.mp.mapper.UserMapper.selectById      : ==> Parameters: 5(Long)
11:05:02 DEBUG 15524 --- [           main] c.i.mp.mapper.UserMapper.selectById      : <==      Total: 1
user = User(id=5, username=Lucy, password=123, phone=18688990011, info={"age": 21}, status=1, balance=20000, createTime=Fri Jun 30 11:02:30 CST 2023, updateTime=Fri Jun 30 11:02:30 CST 2023)
```

只需要继承BaseMapper就能省去所有的单表CRUD，是不是非常简单！

## 1.3.常见注解

在刚刚的入门案例中，我们仅仅引入了依赖，继承了BaseMapper就能使用MybatisPlus，非常简单。但是问题来了： MybatisPlus如何知道我们要查询的是哪张表？表中有哪些字段呢？

大家回忆一下，UserMapper在继承BaseMapper的时候指定了一个泛型：

![img](./MybatisPlus-Learning-Local.assets/1726234069794-8.png)

泛型中的User就是与数据库对应的**PO**.

MybatisPlus就是根据PO实体的信息来推断出表的信息，从而生成SQL的。默认情况下：

- MybatisPlus会把PO实体的**类名驼峰转下划线作为表名**
  - 如UserInfo ==> User_info
- MybatisPlus会把PO实体的**所有变量名驼峰转下划线作为表的字段名**，并根据**变量类型推断字段类型**
  -  如createTime ==> create_time
- MybatisPlus会把**名为id的字段作为主键**

但很多情况下，默认的实现与实际场景不符，因此MybatisPlus提供了一些注解便于我们声明表信息。

### 1.3.1.@TableName

说明：

- 描述：**表名注解，标识实体类对应的数据库的表**
- **使用位置：实体类**

示例：

```Java
@TableName("user")
public class User {
    private Long id;
    private String name;
}
```

TableName注解除了指定表名以外，还可以指定很多其它属性：

| **属性**         | **类型** | **必须指定** | **默认值** | **描述**                                                     |
| ---------------- | -------- | ------------ | ---------- | ------------------------------------------------------------ |
| value            | String   | 否           | ""         | 表名                                                         |
| schema           | String   | 否           | ""         | schema                                                       |
| keepGlobalPrefix | boolean  | 否           | false      | 是否保持使用全局的 tablePrefix 的值（当全局 tablePrefix 生效时） |
| resultMap        | String   | 否           | " "        | xml 中 resultMap 的 id（用于满足特定类型的实体类对象绑定）   |
| autoResultMap    | boolean  | 否           | false      | 是否自动构建 resultMap 并使用（如果设置 resultMap 则不会进行 resultMap 的自动构建与注入） |
| excludeProperty  | String[] | 否           | {}         | 需要排除的属性名 @since 3.3.1                                |



### **1.3.2.@TableId**

说明：

- 描述：主键注解，标识实体类中的主键字段
- 使用位置：实体类的主键字段

示例：

```Java
@TableName("user")
public class User {
    @TableId
    private Long id;
    private String name;
}
```

`TableId`注解支持两个属性：

| **属性** | **类型** | **必须指定** | **默认值**  | **描述**     |
| :------- | :------- | :----------- | :---------- | :----------- |
| value    | String   | 否           | ""          | 表名         |
| type     | Enum     | 否           | IdType.NONE | 指定主键类型 |

`IdType`支持的类型有：

| **值**        | **描述**                                                     |
| :------------ | :----------------------------------------------------------- |
| **AUTO**      | **数据库 自动实现 ID 自增**                                  |
| NONE          | 无状态，该类型为未设置主键类型（注解里等于跟随全局，全局里约等于 INPUT） |
| **INPUT**     | insert 前自行 set 主键值(**自行设置id值**)                   |
| **ASSIGN_ID** | **==主键值默认策略==**：**由MP设置id**：分配 ID(主键类型为 Number(Long 和 Integer)或 String)(since 3.3.0),使用接口IdentifierGenerator的方法nextId(默认实现类为DefaultIdentifierGenerator**==雪花算法==**) ==> Long类型的整数20位 |
| ASSIGN_UUID   | 分配 UUID,主键类型为 String(since 3.3.0),使用接口IdentifierGenerator的方法nextUUID(默认 default 方法) |
| ID_WORKER     | 分布式全局唯一 ID 长整型类型(please use ASSIGN_ID)           |
| UUID          | 32 位 UUID 字符串(please use ASSIGN_UUID)                    |
| ID_WORKER_STR | 分布式全局唯一 ID 字符串类型(please use ASSIGN_ID)           |

这里比较常见的有三种：

- `AUTO`：利用数据库的id自增长
- `INPUT`：手动生成id
- **`ASSIGN_ID`：雪花算法生成`Long`类型的全局唯一id，这是默认的ID策略**



### **1.3.3.@TableField**

说明：

> 描述：普通字段注解

示例1：

```java
@TableField("`username`") //为了防止关键字，指定数据库字段名
private String username;
```

`@TableField` 是 MyBatis Plus 框架中的注解，作用是将 Java 类中的字段 `username` 映射到数据库表中的列 `username`。使用反引号（`` ` ``）是为了**防止数据库中的列名与数据库的保留关键字冲突**。

**具体作用：**

1. **防止关键字冲突**：假如 `username` 是数据库中的保留字（关键字），使用反引号可以确保 SQL 查询语句能够正确执行。
2. **自定义映射**：指定数据库表中实际的列名，确保 Java 对象中的字段可以正确映射到数据库中的相应列。

总之，它的作用是防止数据库关键字冲突，同时明确字段与列的映射关系。



示例2：

```Java
@TableName("user")
public class User {
    @TableId
    private Long id;
    private String name;
    private Integer age;
    @TableField("isMarried")
    private Boolean isMarried;
    @TableField("concat")
    private String concat;
}
```

一般情况下我们并不需要给字段添加`@TableField`注解，一些**特殊情况除外**：

- 成员变量名与数据库字段名不一致

- **成员变量是以`isXXX`命名**，按照`JavaBean`的规范，`MybatisPlus`识别字段时会把`is`去除，这就导致与数据库不符。

- 成员变量名与数据库一致，但是与数据库的关键字冲突。使用`@TableField`注解给字段名添加**转义字符：````**

  

**==使用@TableField的常用场景：==**

- **成员变量名与数据库字段名==不一致==**
- **成员变量名是以==is开头==，且类型是==Boolean==布尔值**
- **成员变量名与数据库==关键字冲突==**
- **成员变量==不是数据库所需==的字段**

![image-20240913220412743](MybatisPlus-Learning-Local.assets/image-20240913220412743.png)

支持的其它属性如下：

| **属性**         | **类型**   | **必填** | **默认值**            | **描述**                                                     |
| ---------------- | ---------- | -------- | --------------------- | ------------------------------------------------------------ |
| value            | String     | 否       | ""                    | 数据库字段名                                                 |
| exist            | boolean    | 否       | true                  | **是否为数据库表字段**                                       |
| condition        | String     | 否       | ""                    | 字段 where 实体查询比较条件，有值设置则按设置的值为准，没有则为默认全局的 %s=#{%s}，[参考(opens new window)](https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/SqlCondition.java) |
| update           | String     | 否       | ""                    | 字段 update set 部分注入，例如：当在version字段上注解update="%s+1" 表示更新时会 set version=version+1 （该属性优先级高于 el 属性） |
| insertStrategy   | Enum       | 否       | FieldStrategy.DEFAULT | 举例：NOT_NULL insert into table_a(<if> test="columnProperty != null">column</if>) values (<if> test="columnProperty != null">#{columnProperty}</if>) |
| updateStrategy   | Enum       | 否       | FieldStrategy.DEFAULT | 举例：IGNORED update table_a set column=#{columnProperty}    |
| whereStrategy    | Enum       | 否       | FieldStrategy.DEFAULT | 举例：NOT_EMPTY where <if> test="columnProperty != null and columnProperty!=''">column=#{columnProperty}</if> |
| fill             | Enum       | 否       | FieldFill.DEFAULT     | 字段自动填充策略                                             |
| select           | boolean    | 否       | true                  | 是否进行 select 查询                                         |
| keepGlobalFormat | boolean    | 否       | false                 | 是否保持使用全局的 format 进行处理                           |
| jdbcType         | JdbcType   | 否       | JdbcType.UNDEFINED    | JDBC 类型 (该默认值不代表会按照该值生效)                     |
| typeHandler      | TypeHander | 否       |                       | 类型处理器 (该默认值不代表会按照该值生效)                    |
| numericScale     | String     | 否       | ""                    | **指定小数点后保留的位数**                                   |



## 1.4.Mybatis的==缓存机制==

在 MyBatis 中，**缓存机制用于存储和重用查询结果**，以提高性能。MyBatis 提供两种级别的缓存：

### 1. **一级缓存（本地缓存）**

   - 一级缓存是默认开启的，它是基于 **SqlSession** 的缓存。也就是说，在同一个 `SqlSession` 中，执行相同的查询时，**如果之前已经查询过，MyBatis 会从缓存中取结果**，而不是再次查询数据库。一旦 `SqlSession` 关闭，一级缓存就会被清除。

### 2. **二级缓存**

   - 二级缓存是基于 **Mapper 映射文件** 级别的缓存，即跨 `SqlSession` 的缓存。它是一个**全局缓存，多个 `SqlSession` 共享**。同一张表的查询结果可以被不同的 `SqlSession` 共享，这样可以减少数据库的访问次数，提高性能。
   - 二级缓存**需要手动开启**，可以**针对某些实体类**或操作来开启或关闭。
   - 你在配置文件中提到的 `cache-enabled: false` 表示你关闭了二级缓存，这意味着每次查询都会直接从数据库中读取数据，而不会从缓存中取结果。

是否使用二级缓存需要根据实际业务场景和数据的变化频率来判断，如果数据经常变动，开启二级缓存可能会导致读取到陈旧的数据，因此需要谨慎使用。



## **1.5.常见==配置==**

MybatisPlus也支持基于yaml文件的自定义配置，详见官方文档：

[配置 | MyBatis-Plus (baomidou.com)](https://www.baomidou.com/getting-started/config/)

大多数的配置都有默认值，因此我们都无需配置。但还有一些是没有默认值的，例如:

- **实体类的别名扫描包**
- **全局id类型==>雪花算法生成**

```yaml
mybatis-plus:
  type-aliases-package: com.itheima.mp.domain.po  #别名扫描包
  mapper-locations: "classpath*:/mapper/**/*.xml" # Mapper.xml文件地址，当前这个是默认值。 其中/**/表示
  configuration:
	map-underscore-to-camel-cas: true #是否开启下划线和驼峰的映射
	cache-enabled: false #是否开启二级缓存
	global-config:
	  db-config:
		id-type: assign_id #id为雪花算法生成
		update-strategy: not_null #更新策略：只更新非空字段
```

**`mapper-locations`**
指定 MyBatis 的映射文件（`Mapper.xml`）的位置，MyBatis 会根据这里的配置找到所有匹配的映射文件。

**`classpath\*:`**
**表示扫描==类路径==下的所有 JAR 文件及项目的根目录**，确保可以扫描到类路径中的文件。

**`/mapper/`**
指定了映射文件的目录为 `mapper`，通常用于组织 `Mapper.xml` 文件的路径。这里的 `/` 是类路径的根路径。

**`\**/`**
表示支持递归扫描子目录。例如，如果有子目录 `mapper/user` 和 `mapper/order`，这些子目录下的 XML 文件也会被扫描到。

**`\*.xml`**
匹配所有以 `.xml` 为后缀的文件，表示只加载 Mapper 文件。



```YAML
mybatis-plus:
  type-aliases-package: com.itheima.mp.domain.po
  global-config:
    db-config:
      id-type: auto # 全局id类型为自增长
```

需要注意的是，MyBatisPlus也支持手写SQL的，而mapper文件的读取地址可以自己配置：

```YAML
mybatis-plus:
  mapper-locations: "classpath*:/mapper/**/*.xml" # Mapper.xml文件地址，当前这个是默认值。
```

可以看到默认值是`classpath*:/mapper/**/*.xml`，也就是说我们只要把mapper.xml文件放置这个目录下就一定会被加载。

例如，我们新建一个`UserMapper.xml`文件：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-9.png)

然后在其中定义一个方法：

```XML
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper> namespace="com.itheima.mp.mapper.UserMapper">

    <select> id="queryById" resultType="User">
        SELECT * FROM user WHERE id = #{id}
    </select>
</mapper>
```

然后在测试类`UserMapperTest`中测试该方法：

```Java
@Test
void testQuery() {
    User user = userMapper.queryById(1L);
    System.out.println("user = " + user);
}
```

# **2.核心功能**

刚才的案例中都是以id为条件的简单CRUD，一些复杂条件的SQL语句就要用到一些更高级的功能了。

### 2.1.条件构造器 

#### Mybatis-Plus eq、ne、gt、lt、ge、le分别代表含义：

- **eq 就是 equal等于**
- **ne就是 not equal不等于**
- **gt 就是 greater than大于**
- **lt 就是 less than小于**
- **ge 就是 greater than or equal 大于等于**
- **le 就是 less than or equal 小于等于**
- **in 就是 in 包含（数组）**
- **isNull 就是 等于null**
- **between 就是 在2个条件之间(包括边界值)**
- **like就是 模糊查询**



除了新增以外，修改、删除、查询的SQL语句都需要指定where条件。因此BaseMapper中提供的相关方法除了以`id`作为`where`条件以外，还支持更加复杂的`where`条件。

![img](./MybatisPlus-Learning-Local.assets/1726234069795-10.png)

参数中的`Wrapper`就是条件构造的抽象类，其下有很多默认实现，继承关系如图：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-11.png)

`Wrapper`的子类`AbstractWrapper`提供了where中包含的所有条件构造方法：

![1726234069795-12](MybatisPlus-Learning-Local.assets/1726234069795-12.png)

而QueryWrapper在AbstractWrapper的基础上拓展了一个**==select方法，允许指定查询字段==**：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-13.png)

而UpdateWrapper在AbstractWrapper的基础上拓展了一个**==set方法，允许指定SQL中的SET部分==**：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-14.png)

接下来，我们就来看看如何利用`Wrapper`实现复杂查询。

### **2.1.1.==QueryWrapper==**

无论是修改、删除、查询，都可以使用QueryWrapper来构建查询条件。接下来看一些例子：

 **查询**：查询出名字中带`o`的，存款大于等于1000元的人。代码如下：

```Java
@Test
void testQueryWrapper() {
    // 1.构建查询条件 where name like "%o%" AND balance >= 1000
    QueryWrapper<User>> wrapper = new QueryWrapper<User>>()
            .select("id", "username", "info", "balance")
            .like("username", "o")
            .ge("balance", 1000);
    // 2.查询数据
    List<User>> users = userMapper.selectList(wrapper);
    users.forEach(System.out::println);
}
```

**更新**：更新用户名为jack的用户的余额为2000，代码如下： 

```Java
@Test
void testUpdateByQueryWrapper() {
    // 1.构建查询条件 where name = "Jack"
    QueryWrapper<User>> wrapper = new QueryWrapper<User>>().eq("username", "Jack");
    // 2.更新数据，user中非null字段都会作为set语句
    User user = new User();
    user.setBalance(2000);
    userMapper.update(user, wrapper);
}
```

### **2.1.2.==UpdateWrapper==**

基于BaseMapper中的update方法更新时只能直接赋值，对于一些复杂的需求就难以实现。

 例如：更新id为`1,2,4`的用户的余额，扣200，对应的SQL应该是：

```Java
UPDATE user SET balance = balance - 200 WHERE id in (1, 2, 4)
```

**SET的赋值结果是==基于字段现有值==的**，这个时候就要利用UpdateWrapper中的setSql功能了：

```Java
@Test
void testUpdateWrapper() {
    List<Long>> ids = List.of(1L, 2L, 4L);
    // 1.生成SQL
    UpdateWrapper<User>> wrapper = new UpdateWrapper<User>>()
            .setSql("balance = balance - 200") // SET balance = balance - 200
            .in("id", ids); // WHERE id in (1, 2, 4)
    
	//2.更新
    userMapper.update(null, wrapper);  // 注意第一个参数可以给null，也就是不填更新字段和数据，
    // 而是基于UpdateWrapper中的setSQL来更新
}
```

### 2.1.3.LambdaQueryWrapper

无论是QueryWrapper还是UpdateWrapper在构造条件的时候**都需要写死字段名称，会出现字符串`魔法值`**。这在编程规范中显然是不推荐的。 那怎么样才能不写字段名，又能知道字段名呢？

其中一种办法是基于==变量的`getter`方法==结合**==反射技术==**。因此我们只要将条件对应的字段的`getter`方法传递给MybatisPlus，它就能计算出对应的变量名了。而**传递方法可以使用==JDK8中的`方法引用`==和`Lambda`表达式。** 因此MybatisPlus又提供了一套基于**Lambda**的Wrapper，包含两个：

- **LambdaQueryWrapper** 
- **LambdaUpdateWrapper**

分别对应QueryWrapper和UpdateWrapper

其使用方式如下：

```Java
@Test
void testLambdaQueryWrapper() {
    // 1.构建条件 WHERE username LIKE "%o%" AND balance >= 1000
    QueryWrapper<User>> wrapper = new QueryWrapper<>();
    wrapper.lambda()
            .select(User::getId, User::getUsername, User::getInfo, User::getBalance)
            .like(User::getUsername, "o")
            .ge(User::getBalance, 1000);
    // 2.查询
    List<User>> users = userMapper.selectList(wrapper);
    users.forEach(System.out::println);
}
```



#### **（1）什么是 Lambda 表达式？**

`Lambda` 表达式是 Java 8 引入的一种新语法，能够简洁地表示匿名函数（即没有名称的方法）。它是对函数式编程的支持，旨在简化代码，特别是对于那些只有一两个功能的简短方法。

##### **Lambda 表达式的语法**

```java
(parameters) -> expression
或
(parameters) -> { statements; }
```

##### **Lambda 的主要特点**

1. **简洁性**：简化了冗长的匿名类定义。

2. **参数化**：可以接受零个或多个参数。

3. 无返回值/有返回值

   ：

   - 单条语句可以省略 `{}` 和 `return`。
   - 多条语句需要使用 `{}`，并明确使用 `return` 返回值。

4. **函数式接口**：`Lambda` 表达式只能用在实现 **函数式接口**（即只有一个抽象方法的接口）。

##### **示例：普通匿名类 VS Lambda**

**使用匿名类：**

```java
Runnable r = new Runnable() {
    @Override
    public void run() {
        System.out.println("Running!");
    }
};
```

**使用 Lambda 表达式：**

```java
Runnable r = () -> System.out.println("Running!");
```

##### **Lambda 的参数和返回值**

**单参数：**

```java
Consumer<String>> consumer = s -> System.out.println(s);
```

**多参数：**

```java
BinaryOperator<Integer>> add = (a, b) -> a + b;
```

**无参数：**

```java
Runnable r = () -> System.out.println("Hello!");
```

------

#### （2）**什么是方法引用？**

方法引用是 `Lambda` 表达式的一种简化写法，它直接引用一个已存在的方法或构造函数，而不重新定义其逻辑。

##### **方法引用的语法**

```java
ClassName::methodName
```

##### **方法引用的四种类型**

1. **静态方法引用**
    格式：`ClassName::staticMethod`
    示例：

   ```java
   Function<Integer,> String> func = String::valueOf;
   System.out.println(func.apply(123)); // 输出 "123"
   ```

2. **实例方法引用**（特定对象的方法）
    格式：`instance::methodName`
    示例：

   ```java
   Consumer<String>> consumer = System.out::println;
   consumer.accept("Hello, World!"); // 输出 "Hello, World!"
   ```

3. **实例方法引用**（任意对象的方法）
    格式：`ClassName::instanceMethod`
    示例：

   ```java
   BiPredicate<String,> String> predicate = String::equals;
   System.out.println(predicate.test("abc", "abc")); // 输出 true
   ```

4. **构造器引用**
    格式：`ClassName::new`
    示例：

   ```java
   Supplier<List<String>>>> listSupplier = ArrayList::new;
   List<String>> list = listSupplier.get();
   ```

------

#### **Lambda 和方法引用的对比**

| 特性       | Lambda 表达式          | 方法引用                 |
| ---------- | ---------------------- | ------------------------ |
| **定义**   | 用 `->` 表达方法的逻辑 | 直接引用已有方法或构造器 |
| **可读性** | 适合定义自定义逻辑     | 简化已有方法调用         |
| **示例**   | `(x, y) -> x + y`      | `Integer::sum`           |

**例子：Lambda 转换为方法引用**

```java
// 使用 Lambda 表达式
Consumer<String>> consumer1 = s -> System.out.println(s);

// 使用方法引用
Consumer<String>> consumer2 = System.out::println;
```

------

#### **总结**

- **Lambda 表达式**：主要用于简化匿名类的代码定义。

- **方法引用**：是 Lambda 的进一步简化，用于直接调用现有的方法或构造器，适用于逻辑已有实现时。

  

分别对应QueryWrapper和UpdateWrapper

其使用方式如下：

```Java
@Test
void testLambdaQueryWrapper() {
    // 1.构建条件 WHERE username LIKE "%o%" AND balance >= 1000
    QueryWrapper<User>> wrapper = new QueryWrapper<>();
    wrapper.lambda()
            .select(User::getId, User::getUsername, User::getInfo, User::getBalance)
            .like(User::getUsername, "o")
            .ge(User::getBalance, 1000);
    // 2.查询
    List<User>> users = userMapper.selectList(wrapper);
    users.forEach(System.out::println);
}
```

## **2.2.==自定义SQL==**

在演示UpdateWrapper的案例中，我们在代码中编写了更新的SQL语句：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-15.png)

![image-20240915163704509](MybatisPlus-Learning-Local.assets/image-20240915163704509.png)

这种写法在某些企业也是不允许的，**因为==SQL语句最好都维护在持久层，而不是业务层==**。就当前案例来说，由于条件是in语句，只能将SQL写在Mapper.xml文件，利用foreach来生成动态SQL。 这实在是太麻烦了。假如**查询条件更复杂，动态SQL的编写也会更加复杂**。

所以，MybatisPlus提供了**自定义SQL功能**，可以让我们**==利用Wrapper生成查询条件，再结合Mapper.xml编写SQL==**

### **2.2.1.基本用法**

![image-20240915163900886](MybatisPlus-Learning-Local.assets/image-20240915163900886.png)

以当前案例来说，我们可以这样写：

```Java
@Test
void testCustomWrapper() {
    // 1.准备自定义查询条件
    List<Long>> ids = List.of(1L, 2L, 4L);
    QueryWrapper<User>> wrapper = new QueryWrapper<User>>().in("id", ids);

    // 2.调用mapper的自定义方法，直接传递Wrapper
    userMapper.deductBalanceByIds(200, wrapper);
}
```

然后在UserMapper中自定义SQL：

```Java
package com.itheima.mp.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.itheima.mp.domain.po.User;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.annotations.Param;

public interface UserMapper extends BaseMapper<User>> {
    @Select("UPDATE user SET balance = balance - #{money} ${ew.customSqlSegment}")
    void deductBalanceByIds(@Param("money") int money, @Param("ew") QueryWrapper<User>> wrapper);
}
```

这样就省去了编写复杂查询条件的烦恼了。

### **2.2.2.多表关联**

理论上来讲MyBatisPlus是不支持多表查询的，不过我们可以**利用Wrapper中自定义条件结合自定义SQL来实现多表查询的效果**。 例如，我们要查询出所有收货地址在北京的并且用户id在1、2、4之中的用户 要是自己基于mybatis实现SQL，大概是这样的：

```XML
<select> id="queryUserByIdAndAddr" resultType="com.itheima.mp.domain.po.User">
      SELECT *
      FROM user u
      INNER JOIN address a ON u.id = a.user_id
      WHERE u.id
      <foreach> collection="ids" separator="," item="id" open="IN (" close=")">
          #{id}
      </foreach>
      AND a.city = #{city}
  </select>
```

可以看出其中最复杂的就是WHERE条件的编写，如果业务复杂一些，这里的SQL会更变态。

但是基于自定义SQL结合Wrapper的玩法，我们就可以**==利用Wrapper来构建查询条件，然后手写SELECT及FROM部分==**，**实现多表查询**。

查询条件这样来构建：

```Java
@Test
void testCustomJoinWrapper() {
    // 1.准备自定义查询条件
    QueryWrapper<User>> wrapper = new QueryWrapper<User>>()
            .in("u.id", List.of(1L, 2L, 4L))
            .eq("a.city", "北京");

    // 2.调用mapper的自定义方法
    List<User>> users = userMapper.queryUserByWrapper(wrapper);

    users.forEach(System.out::println);
}
```

然后在UserMapper中自定义方法：

```Java
@Select("SELECT u.* FROM user u INNER JOIN address a ON u.id = a.user_id ${ew.customSqlSegment}")
List<User>> queryUserByWrapper(@Param("ew")QueryWrapper<User>> wrapper);
```

当然，也可以在`UserMapper.xml`中写SQL：

```XML
<select> id="queryUserByIdAndAddr" resultType="com.itheima.mp.domain.po.User">
    SELECT * FROM user u INNER JOIN address a ON u.id = a.user_id ${ew.customSqlSegment}
</select>
```



## 2.3.==Service接口==

MybatisPlus不仅提供了BaseMapper，还提供了**通用的Service接口及默认实现**，封装了一些常用的service模板方法。 **通用接口为`IService`，默认实现为`ServiceImpl`**，其中封装的方法可以分为以下几类：

- `save`：新增
- `remove`：删除
- `update`：更新
- `get`：查询单个结果
- `list`：查询集合结果
- `count`：计数
- `page`：分页查询

### 2.3.1.CRUD

我们先俩看下基本的CRUD接口。 **新增**：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-16.png)

- `save`是新增单个元素
- `saveBatch`是批量新增
- `saveOrUpdate`是**根据==id判断==**，**==如果数据存在就更新，不存在则新增==**
- `saveOrUpdateBatch`是**批量的新增或修改**

**删除：**

![img](./MybatisPlus-Learning-Local.assets/1726234069795-17.png)

- `removeById`：根据id删除
- `removeByIds`：根据id批量删除
- `removeByMap`：根据Map中的键值对为条件删除
- `remove(Wrapper<T>>)`：根据Wrapper条件删除
- `~~removeBatchByIds~~`：暂不支持

**修改：**

![img](./MybatisPlus-Learning-Local.assets/1726234069795-18.png)

- `updateById`：根据id修改
- `update(Wrapper<T>>)`：**根据`UpdateWrapper`修改，`Wrapper`中包含`set`和`where`部分**
- `update(T，Wrapper<T>>)`：按照`T`内的数据修改与`Wrapper`匹配到的数据
- `updateBatchById`：**根据id批量修改**

**Get：**

![img](./MybatisPlus-Learning-Local.assets/1726234069795-19.png)

- `getById`：根据id查询**1条数据**
- `getOne(Wrapper<T>>)`：根据`Wrapper`查询1条数据
- `getBaseMapper`：获取`Service`内的`BaseMapper`实现，**==某些时候需要直接调用`Mapper`内的自定义`SQL`时可以用这个方法获取到`Mapper`==**

**List：**

![img](./MybatisPlus-Learning-Local.assets/1726234069795-20.png)

- `listByIds`：根据id批量查询
- `list(Wrapper<T>>)`：**根据Wrapper条件查询多条数据**
- `list()`：查询所有

**Count**：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-21.png)

- `count()`：**统计所有数量**
- `count(Wrapper<T>>)`：统计符合`Wrapper`条件的数据数量

**getBaseMapper**： 当我们**在service中要==调用Mapper中自定义SQL==时，就必须获取service对应的Mapper**，就可以通过这个方法：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-22.png)

### **2.3.2.基本用法**

由于**`Service`中经常==需要定义与业务有关的自定义方法==，因此我们==不能直接使用==`IService`，而是自定义`Service`接口，然后==继承`IService`以拓展方法==。同时，让自定义的`Service实现类`继承`ServiceImpl`**，这样就不用自己实现`IService`中的接口了。

![image-20240915170051495](./MybatisPlus-Learning-Local.assets/image-20240915170051495.png)

![image-20240915170613251](MybatisPlus-Learning-Local.assets/image-20240915170613251.png)

首先，定义`IUserService`，继承`IService`：

```Java
package com.itheima.mp.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itheima.mp.domain.po.User;

public interface IUserService extends IService<User>> {
    // 拓展自定义方法
}
```

然后，编写`UserServiceImpl`类，**==继承==`ServiceImpl`，==实现==`IUserService`**：

```Java
package com.itheima.mp.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itheima.mp.domain.po.User;
import com.itheima.mp.domain.po.service.IUserService;
import com.itheima.mp.mapper.UserMapper;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper,> User>
                                                                                                        implements IUserService {
}
```

项目结构如下：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-23.png)

接下来，我们快速实现下面4个接口：

| **编号** | **接口**       | **请求方式** | **请求路径** | **请求参数** | **返回值** |
| :------- | :------------- | :----------- | :----------- | :----------- | :--------- |
| 1        | 新增用户       | POST         | /users       | 用户表单实体 | 无         |
| 2        | 删除用户       | DELETE       | /users/{id}  | 用户id       | 无         |
| 3        | 根据id查询用户 | GET          | /users/{id}  | 用户id       | 用户VO     |
| 4        | 根据id批量查询 | GET          | /users       | 用户id集合   | 用户VO集合 |

首先，我们在项目中引入几个依赖：

```XML
<!--swagger-->
<dependency>>
    <groupId>com>.github.xiaoymin</groupId>
    <artifactId>>knife4j-openapi2-spring-boot-starter</artifactId>
    <version>4>.1.0</version>
</dependency>
<!--web-->
<dependency>>
    <groupId>org>.springframework.boot</groupId>
    <artifactId>>spring-boot-starter-web</artifactId>
</dependency>

<!--Hutool 工具 对象拷贝-->
<dependency>>
    <groupId>cn>.hutool</groupId>
    <artifactId>>hutool-all</artifactId>
    <version>5>.8.11</version>
</dependency>
```

然后需要配置swagger信息： 

```YAML
knife4j:
  enable: true
  openapi:
    title: 用户管理接口文档
    description: "用户管理接口文档"
    email: zhanghuyi@itcast.cn
    concat: 虎哥
    url: https://www.itcast.cn
    version: v1.0.0
    group:
      default:
        group-name: default
        api-rule: package
        api-rule-resources:
          - com.itheima.mp.controller
```

然后，接口需要两个实体：

- UserFormDTO：代表新增时的用户表单
- UserVO：代表查询的返回结果

首先是UserFormDTO：

```Java
package com.itheima.mp.domain.dto;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.extension.handlers.JacksonTypeHandler;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(description = "用户表单实体")
public class UserFormDTO {

    @ApiModelProperty("id")
    private Long id;

    @ApiModelProperty("用户名")
    private String username;

    @ApiModelProperty("密码")
    private String password;

    @ApiModelProperty("注册手机号")
    private String phone;

    @ApiModelProperty("详细信息，JSON风格")
    private String info;

    @ApiModelProperty("账户余额")
    private Integer balance;
}
```

然后是UserVO：

```Java
package com.itheima.mp.domain.vo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(description = "用户VO实体")
public class UserVO {
    
    @ApiModelProperty("用户id")
    private Long id;
    
    @ApiModelProperty("用户名")
    private String username;
    
    @ApiModelProperty("详细信息")
    private String info;

    @ApiModelProperty("使用状态（1正常 2冻结）")
    private Integer status;
    
    @ApiModelProperty("账户余额")
    private Integer balance;
}
```

最后，按照Restful风格编写Controller接口方法：

```Java
package com.itheima.mp.controller;

import cn.hutool.core.bean.BeanUtil;
import com.itheima.mp.domain.dto.UserFormDTO;
import com.itheima.mp.domain.po.User;
import com.itheima.mp.domain.vo.UserVO;
import com.itheima.mp.service.IUserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "用户管理接口")
@RequiredArgsConstructor
@RestController
@RequestMapping("users")
public class UserController {

    private final IUserService userService;

    @PostMapping
    @ApiOperation("新增用户")
    public void saveUser(@RequestBody UserFormDTO userFormDTO){
        // 1.转换DTO为PO
        User user = BeanUtil.copyProperties(userFormDTO, User.class);
        // 2.新增
        userService.save(user);
    }

    @DeleteMapping("/{id}")
    @ApiOperation("删除用户")
    public void removeUserById(@PathVariable("id") Long userId){
        userService.removeById(userId);
    }

    @GetMapping("/{id}")
    @ApiOperation("根据id查询用户")
    public UserVO queryUserById(@PathVariable("id") Long userId){
        // 1.查询用户
        User user = userService.getById(userId);
        // 2.处理vo
        return BeanUtil.copyProperties(user, UserVO.class);
    }

    @GetMapping
    @ApiOperation("根据id集合查询用户")
    public List<UserVO>> queryUserByIds(@RequestParam("ids") List<Long>> ids){
        // 1.查询用户
        List<User>> users = userService.listByIds(ids);
        // 2.处理vo
        return BeanUtil.copyToList(users, UserVO.class);
    }
}
```

可以看到上述接口都直接在controller即可实现，无需编写任何service代码，非常方便。

不过，一些带有**业务逻辑**的接口则需要在service中自定义实现了。例如下面的需求：

- 根据id扣减用户余额

这看起来是个简单修改功能，只要修改用户余额即可。但这个业务包含一些业务逻辑处理：

- 判断用户状态是否正常
- 判断用户余额是否充足

**这些业务逻辑都要在service层来做，另外更新余额需要自定义SQL，要在mapper中来实现。**因此，我们除了要编写controller以外，具体的业务还要在service和mapper中编写。

首先在UserController中定义一个方法：

```Java
@PutMapping("{id}/deduction/{money}")
@ApiOperation("扣减用户余额")
public void deductBalance(@PathVariable("id") Long id, @PathVariable("money")Integer money){
    userService.deductBalance(id, money);
}
```

然后是UserService接口：

```Java
package com.itheima.mp.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itheima.mp.domain.po.User;

public interface IUserService extends IService<User>> {
    void deductBalance(Long id, Integer money);
}
```

最后是UserServiceImpl实现类：

```Java
package com.itheima.mp.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itheima.mp.domain.po.User;
import com.itheima.mp.mapper.UserMapper;
import com.itheima.mp.service.IUserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper,> User> implements IUserService {
    @Override
    public void deductBalance(Long id, Integer money) {
        // 1.查询用户
        User user = getById(id);
        // 2.判断用户状态
        if (user == null || user.getStatus() == 2) {
            throw new RuntimeException("用户状态异常");
        }
        // 3.判断用户余额
        if (user.getBalance() < money) {
            throw new RuntimeException("用户余额不足");
        }
        // 4.扣减余额
        baseMapper.deductMoneyById(id, money);
    }
}
```

最后是mapper：

```Java
@Update("UPDATE user SET balance = balance - #{money} WHERE id = #{id}")
void deductMoneyById(@Param("id") Long id, @Param("money") Integer money);
```

### 2.3.3.Lambda

IService中还提供了Lambda功能来简化我们的复杂查询及更新功能。我们通过两个案例来学习一下。

案例一：实现一个根据复杂条件查询用户的接口，查询条件如下：

- name：用户名关键字，可以为空
- status：用户状态，可以为空
- minBalance：最小余额，可以为空
- maxBalance：最大余额，可以为空

可以理解成一个用户的后台管理界面，管理员可以自己选择条件来筛选用户，因此上述条件不一定存在，需要做判断。

我们首先需要定义一个查询条件实体，UserQuery实体：

```Java
package com.itheima.mp.domain.query;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(description = "用户查询条件实体")
public class UserQuery {
    @ApiModelProperty("用户名关键字")
    private String name;
    @ApiModelProperty("用户状态：1-正常，2-冻结")
    private Integer status;
    @ApiModelProperty("余额最小值")
    private Integer minBalance;
    @ApiModelProperty("余额最大值")
    private Integer maxBalance;
}
```

接下来我们在UserController中定义一个controller方法：

```Java
@GetMapping("/list")
@ApiOperation("根据id集合查询用户")
public List<UserVO>> queryUsers(UserQuery query){
    // 1.组织条件
    String username = query.getName();
    Integer status = query.getStatus();
    Integer minBalance = query.getMinBalance();
    Integer maxBalance = query.getMaxBalance();
    LambdaQueryWrapper<User>> wrapper = new QueryWrapper<User>>().lambda()
            .like(username != null, User::getUsername, username)
            .eq(status != null, User::getStatus, status)
            .ge(minBalance != null, User::getBalance, minBalance)
            .le(maxBalance != null, User::getBalance, maxBalance);
    // 2.查询用户
    List<User>> users = userService.list(wrapper);
    // 3.处理vo
    return BeanUtil.copyToList(users, UserVO.class);
}
```

在组织查询条件的时候，我们加入了 `username != null` 这样的参数，意思就是当条件成立时才会添加这个查询条件，类似Mybatis的mapper.xml文件中的`<if>>`标签。这样就实现了动态查询条件效果了。

不过，上述条件构建的代码太麻烦了。 因此Service中对`LambdaQueryWrapper`和`LambdaUpdateWrapper`的用法进一步做了简化。我们**无需自己通过`new`的方式来创建`Wrapper`，而是直接调用`lambdaQuery`和`lambdaUpdate`方法**：

基于Lambda查询：

```Java
@GetMapping("/list")
@ApiOperation("根据条件查询用户")
public List<UserVO>> queryUsers(UserQuery query){
    // 1.组织条件
    String username = query.getName();
    Integer status = query.getStatus();
    Integer minBalance = query.getMinBalance();
    Integer maxBalance = query.getMaxBalance();
    // 2.查询用户
    List<User>> users = userService.lambdaQuery()
            .like(username != null, User::getUsername, username)
            .eq(status != null, User::getStatus, status)
            .ge(minBalance != null, User::getBalance, minBalance)
            .le(maxBalance != null, User::getBalance, maxBalance)
            .list();
    // 3.处理vo
    return BeanUtil.copyToList(users, UserVO.class);
}
```

可以发现lambdaQuery方法中除了可以构建条件，还需要在链式编程的最后添加一个`list()`，这是在告诉MP我们的调用结果需要是一个list集合。这里不仅可以用`list()`，可选的方法有：

- **`.one()`：最多1个结果**
- **`.list()`：返回集合结果**
- **`.count()`：返回计数结果**

MybatisPlus会根据链式编程的**最后一个方法来判断最终的返回结果。**

与lambdaQuery方法类似，IService中的==lambdaUpdate==方法可以非常方便的实现**复杂更新业务**。

例如下面的需求：

> 需求：改造根据id修改用户余额的接口，要求如下
>
> - 如果扣减后余额为0，则将用户status修改为冻结状态（2）

也就是说我们在扣减用户余额时，需要对用户剩余余额做出判断，如果发现剩余余额为0，则应该将status修改为2，这就是说**==update语句的set部分是动态的==。**

实现如下：

```Java
@Override
@Transactional
public void deductBalance(Long id, Integer money) {
    // 1.查询用户
    User user = getById(id);
    // 2.校验用户状态
    if (user == null || user.getStatus() == 2) {
        throw new RuntimeException("用户状态异常！");
    }
    // 3.校验余额是否充足
    if (user.getBalance() < money) {
        throw new RuntimeException("用户余额不足！");
    }
    // 4.扣减余额 update tb_user set balance = balance - ?
    int remainBalance = user.getBalance() - money;
    lambdaUpdate()
            .set(User::getBalance, remainBalance) // 更新余额
            .set(remainBalance == 0, User::getStatus, 2) // 动态判断，是否更新status
            .eq(User::getId, id)
            .eq(User::getBalance, user.getBalance()) // 乐观锁
            .update();
}
```

### 2.3.4.批处理-批量新增

![image-20240922163219919](./MybatisPlus-Learning-Local.assets/image-20240922163219919.png)

IService中的批量新增功能使用起来非常方便，但有一点注意事项，我们先来测试一下。 首先我们测试**逐条插入数据**：

```Java
@Test
void testSaveOneByOne() {
    long b = System.currentTimeMillis();
    for (int i = 1; i <= 100000; i++) {
        userService.save(buildUser(i));
    }
    long e = System.currentTimeMillis();
    System.out.println("耗时：" + (e - b));
}

private User buildUser(int i) {
    User user = new User();
    user.setUsername("user_" + i);
    user.setPassword("123");
    user.setPhone("" + (18688190000L + i));
    user.setBalance(2000);
    user.setInfo("{\"age\": 24, \"intro\": \"英文老师\", \"gender\": \"female\"}");
    user.setCreateTime(LocalDateTime.now());
    user.setUpdateTime(user.getCreateTime());
    return user;
}
```

执行结果如下：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-24.png)

可以看到速度非常慢。

然后再试试MybatisPlus的批处理：

```Java
@Test
void testSaveBatch() {
    // 准备10万条数据
    List<User>> list = new ArrayList<>(1000);
    long b = System.currentTimeMillis();
    for (int i = 1; i <= 100000; i++) {
        list.add(buildUser(i));
        // 每1000条批量插入一次
        if (i % 1000 == 0) {
            userService.saveBatch(list);
            list.clear();
        }
    }
    long e = System.currentTimeMillis();
    System.out.println("耗时：" + (e - b));
}
```

执行最终耗时如下：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-25.png)

可以看到使用了批处理以后，比逐条新增效率提高了10倍左右，性能还是不错的。

不过，我们简单查看一下`MybatisPlus`源码：

```Java
@Transactional(rollbackFor = Exception.class)
@Override
public boolean saveBatch(Collection<T>> entityList, int batchSize) {
    String sqlStatement = getSqlStatement(SqlMethod.INSERT_ONE);
    return executeBatch(entityList, batchSize, (sqlSession, entity) -> sqlSession.insert(sqlStatement, entity));
}
// ...SqlHelper
public static <E>> boolean executeBatch(Class<?> entityClass, Log log, Collection<E>> list, int batchSize, BiConsumer<SqlSession,> E> consumer) {
    Assert.isFalse(batchSize < 1, "batchSize must not be less than one");
    return !CollectionUtils.isEmpty(list) && executeBatch(entityClass, log, sqlSession -> {
        int size = list.size();
        int idxLimit = Math.min(batchSize, size);
        int i = 1;
        for (E element : list) {
            consumer.accept(sqlSession, element);
            if (i == idxLimit) {
                sqlSession.flushStatements();
                idxLimit = Math.min(idxLimit + batchSize, size);
            }
            i++;
        }
    });
}
```

可以发现其实`MybatisPlus`的**批处理**是基于JDBC**`PrepareStatement`的预编译模式**，然后批量提交，最终在数据库执行时**还是会有多条insert语句**，**==逐条插入数据==**。SQL类似这样：

```SQL
Preparing: INSERT INTO user ( username, password, phone, info, balance, create_time, update_time ) VALUES ( ?, ?, ?, ?, ?, ?, ? )
Parameters: user_1, 123, 18688190001, "", 2000, 2023-07-01, 2023-07-01
Parameters: user_2, 123, 18688190002, "", 2000, 2023-07-01, 2023-07-01
Parameters: user_3, 123, 18688190003, "", 2000, 2023-07-01, 2023-07-01
```

而如果想要得到最佳性能，最好是将多条SQL合并为一条，像这样：

```SQL
INSERT INTO user ( username, password, phone, info, balance, create_time, update_time )
VALUES 
(user_1, 123, 18688190001, "", 2000, 2023-07-01, 2023-07-01),
(user_2, 123, 18688190002, "", 2000, 2023-07-01, 2023-07-01),
(user_3, 123, 18688190003, "", 2000, 2023-07-01, 2023-07-01),
(user_4, 123, 18688190004, "", 2000, 2023-07-01, 2023-07-01);
```

该怎么做呢？

MySQL的客户端连接参数中有这样的一个参数：`rewriteBatchedStatements`。顾名思义，就是重写批处理的`statement`语句。参考文档：

https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-connp-props-performance-extensions.html#cj-conn-prop_rewriteBatchedStatements

这个参数的默认值是false，我们需要**修改连接参数**，将其配置为true

修改项目中的application.yml文件，在**==jdbc的url后面添加参数==**`&rewriteBatchedStatements=true`:

```YAML
spring:
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/mp?useUnicode=true&characterEncoding=UTF-8&autoReconnect=true&serverTimezone=Asia/Shanghai&rewriteBatchedStatements=true
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: MySQL123
```

再次测试插入10万条数据，可以发现速度有非常明显的提升：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-26.png)

在`ClientPreparedStatement`的`executeBatchInternal`中，有判断`rewriteBatchedStatements`值是否为true并重写SQL的功能：

最终，SQL被重写了：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-27.png)

# **3.扩展功能**

## **3.1.代码生成**

在使用MybatisPlus以后，基础的`Mapper`、`Service`、`PO`代码相对固定，重复编写也比较麻烦。因此MybatisPlus官方提供了代码生成器根据数据库表结构生成`PO`、`Mapper`、`Service`等相关代码。只不过代码生成器同样要编码使用，也很麻烦。

这里推荐大家使用一款`MybatisPlus`的插件，它可以基于图形化界面完成`MybatisPlus`的代码生成，非常简单。

![image-20241124164328392](./MybatisPlus-Learning-Local.assets/image-20241124164328392.png)

### **3.1.1.安装插件**

在`Idea`的plugins市场中搜索并安装`MyBatisPlus`插件：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-28.png)

然后重启你的Idea即可使用。

### **3.1.2.使用**

刚好数据库中还有一张address表尚未生成对应的实体和mapper等基础代码。我们利用插件生成一下。 首先需要配置数据库地址，在Idea顶部菜单中，找到`other`，选择`Config Database`：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-29.png)

在弹出的窗口中填写数据库连接的基本信息：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-30.png)

点击OK保存。

然后再次点击Idea顶部菜单中的other，然后选择`Code Generator`:

![img](./MybatisPlus-Learning-Local.assets/1726234069795-31.png)

在弹出的表单中填写信息：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-32.png)

最终，代码自动生成到指定的位置了：

## **3.2.静态工具**

有的时候**Service之间也会相互调用**，**为了==避免出现循环依赖==问题，MybatisPlus提供一个==静态工具类==：`Db`**，其中的一些静态方法与`IService`中方法签名基本一致，也可以帮助我们实现CRUD功能：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-33.png)

示例：

```Java
@Test
void testDbGet() {
    User user = Db.getById(1L, User.class);
    System.out.println(user);
}

@Test
void testDbList() {
    // 利用Db实现复杂条件查询
    List<User>> list = Db.lambdaQuery(User.class)
            .like(User::getUsername, "o")
            .ge(User::getBalance, 1000)
            .list();
    list.forEach(System.out::println);
}

@Test
void testDbUpdate() {
    Db.lambdaUpdate(User.class)
            .set(User::getBalance, 2000)
            .eq(User::getUsername, "Rose");
}
```

需求：改造根据id用户查询的接口，查询用户的同时返回用户收货地址列表

首先，我们要添加一个收货地址的VO对象：

```Java
package com.itheima.mp.domain.vo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(description = "收货地址VO")
public class AddressVO{

    @ApiModelProperty("id")
    private Long id;

    @ApiModelProperty("用户ID")
    private Long userId;

    @ApiModelProperty("省")
    private String province;

    @ApiModelProperty("市")
    private String city;

    @ApiModelProperty("县/区")
    private String town;

    @ApiModelProperty("手机")
    private String mobile;

    @ApiModelProperty("详细地址")
    private String street;

    @ApiModelProperty("联系人")
    private String contact;

    @ApiModelProperty("是否是默认 1默认 0否")
    private Boolean isDefault;

    @ApiModelProperty("备注")
    private String notes;
}
```

然后，改造原来的UserVO，添加一个地址属性：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-34.png)

接下来，修改UserController中根据id查询用户的业务接口：

```Java
@GetMapping("/{id}")
@ApiOperation("根据id查询用户")
public UserVO queryUserById(@PathVariable("id") Long userId){
    // 基于自定义service方法查询
    return userService.queryUserAndAddressById(userId);
}
```

由于查询业务复杂，所以要在service层来实现。首先在IUserService中定义方法：

```Java
package com.itheima.mp.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itheima.mp.domain.po.User;
import com.itheima.mp.domain.vo.UserVO;

public interface IUserService extends IService<User>> {
    void deduct(Long id, Integer money);

    UserVO queryUserAndAddressById(Long userId);
}
```

然后，在UserServiceImpl中实现该方法：

```Java
@Override
public UserVO queryUserAndAddressById(Long userId) {
    // 1.查询用户
    User user = getById(userId);
    if (user == null || user.getStatus() == UserStatus.FROZEN) {
        throw new RuntimeException("用户状态异常！");
    }
    // 2.查询用户收获地址
    List<Address>> addressList = Db.lambdaQuery(Address.class)
        .eq(Address::getUserId, userId)
        .list();

    // 3.封装数据
    UserVO userVO = BeanUtil.copyProperties(user, UserVO.class);

    if (CollUtil.isNotEmpty(addressList)) {
        List<AddressVO>> addressVOList = BeanUtil.copyToList(addressList, AddressVO.class);
        userVO.setAddresses(addressVOList);
    }
    return userVO;
}
```

在查询地址时，我们采用了Db的静态方法，因此避免了注入AddressService，减少了循环依赖的风险。

**练习**

再来实现一个功能：

-  **根据id批量查询用户**，并查询出用户对应的所有地址

```java
/**
     * 
     * 根据用户id批量查询用户和地址信息
     *
     * @param ids
     * @return
     */
    @Override
    public List<UserVO>> queryUserAndAddressByIds(List<Long>> ids) {
        // 1.查询用户
        List<User>> users = listByIds(ids);
        if (users.isEmpty()) {
            return Collections.emptyList();
        }
        // 2.查询地址
        // 2.1.获取用户id集合
        List<Long>> userIds = users.stream().map(User::getId).collect(Collectors.toList());
        // 2.2.根据用户id查询地址
        List<Address>> addressList = Db.lambdaQuery(Address.class)
                .in(Address::getUserId, userIds)
                .list();
        // 2.3.转换地址VO
        List<AddressVO>> addressVOList = BeanUtil.copyToList(addressList, AddressVO.class);

        // 2.4.用户地址集合分组处理，相同用户的放入一个集合（组）中
        Map<Long,> List<AddressVO>>> addressMap = new HashMap<>(0);
        if (!addressVOList.isEmpty()) {
            addressMap = addressVOList.stream().collect(Collectors.groupingBy(AddressVO::getUserId));
        }

        // 3.转换VO返回
        ArrayList<UserVO>> userVOArrayList = new ArrayList<>(users.size());
        for (User user : users) {
            // 3.1.转换User的PO为VO
            UserVO userVO = BeanUtil.copyProperties(user, UserVO.class);
            // 3.2.转换地址VO
            userVO.setAddresses(addressMap.get(user.getId()));
            userVOArrayList.add(userVO);
        }

        return userVOArrayList;
    }
```



## 3.3.逻辑删除

对于一些比较重要的数据，我们往往会采用逻辑删除的方案，即：

- 在表中添加一个字段标记数据是否被删除
- **当删除数据时把标记置为true**
- **查询时过滤掉标记为true的数据**

一旦采用了逻辑删除，所有的查询和删除逻辑都要跟着变化，非常麻烦。

为了解决这个问题，MybatisPlus就添加了对逻辑删除的支持。

**注意**，只有MybatisPlus生成的SQL语句才支持自动的逻辑删除，自定义SQL需要自己手动处理逻辑删除。

例如，我们给`address`表添加一个逻辑删除字段：

```SQL
alter table address add deleted bit default b'0' null comment '逻辑删除';
```

然后给`Address`实体添加`deleted`字段：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-35.png)

接下来，我们要在`application.yml`中**配置逻辑删除字段**：

```YAML
mybatis-plus:
  global-config:
    db-config:
      logic-delete-field: deleted # 全局逻辑删除的实体字段名(since 3.3.0,配置后可以忽略不配置步骤2)
      logic-delete-value: 1 # 逻辑已删除值(默认为 1)
      logic-not-delete-value: 0 # 逻辑未删除值(默认为 0)
```

测试： 首先，我们执行一个删除操作：

```Java
@Test
void testDeleteByLogic() {
    // 删除方法与以前没有区别
    addressService.removeById(59L);
}
```

方法与普通删除一模一样，但是底层的SQL逻辑变了：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-36.png)

查询一下试试：

```Java
@Test
void testQuery() {
    List<Address>> list = addressService.list();
    list.forEach(System.out::println);
}
```

会发现id为59的确实没有查询出来，而且SQL中也对逻辑删除字段做了判断：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-37.png)

综上， 开启了逻辑删除功能以后，我们就可以像普通删除一样做CRUD，基本不用考虑代码逻辑问题。还是非常方便的。

**注意**： 逻辑删除本身也有自己的**问题**，比如：

- 会导致数据库表**垃圾数据**越来越多，从而影响查询效率
- SQL中全都需要对逻辑删除字段做判断，**影响查询效率**

因此，我不太推荐采用逻辑删除功能，如果数据不能删除，可以采用把数据迁移到其它表的办法。

## **3.3.通用枚举**

User类中有一个用户状态字段：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-38.png)

像这种字段我们一般会定义一个枚举，做业务判断的时候就可以直接基于枚举做比较。但是我们数据库采用的是`int`类型，对应的PO也是`Integer`。因此业务操作时必须手动把`枚举`与`Integer`转换，非常麻烦。

因此，MybatisPlus提供了一个处理枚举的类型转换器，可以帮我们**把枚举类型与数据库类型自动转换**。

### **3.3.1.定义枚举**

我们定义一个用户状态的枚举：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-39.png)

代码如下：

```Java
package com.itheima.mp.enums;

import com.baomidou.mybatisplus.annotation.EnumValue;
import lombok.Getter;

@Getter
public enum UserStatus {
    NORMAL(1, "正常"),
    FREEZE(2, "冻结")
    ;
    private final int value;
    private final String desc;

    UserStatus(int value, String desc) {
        this.value = value;
        this.desc = desc;
    }
}
```

然后把`User`类中的`status`字段改为`UserStatus` 类型：

![img](./MybatisPlus-Learning-Local.assets/1726234069795-40.png)

要**让`MybatisPlus`处理枚举与数据库类型自动转换**，我们必须告诉`MybatisPlus`，枚举中的哪个字段的值作为数据库值。 `MybatisPlus`提供了**`@EnumValue`注解来标记枚举属性**：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-41.png)

### 3.3.2.配置枚举处理器

在application.yaml文件中添加配置：

```YAML
mybatis-plus:
  configuration:
    default-enum-type-handler: com.baomidou.mybatisplus.core.handlers.MybatisEnumTypeHandler
```

### **3.3.3.测试**

```Java
@Test
void testService() {
    List<User>> list = userService.list();
    list.forEach(System.out::println);
}
```

最终，查询出的`User`类的`status`字段会是枚举类型：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-42.png)

同时，为了使页面查询结果也是枚举格式，我们需要修改UserVO中的status属性：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-43.png)

并且，在UserStatus枚举中通过**`@JsonValue`注解标记JSON序列化时展示的字段**：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-44.png)

最后，在页面查询，结果如下：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-45.png)

## 3.4.JSON类型处理器

数据库的user表中有一个`info`字段，是JSON类型：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-46.png)

格式像这样：

```JSON
{"age": 20, "intro": "佛系青年", "gender": "male"}
```

而目前`User`实体类中却是`String`类型：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-47.png)

这样一来，我们要读取info中的属性时就非常不方便。如果要方便获取，info的类型最好是一个`Map`或者实体类。

而一旦我们把**`info`改为`对象`类型**，就需要在写入数据库时手动转为`String`，再读取数据库时，手动转换为`对象`，这会非常麻烦。

因此MybatisPlus提供了很多特殊类型字段的类型处理器，解决特殊字段类型与数据库类型转换的问题。例如处理JSON就可以使用**`JacksonTypeHandler`处理器**。

接下来，我们就来看看这个处理器该如何使用。

### **3.4.1.定义实体**

首先，我们定义一个单独实体类来与info字段的属性匹配：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-48.png)

代码如下：

```Java
package com.itheima.mp.domain.po;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor(staticName = "of") // 可通过静态方法的方式去构造对象
public class UserInfo {
    private Integer age;
    private String intro;
    private String gender;
}

```

### **3.4.2.使用类型处理器**

接下来，将User类的info字段修改为UserInfo类型，并声明类型处理器：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-49.png)

```java
@Data
@TableName(value = "user",autoResultMap = true) //指定表名，自动生成resultMap(自动生成结果映射)
public class User {

    /**
     * 用户id
     */
    @TableId(type = IdType.ASSIGN_ID) //主键生成策略,默认为雪花算法生成id
    private Long id;

    /**
     * 用户名
     */
    @TableField("`username`") //为了防止关键字，指定数据库字段名
    private String username;

    /**
     * 密码
     */
    //@TableField(exist = false) //指定该属性不是数据库的字段
    private String password;

    /**
     * 注册手机号
     */
    private String phone;

    /**
     * 详细信息
     */
    @TableField(typeHandler = JacksonTypeHandler.class)
    private UserInfo info;

    /**
     * 使用状态（1正常 2冻结）
     */
    private UserStatus status;

    /**
     * 账户余额
     */
    private Integer balance;

    /**
     * 创建时间
     */
    private LocalDateTime createTime;

    /**
     * 更新时间
     */
    private LocalDateTime updateTime;
}
```

测试可以发现，所有数据都正确封装到UserInfo当中了：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-50.png)

同时，为了让页面返回的结果也以对象格式返回，我们要修改UserVO中的info字段：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-51.png)

此时，在页面查询结果如下：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-52.png)

## **3.5.配置加密（选学）**

目前我们配置文件中的很多参数都是明文，如果开发人员发生流动，很容易导致敏感信息的泄露。所以MybatisPlus支持配置文件的加密和解密功能。

我们以数据库的用户名和密码为例。

### 3.5.1.生成==秘钥==

首先，我们利用**AES工具生成一个随机秘钥**，然后对用户名、密码加密：

```Java
package com.itheima.mp;

import com.baomidou.mybatisplus.core.toolkit.AES;
import org.junit.jupiter.api.Test;

class MpDemoApplicationTests {
    @Test
    void contextLoads() {
        // 生成 16 位随机 AES 密钥
        String randomKey = AES.generateRandomKey();
        System.out.println("randomKey = " + randomKey);

        // 利用密钥对用户名加密
        String username = AES.encrypt("root", randomKey);
        System.out.println("username = " + username);

        // 利用密钥对密码加密
        String password = AES.encrypt("MySQL123", randomKey);
        System.out.println("password = " + password);

    }
}
```

打印结果如下：

```SQL
randomKey = 6234633a66fb399f
username = px2bAbnUfiY8K/IgsKvscg==
password = FGvCSEaOuga3ulDAsxw68Q==
```

### **3.5.2.修改配置**

修改application.yaml文件，把jdbc的用户名、密码修改为刚刚加密生成的密文：

```YAML
spring:
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/mp?useUnicode=true&characterEncoding=UTF-8&autoReconnect=true&serverTimezone=Asia/Shanghai&rewriteBatchedStatements=true
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: mpw:QWWVnk1Oal3258x5rVhaeQ== # 密文要以 mpw:开头
    password: mpw:EUFmeH3cNAzdRGdOQcabWg== # 密文要以 mpw:开头
```

### **3.5.3.测试**

在启动项目的时候，需要把刚才生成的秘钥添加到启动参数中，像这样：

--mpw.key=6234633a66fb399f

**单元测试的时候不能添加启动参数，所以要在测试类的注解上**配置：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-53.png)

然后随意运行一个单元测试，可以发现数据库查询正常。

# **4.插件功能**

MybatisPlus提供了很多的插件功能，进一步拓展其功能。目前已有的插件有：

- `PaginationInnerInterceptor`：自动分页
- `TenantLineInnerInterceptor`：多租户
- `DynamicTableNameInnerInterceptor`：动态表名
- `OptimisticLockerInnerInterceptor`：乐观锁
- `IllegalSQLInnerInterceptor`：sql 性能规范
- `BlockAttackInnerInterceptor`：防止全表更新与删除

**注意：** 使用多个分页插件的时候需要注意插件定义顺序，建议使用顺序如下：

- 多租户,动态表名
- 分页,乐观锁
- sql 性能规范,防止全表更新与删除

这里我们以分页插件为里来学习插件的用法。

## **4.1.分页插件**

在未引入分页插件的情况下，`MybatisPlus`是不支持分页功能的，`IService`和`BaseMapper`中的分页方法都无法正常起效。 所以，我们必须配置分页插件。

### **4.1.1.配置分页插件**

在项目中新建一个**配置类**：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-54.png)

其代码如下：

```Java
package com.itheima.mp.config;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MybatisConfig {

    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        // 初始化核心插件
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        // 添加分页插件
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));
        return interceptor;
    }
}
```

### 4.1.2.分页API

编写一个分页查询的测试：

```Java
@Test
void testPageQuery() {
    // 1.分页查询，new Page()的两个参数分别是：页码、每页大小
    Page<User>> p = userService.page(new Page<>(2, 2));
    // 2.总条数
    System.out.println("total = " + p.getTotal());
    // 3.总页数
    System.out.println("pages = " + p.getPages());
    // 4.数据
    List<User>> records = p.getRecords();
    records.forEach(System.out::println);
}
```

运行的SQL如下：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-55.png)

这里用到了分页参数，Page，**即可以支持分页参数，也可以支持排序参数。**常见的API如下：

```Java
int pageNo = 1, pageSize = 5;
// 分页参数
Page<User>> page = Page.of(pageNo, pageSize);
// 排序参数, 通过OrderItem来指定
page.addOrder(new OrderItem("balance", false));

userService.page(page);
```

## **4.2.通用分页实体**

现在要实现一个用户分页查询的接口，接口规范如下：

| **参数** | **说明**                                                     |
| -------- | ------------------------------------------------------------ |
| 请求方式 | GET                                                          |
| 请求路径 | /users/page                                                  |
| 请求参数 | `{    "pageNo": 1,    "pageSize": 5,    "sortBy": "balance",    "isAsc": false,    "name": "o",    "status": 1 }` |
| 返回值   | `{    "total": 100006,    "pages": 50003,    "list": [        {            "id": 1685100878975279298,            "username": "user_9****",            "info": {                "age": 24,                "intro": "英文老师",                "gender": "female"            },            "status": "正常",            "balance": 2000        }    ] }` |
| 特殊说明 | 如果排序字段为空，默认按照更新时间排序排序字段不为空，则按照排序字段排序 |

这里需要定义3个实体：

- `UserQuery`：分页查询条件的实体，包含分页、排序参数、过滤条件
- `PageDTO`：分页结果实体，包含总条数、总页数、当前页数据
- `UserVO`：用户页面视图实体

### **4.2.1.实体**

由于UserQuery之前已经定义过了，并且其中已经包含了过滤条件，具体代码如下：

```Java
package com.itheima.mp.domain.query;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(description = "用户查询条件实体")
public class UserQuery {
    @ApiModelProperty("用户名关键字")
    private String name;
    @ApiModelProperty("用户状态：1-正常，2-冻结")
    private Integer status;
    @ApiModelProperty("余额最小值")
    private Integer minBalance;
    @ApiModelProperty("余额最大值")
    private Integer maxBalance;
}
```

其中缺少的仅仅是分页条件，而分页条件不仅仅用户分页查询需要，以后其它业务也都有分页查询的需求。因此建议将分页查询条件单独定义为一个`PageQuery`实体：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-56.png)

`PageQuery`是前端提交的查询参数，一般包含四个属性：

- `pageNo`：页码
- `pageSize`：每页数据条数
- `sortBy`：排序字段
- `isAsc`：是否升序

```Java
@Data
@ApiModel(description = "分页查询实体")
public class PageQuery {
    @ApiModelProperty("页码")
    private Long pageNo;
    @ApiModelProperty("页码")
    private Long pageSize;
    @ApiModelProperty("排序字段")
    private String sortBy;
    @ApiModelProperty("是否升序")
    private Boolean isAsc;
}
```

然后，让我们的UserQuery**继承**这个实体：

```Java
package com.itheima.mp.domain.query;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
/*
@EqualsAndHashCode(callSuper = true) 注解
    告诉 Lombok 自动生成 equals() 和 hashCode() 方法，
    并且这两个方法将会考虑父类的字段（即 callSuper = true）。
    callSuper = true 表示如果当前类继承自其他类，
    equals() 和 hashCode() 方法会在生成时调用父类的 equals() 和 hashCode() 方法，
    而不仅仅是当前类的字段。
 */
@Data
@ApiModel(description = "用户查询条件实体")
public class UserQuery extends PageQuery {
    @ApiModelProperty("用户名关键字")
    private String name;
    @ApiModelProperty("用户状态：1-正常，2-冻结")
    private Integer status;
    @ApiModelProperty("余额最小值")
    private Integer minBalance;
    @ApiModelProperty("余额最大值")
    private Integer maxBalance;
}
```

返回值的用户实体沿用之前定一个`UserVO`实体：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-57.png)

最后，则是分页实体PageDTO:

![img](./MybatisPlus-Learning-Local.assets/1726234069796-58.png)

代码如下：

```Java
package com.itheima.mp.domain.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

@Data
@ApiModel(description = "分页结果")
public class PageDTO<T>> {
    @ApiModelProperty("总条数")
    private Long total;
    @ApiModelProperty("总页数")
    private Long pages;
    @ApiModelProperty("集合")
    private List<T>> list;
}
```

### **4.2.2.开发接口**

我们在`UserController`中定义分页查询用户的接口：

```Java
package com.itheima.mp.controller;

import com.itheima.mp.domain.dto.PageDTO;
import com.itheima.mp.domain.query.PageQuery;
import com.itheima.mp.domain.vo.UserVO;
import com.itheima.mp.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/page")
    public PageDTO<UserVO>> queryUsersPage(UserQuery query){
        return userService.queryUsersPage(query);
    }

    // 。。。 略
}
```

然后在`IUserService`中创建`queryUsersPage`方法：

```Java
PageDTO<UserVO>> queryUsersPage(PageQuery query);
```

接下来，在UserServiceImpl中实现该方法：

```Java
@Override
public PageDTO<UserVO>> queryUsersPage(PageQuery query) {
    // 1.构建条件
    // 1.1.分页条件
    Page<User>> page = Page.of(query.getPageNo(), query.getPageSize());
    // 1.2.排序条件
    if (query.getSortBy() != null) {
        page.addOrder(new OrderItem(query.getSortBy(), query.getIsAsc()));
    }else{
        // 默认按照更新时间排序
        page.addOrder(new OrderItem("update_time", false));
    }
    // 2.查询
    page(page);
    // 3.数据非空校验
    List<User>> records = page.getRecords();
    if (records == null || records.size() == 0) {
        // 无数据，返回空结果
        return new PageDTO<>(page.getTotal(), page.getPages(), Collections.emptyList());
    }
    // 4.有数据，转换
    List<UserVO>> list = BeanUtil.copyToList(records, UserVO.class);
    // 5.封装返回
    return new PageDTO<UserVO>>(page.getTotal(), page.getPages(), list);
}
```

启动项目，在页面查看：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-59.png)

### **4.2.3.改造==PageQuery==实体**

在刚才的代码中，从`PageQuery`到`MybatisPlus`的`Page`之间转换的过程还是比较麻烦的。

我们完全可以在`PageQuery`这个实体中定义一个工具方法，简化开发。 像这样：

```Java
import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.metadata.OrderItem;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 分页查询实体,接收PageQuery参数，
 */
@Data
@ApiModel(description = "分页查询实体")
public class PageQuery {
    @ApiModelProperty("页码")
    private Integer pageNo = 1;
    @ApiModelProperty("每页显示条数")
    private Integer pageSize = 5;
    @ApiModelProperty("排序字段")
    private String sortBy;
    @ApiModelProperty("是否升序")
    private Boolean isAsc = true;

    /**
     * 将PageQuery对象转换为Mybatis-Plus的Page对象
     * @param items
     * @return
     * @param <T>>
     */
    public <T>> Page<T>> toMpPage(OrderItem ... items){
        // 1.分页条件
        Page<T>> page = Page.of(pageNo, pageSize);
        // 2.排序条件
        if(StrUtil.isNotBlank(sortBy)){
            // 不为空
            page.addOrder(new OrderItem(sortBy, isAsc));
        }else if(items != null){
            // 为空，默认排序
            page.addOrder(items);
        }
        return page;
    }

    /**
     * 自定义排序字段和排序方式
     * @param defaultSortBy
     * @param defaultAsc
     * @return
     * @param <T>>
     */
    public <T>> Page<T>> toMpPage(String defaultSortBy, Boolean defaultAsc){
        return toMpPage(new OrderItem(defaultSortBy, defaultAsc));
    }

    /**
     * 默认按照创建时间排序
     * @return
     * @param <T>>
     */
    public <T>> Page<T>> toMpPageDefaultSortByCreateTime(){
        return toMpPage(new OrderItem("create_time", false));
    }


    /**
     * 默认按照更新时间排序
     * @return
     * @param <T>>
     */
    public <T>> Page<T>> toMpPageDefaultSortByUpdateTime(){
        return toMpPage(new OrderItem("update_time", false));
    }
}
```

这样我们在开发也时就可以省去对从`PageQuery`到`Page`的的转换：

```Java
// 1.构建条件
Page<User>> page = query.toMpPageDefaultSortByCreateTimeDesc();
```

### **4.2.4.改造==PageDTO==实体**

在查询出分页结果后，数据的非空校验，数据的vo转换都是模板代码，编写起来很麻烦。

我们完全可以将其封装到PageDTO的工具方法中，简化整个过程：

```Java
import cn.hutool.core.bean.BeanUtil;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collections;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * 分页结果
 * @param <T>>
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "分页结果")
public class PageDTO<T>> {
    @ApiModelProperty("总条数")
    private Long total;
    @ApiModelProperty("总页数")
    private Long pages;
    @ApiModelProperty("集合")
    private List<T>> list;


    /**
     * 返回空分页结果
     * @param p MybatisPlus的分页结果
     * @param <V>> 目标VO类型
     * @param <P>> 原始PO类型
     * @return VO的分页对象
     */
    public static <V,> P> PageDTO<V>> empty(Page<P>> p){
        return new PageDTO<>(p.getTotal(), p.getPages(), Collections.emptyList());
    }

    /**
     * 前提：PO和VO类的字段名一样
     *
     * 将MybatisPlus分页结果转为 VO分页结果
     * @param p MybatisPlus的分页结果
     * @param voClass 目标VO类型的字节码
     * @param <V>> 目标VO类型
     * @param <P>> 原始PO类型
     * @return VO的分页对象
     */
    public static <V,> P> PageDTO<V>> of(Page<P>> p, Class<V>> voClass) {
        // 1.非空校验
        List<P>> records = p.getRecords();
        if (records == null || records.size() == 0) {
            // 无数据，返回空结果
            return empty(p);
        }
        // 2.数据转换
        List<V>> vos = BeanUtil.copyToList(records, voClass);
        // 3.封装返回
        return new PageDTO<>(p.getTotal(), p.getPages(), vos);
    }

    /**
     * 前提：PO和VO类的字段名不一样
     *
     * 将MybatisPlus分页结果转为 VO分页结果，允许用户自定义PO到VO的转换方式
     * @param p MybatisPlus的分页结果
     * @param convertor PO到VO的转换函数
     * @param <V>> 目标VO类型
     * @param <P>> 原始PO类型
     * @return VO的分页对象
     */
    public static <V,> P> PageDTO<V>> of(Page<P>> p, Function<P,> V> convertor) { //Function<PO,> VO>：PO转VO的函数
        // 1.非空校验
        List<P>> records = p.getRecords();
        if (records == null || records.size() == 0) {
            // 无数据，返回空结果
            return empty(p);
        }
        // 2.数据转换
        //map()进行转换操作：对流中的每个元素应用一个函数，返回一个新的流
        List<V>> vos = records.stream().map(convertor).collect(Collectors.toList());
        // 3.封装返回
        return new PageDTO<>(p.getTotal(), p.getPages(), vos);
    }
}
```

最终，业务层的代码可以简化为：

```Java
@Override
public PageDTO<UserVO>> queryUserByPage(PageQuery query) {
    // 1.构建条件
    Page<User>> page = query.toMpPageDefaultSortByCreateTimeDesc();
    // 2.查询
    page(page);
    // 3.封装返回
    return PageDTO.of(page, UserVO.class);
}
```

如果是希望自定义PO到VO的转换过程，可以这样做：

```Java
@Override
public PageDTO<UserVO>> queryUserByPage(PageQuery query) {
    // 1.构建条件
    Page<User>> page = query.toMpPageDefaultSortByCreateTime();
    // 2.查询
    page(page);
    // 3.封装返回
    return PageDTO.of(page, user -> {
        // 拷贝属性到VO
        UserVO userVO = BeanUtil.copyProperties(user, UserVO.class);
        // (1)用户名脱敏
        String username = userVO.getUsername();
        userVO.setUsername(username.substring(0, username.length() - 2) + "**");
        // (2)查询用户地址
        List<Address>> addressList = Db.lambdaQuery(Address.class)
            .eq(Address::getUserId, user.getId())
            .list();
        userVO.setAddresses(BeanUtil.copyToList(addressList, AddressVO.class));

        return userVO;
    });
}
```

最终查询的结果如下：

![img](./MybatisPlus-Learning-Local.assets/1726234069796-60.png)

# **5.作业**

尝试改造项目一中的`Service`层和`Mapper`层实现，用`MybatisPlus`代替单表的CRUD