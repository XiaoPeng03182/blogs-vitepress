# 网络编程

# 一、初始网络编程

## 1、概念

![image-20250320224643234](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320224643234.png)





## 2、常见的==软件架构==-CS/BS

![image-20250320224752237](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320224752237.png)

![image-20250320224822243](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320224822243.png)

![image-20250320225006300](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320225006300.png)



### （1）BS架构-优缺点

![image-20250320224922982](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320224922982.png)

### （2）CS架构-优缺点

![image-20250320224944060](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320224944060.png)



## 3、小结

![image-20250320225035376](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320225035376.png)

# 二、==*网络编程三要素*==

![image-20250320225213758](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320225213758.png)

![image-20250320225306014](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320225306014.png)

## 1、📌==*IP*==

### （1）概念

![image-20250320225428794](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320225428794.png)

- **IP 地址（Internet Protocol Address）**是设备在计算机网络中的唯一标识，就像家庭住址一样，用于标识和定位网络上的设备，以便数据能够准确地传输到目的地。



###  （2）==IPv4==

![image-20250320225737619](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320225737619.png)

**IPv4（Internet Protocol version 4）**

- 采用 32 位地址，由四组十进制数字（0~255）组成，每组 8 位（1 个字节），例如：

  ```
  192.168.1.1
  ```

- **地址数量**：IPv4 理论上能提供 **约 42 亿** 个
  $$
  2^{32}
  $$
  地址，但由于地址分配不均等问题，可用地址远少于此。

- 特点：

  - 由于地址资源紧缺，使用 NAT（网络地址转换）等技术延缓了 IPv4 地址枯竭问题。
  - 广泛使用于现有网络设备。

  

#### ①IPv4的==地址分类形式==-==*局域网*==

![image-20250320230543067](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320230543067.png)

![image-20250320230603947](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320230603947.png)







### （3）==IPv6==

**IPv6（Internet Protocol version 6）**

- 采用 128 位地址，由 8 组 16 进制数（每组 16 位，2 个字节）组成，例如：

  ```makefile
  2001:0db8:85a3:0000:0000:8a2e:0370:7334
  ```

- **地址数量**：IPv6 理论上能提供 **约 2的128次方** 个地址，几乎可以给地球上的每一粒沙子都分配一个 IP。

- 特点：

  - 解决 IPv4 地址枯竭问题。
  - 提供更高的安全性（内置 IPsec）。
  - 去除了 NAT，支持端到端通信。
  - 在 5G 时代及物联网（IoT）设备中应用越来越广泛。

![image-20250320230009353](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320230009353.png)

![image-20250320225951539](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320225951539.png)



### （4）局域网-LAN

 **局域网（LAN, Local Area Network）**

局域网（LAN）是指**在有限的地理范围内**（如家庭、公司、学校）连接的计算机网络。它主要用于设备之间的通信，而不需要连接到广域网（互联网）。

**特点：**

- 设备之间数据传输速率较快（通常 100Mbps ~ 10Gbps）。
- 主要使用 **私有 IP 地址**（如 192.168.1.0/24）。
- 通过**路由器或交换机**连接多个设备。

**常见局域网 IP 地址范围（私有 IP 地址段）：**

| 地址范围                      | 子网掩码    |
| ----------------------------- | ----------- |
| 10.0.0.0 ~ 10.255.255.255     | 255.0.0.0   |
| 172.16.0.0 ~ 172.31.255.255   | 255.240.0.0 |
| 192.168.0.0 ~ 192.168.255.255 | 255.255.0.0 |



### （5）子网掩码

##### **子网掩码（Subnet Mask）**

**子网掩码**用于划分子网，它与 IP 地址结合使用，决定了==**网络部分和主机部分**==。

- 网络部分：标识设备所在的网段。
- 主机部分：标识网段内的设备。

**示例：**

- **IP 地址：** 192.168.1.10

- 子网掩码：255.255.255.0

  - 网络部分：`192.168.1`

  - 主机部分：`10`（即该子网内的第 10 个设备）

  - 该子网最多可容纳 
    $$
    2^{(32-24)} - 2 =254 
    $$
    **台设备**。

##### **子网掩码的作用**

- **划分子网**：减少广播流量，提高网络性能。
- **决定网络边界**：同一子网的设备可以直接通信，不同子网的设备需要路由器转发。

**常见子网掩码示例**

| 子网掩码            | 对应网络地址数 | 适用场景                       |
| ------------------- | -------------- | ------------------------------ |
| 255.0.0.0 (/8)      | 约 1677 万个   | 超大规模网络（A 类网络）       |
| 255.255.0.0 (/16)   | 约 6.5 万个    | 大型网络（B 类网络）           |
| 255.255.255.0 (/24) | 254 个         | 小型企业、家庭网络（C 类网络） |









### （7）**各自的使用场景**

| **概念**          | **作用**                                 | **使用场景**                         |
| ----------------- | ---------------------------------------- | ------------------------------------ |
| **IPv4**          | 设备间通信，当前仍然是主流               | 互联网、局域网                       |
| **IPv6**          | 解决 IPv4 地址枯竭问题，提升安全性和效率 | 物联网（IoT）、5G 网络、大型数据中心 |
| **局域网（LAN）** | 连接同一地理区域的设备，方便资源共享     | 家庭网络、公司内部网络、校园网       |
| **子网掩码**      | 划分子网，控制 IP 地址范围，提高网络性能 | 运营商网络、大型企业网络             |



### （8）特殊的IP地址-==*localhost*==

![image-20250320230716695](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320230716695.png)

![image-20250320231110238](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320231110238.png)

![image-20250320231236610](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320231236610.png)



### （9）常见的CMD命令-ipconfig/ping

![image-20250320231308978](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320231308978.png)

### （10）小结

![image-20250320230045638](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320230045638.png)

![image-20250320231321883](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250320231321883.png)



### （11）InetAddress类的使用

![image-20250321143402293](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321143402293.png)



#### ①示例代码

```java
package com.itheima.a01InetAddressdemo;


import java.net.InetAddress;
import java.net.UnknownHostException;

public class MyInetAddressDemo1 {
    public static void main(String[] args) throws UnknownHostException {
/*
        static InetAddress getByName(String host)  确定主机名称的IP地址。主机名称可以是机器名称，也可以是IP地址
        String getHostName()                        获取此IP地址的主机名
        String getHostAddress()                     返回文本显示中的IP地址字符串
*/

      //1.获取InetAddress的对象
        //IP的对象 一台电脑的对象
        InetAddress address = InetAddress.getByName("DESKTOP-5OJJSAM");
        System.out.println(address);

        String name = address.getHostName();
        System.out.println(name);//DESKTOP-5OJJSAM

        String ip = address.getHostAddress();
        System.out.println(ip);//192.168.1.100
    }
}
```



### （12）IP地址、==网段、网关==的关系

在计算机网络中，**网段**、**网关**和**IP地址**是网络配置和通信的重要概念，它们之间紧密相关，用于确保设备在网络中的通信顺畅。以下是对这些概念的详细介绍及其联系：

------

##### 1. **IP地址**

- 定义：

  - IP地址是分配给每个联网设备的唯一标识，用于在网络中定位和通信。
  - 常见的格式：
    - IPv4：如 `192.168.1.1`（点分十进制）。
    - IPv6：如 `2001:0db8:85a3:0000:0000:8a2e:0370:7334`（冒号十六进制）。

- 组成：

  - IPv4由 网络部分 和 主机部分组成。

    - 网络部分：标识设备所在的网段。
    - 主机部分：标识网段内的设备。

  - **子网掩码（如 `255.255.255.0`）用于区分网络部分和主机部分。**

- 分类：

  - 公有IP：用于互联网。
  - 私有IP：用于局域网（如 `192.168.x.x`，`10.x.x.x`）。

