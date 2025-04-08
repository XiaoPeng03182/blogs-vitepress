# Log日志

# 一、日志技术的概述

## 1、引入

![image-20250321220857809](Log%E6%97%A5%E5%BF%97-Local.assets/image-20250321220857809.png)

![image-20250321221001730](Log%E6%97%A5%E5%BF%97-Local.assets/image-20250321221001730.png)

## 2、日志技术的优势

![image-20250321221046349](Log%E6%97%A5%E5%BF%97-Local.assets/image-20250321221046349.png)

## 3、小结

![image-20250321221149776](Log%E6%97%A5%E5%BF%97-Local.assets/image-20250321221149776.png)





# 二、日志技术的体系

![image-20250321221719202](Log%E6%97%A5%E5%BF%97-Local.assets/image-20250321221719202.png)



![image-20250321221609153](Log%E6%97%A5%E5%BF%97-Local.assets/image-20250321221609153.png)



![image-20250321221705114](Log%E6%97%A5%E5%BF%97-Local.assets/image-20250321221705114.png)



# 三、Logback概述

https://logback.qos.ch/index.html

![image-20250321222001398](Log%E6%97%A5%E5%BF%97-Local.assets/image-20250321222001398.png)

![image-20250321222029030](Log%E6%97%A5%E5%BF%97-Local.assets/image-20250321222029030.png)



# 四、Logback快速入门

![image-20250321222443359](Log%E6%97%A5%E5%BF%97-Local.assets/image-20250321222443359.png)

## 1、导入jar包

​	不是java的，也不是自己写的，是第三方提供的代码，所以我们要导入jar包。

- 把第三方的代码导入到当前的项目当中

  - **新建lib文件夹**，把jar粘贴到lib文件夹当中，全选后右键点击选择add as a ....
  - 检测导入成功：导入成功后jar包可以展开。在项目重构界面可以看到导入的内容
- 把配置文件粘贴到src文件夹下
- 在代码中获取日志对象
- 调用方法打印日志



## 2、核心配置文件-logback.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <!--
        CONSOLE ：表示当前的日志信息是可以输出到控制台的。
    -->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <!--输出流对象 默认 System.out 改为 System.err-->
        <target>System.out</target>
        <encoder>
            <!--格式化输出：%d表示日期，%thread表示线程名，%-5level：级别从左显示5个字符宽度
                %msg：日志消息，%n是换行符-->
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%-5level]  %c [%thread] : %msg%n</pattern>
        </encoder>
    </appender>

    <!-- File是输出的方向通向文件的 -->
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
            <charset>utf-8</charset>
        </encoder>
        <!--日志输出路径-->
        <file>C:/code/itheima-data.log</file>
        <!--指定日志文件拆分和压缩规则-->
        <rollingPolicy
                       class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <!--通过指定压缩文件名称，来确定分割文件方式-->
            <fileNamePattern>C:/code/itheima-data2-%d{yyyy-MMdd}.log%i.gz</fileNamePattern>
            <!--文件拆分大小-->
            <maxFileSize>1MB</maxFileSize>
        </rollingPolicy>
    </appender>

    <!--

    level:用来设置打印级别，大小写无关：TRACE, DEBUG, INFO, WARN, ERROR, ALL 和 OFF
   ， 默认debug
    <root>可以包含零个或多个<appender-ref>元素，标识这个输出位置将会被本日志级别控制。
    -->
    <root level="info">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="FILE" />
    </root>
</configuration>
```



## 3、示例代码

```java
package com.pyw.a80log;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LogDemo1 {
    //创建一个Logger日志对象
    public static final Logger LOGGER = LoggerFactory.getLogger("LogDemo1.class");

    public static void main(String[] args) {
        //2023-07-29 15:35:19.365 [DEBUG]  LogDemo1 [main] : chu方法开始执行咯~~
        //时间 什么类型日志 类名 线程：信息
        LOGGER.debug("chu方法开始执行咯~~");
        LOGGER.info("chu方法开始执行咯~~");
        chu(3,0);
    }

    public static void chu(int a, int b) {
        try {
            LOGGER.debug("参数a:" + a);
            LOGGER.debug("参数a:" + b);
            int c = a / b;
            LOGGER.info("结果是：" + c);
        } catch (Exception e){
            LOGGER.error("报错了！！！！");
        }
    }
}
```



# 五、Logback配置详解

![image-20250321223355545](Log%E6%97%A5%E5%BF%97-Local.assets/image-20250321223355545.png)

**logback.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <!--
        CONSOLE ：表示当前的日志信息是可以输出到控制台的。
    -->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <!--输出流对象 默认 System.out 改为 System.err-->
        <target>System.out</target>
        <encoder>
            <!--格式化输出：%d表示日期，%thread表示线程名，%-5level：级别从左显示5个字符宽度
                %msg：日志消息，%n是换行符-->
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%-5level]  %c [%thread] : %msg%n</pattern>
        </encoder>
    </appender>

    <!-- File是输出的方向通向文件的 -->
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
            <charset>utf-8</charset>
        </encoder>
        <!--日志输出路径-->
        <file>C:/code/itheima-data.log</file>
        <!--指定日志文件拆分和压缩规则-->
        <rollingPolicy
                       class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <!--通过指定压缩文件名称，来确定分割文件方式-->
            <fileNamePattern>C:/code/itheima-data2-%d{yyyy-MMdd}.log%i.gz</fileNamePattern>
            <!--文件拆分大小-->
            <maxFileSize>1MB</maxFileSize>
        </rollingPolicy>
    </appender>

    <!--

    level:用来设置打印级别，大小写无关：TRACE, DEBUG, INFO, WARN, ERROR, ALL 和 OFF
   ， 默认debug
    <root>可以包含零个或多个<appender-ref>元素，标识这个输出位置将会被本日志级别控制。
    -->
    <root level="info">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="FILE" />
    </root>
</configuration>
```



# 六、日志级别设置

![image-20250321222947594](Log%E6%97%A5%E5%BF%97-Local.assets/image-20250321222947594.png)



![image-20250321223001649](Log%E6%97%A5%E5%BF%97-Local.assets/image-20250321223001649.png)



![image-20250321223117111](Log%E6%97%A5%E5%BF%97-Local.assets/image-20250321223117111.png)









