------

##### 2.==**网段**==

- 定义：
  - **网段是一个==逻辑子网==，由 IP地址和子网掩码定义**。
  - **每个网段中的设备可以直接通信，无需通过网关。**
- 计算：
  - 通过 IP地址 和 子网掩码 可以计算网段范围。
    - 例子：
      - IP地址：`192.168.1.100`
      - 子网掩码：`255.255.255.0`
      - 网段：`192.168.1.0/24`，范围是 `192.168.1.1` 到 `192.168.1.254`。
- 特点：
  - 网段内设备共享同一个网络号。
  - **==广播地址==是网段的最后一个地址（如 `192.168.1.255`）。**

------

##### 3. **==网关==**

- 定义：
  - 网关是一个设备（通常是**路由器**），**充当不同网段之间通信的桥梁**。
  - 它是一个网络的默认出口，连接到外部网络（例如互联网）。
- 特点：
  - 网关的IP地址通常是一个网段内的首地址或末地址（如 `192.168.1.1`）。
  - **如果目标地址不在当前网段，设备会将数据包发送到网关，由网关转发到目标网段。**
- 配置：
  - 设备必须配置网关IP地址才能与其他网段通信。

------

##### 4. **联系**

| **概念**   | **作用**                   | **联系**                                                 |
| ---------- | -------------------------- | -------------------------------------------------------- |
| **IP地址** | 标识网络设备的唯一地址     | 属于某个网段，通过子网掩码判断是否与目标地址在同一网段。 |
| **网段**   | 定义一组可以直接通信的设备 | IP地址决定设备所在的网段；同一网段设备无需网关即可通信。 |
| **网关**   | 连接不同网段的桥梁         | 如果通信目标在其他网段，设备会将数据转发给网关。         |

------

##### 5. **实际应用示例**

假设一个公司有以下网络配置：

- 子网掩码：`255.255.255.0`（/24）。
- 网段：`192.168.1.0/24`。
- 网关：`192.168.1.1`。
- 主机IP地址：`192.168.1.100`。

###### **在同一网段中通信**：

- 如果主机 

  ```
  192.168.1.100
  ```

   想与 

  ```
  192.168.1.200
  ```

   通信：

  - 判断网段：
    - `192.168.1.100` 和 `192.168.1.200` 都在 `192.168.1.0/24` 网段。
  - 直接通信：数据包通过交换机（或直连）发送到目标主机。

###### **跨网段通信**：

- 如果主机 

  ```
  192.168.1.100
  ```

   想与 

  ```
  192.168.2.50
  ```

   通信：

  - 判断网段：
    - `192.168.1.100` 属于 `192.168.1.0/24`。
    - `192.168.2.50` 属于 `192.168.2.0/24`。
  - 跨网段通信：主机将数据包发送给网关（`192.168.1.1`），由网关转发到目标网段。

------

##### 6. **关键点总结**

- **IP地址**是设备在网络中的唯一标识，必须正确配置以确保通信。
- **网段**决定设备是否可以直接通信。
- **网关**是跨网段通信的必需设备。
- 配置时需确保：
  - IP地址、子网掩码和网关在同一个网段内。
  - 不同网段的通信需要正确设置网关和路由规则。





## 2、==*端口号*==

![image-20250321143708525](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321143708525.png)

![image-20250321143747718](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321143747718.png)



## 3、📌==*协议*==

![image-20250321144257885](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321144257885.png)

### （1）OSI参考模型

![image-20250321144402213](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321144402213.png)

### （2）==TCP/IP参考模型==

![image-20250321144450755](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321144450755.png)

### （3）==*UDP协议*==

#### ①概念

![image-20250321144712761](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321144712761.png)

#### ②UDP通信程序-发送数据

![image-20250321145927429](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321145927429.png)

```java
package com.itheima.a02udpdemo1;


import java.io.IOException;
import java.net.*;

public class SendMessageDemo {
    public static void main(String[] args) throws IOException {
        //发送数据


        //1.创建DatagramSocket对象(快递公司)
        //细节：
        //绑定端口，以后我们就是通过这个端口往外发送
        //空参：所有可用的端口中随机一个进行使用
        //有参：指定端口号进行绑定
        DatagramSocket ds = new DatagramSocket(); //使用随机的端口进行发送

        //2.打包数据
        String str = "你好威啊！！！";
        byte[] bytes = str.getBytes();
        InetAddress address = InetAddress.getByName("127.0.0.1");
        int port = 10086;
        
        DatagramPacket dp = new DatagramPacket(bytes,bytes.length,address,port);

        //3.发送数据
        ds.send(dp);

        //4.释放资源
        ds.close();
    }
}
```



#### ③UDP通信程序-接收数据

![image-20250321150310928](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321150310928.png)



```java
package com.itheima.a02udpdemo1;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

public class ReceiveMessageDemo {
    public static void main(String[] args) throws IOException {
        //接收数据



        //1.创建DatagramSocket对象（快递公司）
        //细节：
        //在接收的时候，一定要绑定端口
        //而且绑定的端口一定要跟发送的端口保持一致
        DatagramSocket ds = new DatagramSocket(10086);


        //2.接收数据包
        byte[] bytes = new byte[1024];
        DatagramPacket dp = new DatagramPacket(bytes,bytes.length);

        //receive，该方法是阻塞的
        //程序执行到这一步的时候，会在这里死等
        //等发送端发送消息
        System.out.println(11111);
        ds.receive(dp);
        System.out.println(2222);

       //3.解析数据包
        byte[] data = dp.getData();
        int len = dp.getLength();
        InetAddress address = dp.getAddress(); //获取发送数据报的地址
        int port = dp.getPort(); //获取发送的端口位置

        System.out.println("接收到数据" + new String(data,0,len));
        System.out.println("该数据是从" + address + "这台电脑中的" + port + "这个端口发出的");

        //4.释放资源
        ds.close();
    }
}
```

**结果**

![image-20250321150640995](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321150640995.png)



#### ④UDP练习-聊天室

![image-20250321150905172](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321150905172.png)

**示例代码-发送数据**

```java
package com.itheima.a03udpdemo2;


import java.io.IOException;
import java.net.*;
import java.util.Scanner;

public class SendMessageDemo {
    public static void main(String[] args) throws IOException {
         /*
            按照下面的要求实现程序
                UDP发送数据：数据来自于键盘录入，直到输入的数据是886，发送数据结束
                UDP接收数据：因为接收端不知道发送端什么时候停止发送，故采用死循环接收
        */

        //1.创建对象DatagramSocket的对象
        DatagramSocket ds = new DatagramSocket();

        //2.打包数据
        Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.println("请输入您要说的话：");
            String str = sc.nextLine();
            if("886".equals(str)){
                break;
            }
            byte[] bytes = str.getBytes();
            //InetAddress address = InetAddress.getByName("255.255.255.255"); //广播
            InetAddress address = InetAddress.getByName("127.0.0.1");
            int port = 10086;
            DatagramPacket dp = new DatagramPacket(bytes,bytes.length,address,port);
            //3.发送数据
            ds.send(dp);
        }    
        //4.释放资源
        ds.close(); 
    }
}
```

**示例代码-接收数据**

```java
package com.itheima.a03udpdemo2;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;

public class ReceiveMessageDemo {
    public static void main(String[] args) throws IOException {
        /*
            按照下面的要求实现程序
                UDP发送数据：数据来自于键盘录入，直到输入的数据是886，发送数据结束
                UDP接收数据：因为接收端不知道发送端什么时候停止发送，故采用死循环接收
        */

        //1.创建对象DatagramSocket的对象
        DatagramSocket ds = new DatagramSocket(10086); //指定接受数据报的端口

        //2.接收数据包
        byte[] bytes = new byte[1024];
        DatagramPacket dp = new DatagramPacket(bytes,bytes.length);

        while (true) {
            ds.receive(dp);

            //3.解析数据包
            byte[] data = dp.getData();
            int len = dp.getLength();
            String ip = dp.getAddress().getHostAddress();
            String name = dp.getAddress().getHostName();

            //4.打印数据
            System.out.println("ip为：" + ip + ",主机名为：" + name + "的人，发送了数据：" + new String(data,0,len));
        }
    }
}
```

**测试结果**

![image-20250321151725803](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321151725803.png)

![image-20250321151843189](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321151843189.png)





### （4）==UDP的三种通讯方式==

![image-20250321152345594](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321152345594.png)

#### ①单播-DatagramSocket

![image-20250321152434615](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321152434615.png)

##### 代码实现

![image-20250321152519335](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321152519335.png)

```java
package com.itheima.a03udpdemo2;


import java.io.IOException;
import java.net.*;
import java.util.Scanner;

public class SendMessageDemo {
    public static void main(String[] args) throws IOException {
         /*
            按照下面的要求实现程序
                UDP发送数据：数据来自于键盘录入，直到输入的数据是886，发送数据结束
                UDP接收数据：因为接收端不知道发送端什么时候停止发送，故采用死循环接收
        */

        //1.创建对象DatagramSocket的对象
        DatagramSocket ds = new DatagramSocket();

        //2.打包数据
        Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.println("请输入您要说的话：");
            String str = sc.nextLine();
            if("886".equals(str)){
                break;
            }
            byte[] bytes = str.getBytes();
            //InetAddress address = InetAddress.getByName("255.255.255.255"); //广播
            InetAddress address = InetAddress.getByName("127.0.0.1");
            int port = 10086;
            DatagramPacket dp = new DatagramPacket(bytes,bytes.length,address,port);
            //3.发送数据
            ds.send(dp);
        }    
        //4.释放资源
        ds.close(); 
    }
} 
```



#### ②==组播==-MulticastSocket



![image-20250321152445622](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321152445622.png)

##### **代码实现**

![image-20250321152648829](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321152648829.png)

**发送端**

```java
package com.itheima.a04udpdemo3;


import java.io.IOException;
import java.net.DatagramPacket;
import java.net.InetAddress;
import java.net.MulticastSocket;

public class SendMessageDemo {
    public static void main(String[] args) throws IOException {
         /*
            组播发送端代码
        */

        //创建MulticastSocket对象
        MulticastSocket ms = new MulticastSocket() ;

        // 创建DatagramPacket对象
        String s = "你好,你好!" ;
        byte[] bytes = s.getBytes();
        InetAddress address = InetAddress.getByName("224.0.0.1");  //组播地址
        int port = 10000;

        DatagramPacket datagramPacket = new DatagramPacket(bytes, bytes.length, address, port) ;

        // 调用MulticastSocket发送数据方法发送数据
        ms.send(datagramPacket);

        // 释放资源
        ms.close();
    }
}
```

**接收端-1**

```java
package com.itheima.a04udpdemo3;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.InetAddress;
import java.net.MulticastSocket;

public class ReceiveMessageDemo1 {
    public static void main(String[] args) throws IOException {
        /*
            组播接收端代码
        */


        //1. 创建MulticastSocket对象
        MulticastSocket ms = new MulticastSocket(10000);

        //2. 将将当前本机，添加到224.0.0.1的这一组当中
        InetAddress address = InetAddress.getByName("224.0.0.1");
        ms.joinGroup(address);

        //3. 创建DatagramPacket数据包对象
        byte[] bytes = new byte[1024];
        DatagramPacket dp = new DatagramPacket(bytes, bytes.length);

        //4. 接收数据
        ms.receive(dp);

        //5. 解析数据
        byte[] data = dp.getData();
        int len = dp.getLength();
        String ip = dp.getAddress().getHostAddress();
        String name = dp.getAddress().getHostName();

        System.out.println("ip为：" + ip + ",主机名为：" + name + "的人，发送了数据：" + new String(data,0,len));

        //6. 释放资源
        ms.close();
    }
}
```

**接收端-2**

```java
package com.itheima.a04udpdemo3;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.InetAddress;
import java.net.MulticastSocket;

public class ReceiveMessageDemo2 {
    public static void main(String[] args) throws IOException {
        /*
            组播接收端代码
        */


        //1. 创建MulticastSocket对象
        MulticastSocket ms = new MulticastSocket(10000);

        //2. 将将当前本机，添加到224.0.0.1的这一组当中
        InetAddress address = InetAddress.getByName("224.0.0.1");
        ms.joinGroup(address);

        //3. 创建DatagramPacket数据包对象
        byte[] bytes = new byte[1024];
        DatagramPacket dp = new DatagramPacket(bytes, bytes.length);

        //4. 接收数据
        ms.receive(dp);

        //5. 解析数据
        byte[] data = dp.getData();
        int len = dp.getLength();
        String ip = dp.getAddress().getHostAddress();
        String name = dp.getAddress().getHostName();

        System.out.println("ip为：" + ip + ",主机名为：" + name + "的人，发送了数据：" + new String(data,0,len));

        //6. 释放资源
        ms.close();
    }
}
```



#### ③==广播==-DatagramSocket

![image-20250321152456750](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321152456750.png)

##### 代码实现

![image-20250321152605435](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321152605435.png)

```java
package com.itheima.a03udpdemo2;


import java.io.IOException;
import java.net.*;
import java.util.Scanner;

public class SendMessageDemo {
    public static void main(String[] args) throws IOException {
         /*
            按照下面的要求实现程序
                UDP发送数据：数据来自于键盘录入，直到输入的数据是886，发送数据结束
                UDP接收数据：因为接收端不知道发送端什么时候停止发送，故采用死循环接收
        */

        //1.创建对象DatagramSocket的对象
        DatagramSocket ds = new DatagramSocket();

        //2.打包数据
        Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.println("请输入您要说的话：");
            String str = sc.nextLine();
            if("886".equals(str)){
                break;
            }
            byte[] bytes = str.getBytes();
            InetAddress address = InetAddress.getByName("255.255.255.255"); //广播
            int port = 10086;
            DatagramPacket dp = new DatagramPacket(bytes,bytes.length,address,port);
            //3.发送数据
            ds.send(dp);
        }    
        //4.释放资源
        ds.close(); 
    }
} 
```





### （5）==*TCP协议*==

#### ①概念

![image-20250321144714361](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321144714361.png)

#### ②TCP==通信程序==

![image-20250321153512509](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321153512509.png)

![image-20250321153601713](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321153601713.png)

##### 1）==Socket==-客户端发送数据

```java
package com.itheima.a05tcpdemo1;


import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;

public class Client {
    public static void main(String[] args) throws IOException {
        //TCP协议，发送数据

        //1.创建Socket对象
        //细节：在创建对象的同时会连接服务端
        //      如果连接不上，代码会报错
        Socket socket = new Socket("127.0.0.1",10000); //和服务器的端口对应

        //2.可以从连接通道中获取输出流
        OutputStream os = socket.getOutputStream();
        //写出数据
        os.write("aaa".getBytes());

        //3.释放资源
        os.close();
        socket.close();
    }
}
```



##### 2）==ServerSocket==-服务器接收数据

```java
package com.itheima.a05tcpdemo1;

import java.io.IOException;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {
    public static void main(String[] args) throws IOException {
        //TCP协议，接收数据

        //1.创建对象ServerSocker
        ServerSocket ss = new ServerSocket(10000); //和客户端的端口对应

        //2.监听客户端的链接
        Socket socket = ss.accept();

        //3.从连接通道中获取输入流读取数据
        InputStream is = socket.getInputStream();
        int b;
        //细节：
        //read方法会从连接通道中读取数据
        //但是，需要有一个结束标记(客户端发送的，socket.shutdownOutput())，此处的循环才会停止
        //否则，程序就会一直停在read方法这里，等待读取下面的数据
        while ((b = is.read()) != -1){
            System.out.println((char) b);
        }

        //4.释放资源
        socket.close();
        ss.close();
    }
}
```



##### 3）解决中文字符乱码问题-==转换流==

==ServerSocket==-服务器接收数据时，使用转换流，将字符流转化为字符流

```java
package com.itheima.a06tcpdemo2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {
    public static void main(String[] args) throws IOException {
        //TCP协议，接收数据

        //1.创建对象ServerSocker
        ServerSocket ss = new ServerSocket(10000);

        //2.监听客户端的链接
        Socket socket = ss.accept();

        //3.从连接通道中获取输入流读取数据
        /*InputStream is = socket.getInputStream();
        InputStreamReader isr = new InputStreamReader(is);
        BufferedReader br = new BufferedReader(isr);*/

        BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        
        int b;
        while ((b = br.read()) != -1){
            System.out.print((char) b);
        }
        //4.释放资源
        socket.close();
        ss.close();
    }
}
```



#### ③TCP通信的细节

![image-20250321155056536](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321155056536.png)



### （6）TCP协议的==*三次握手和四次挥手*==

#### ①==三次握手==

![image-20250321155507555](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321155507555.png)

##### 1.**为什么 TCP 需要三次握手？**

TCP（Transmission Control Protocol）是**面向连接**的协议，三次握手（Three-Way Handshake）是 TCP 建立可靠连接的关键步骤，主要目的是确保通信双方能够可靠地发送和接收数据，并同步状态信息。

------

##### 2.**三次握手的==具体过程==**

1. **第一次握手（SYN）**
   - 客户端发送一个 SYN（同步）报文到服务器，表示请求建立连接，同时指明客户端的初始序列号 `Seq = X`。
   - 此时，客户端进入 **SYN_SENT** 状态，等待服务器响应。
2. **第二次握手（SYN + ACK）**
   - 服务器收到 SYN 报文后，向客户端返回一个 SYN + ACK 报文，表示同意建立连接。
   - 服务器在这个报文中包含自己的初始序列号 `Seq = Y`，同时确认客户端的序列号 `Ack = X + 1`。
   - 此时，服务器进入 **SYN_RCVD** 状态。
3. **第三次握手（ACK）**
   - 客户端收到 SYN + ACK 后，再发送一个 ACK 报文，表示收到并确认服务器的序列号 `Ack = Y + 1`。
   - 同时，客户端进入 **ESTABLISHED** 状态，表示连接已建立。
   - 服务器收到 ACK 后，也进入 **ESTABLISHED** 状态。

------

##### 3.**为什么需要三次，而不是两次或更多？**

1. **一次握手不足：缺少确认机制**
   如果只有一次握手，客户端发送了 SYN 报文，但无法确认服务器是否收到该请求，也无法确保服务器是否已做好接收数据的准备。
2. **两次握手不足：存在假连接风险**
   假设使用两次握手：
   - 客户端发送 SYN 报文，服务器返回 SYN + ACK，此时服务器认为连接已经建立。
   - 如果客户端的初始 SYN 报文是由于网络延迟导致的陈旧数据包（而客户端并未真正请求连接），服务器会错误地认为连接已建立并占用资源（产生**半开连接**）。
   - 使用三次握手时，只有客户端对服务器的 SYN + ACK 再次确认后，连接才真正建立，可以避免这种问题。
3. **三次握手足够：确保双方同步通信能力**
   - 客户端和服务器通过三次交互，双方都能确认对方具备发送和接收数据的能力，并同步初始序列号，保证通信的可靠性。
4. **四次或更多：无必要**
   - 三次握手已经能确保通信双方可靠连接，更多步骤会增加额外的通信开销，影响效率。

------

##### 4.**总结**

TCP 三次握手的设计是在**可靠性**与**效率**之间的权衡：

- 通过三次交互，确保通信双方具备正常通信能力，避免陈旧连接的问题。
- 减少不必要的握手步骤，提高连接建立的效率。

这是 TCP 保证数据传输可靠性的核心机制之一。



#### ②==四次挥手==

![image-20250321160113300](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321160113300.png)

##### **1. 什么是 TCP 四次挥手？**

TCP（Transmission Control Protocol）是一个**面向连接的、可靠的传输协议**，当通信结束时，TCP 需要通过**四次挥手（Four-Way Handshake）来断开连接**，**==确保双方都正确释放资源==**。

------

##### **2. 为什么需要四次挥手？**

TCP 是**全双工通信**，即数据可以**同时**在**两个方向传输**。因此，关闭连接时，每一方都需要**独立地**向对方发送 `FIN`（Finish）标志，表示“我不再发送数据了，但还能接收数据”。
==**四次挥手保证了数据的完整性**，**防止因某一方突然断开导致数据丢失**==

------

##### **3. TCP 四次挥手的==具体过程==**

**① 第一次挥手（客户端 → 服务器）**

- **客户端** 发送 `FIN`（Finish）请求，告诉 **服务器**：“我不再发送数据了，但仍然可以接收数据。”
- **客户端进入** `FIN_WAIT_1` 状态。

**② 第二次挥手（服务器 → 客户端）**

- **服务器** 回复 `ACK`（确认），表示**收到**了 `FIN`，但可能还有数据需要发送。
- **服务器进入** `CLOSE_WAIT` 状态，**客户端进入** `FIN_WAIT_2` 状态。

**③ 第三次挥手（服务器 → 客户端）**

- **服务器** 发送 `FIN`，告诉**客户端**：“我也不再发送数据了。”
- **服务器进入** `LAST_ACK` 状态。

**④ 第四次挥手（客户端 → 服务器）**

- **客户端** 回复 `ACK`，表示“我收到了你的 `FIN`，连接可以断开了。”
- **客户端进入** `TIME_WAIT` 状态，等待 2 * MSL（最大报文生存时间）后释放资源，防止服务器未收到 `ACK`。
- **服务器收到 `ACK` 后，进入 `CLOSED` 状态，连接关闭。**

------

##### **4. 为什么是四次，而不是三次或更多？**

1. **不能三次挥手的原因**
   - 服务器可能还有数据要发送，所以第二次挥手时，**不能立刻发送 `FIN`**，否则数据可能丢失。
   - 服务器需要等到数据发送完毕后，才能发送 `FIN`，所以**需要分开两步**。
2. **为什么不需要更多次？**
   - 四次刚好保证了**双方都能确认数据传输已经结束**。
   - `ACK` 只是简单的确认，不需要单独的 `ACK` 确认 `ACK`，否则会无限增加握手次数。

------

##### **5. 总结**

✅ **四次挥手用于安全可靠地关闭 TCP 连接，确保数据完整性。**
 ✅ **客户端和服务器都需要各自确认“发送完毕”和“接收完毕”，因此需要四次交互。**
 ✅ **客户端 `TIME_WAIT` 状态防止服务器未收到 `ACK`，保证连接完全关闭。**
 ✅ **相比三次挥手，四次挥手确保了服务器能在发送完所有数据后再断开连接。**

**📌 重点记忆：四次挥手 = 两个方向的 FIN + ACK，保证双方都正确关闭连接！** 🚀



## 4、==其他协议==

### **（1）什么是 FTP？**

#### **📌 是什么？**

FTP（File Transfer Protocol，文件传输协议）是一种**用于在网络上进行文件传输的协议**，基于 TCP/IP 协议工作，支持**上传、下载、删除、重命名**等文件操作。

#### **📌 为什么需要？**

- 早期互联网需要一个标准的方式在计算机之间传输文件，FTP 解决了这个问题。
- 支持用户身份认证，可进行权限管理。
- 适用于大文件传输，支持断点续传。

#### **📌 具体过程**

FTP 采用 **客户端-服务器（C/S）模式**，使用**两个端口**进行通信：

1. **控制连接（端口 21）**：用于发送命令，如 `USER`（登录）、`LIST`（列出文件）、`RETR`（下载文件）。
2. **数据连接（端口 20）**：用于传输文件数据。

两种模式：

- **主动模式**（PORT）：服务器主动连接客户端的数据端口。
- **被动模式**（PASV）：客户端请求服务器提供可用端口，客户端再连接该端口。

#### **📌 使用场景**

- 服务器之间大文件传输。
- 网站部署时上传代码、下载日志。
- 远程存储备份数据。

#### **📌 总结**

✅ FTP 是一种文件传输协议，使用 TCP **端口 21 控制连接，端口 20 传输数据**。
 ✅ **主动模式和被动模式**两种连接方式，保证数据顺利传输。
 ✅ 适用于**文件服务器、大文件共享、网站管理**等场景。

------



### **（2）什么是 Telnet？**

#### **📌 是什么？**

Telnet（TELecommunication NETwork，远程登录协议）是一种**基于 TCP 的协议**，用于远程管理和控制计算机。

#### **📌 为什么需要？**

- 允许用户在本地设备上远程登录到服务器并执行命令。
- 适用于远程管理设备，如服务器、交换机、路由器。
- 但 **Telnet 传输的数据（包括密码）是明文的**，不安全，常被 SSH 取代。

#### **📌 具体过程**

1. **客户端发送连接请求**，服务器监听**端口 23**，建立 TCP 连接。
2. **服务器验证用户身份**（用户名+密码）。
3. **成功登录后**，用户可以像在本地一样操作远程计算机。
4. **退出登录，关闭连接。**

#### **📌 使用场景**

- 远程管理 Linux/Unix 服务器（现多用 SSH）。
- 测试网络连通性（如 `telnet IP 端口`）。
- 配置网络设备（交换机、路由器）。

#### **📌 总结**

✅ **Telnet 是一种远程登录协议**，使用 **端口 23**，可在远程服务器上执行命令。
 ✅ **但不安全（明文传输）**，现在已被 **SSH**（Secure Shell）取代。
 ✅ 仍可用于**调试网络连接**，但不建议用于正式环境。

------



### **（3）什么是 DNS？**

#### **📌 是什么？**

DNS（Domain Name System，域名系统）是**用于将域名解析为 IP 地址的系统**，类似于**互联网的“电话簿”**。

#### **📌 为什么需要？**

- 方便用户访问网站，**不用记住复杂的 IP 地址**（如 `8.8.8.8`）。
- 允许域名与 IP 地址动态映射，提高灵活性。
- 支持**负载均衡**，分配流量到不同服务器。

#### **📌 具体过程**

1. 用户输入 `www.example.com`。
2. **本地 DNS 服务器查询缓存**，若无，则向**根 DNS 服务器**请求解析。
3. 逐级查询 `.com` 顶级域名服务器（TLD）、权威 DNS 服务器，最终返回 `93.184.216.34`（IP 地址）。
4. 用户设备使用该 IP 访问目标服务器。

#### **📌 使用场景**

- **网站访问（浏览器输入网址）**。
- **CDN 加速**（动态解析到最近的服务器）。
- **邮件服务器查找（MX 记录）**。

#### **📌 总结**

✅ **DNS 解析域名到 IP**，简化网络访问。
 ✅ **采用分层架构（根 DNS、TLD、权威 DNS）**，提高查询效率。
 ✅ **CDN、负载均衡、邮件解析**等都依赖 DNS。

------



### **（4）什么是 ICMP？**

#### **📌 是什么？**

ICMP（Internet Control Message Protocol，互联网控制报文协议）是**用于发送网络错误报告和状态信息的协议**，通常用于**检测网络状态**（如 `ping`）。

#### **📌 为什么需要？**

- 用于网络故障排查（检测连通性、故障原因）。
- 通知网络错误（如**主机不可达、超时**）。
- 提供网络调试工具，如 **ping、traceroute**。

#### **📌 具体过程**（以 `ping` 为例）

1. **客户端发送 ICMP 请求**（Echo Request）。
2. **目标主机收到后返回 ICMP 响应**（Echo Reply）。
3. **客户端计算 RTT（往返时间）**，判断网络状况。

#### **📌 使用场景**

- `ping` 测试网络连通性。
- `traceroute` 检测数据包经过的路径。
- 网络设备检测（如路由器 ICMP 超时通知）。

#### **📌 总结**

 ✅ **ICMP 主要用于网络状态检测和故障排查**。
        ✅ **ping、traceroute** 等工具基于 ICMP。
        ✅ 但 ICMP **易被滥用**（DDoS 攻击），很多服务器**会禁用 ICMP**。

------



### **（5）什么是 ARP？**

#### **📌 是什么？**

ARP（Address Resolution Protocol，地址解析协议）用于**将 IP 地址解析为 MAC 地址**，确保数据包能在局域网（LAN）内正确传输。

#### **📌 为什么需要？**

- **IP 地址用于网络层通信**，但数据链路层（如以太网）**依赖 MAC 地址传输数据**。
- **ARP 解决了 IP → MAC 映射问题**，确保数据能正确送达。

#### **📌 具体过程**

1. **主机 A 发送 ARP 请求**（广播），询问“`192.168.1.2` 的 MAC 地址是多少？”
2. **主机 B（目标 IP）回复 ARP 响应**，提供其 MAC 地址。
3. **主机 A 记录 B 的 MAC 地址**，存入 ARP 缓存，加速后续通信。

#### **📌 使用场景**

- **局域网通信（如 PC 访问网关）**。
- **交换机、路由器设备自动解析 MAC**。
- **网络攻击（ARP 欺骗，用于中间人攻击 MITM）**。

#### **📌 总结**

 ✅ **ARP 解析 IP 地址到 MAC 地址**，用于局域网通信。
 		✅ **基于广播请求-单播响应机制**，提高效率。
 		✅ **可能被滥用（ARP 欺骗），可用 ARP 绑定防范攻击。** 🚀



# 三、==综合练习==

## 1、TCP通信练习1-多发多收

![image-20250321161220339](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321161220339.png)

**Client**

```java
package com.itheima.a07test1;


import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;
import java.util.Scanner;

public class Client {
    public static void main(String[] args) throws IOException {
        //客户端：多次发送数据
        //服务器：接收多次接收数据，并打印

        //1. 创建Socket对象并连接服务端
        Socket socket = new Socket("127.0.0.1",10000);

        //2.写出数据
        Scanner sc = new Scanner(System.in);
        OutputStream os = socket.getOutputStream();

        while (true) {
            System.out.println("请输入您要发送的信息");
            String str = sc.nextLine();
            if("886".equals(str)){
                break;
            }
            os.write(str.getBytes());
        }
        //3.释放资源
        socket.close();
    }
}
```

**Server**

**客户端没有关闭，也就是没有断开连接，所以服务端也不会断开，四次挥手不会触发，服务器就可以一直接收数据**

```java
package com.itheima.a07test1;

import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {
    public static void main(String[] args) throws IOException {
        //客户端：多次发送数据
        //服务器：接收多次接收数据，并打印

        //1.创建对象绑定10000端口
        ServerSocket ss = new ServerSocket(10000);

        //2.等待客户端来连接
        Socket socket = ss.accept();

        //3.读取数据
        InputStreamReader isr = new InputStreamReader(socket.getInputStream());
        int b;
        while ((b = isr.read()) != -1){
            System.out.print((char)b);
        }
        //4.释放资源
        socket.close();
        ss.close();
    }
}
```



## 2、TCP通信练习2-接收并反馈

![image-20250321161306200](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321161306200.png)

**Client**

```java
package com.itheima.a08test2;


import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.Socket;

public class Client {
    public static void main(String[] args) throws IOException {
        //客户端：发送一条数据，接收服务端反馈的消息并打印
        //服务器：接收数据并打印，再给客户端反馈消息

        //1.创建Socket对象并连接服务端
        Socket socket = new Socket("127.0.0.1",10000);

        //2.写出数据
        String str = "见到你很高兴！";
        OutputStream os = socket.getOutputStream();
        os.write(str.getBytes());

        //写出一个结束标记
        socket.shutdownOutput();

        //3.接收服务端回写的数据
        InputStream is = socket.getInputStream();
        InputStreamReader isr = new InputStreamReader(is);
        int b;
        while ((b = isr.read()) != -1){
            System.out.print((char)b);
        }

        //释放资源
        socket.close();
    }
}
```

**Server**

```java
package com.itheima.a08test2;


import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {
    public static void main(String[] args) throws IOException {
        //客户端：发送一条数据，接收服务端反馈的消息并打印
        //服务器：接收数据并打印，再给客户端反馈消息

        //1.创建对象并绑定10000端口
        ServerSocket ss = new ServerSocket(10000);

        //2.等待客户端连接
        Socket socket = ss.accept();

        //3.socket中获取输入流读取数据
        InputStream is = socket.getInputStream();
        InputStreamReader isr = new InputStreamReader(is);
        int b;
        //细节：
        //read方法会从连接通道中读取数据
        //但是，需要有一个结束标记(客户端发送的，socket.shutdownOutput())，此处的循环才会停止
        //否则，程序就会一直停在read方法这里，等待读取下面的数据
        while ((b = isr.read()) != -1){
            System.out.println((char)b);
        }

        //4.回写数据
        String str = "到底有多开心？";
        OutputStream os = socket.getOutputStream();
        os.write(str.getBytes());

        //释放资源
        socket.close();
        ss.close();
    }
}
```



## 3、TCP通信练习3-==上传文件==

![image-20250321161450903](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321161450903.png)

**Client**

```java
package com.itheima.a09test3;


import java.io.*;
import java.net.Socket;

public class Client {
    public static void main(String[] args) throws IOException {
        //客户端：将本地文件上传到服务器。接收服务器的反馈。
        //服务器：接收客户端上传的文件，上传完毕之后给出反馈。


        //1. 创建Socket对象，并连接服务器
        Socket socket = new Socket("127.0.0.1",10000);

        //2.读取本地文件中的数据，并写到服务器当中
        BufferedInputStream bis = new BufferedInputStream(new FileInputStream("mysocketnet\\clientdir\\a.jpg"));
        BufferedOutputStream bos = new BufferedOutputStream(socket.getOutputStream());
        byte[] bytes = new byte[1024];
        int len;
        while ((len = bis.read(bytes)) != -1){
            bos.write(bytes,0,len);
        }
        
        bos.flush();
        bis.close();

        //往服务器写出结束标记
        socket.shutdownOutput();

        //3.接收服务器的回写数据
        BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        String line = br.readLine();
        System.out.println(line);
        
        //4.释放资源
        socket.close();
    }
}
```

**Server**

```java
package com.itheima.a09test3;


import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {
    public static void main(String[] args) throws IOException {
        //客户端：将本地文件上传到服务器。接收服务器的反馈。
        //服务器：接收客户端上传的文件，上传完毕之后给出反馈。


        //1.创建对象并绑定端口
        ServerSocket ss = new ServerSocket(10000);

        //2.等待客户端来连接
        Socket socket = ss.accept();

        //3.读取数据并保存到本地文件中
        BufferedInputStream bis = new BufferedInputStream(socket.getInputStream());
        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("mysocketnet\\serverdir\\a.jpg"));
        int len;
        byte[] bytes = new byte[1024];
        while ((len = bis.read(bytes)) != -1){
            bos.write(bytes,0,len);
        }
        bos.close(); //关闭本地文件输出流
        
        //4.回写数据
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
        bw.write("上传成功");
        bw.newLine();
        bw.flush();

        //5.释放资源
        socket.close();
        ss.close();
    }
}
```



## 4、TCP通信练习4-上传文件(文件名重复问题)

![image-20250321161530425](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321161530425.png)

### （1）UUID类

![image-20250321164535859](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321164535859.png)

![image-20250321164555435](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321164555435.png)

```java
package com.itheima.a10test4;

import java.util.UUID;

public class UUIDTest {
    public static void main(String[] args) {
        String str = UUID.randomUUID().toString().replace("-", "");
        System.out.println(str);//9f15b8c356c54f55bfcb0ee3023fce8a
    }
}
```

### （2）修改代码

**Client**

```java
package com.itheima.a10test4;


import java.io.*;
import java.net.Socket;

public class Client {
    public static void main(String[] args) throws IOException {
        //客户端：将本地文件上传到服务器。接收服务器的反馈。
        //服务器：接收客户端上传的文件，上传完毕之后给出反馈。


        //1. 创建Socket对象，并连接服务器
        Socket socket = new Socket("127.0.0.1",10000);

        //2.读取本地文件中的数据，并写到服务器当中
        BufferedInputStream bis = new BufferedInputStream(new FileInputStream("mysocketnet\\clientdir\\a.jpg"));
        BufferedOutputStream bos = new BufferedOutputStream(socket.getOutputStream());
        byte[] bytes = new byte[1024];
        int len;
        while ((len = bis.read(bytes)) != -1){
            bos.write(bytes,0,len);
        }

        //往服务器写出结束标记
        socket.shutdownOutput();

        //3.接收服务器的回写数据
        BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        String line = br.readLine();
        System.out.println(line);

        //4.释放资源
        socket.close();

    }
}
```

**Server**

```java
package com.itheima.a10test4;


import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.UUID;

public class Server {
    public static void main(String[] args) throws IOException {
        //客户端：将本地文件上传到服务器。接收服务器的反馈。
        //服务器：接收客户端上传的文件，上传完毕之后给出反馈。


        //1.创建对象并绑定端口
        ServerSocket ss = new ServerSocket(10000);

        //2.等待客户端来连接
        Socket socket = ss.accept();

        //3.读取数据并保存到本地文件中
        BufferedInputStream bis = new BufferedInputStream(socket.getInputStream());
        String name = UUID.randomUUID().toString().replace("-", "");
        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("mysocketnet\\serverdir\\" + name + ".jpg"));  //使用UUID解决重复问题  
        int len;
        byte[] bytes = new byte[1024];
        while ((len = bis.read(bytes)) != -1) {
            bos.write(bytes, 0, len);
        }
        bos.close();
        //4.回写数据
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
        bw.write("上传成功");
        bw.newLine();
        bw.flush();

        //5.释放资源
        socket.close();
        ss.close();
    }
}
```



## 5、TCP通信练习5-上传文件(==多线程版==)

![image-20250321161557459](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321161557459.png)

**自定义线程**

```java
package com.itheima.a11test5;

import java.io.*;
import java.net.Socket;
import java.util.UUID;

public class MyRunnable implements Runnable{

    Socket socket;

    public MyRunnable(Socket socket){
        this.socket = socket;
    }

    @Override
    public void run() {
        try {
            //3.读取数据并保存到本地文件中
            BufferedInputStream bis = new BufferedInputStream(socket.getInputStream());
            String name = UUID.randomUUID().toString().replace("-", "");
            BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("mysocketnet\\serverdir\\" + name + ".jpg"));
            int len;
            byte[] bytes = new byte[1024];
            while ((len = bis.read(bytes)) != -1) {
                bos.write(bytes, 0, len);
            }
            bos.close();
            //4.回写数据
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
            bw.write("上传成功");
            bw.newLine();
            bw.flush();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //5.释放资源
           if(socket != null){
               try {
                   socket.close();
               } catch (IOException e) {
                   e.printStackTrace();
               }
           }
        }
    }
}
```

**Client**

```java
package com.itheima.a11test5;


import java.io.*;
import java.net.Socket;

public class Client {
    public static void main(String[] args) throws IOException {
        //客户端：将本地文件上传到服务器。接收服务器的反馈。
        //服务器：接收客户端上传的文件，上传完毕之后给出反馈。


        //1. 创建Socket对象，并连接服务器
        Socket socket = new Socket("127.0.0.1",10000);

        //2.读取本地文件中的数据，并写到服务器当中
        BufferedInputStream bis = new BufferedInputStream(new FileInputStream("mysocketnet\\clientdir\\a.jpg"));
        BufferedOutputStream bos = new BufferedOutputStream(socket.getOutputStream());
        byte[] bytes = new byte[1024];
        int len;
        while ((len = bis.read(bytes)) != -1){
            bos.write(bytes,0,len);
        }

        //往服务器写出结束标记
        socket.shutdownOutput();

        //3.接收服务器的回写数据
        BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        String line = br.readLine();
        System.out.println(line);
        
        //4.释放资源
        socket.close();
    }
}
```

**Server**

```java
package com.itheima.a11test5;


import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {
    public static void main(String[] args) throws IOException {
        //客户端：将本地文件上传到服务器。接收服务器的反馈。
        //服务器：接收客户端上传的文件，上传完毕之后给出反馈。


        //1.创建对象并绑定端口
        ServerSocket ss = new ServerSocket(10000);

        while (true) {
            //2.等待客户端来连接
            Socket socket = ss.accept();

            //开启一条线程
            //一个用户就对应服务端的一条线程
            new Thread(new MyRunnable(socket)).start();
        }
    }
}
```



## 6、TCP通信练习6-上传文件(==线程池优化==)

![image-20250321161704516](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321161704516.png)

**自定义线程**

```java
package com.itheima.a12test6;

import java.io.*;
import java.net.Socket;
import java.util.UUID;

public class MyRunnable implements Runnable{

    Socket socket;

    public MyRunnable(Socket socket){
        this.socket = socket;
    }

    @Override
    public void run() {
        try {
            //3.读取数据并保存到本地文件中
            BufferedInputStream bis = new BufferedInputStream(socket.getInputStream());
            String name = UUID.randomUUID().toString().replace("-", "");
            BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("mysocketnet\\serverdir\\" + name + ".jpg"));
            int len;
            byte[] bytes = new byte[1024];
            while ((len = bis.read(bytes)) != -1) {
                bos.write(bytes, 0, len);
            }
            bos.close();
            //4.回写数据
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
            bw.write("上传成功");
            bw.newLine();
            bw.flush();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //5.释放资源
           if(socket != null){
               try {
                   socket.close();
               } catch (IOException e) {
                   e.printStackTrace();
               }
           }
        }
    }
}
```

**Client**

```java
package com.itheima.a12test6;


import java.io.*;
import java.net.Socket;

public class Client {
    public static void main(String[] args) throws IOException {
        //客户端：将本地文件上传到服务器。接收服务器的反馈。
        //服务器：接收客户端上传的文件，上传完毕之后给出反馈。


        //1. 创建Socket对象，并连接服务器
        Socket socket = new Socket("127.0.0.1",10000);

        //2.读取本地文件中的数据，并写到服务器当中
        BufferedInputStream bis = new BufferedInputStream(new FileInputStream("mysocketnet\\clientdir\\a.jpg"));
        BufferedOutputStream bos = new BufferedOutputStream(socket.getOutputStream());
        byte[] bytes = new byte[1024];
        int len;
        while ((len = bis.read(bytes)) != -1){
            bos.write(bytes,0,len);
        }

        //往服务器写出结束标记
        socket.shutdownOutput();

        //3.接收服务器的回写数据
        BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        String line = br.readLine();
        System.out.println(line);
        
        //4.释放资源
        socket.close();
    }
}
```

==**Server**==

```java
package com.itheima.a12test6;


import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

public class Server {
    public static void main(String[] args) throws IOException {
        //客户端：将本地文件上传到服务器。接收服务器的反馈。
        //服务器：接收客户端上传的文件，上传完毕之后给出反馈。

        //创建线程池对象
        ThreadPoolExecutor pool = new ThreadPoolExecutor(
                3,//核心线程数量
                16,//线程池总大小
                60,//空闲时间
                TimeUnit.SECONDS,//空闲时间（单位）
                new ArrayBlockingQueue<>(2),//阻塞队列
                Executors.defaultThreadFactory(),//线程工厂，让线程池如何创建线程对象
                new ThreadPoolExecutor.AbortPolicy()//任务拒绝策略
        );

        //1.创建对象并绑定端口
        ServerSocket ss = new ServerSocket(10000);

        while (true) {
            //2.等待客户端来连接
            Socket socket = ss.accept();

            //开启一条线程
            //一个用户就对应服务端的一条线程
            //new Thread(new MyRunnable(socket)).start();
            pool.submit(new MyRunnable(socket));
        }

    }
}
```



## 7、TCP通信练习7-BS(接收浏览器的消息)

![image-20250321161806951](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321161806951.png)

```java
package com.itheima.a07test1;

import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {
    public static void main(String[] args) throws IOException {
        //客户端：多次发送数据
        //服务器：接收多次接收数据，并打印

        //1.创建对象绑定10000端口
        ServerSocket ss = new ServerSocket(10000);

        //2.等待客户端来连接
        Socket socket = ss.accept();

        //3.读取数据
        InputStreamReader isr = new InputStreamReader(socket.getInputStream());
        int b;
        while ((b = isr.read()) != -1){
            System.out.print((char)b);
        }
        //4.释放资源
        socket.close();
        ss.close();
    }
}
```

![image-20250321170401497](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321170401497.png)





## 8、TCP通信练习8-聊天室

![image-20250321161851696](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/image-20250321161851696.png)

### （1）完整需求

#### 项目名称

​	利用TCP协议，做一个带有登录，注册的无界面，控制版的多人聊天室。

#### 使用到的知识点

​	循环，判断，集合，IO，多线程，网络编程等

#### 准备工作

在当前模块下新建txt文件，文件中保存正确的用户名和密码

文件内容如下：

```java
//左边是用户名
//右边是密码
zhangsan=123
lisi=1234
wangwu=12345
```

#### 需求描述

① 客户端启动之后，需要连接服务端，并出现以下提示： 

```java
服务器已经连接成功
==============欢迎来到黑马聊天室================
1登录
2注册
请输入您的选择：
```

②选择登录之后，出现以下提示： 

```java
服务器已经连接成功
==============欢迎来到黑马聊天室================
1登录
2注册
请输入您的选择：
1
请输入用户名
```

③需要输入用户名和密码，输入完毕，没有按回车时，效果如下：

```java
服务器已经连接成功
==============欢迎来到黑马聊天室================
1登录
2注册
请输入您的选择：
1
请输入用户名
zhangsan
请输入密码
123
```

④按下回车，提交给服务器验证

服务器会结合txt文件中的用户名和密码进行判断

根据不同情况，服务器回写三种判断提示：

```java
服务器回写第一种提示：登录成功
服务器回写第二种提示：密码有误  
服务器回写第三种提示：用户名不存在
```

⑤客户端接收服务端回写的数据，根据三种情况进行不同的处理方案

   登录成功的情况， 可以开始聊天，出现以下提示：

```java
服务器已经连接成功
==============欢迎来到黑马聊天室================
1登录
2注册
请输入您的选择：
1
请输入用户名
zhangsan
请输入密码
123
1
登录成功，开始聊天
请输入您要说的话
```

密码错误的情况，需要重新输入，出现以下提示：

```java
服务器已经连接成功
==============欢迎来到黑马聊天室================
1登录
2注册
请输入您的选择：
1
请输入用户名
zhangsan
请输入密码
aaa
密码输入错误
==============欢迎来到黑马聊天室================
1登录
2注册
请输入您的选择：
```

用户名不存在的情况，需要重新输入，出现以下提示：

```java
服务器已经连接成功
==============欢迎来到黑马聊天室================
1登录
2注册
请输入您的选择：
1
请输入用户名
zhaoliu
请输入密码
123456
用户名不存在
==============欢迎来到黑马聊天室================
1登录
2注册
请输入您的选择：
```

⑥如果成功登录，就可以开始聊天，此时的聊天是群聊，一个人发消息给服务端，服务端接收到之后需要群发给所有人

提示：

​	此时不能用广播地址，因为广播是UDP独有的

​	服务端可以将所有用户的Socket对象存储到一个集合中

​	当需要群发消息时，可以遍历集合发给所有的用户

​	此时的服务端，相当于做了一个消息的转发

转发核心思想如下图所示：

![1](%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-Local.assets/1.png)

#### 其他要求：

用户名和密码要求：

要求1：用户名要唯一，长度：6~18位，纯字母，不能有数字或其他符号。

要求2：密码长度3~8位。第一位必须是小写或者大小的字母，后面必须是纯数字。



客户端：

拥有登录、注册、聊天功能。

① 当客户端启动之后，要求让用户选择是登录操作还是注册操作，需要循环。

* 如果是登录操作，就输入用户名和密码，以下面的格式发送给服务端

  	username=zhangsan&password=123

* 如果是注册操作，就输入用户名和密码，以下面的格式发送给服务端

  	username=zhangsan&password=123

② 登录成功之后，直接开始聊天。

​	

服务端：

① 先读取本地文件中所有的正确用户信息。

② 当有客户端来链接的时候，就开启一条线程。

③ 在线程里面判断当前用户是登录操作还是注册操作。

④ 登录，校验用户名和密码是否正确

⑤ 注册，校验用户名是否唯一，校验用户名和密码的格式是否正确

⑥ 如果登录成功，开始聊天

⑦ 如果注册成功，将用户信息写到本地，开始聊天



### （2）代码实现

#### **Client**

```java
package com.itheima.client;

import java.io.*;
import java.net.Socket;
import java.util.Scanner;

public class Client {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("127.0.0.1", 10001);
        System.out.println("服务器已经连接成功");


        while (true) {
            System.out.println("==============欢迎来到黑马聊天室================");
            System.out.println("1登录");
            System.out.println("2注册");
            System.out.println("请输入您的选择：");
            Scanner sc = new Scanner(System.in);
            String choose = sc.nextLine();
            switch (choose) {
                case "1" -> login(socket);
                case "2" -> System.out.println("用户选择了注册");
                default -> System.out.println("没有这个选项");
            }
        }
    }

    public static void login(Socket socket) throws IOException {
        //获取输出流
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
        //键盘录入
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入用户名");
        String username = sc.nextLine();
        System.out.println("请输入密码");
        String password = sc.nextLine();

        //拼接
        StringBuilder sb = new StringBuilder();
        //username=zhangsan&password=123
        sb.append("username=").append(username).append("&password=").append(password);

        //第一次写的是执行登录操作
        bw.write("login");
        bw.newLine();
        bw.flush();

        //第二次写的是用户名和密码的信息
        //往服务器写出用户名和密码
        bw.write(sb.toString());
        bw.newLine();
        bw.flush();

        //接收数据
        //获取输入流
        BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        String message = br.readLine();
        System.out.println(message);
        //1：登录成功  2 密码有误   3 用户名不存在
        if ("1".equals(message)) {
            System.out.println("登录成功，开始聊天");
            //开一条单独的线程，专门用来接收服务端发送过来的聊天记录
            new Thread(new ClientMyRunnable(socket)).start();
            //开始聊天
            talk2All(bw);
        } else if ("2".equals(message)) {
            System.out.println("密码输入错误");
        } else if ("3".equals(message)) {
            System.out.println("用户名不存在");
        }

    }

    //往服务器写出消息
    private static void talk2All(BufferedWriter bw) throws IOException {
        Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.println("请输入您要说的话");
            String str = sc.nextLine();
            //把聊天内容写给服务器
            bw.write(str);
            bw.newLine();
            bw.flush();
        }
    }
}
```

#### **ClientMyRunable**

```java
package com.itheima.client;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

class ClientMyRunnable implements Runnable{
    Socket socket;
    public ClientMyRunnable(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {

        //循环，重复的接受
        while (true) {
            try {
                //接收服务器发送过来的聊天记录
                BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                String msg = br.readLine();
                System.out.println(msg);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

#### **Server**

```java
package com.itheima.server;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.Properties;

public class Server {

    static ArrayList<Socket> list = new ArrayList<>();

    public static void main(String[] args) throws IOException {
        ServerSocket ss = new ServerSocket(10001);

        //1.把本地文件中正确的用户名和密码获取到
        Properties prop = new Properties();
        FileInputStream fis = new FileInputStream("sockethomework\\servicedir\\userinfo.txt");
        prop.load(fis);
        fis.close();

        //2.只要来了一个客户端，就开一条线程处理
        while (true) {
            Socket socket = ss.accept();
            System.out.println("有客户端来链接");
            new Thread(new MyRunnable(socket, prop)).start();
        }
    }
}
```

#### **MyRunable**

****

```java
package com.itheima.server;

import java.io.*;
import java.net.Socket;
import java.util.Properties;

class MyRunnable implements Runnable {
    Socket socket;
    Properties prop;

    public MyRunnable(Socket socket, Properties prop) {
        this.prop = prop;
        this.socket = socket;
    }

    @Override
    public void run() {
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));

            while (true) {
                String choose = br.readLine();
                switch (choose) {
                    case "login" -> login(br);
                    case "register" -> System.out.println("用户选择了注册操作");
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //获取用户登录时，传递过来的信息。
    //并进行判断
    public void login(BufferedReader br) throws IOException {
        System.out.println("用户选择了登录操作");
        String userinfo = br.readLine();
        //username=zhangsan&password=123
        String[] userInfoArr = userinfo.split("&");
        String usernameInput = userInfoArr[0].split("=")[1];
        String passwordInput = userInfoArr[1].split("=")[1];
        System.out.println("用户输入的用户名为:" + usernameInput);
        System.out.println("用户输入的密码为:" + passwordInput);

        if (prop.containsKey(usernameInput)) {
            //如果用户名存在，继续判断密码
            String rightPassword = prop.get(usernameInput) + "";
            if (rightPassword.equals(passwordInput)) {
                //提示用户登录成功，可以开始聊天
                writeMessage2Client("1");
                //登录成功的时候，就需要把客户端的连接对象Socket保存起来
                Server.list.add(socket);
                //写一个while(){}表示正在聊天
                //接收客户端发送过来的消息，并打印在控制台
                talk2All(br, usernameInput);
            } else {
                //密码输入有误
                writeMessage2Client("2");
            }
        } else {
            //如果用户名不存在，直接回写
            writeMessage2Client("3");
        }
    }

    private void talk2All(BufferedReader br, String username) throws IOException {
        while (true) {
            String message = br.readLine();
            System.out.println(username + "发送过来消息：" + message);

            //群发
            for (Socket s : Server.list) {
                //s依次表示每一个客户端的连接对象
                writeMessage2Client(s, username + "发送过来消息：" + message);
            }
        }
    }

    public void writeMessage2Client(String message) throws IOException {
        //获取输出流
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
        bw.write(message);
        bw.newLine();
        bw.flush();
    }

    public void writeMessage2Client(Socket s, String message) throws IOException {
        //获取输出流
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(s.getOutputStream()));
        bw.write(message);
        bw.newLine();
        bw.flush();
    }
}
```







