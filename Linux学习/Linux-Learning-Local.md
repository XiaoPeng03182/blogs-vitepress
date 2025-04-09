# Linux-Learning

## 一、使用场景和简介

<img src="./Linux-Learning-Local.assets/image-20240902195701005.png" alt="image-20240902195701005" style="zoom:80%;" />

<img src="./Linux-Learning-Local.assets/image-20240902195805085.png" alt="image-20240902195805085" style="zoom:50%;" />

<img src="./Linux-Learning-Local.assets/image-20240902195840888.png" alt="image-20240902195840888" style="zoom:80%;" />

### （1）Linux系统版本

<img src="./Linux-Learning-Local.assets/image-20240902195919759.png" alt="image-20240902195919759" style="zoom:80%;" />

#### ①发行版

![image-20240902200004889](./Linux-Learning-Local.assets/image-20240902200004889.png)

## 二、Linux安装

<img src="./Linux-Learning-Local.assets/image-20240902200123390.png" alt="image-20240902200123390" style="zoom:80%;" />



### （1）VMware安装

Vmware-17（提取码: ak47）：[VMware-workstation-full-17.5.0-22583795 (1).exe](https://pan.baidu.com/s/1ubUeSJIZKUcbbavYFcAoPA?pwd=ak47)



### （2）Centos镜像

阿里云镜像地址：[centos-7-isos-x86_64安装包下载_开源镜像站-阿里云 (aliyun.com)](https://mirrors.aliyun.com/centos/7/isos/x86_64/)



### （3）Finalshell安装

官网：[FinalShell SSH工具,服务器管理,远程桌面加速软件,支持Windows,macOS,Linux,版本4.5.6,更新日期2024.8.27 - FinalShell官网 (hostbuf.com)](https://www.hostbuf.com/t/988.html)



### （4）VMware-新建虚拟机

#### ①新建虚拟机

<img src="./Linux-Learning-Local.assets/image-20240902201503670.png" alt="image-20240902201503670" style="zoom:50%;" />



<img src="./Linux-Learning-Local.assets/image-20240902201519139.png" alt="image-20240902201519139" style="zoom: 50%;" />



<img src="./Linux-Learning-Local.assets/image-20240902201608453.png" alt="image-20240902201608453" style="zoom:50%;" />



<img src="./Linux-Learning-Local.assets/image-20240902201734214.png" alt="image-20240902201734214" style="zoom:50%;" />



<img src="./Linux-Learning-Local.assets/image-20240902201823556.png" alt="image-20240902201823556" style="zoom:50%;" />



<img src="./Linux-Learning-Local.assets/image-20240902201924523.png" alt="image-20240902201924523" style="zoom:50%;" />



<img src="./Linux-Learning-Local.assets/image-20240902202015174.png" alt="image-20240902202015174" style="zoom:50%;" />



<img src="./Linux-Learning-Local.assets/image-20240902202116109.png" alt="image-20240902202116109" style="zoom:50%;" />



#### ②Linux配置

<img src="./Linux-Learning-Local.assets/image-20240902202333425.png" alt="image-20240902202333425" style="zoom:50%;" />



<img src="./Linux-Learning-Local.assets/image-20240902202515535.png" alt="image-20240902202515535" style="zoom:50%;" />



**安装过程中，发现不少问题。**如下图

##### 1）网络和主机名

<img src="./Linux-Learning-Local.assets/image-20240902203017800.png" alt="image-20240902203017800" style="zoom: 50%;" />

首先，我们点击网络和主机名，进去打开网络。

<img src="./Linux-Learning-Local.assets/image-20240902202819885.png" alt="image-20240902202819885" style="zoom:50%;" />

再点击左上角的完成，退出来可以看到，网络问题已经解决了。



##### 2）安装目的地

然后点击 安装目的地，

直接点击右上角完成，回到配置页面，可以看到，这个也解决了。

<img src="./Linux-Learning-Local.assets/image-20240902203332833.png" alt="image-20240902203332833" style="zoom:50%;" />



##### 3）设置Root密码

**点击 root 根密码**

设置跟密， 然后点击两次 完成，解决了。

<img src="./Linux-Learning-Local.assets/image-20240902203521671.png" alt="image-20240902203521671" style="zoom:50%;" />

<img src="./Linux-Learning-Local.assets/image-20240902203438126.png" alt="image-20240902203438126" style="zoom:50%;" />



##### 4）设置时区

时区为 美洲，我们点开，设置为上海。

<img src="./Linux-Learning-Local.assets/image-20240902203643057.png" alt="image-20240902203643057" style="zoom:50%;" />

时区也配置好了。



##### 5）安装配置

如果使用本地的ISO映像仍然报错，可以考虑切换不同版本的Centos映像，也可以通过输入阿里云镜像网址的方式，在线安装。

阿里云Centos下载地址：[阿里云Centos下载地址](https://mirrors.aliyun.com/centos/7/isos/x86_64/)

阿里云Centos镜像站：[阿里云Centos镜像站](https://mirrors.aliyun.com/centos/)



<img src="./Linux-Learning-Local.assets/image-20240902204038773.png" alt="image-20240902204038773" style="zoom:50%;" />

#### ③登录Linux

默认用户名为root，密码为前面设置的root密码

<img src="./Linux-Learning-Local.assets/image-20240902204551264.png" alt="image-20240902204551264" style="zoom:50%;" />



#### ④==网卡配置==



**如果之前在Linux配置中已经开启了“网络和主机名”的网络开关，则可以==直接使用命令：ip addr==，查看IP地址**。

<img src="./Linux-Learning-Local.assets/image-20240902202819885.png" alt="image-20240902202819885" style="zoom:50%;" />



<img src="./Linux-Learning-Local.assets/image-20240902205058831.png" alt="image-20240902205058831" style="zoom:67%;" />

<img src="./Linux-Learning-Local.assets/image-20240902204921537.png" alt="image-20240902204921537" style="zoom: 80%;" />



```shell
vi /etc/sysconfig/network-scripts/ifcfg-ens33
```



**报错**

​	**解决 Linux 网络 “Job for network.service failed because the control process exite”问题**

**解决方案**

> 1、和 NetworkManager 服务有冲突，直接关闭 NetworkManger 服务就好了，
>
> ```shell
> service NetworkManager stop
> ```
>
> 禁止开机启动
>
> ```shell
> chkconfig NetworkManager off 
> ```
>
> 重启网络
>
> ```shell
> service network restart
> ```





**配置完成后：**						<img src="./Linux-Learning-Local.assets/image-20240902205209463.png" alt="image-20240902205209463" style="zoom:80%;" />

#### ⑤配置完成

<img src="./Linux-Learning-Local.assets/image-20240902204645575.png" alt="image-20240902204645575" style="zoom: 33%;" />





## 三、FinalShell远程连接Linux服务器

### （1）安装

官网：[FinalShell SSH工具,服务器管理,远程桌面加速软件,支持Windows,macOS,Linux,版本4.5.6,更新日期2024.8.27 - FinalShell官网 (hostbuf.com)](https://www.hostbuf.com/t/988.html)

### （2）远程连接Linux服务器

<img src="./Linux-Learning-Local.assets/image-20240902205532112.png" alt="image-20240902205532112" style="zoom: 67%;" />

<img src="./Linux-Learning-Local.assets/image-20240902205812273.png" alt="image-20240902205812273" style="zoom:50%;" />

### （3）操作Linux服务器

<img src="./Linux-Learning-Local.assets/image-20240902205929107.png" alt="image-20240902205929107" style="zoom:50%;" />

## 四、Linux目录

### （1）Linux和Windows目录结构对比

<img src="./Linux-Learning-Local.assets/image-20240902210438334.png" alt="image-20240902210438334" style="zoom: 67%;" />

### （2）目录介绍

<img src="./Linux-Learning-Local.assets/image-20240902210531386.png" alt="image-20240902210531386" style="zoom: 67%;" />

- **bin存放二进制可执行文件**
- **boot存放系统引导时使用的各种文件**
- **dev存放设备文件**
- **etc存放系统配置文件**
- **home存放系统用户的文件**
- **lib存放程序运行所需的共享库和内核模块**
- **opt额外安装的可选应用程序包所放置的位置**
- **root超级用户目录**
- **sbin存放二进制可执行文件，只有root用户才能访问**
- **tmp存放临时文件**
- **usr存放系统应用程序**
- **var存放运行时需要改变数据的文件，例如日志文件**



## 五、Linux==常用命令==

### 1、Linux命令初体验

![image-20240902211041543](./Linux-Learning-Local.assets/image-20240902211041543.png)

![image-20240902212158686](./Linux-Learning-Local.assets/image-20240902212158686.png)

#### （1）==ls==-查看当前目录下的内容

##### ①ls -l 或者 ll(两个L)

**表示查看当前目录下的详细内容**

```shell
ls -l
ll
```



#### （2）==pwd==-查看当前所在目录



#### （3）==cd [目录名]== -切换目录



#### （4）==touch [文件名]== -如果文件不存在，新建文件



#### （5）==mkdir [目录名]== -创建目录



#### （6）==rm [文件名|目录名]== -删除指定文件或目录

##### ①rm -f [文件名1] [文件名2] 

```shell
rm -f a.txt b.txt  #强制删除多个文件(-f，表示不提示，直接删除)
```



#### （5）==echo 内容 >> filename==-追加内容

![image-20240902220633127](./Linux-Learning-Local.assets/image-20240902220633127.png)





### 2、Linux命令使用技巧

<img src="./Linux-Learning-Local.assets/image-20240902212324907.png" alt="image-20240902212324907" style="zoom:50%;" />



### 3、Linux命令格式

**command [-options] [parameter]**

<img src="./Linux-Learning-Local.assets/image-20240902212453826.png" alt="image-20240902212453826" style="zoom:67%;" />

- **command：命令名**
- **[-options]：选项，可用来对命令进行控制，也可以省略**
- **[parameter]：传给命令的参数，可以是零个、一个或者多个**



<img src="./Linux-Learning-Local.assets/image-20240902213117118.png" alt="image-20240902213117118" style="zoom:50%;" />



### 4、==文件目录==操作命令

#### （1）==ls== -显示指定目录下的内容

![image-20240902213702171](./Linux-Learning-Local.assets/image-20240902213702171.png)**作用：显示指定目录下的内容**
**语法：==ls [-al] [dir]==**
**说明：**

- **==-a==显示所有文件及目录(.开头的==隐藏文件==也会列出)**
- **==-L==除文件名称外，同时将文件型态(==d表示目录，-表示文件==)、权限、拥有者、文件大小等信息详细列出**

**注意：**
**由于我们使用ls命令时经常需要加入-L选项，所以Linux为ls-l命令提供了一种简写方式，即ll**



#### （2）==cd== -用于切换目录



<img src="./Linux-Learning-Local.assets/image-20240902214253369.png" alt="image-20240902214253369" style="zoom: 67%;" />

**作用：用于切换当前工作目录，即进入指定目录**
		**语法：cd [dirName]**

**特殊说明：**

- **~表示用户的home目录(一个用户可以有多个用户目录)**
- **.表示目前所在的目录**
- **..表示目前目录位置的上级目录**

- **举例:**
  **==cd ..==  切换到当前目录的上级目录**
  **==cd ~==  切换到用户的home目录**
  **cd /usr /local   切换到/usr/local目录**





#### （3）==cat==-用于显示文件内容

<img src="./Linux-Learning-Local.assets/image-20240902214725283.png" alt="image-20240902214725283" style="zoom:80%;" />

**作用：用于显示文件内容**
		**语法：cat[-n] fileName**

**说明：**

- **-n：由1开始对所有输出的行数编号**

**举例:**

- **cat /etc/profile 查看/etc目录下的profile文件内容**



#### （4）==more==-已分页的形式显示文件内容

<img src="./Linux-Learning-Local.assets/image-20240902215141507.png" alt="image-20240902215141507" style="zoom: 67%;" />

**作用：以分页的形式显示文件内容**
		**语法：morefileName**

**操作说明：**

- **回车键  向下滚动一行**
- **空格键  向下滚动一屏**
- **b  返回上一屏**
- **q或者Ctrl+c  退出more**

**举例:**
**more/etc/profile 以分页方式显示/etc目录下的profile文件内容**



#### （5）==tail==-查看文件末尾的内容

<img src="./Linux-Learning-Local.assets/image-20240902220125682.png" alt="image-20240902220125682" style="zoom: 67%;" />

**作用：查看文件末尾的内容**

**语法：tail[-f] fileName**

**说明：**

- **-f：==动态读取文件末尾内容并显示==，通常用于==日志文件的内容输出==**

**举例:**

- **tail /etc/profile  显示/etc目录下的profile文件末尾10行的内容**
- **tail-20/etc/profile  显示/etc目录下的profile文件末尾20行的内容**
- **tail -f /itcast/my.log  动态读取/itcast目录下的my.log文件末尾内容并显示**

![image-20240902220633127](./Linux-Learning-Local.assets/image-20240902220633127.png)



#### （6）==mkdir==-创建目录

<img src="./Linux-Learning-Local.assets/image-20240902221316935.png" alt="image-20240902221316935" style="zoom:67%;" />

**作用：创建目录**

**语法： mkdir [-p] dirName**

**说明：**

**●==-p==：==确保目录名称存在==，==不存在的就创建一个==。通过此选项，可以实现==多层目录同时创建==**

**举例：**

- **mkdiritcast在当前目录下，建立一个名为itcast的子目录**
- **mkdi r-p itcast/test在工作目录下的itcast目录中建立一个名为test的==子目录==，若itcast目录不存在，则建立一个**



#### （7）==rmdir==-删除空目录

<img src="./Linux-Learning-Local.assets/image-20240902221703167.png" alt="image-20240902221703167" style="zoom: 67%;" />

**作用：删除==空目录==**

**语法：rmdir [-p] dirName**

**说明：**

- **-p：==当子目录被删除后使父目录为空目录的话，则一并删除==**

**举例：**

- **rmdir itcast删除名为itcast的空目录**
- **rmdir -p itcast/test删除itcast目录中名为test的子目录，若test目录删除后itcast目录变为==空目录==，则也被删除**
- **rmdir ==itcast*== ==删除名称以itcast开始的空目录==**



#### （8）==rm==-删除文件或者目录

<img src="./Linux-Learning-Local.assets/image-20240902222907472.png" alt="image-20240902222907472" style="zoom:67%;" />

**作用：删除文件或者目录**

**语法：rm [-rf] name**

**说明：**

- **-r：将目录及目录中所有文件（目录）逐一删除，即==递归删除==**
- **-f：==无需确认，直接删除==**

**举例:**

- **rm -r itcast/删除名为itcast的目录和==目录中所有文件==，删除前需确认**
- **rm ==-rf== itcast/无需确认，直接删除名为itcast的目录和==目录中所有文件==**
- **rm -f hello.txt无需确认，直接删除hello.txt文件**

 

### 5、==拷贝移动==命令

#### （1）==cp==-用于复制文件或目录

<img src="./Linux-Learning-Local.assets/image-20240902223403607.png" alt="image-20240902223403607" style="zoom:80%;" />

**作用：用于复制文件或目录**

**语法：cp [-r] source dest**

**说明：**

- **==-r==：如果复制的是==目录==需要使用此选项，此时将==复制该目录下所有的子目录和文件==**

**举例：**

- **cp hello.txt itcast/  将hello.txt复制到itcast目录中**
- **cp hello.txt ==./==hi.txt  将hello.txt复制到==当前目录==，并==改名==为hi.txt(==./==表示当前目录)**
- **cp -r itcast/ ./itheima/  将==itcast目录==和目录下==所有文件==复制到itheima目录下**
- **cp -r ==itcast/*== ./itheima/  将itcast目录下==所有文件==复制到itheima目录下（==只复制所有文件==）** 



#### （2）==mv==-为文件或目录改名、或将文件或目录移动到其他位置

<img src="./Linux-Learning-Local.assets/image-20240902224412506.png" alt="image-20240902224412506" style="zoom: 80%;" />

**作用：为文件或目录改名、或将文件或目录移动到其它位置**

**语法：==mv source dest==**

**举例：**

- **mv hello.txt hi.txt  将hello.txt==改名==为hi.txt**
- **mv hi.txt itheima==/== 将文件hi.txt==移动==到itheima==目录==中**
- **mv hi.txt itheima/hello.txt   将hi.txt==移动==到itheima目录中，==并改名==为hello.txt**
- **mv itcast/ itheima/  如果itheima目录==不存在==，将itcast目录==改名==为itheima**
- **mv itcast/ itheima/  如果itheima目录==存在==，将itcast目录==移动==到itheima目录中**





### 6、==打包压缩==命令 tar

<img src="./Linux-Learning-Local.assets/image-20240903154954958.png" alt="image-20240903154954958" style="zoom: 80%;" />

#### （1）tar基础命令

**作用：对文件进行==打包、解包、压缩、解压==**

**语法：tar [-zcxvf] fileName [files]**

​	**tar [-zcxvf] ==fileName(打/解包后的文件名带上后缀)== [==files(目标文件或目录)==]**



- **包文件后缀为==.tar==表示只是完成了==打包==，并没有压缩**
- **包文件后缀为==.tar.gz==表示==打包==的同时还进行了==压缩==**

**说明：**

- **==-z==：z代表的是gzip，通过gzip命令处理文件，gzip可以对文件==压缩==或者==解压==**
- **==-c==：c代表的是create，即创建==新的包文件==   (==打包==)**
- **==-x==：x代表的是extract，实现==从包文件中还原文件==   （==解包==）**
- **==-v==: v代表的是verbose，显示==命令的执行过程==**
- **==-f==：f代表的是file，用于指定==包文件的名称==**



#### （2）案例

<img src="./Linux-Learning-Local.assets/image-20240903163658595.png" alt="image-20240903163658595" style="zoom: 80%;" />

**举例：**

- **==-czvf==：表示对文件==打包并压缩==（并展示命令执行过程、指定打包后的包文件名称），tar -czvf test/newFile.tar.gz itcast，将itcast文件(目录)打包到test目录下，并为打包后的包文件指定名称(后缀为.tar.gz)**
- **==-cvf==: 表示对文件==打包==（并展示命令执行过程、指定打包后的包文件名称），tar -cvf newName.tar itcast**
- **==-xvf==:  表示对包文件进行==解包==， tar -xvf test.tar**
- **==-xzvf==:  表示对包文件进行==解包并解压==，tar -xzvf example.tar.gz**
- **==-C==：表示==指定==解压后的文件所在==目录==,tar -zxvf hello.tar.gz ==-C== /usr/local**



#### （3）解压缩到==指定目录==

**解包并解压文件(目录)到==指定目录==，并==更改解压后的名字==**

##### ①法一：==-C==,

- **==-C==：表示==指定==解压后的文件所在==目录==,tar -zxvf hello.tar.gz ==-C== /usr/local**

  - **tar -xzvf newFile.tar.gz ==-C ./004== --transform 's/itcast/黑马目录/'**

    

##### ②法二：==--directory==

****

- **tar ==-xzvf== newFile.tar.gz ==--directory== /指定目录 ==--transform== '==s/==旧文件名/新文件名/'**



**假设你有一个压缩文件 `example.tar.gz`，其中包含一个文件 `file1.txt`，你希望将 `file1.txt` 解压缩到 `/home/user/target_directory/` 目录，并且将解压缩后的文件重命名为 `newfile.txt`。你可以使用以下步骤：**

1. **解压缩到指定目录，并重命名文件：**

   ```bash
   tar -xzvf example.tar.gz --directory /home/user/target_directory/ --transform 's/file1.txt/newfile.txt/'
   ```

   **解释**：

   - `-x`：表示解压缩。
   - `-z`：表示解压缩 `.gz` 格式的文件。
   - `-v`：表示在解压缩过程中显示详细信息。
   - `-f`：表示指定要操作的文件。
   - `--directory /home/user/target_directory/`：==指定解压缩的目标目录==。
   - `--transform 's/file1.txt/newfile.txt/'`：==用来修改解压缩后的文件名==，其中 `file1.txt` 是压缩包中的原文件名，`newfile.txt` 是解压缩后的新文件名。

   **结果：**

   经过上述命令后，`file1.txt` 将被解压缩到 `/home/user/target_directory/` 目录，并且文件名会被修改为 `newfile.txt`。

如果压缩包中有多个文件或目录，你可以使用正则表达式来处理更多文件的重命名。根据需要调整 `--transform` 参数中的规则。





### 7、文本编辑命令 vi/==vim==

#### （1）Vim的安装

<img src="./Linux-Learning-Local.assets/image-20240903164943505.png" alt="image-20240903164943505" style="zoom:80%;" />

**作用：vi命令是Linux系统提供的一个文本编辑工具，可以对文件内容进行编辑，类似于Windows中的记事本**

**语法：vi fileName**

**说明：**

- **1、vim是从vi发展来的一个功能更加强大的文本编辑工具，在编辑文件时可以对文本内容进行着色，方便我们对文件进行编辑处理，所以实际工作中vim更加常用。**
- **2、要使用vim命令，需要我们自己完成安装。可以使用下面的命令来完成安装：==yum install vim==**



#### （1）yum命令错误

##### **CentOS7执行yum命令遇到“Could not resolve host: mirrorlist.centos.org； 未知的错误”如何解决**

**原因是国内网络不能访问外网。所以需要将mirrorlist.centos.org替换为国内可以访问的镜像源。**

```shell
 curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```

**然后再清除yum缓存**

```shell
yum clean all
```

**然后重新生成缓存**

```shell
yum makecache
```



#### （2）Vim的编辑模式

![image-20240903165246777](./Linux-Learning-Local.assets/image-20240903165246777.png)

**说明：**

- **1、在使用vim命令编辑文件时，如果指定的文件==存在==则==直接打开此文件==。如果指定的文件==不存在则新建文件==。**
- **2、vim在进行文本编辑时共分为三种模式，分别是==命令模式（Command mode）==，==插入模式（Insert mode）==和==底行模式（Lastlinemode）==。这三种模式之间可以相互切换。我们在使用vim时一定要注意我们当前所处的是哪种模式。**



##### ①命令模式

<img src="./Linux-Learning-Local.assets/image-20240903165706113.png" alt="image-20240903165706113" style="zoom: 80%;" />

- **命令模式下可以查看文件内容、移动光标（==上下左右箭头、gg、G==）**
  - **gg，快速回到文件开头**
  - **G，快速回到文件末尾**
- **通过vim命令打开文件后，==默认进入命令模式==**
- **另外两种模式需要首先进入命令模式，才能进入彼此，即必须==通过命令模式进行转换==其他两种模式**



##### ②插入模式-使用==i==

<img src="./Linux-Learning-Local.assets/image-20240903170042837.png" alt="image-20240903170042837" style="zoom: 80%;" />

- **插入模式下可以对文件内容进行==编辑==**
- **在命令模式下按下==[i,a,o]==任意一个，可以进入插入模式。进入插入模式后，下方会出现==【insert】==字样**
- **在插入模式下按下==ESC键==，回到==命令模式==，**
  - **==通过命令模式在进入底行模式==，在==底行模式中进行保存或退出==**



##### ③底行模式-使用==:==

<img src="./Linux-Learning-Local.assets/image-20240903170256703.png" alt="image-20240903170256703" style="zoom:80%;" />

- **底行模式下可以通过命令对文件内容进行==查找、显示行号、退出==等操作**
- **在命令模式下按下[==:==  和  ==/==]任意一个，可以进入底行模式**
- **通过==/方式==进入底行模式后，可以对文件内容进行==查找==**
- **通过==:方式==进入底行模式后，可以输入==wq（保存并退出）==、==q！（不保存退出）==、==Set nu（显示行号）==**

 



### 8、==查找==命令 find、grep

#### （1）find-查找文件

<img src="./Linux-Learning-Local.assets/image-20240903194033911.png" alt="image-20240903194033911" style="zoom:80%;" />

**作用：在指定目录下==查找文件==**

**语法：find dirName -option fileName**

**举例:**

- **find ==.== ==-name== "*.java"  (其中 ==.== 表示在当前目录下寻找 ) ,在当前目录及其子目录下查找.java结尾文件**
- **find /itcast -name "*.java"  在/itcast目录及其子目录下查找.java结尾的文件**



#### （2）grep-查找指定文件中的内容

<img src="./Linux-Learning-Local.assets/image-20240903194825578.png" alt="image-20240903194825578" style="zoom:80%;" />

**作用：从指定文件中查找指定的文本内容**

**语法：grep word fileName**

**举例：**

- **grep Hello HelloWorld.java  查找HelloWorld.java文件中出现的Hello字符串的位置**
- **grep hello *.java  查找当前目录中所有==.java结尾==的文件中包含hello字符串的位置**



### 9、Linux-==进程==

#### （1）==查看进程==命令-ps

<img src="./Linux-Learning-Local.assets/image-20240903203523949.png" alt="image-20240903203523949" style="zoom:80%;" />

**查看进程  ps -ef | grep [进程名称]**

**注意：**

- **ps命令是linux下非常强大的进程查看命令，通过==ps -ef==可以查看==当前运行的所有进程的详细信息==**
- **"==|==”在Linux中称为==管道符==，可以将==前一个命令的结果==输出给==后一个命令==作为==输入==**
- **使用ps命令查看进程时，经常配合管道符和查找命令==grep==一起使用，来查看==特定进程==**

**举例：**

- **查看Tomcat的进程：ps-ef| grep tomcat**



#### （2）停止进程-kill

**结束Tomcat进程**

- **查看Tomcat进程，获得进程id**

![image-20240903205517146](./Linux-Learning-Local.assets/image-20240903205517146.png)

- 执行命令结束进程**kill -9 进程号**



##### 注意：

**kill命令是Linux提供的用于==结束进程==的命令，==-9表示强制结束==**



##### 案例-停止Tomcat服务

<img src="./Linux-Learning-Local.assets/image-20240903205110258.png" alt="image-20240903205110258" style="zoom:80%;" />



停止Tomcat服务的方式：

##### ①法一：

运行Tomcat的**bin目录**中提供的**停止服务的脚本文件** **shutdown.sh**

- 执行命令：

  - ==sh== shutdown.sh

  - ./shutdown.sh

##### ②法二：

**结束Tomcat进程**

- **查看Tomcat进程，获得进程id**

![image-20240903205517146](./Linux-Learning-Local.assets/image-20240903205517146.png)

- 执行命令结束进程**kill -9 进程号**



##### 注意：

**kill命令是Linux提供的用于==结束进程==的命令，==-9表示强制结束==**



### 10、Linux==防火墙==操作

<img src="./Linux-Learning-Local.assets/image-20240903204133750.png" alt="image-20240903204133750" style="zoom:80%;" />

- **查看防火墙状态(systemctl status firewalld 或  firewall-cmd --state)**

- **暂时关闭防火墙(systemctl stop firewalld)**
- **永久关闭防火墙(systemctl disable firewalld)**
- **开启防火墙(systemctl start firewalld)**

- **==开放指定==端口(firewall-cmd --zone=public --add-port=8080/tcp --permanent)**
- **关闭指定端口(firewall-cmd --zone=public --remove-port=8080/tcp --permanent)**

- **==立即生效==(firewall-cmd --reload)，==开放或者关闭端口后==需要执行立即生效命令**
- **查看开放的端口(firewall-cmd --zone=public --list-ports)**



**注意：**

- **1、==Systemct==l是管理Linux中==服务==的命令，可以对服务进行启动、停止、重启、查看状态等操作**
- **2、firewall-cmd是Linux中专门用于==控制防火墙==的命令**
- **3、为了保证系统安全，服务器的防火墙==不建议关闭==，只需开放指定的端口就行，例如Tomcat就可以开发8080端口，Mysql数据库开放3306端口**





### 11、Linux-==服务==

- **systemctl status [服务名]**
- **systemctl start [服务名]**
- **systemctl enable mysqld 开机启动mysql服务**
- **==netstat-tunlp==  查看已经启动的服务（使用netstat命令，需要提前导入yum install net-tools）**



#### （1）案例-启动mysql服务mysqld

![image-20240903222056415](./Linux-Learning-Local.assets/image-20240903222056415.png)

- **systemctl status mysqld  查看mysql服务状态**
- **systemctl start mysqld  启动mysql服务**

**说明：**

**可以设置开机时启动mysql服务，避免每次开机启动mysql**

- **systemctl enable mysqld 开机启动mysql服务**

  

**前提：使用netstat命令，需要提前导入yum install net-tools**

- **==netstat-tunlp==  查看已经启动的服务**
- **netstat-tunlp|grep mysql**
- **ps -ef|grep mysql  查看mysql进程**



### 12、Yum-软件包管理器

![image-20240903231118165](./Linux-Learning-Local.assets/image-20240903231118165.png)





### 13、==nohup==-挂起进程

![image-20240903232154494](./Linux-Learning-Local.assets/image-20240903232154494.png)

**改为后台运行SpringBoot程序，并将日志输出到日志文件**

**目前程序运行的问题**

- **线上程序不会采用控制台霸屏的形式运行程序，而是将程序在后台运行**
- **线上程序不会将日志输出到控制台，而是输出到日志文件，方便运维查阅信息**



**nohup命令：英文全称nohangup（不挂起），用于不挂断地运行指定命令，退出终端不会影响程序的运行**

**语法格式：nohup Command [Arg...] [&]**

**参数说明：**

- **Command：要执行的命令**
- **Arg：一些参数，可以指定输出文件**
- **&：让命令在后台运行**

**举例：hello.log为日志文件**

```shell
nohup java -jar springboot工程.jar &> hello.log &
```



**nohup java -jar boot工程.jar &>hello.log& 后台运行java-jar命令，并将日志输出到hello.log文件**  





## 六、软件安装

### 1、软件安装方式

<img src="./Linux-Learning-Local.assets/image-20240903195459504.png" alt="image-20240903195459504" style="zoom:80%;" />

- **二进制发布包安装**
  - **软件已经针对具体平台编译打包发布，只要解压，修改配置即可**
- **rpm安装**
  - **软件已经按照redhat(红帽)的包管理规范进行打包，使用rpm命令进行安装，不能自行解决库依赖问题(无法实现依赖传递)**
- **yum安装**
  - **一种在线软件安装方式(需要联网)，本质上还是rpm安装，自动下载安装包并安装，安装过程中自动解决库依赖问题**
- **源码编译安装**
  - **软件以源码工程的形式发布，需要自己编译打包**



### 2、使用finalshell快捷上传文件

<img src="./Linux-Learning-Local.assets/image-20240903203350331.png" alt="image-20240903203350331" style="zoom:80%;" />



### 3、JDK安装

<img src="./Linux-Learning-Local.assets/image-20240903200007788.png" alt="image-20240903200007788" style="zoom: 80%;" />



### 4、Tomcat安装

#### （1）安装Tomcat

![image-20240903203230683](./Linux-Learning-Local.assets/image-20240903203230683.png)

#### （2）验证Tomcat是否启动成功

<img src="./Linux-Learning-Local.assets/image-20240903203523949.png" alt="image-20240903203523949" style="zoom:80%;" />



#### （3）防火墙操作

<img src="./Linux-Learning-Local.assets/image-20240903205020340.png" alt="image-20240903205020340" style="zoom:67%;" />



#### （4）停止Tomcat服务

<img src="./Linux-Learning-Local.assets/image-20240903205110258.png" alt="image-20240903205110258" style="zoom:80%;" />



停止Tomcat服务的方式：

##### ①法一-脚本文件

运行Tomcat的**bin目录**中提供的**停止服务的脚本文件** **shutdown.sh**

- 执行命令：

  - ==sh== shutdown.sh

  - ./shutdown.sh



##### ②法二：结束进程

**结束Tomcat进程**

- **查看Tomcat进程，获得进程id**

![image-20240903205517146](./Linux-Learning-Local.assets/image-20240903205517146.png)

- 执行命令结束进程**kill -9 进程号**



**注意**

- **kill命令是Linux提供的用于==结束进程==的命令，==-9表示强制结束==**



### 5、MySQL安装

#### （1）安装MySQL

##### ①检测当前系统中是否安装MySQL数据库

<img src="./Linux-Learning-Local.assets/image-20240903211304120.png" alt="image-20240903211304120" style="zoom: 67%;" />

- **rpm -qa  查询当前系统中安装的所有软件**

- **rpm -qa| grep mysql  查询当前系统中安装的名称带mysql的软件**

- **rpm -qa| grep mariadb  查询当前系统中安装的名称带mariadb的软件**

  

RPM（Red-HatPackageManager）**RPM软件包管理器**，是红帽Linux用于管理和安装软件的工具

注意事项

- 如果当前系统中已经安装有MySQL数据库，安装将失败。CentOS7**自带mariadb**，与MySQL数据库冲突，需要删除mariadb，才能安装Mysql



##### ②卸载已经安装的冲突软件

<img src="./Linux-Learning-Local.assets/image-20240903212159427.png" alt="image-20240903212159427" style="zoom: 80%;" />

**卸载软件**

- **rpm -e --nodeps 软件名称**
- **rpm -e --nodeps mariadb-libs-5.5.60-1.el7_5.x86_64**



##### ③将资料中提供的MySQL安装包上传到Linux并解压

<img src="./Linux-Learning-Local.assets/image-20240903212318417.png" alt="image-20240903212318417" style="zoom:80%;" />

- **mkdir** /usr/local/mysql
- tar **-zxvf** mysql-5.7.25-1.el7.x86_64.rpm-bundle.tar.gz **-C** /usr/local/mysql



##### ④按照顺序安装rpm软件包

**root用户用 ==yum localinstall *.rpm== ，一次性安装==所有软件包==，不需要考虑顺序问题**

<img src="./Linux-Learning-Local.assets/image-20240903212429479.png" alt="image-20240903212429479" style="zoom:80%;" />

- **rpm-ivhmysql-community-common-5.7.25-1.el7.x86_64.rpm**

- **rpm -ivh mysql-community-libs-5.7.25-1.el7.x86_64.rpm**

- **rpm -ivh mysql-community-devel-5.7.25-1.el7.x86_64.rpm**

- **rpm-ivh mysql-community-libs-compat-5.7.25-1.el7.x86_64.rpm**

- **rpm -ivh mysql-community-client-5.7.25-1.el7.x86_64.rpm**

- **yum install net-tools**

- **rpm -ivh mysql-community-server-5.7.25-1.el7.x86_64.rpm**

  

- **说明1：安装过程中提示缺少net-tools依赖，使用yum安装**
- **说明2：可以通过指令升级现有软件及系统内核**
  - **yum update**



#### （2）启动MySQL服务

![image-20240903222056415](./Linux-Learning-Local.assets/image-20240903222056415.png)

- **systemctl status mysqld  查看mysql服务状态**
- **systemctl ==start mysqld==  启动mysql服务**

**说明：**

**可以设置开机时启动mysql服务，避免每次开机启动mysql**

- **systemctl ==enable== mysqld 开机启动mysql服务**

  

**前提：使用netstat命令，需要提前导入==yum install net-tools==**

****

- **netstat-tunlp  查看已经启动的服务**
- **netstat-tunlp|grepmysql**
- **ps -ef|grep mysql  查看mysql进程**



#### （3）查阅临时密码

<img src="./Linux-Learning-Local.assets/image-20240903222746403.png" alt="image-20240903222746403" style="zoom: 67%;" />



#### （4）修改密码，开放访问权限

![image-20240903222835076](./Linux-Learning-Local.assets/image-20240903222835076.png)

**登录MySQL，修改密码，开放访问权限**

- **mysql -uroot -p  登录mysql（使用临时密码登录）**

**修改密码**

- **set global validate_password_length=4;  设置密码长度最低位数**
- **set global validate_password_policy=LOW;  设置密码安全等级低，便于密码可以修改成root**
- **set password = password('root');  设置密码为root**

**==开启访问权限==**

- ```shell
  grant all on *.* to 'root'@'%' identified by'root'; #允许外部访问mysql
  ```

- **flush privileges; (刷新权限)** 



#### （5）测试

**记得==开放防火墙的3306端口==**

```shell
firewall-cmd --zone=public --add-port=3306/tcp --permanent #开发3306端口
firewall-cmd --reload #刷新
```



![image-20240903223218629](./Linux-Learning-Local.assets/image-20240903223218629.png)

<img src="./Linux-Learning-Local.assets/image-20240903230020929.png" alt="image-20240903230020929" style="zoom:50%;" />



### 6、安装Git

<img src="./Linux-Learning-Local.assets/image-20240904145219238.png" alt="image-20240904145219238" style="zoom:80%;" />

<img src="./Linux-Learning-Local.assets/image-20240904145252060.png" alt="image-20240904145252060" style="zoom:67%;" />

### 7、安装Maven

<img src="./Linux-Learning-Local.assets/image-20240904145324328.png" alt="image-20240904145324328" style="zoom: 80%;" />

**tar-zxvfapache-maven-3.5.4-bin.tar.gz-C/usr/local**

**vim/etc/profile  修改配置文件，加入如下内容**

- **export MAVEN_HOME=/usr/local/apache-maven-3.5.4**
- **export PATH=$JAVA_HOME/bin:$MAVEN_HOME/bin:$PATH**
- **source/etc/profile**

**mvn -version  查看maven版本**  



**==修改配置文件==内容如下**

**vim /usr/local/apache-maven-3.5.4/conf/settings.xml  **

**==指定Maven以后依赖保存的本地仓库==**

```shell
<localRepository>/usr/local/repo</localRepository> #指定Maven以后依赖保存的本地仓库
```



### 8、安装Nginx  

#### （1）前言

Nginx是一款卓越的高性能Web服务器，被广泛用于托管网站和应用程序。本文旨在为您提供详细的指南，帮助您在Linux系统上成功安装、配置和启动Nginx服务器。通过这一过程，您将了解如何将Nginx集成到您的系统中，以便轻松地托管您的网站和应用程序。



#### **（2）安装依赖项**

在开始安装Nginx之前，首先需要安装一些依赖项，以确保Nginx编译和运行正常。打开终端并执行以下命令：

```shell
yum install -y wget gcc-c++ pcre-devel zlib-devel openssl-devel
```

这将安装必要的工具和库，以支持Nginx的编译和运行。



#### **（3）下载Nginx**

从Nginx官网下载最新的稳定版本。您可以在<https://nginx.org/en/download.html>上找到最新版本的下载链接。

<img src="./Linux-Learning-Local.assets/image-20240905165019611.png" alt="image-20240905165019611" style="zoom:67%;" />

```shell
# 例如，下载Nginx 1.24.0版本
wget https://nginx.org/download/nginx-1.24.0.tar.gz
```



**创建一个文件夹** 

- cd /usr/local

- mkdir nginx

- cd nginx

  

**解压Nginx**

解压下载的Nginx源代码包：

```shell
tar -zxvf nginx-1.24.0.tar.gz -C /usr/local/nginx
```



**编译和安装**

进入解压后的Nginx目录并进行编译和安装：

```shell
# 切换到 Nginx 解压目录
cd /usr/local/nginx/nginx-1.24.0
# 编译前的配置和依赖检查,考虑到后续安装ssl证书(https)、http 添加两个模块
./configure --with-http_stub_status_module --with-http_ssl_module
# 编译安装
make && make install
```

Nginx安装完成后，默认自动创建 `/usr/local/nginx` 目录，并创建必要的文件和目录，包括配置文件、日志文件、HTML文件等。

![image-20240905165148247](./Linux-Learning-Local.assets/image-20240905165148247.png)



#### （4） 配置nginx环境变量

```shell
vim /etc/profile
```

```shell
export NGINX_HOME=/usr/local/nginx
export PATH=$PATH:$NGINX_HOME/sbin 
```



#### （5）重新加载配置文件

```shell
 source /etc/profile
```



#### （6） 启动Nginx

进入Nginx的安装目录：

```shell
cd /usr/local/nginx/sbin
```

然后，启动Nginx服务器：

```shell
./nginx
```

<img src="./Linux-Learning-Local.assets/image-20240905201004088.png" alt="image-20240905201004088" style="zoom: 50%;" />

您现在可以通过浏览器访问您的服务器的IP地址或域名来验证Nginx是否正常工作。

<img src="./Linux-Learning-Local.assets/image-20240905165429147.png" alt="image-20240905165429147" style="zoom:67%;" />



### 9、lrzsz ==图形化上传文件==工具(finallshell已自带)

```shell
#使用 rz命令进行图形化的文件上传
```

<img src="./Linux-Learning-Local.assets/image-20240903230629411.png" alt="image-20240903230629411" style="zoom:80%;" />

#### （1）使用==rz==命令进行==图形化==的文件上传

<img src="./Linux-Learning-Local.assets/image-20240903230848047.png" alt="image-20240903230848047" style="zoom:50%;" />



## 七、项目部署

### 1、手工部署-后端

#### （1）在IDEA中开发SpringBoot项目并打成jar包

<img src="./Linux-Learning-Local.assets/image-20240903232027851.png" alt="image-20240903232027851" style="zoom: 67%;" />

#### （2）将jar包上传到Linux服务器

<img src="./Linux-Learning-Local.assets/image-20240903232057598.png" alt="image-20240903232057598" style="zoom:67%;" />

#### （3）启动SpringBoot程序

![image-20240903232115960](./Linux-Learning-Local.assets/image-20240903232115960.png)

#### （4）检查防火墙，确保8080端口对外开放，访问SpringBoot项目

<img src="./Linux-Learning-Local.assets/image-20240903232135174.png" alt="image-20240903232135174" style="zoom:80%;" />

#### （5）改为后台运行SpringBoot程序，并将日志输出到日志文件

![image-20240903232154494](./Linux-Learning-Local.assets/image-20240903232154494.png)

**改为后台运行SpringBoot程序，并将日志输出到日志文件**

**目前程序运行的问题**

- **线上程序不会采用控制台霸屏的形式运行程序，而是将程序在后台运行**
- **线上程序不会将日志输出到控制台，而是输出到日志文件，方便运维查阅信息**



**nohup命令：英文全称nohangup（不挂起），用于不挂断地运行指定命令，退出终端不会影响程序的运行**

**语法格式：nohup Command [Arg...] [&]**

**参数说明：**

- **Command：要执行的命令**
- **Arg：一些参数，可以指定输出文件**
- **&：让命令在后台运行**

**举例：hello.log为日志文件**

```shell
nohupjava -jar springboot工程.jar &> hello.log &
```



**nohupjava -jar boot工程.jar &>hello.log& 后台运行java-jar命令，并将日志输出到hello.log文件**  



#### （6）停止SpringBoot程序

![image-20240903232638267](./Linux-Learning-Local.assets/image-20240903232638267.png)





### 2、Shell脚本自动部署-后端

![image-20240904143357477](./Linux-Learning-Local.assets/image-20240904143357477.png)

#### （1）安装Git

<img src="./Linux-Learning-Local.assets/image-20240904145219238.png" alt="image-20240904145219238" style="zoom:80%;" />

<img src="./Linux-Learning-Local.assets/image-20240904145252060.png" alt="image-20240904145252060" style="zoom:67%;" />

#### （2）安装Maven

<img src="./Linux-Learning-Local.assets/image-20240904145324328.png" alt="image-20240904145324328" style="zoom: 80%;" />

**tar-zxvfapache-maven-3.5.4-bin.tar.gz-C/usr/local**

**vim/etc/profile  修改配置文件，加入如下内容**

- **export MAVEN_HOME=/usr/local/apache-maven-3.5.4**
- **export PATH=$JAVA_HOME/bin:$MAVEN_HOME/bin:$PATH**
- **source/etc/profile**

**mvn -version  查看maven版本**  



**==修改配置文件==内容如下**

**vim /usr/local/apache-maven-3.5.4/conf/settings.xml  **

**==指定Maven以后依赖保存的本地仓库==**

```shell
<localRepository>/usr/local/repo</localRepository> #指定Maven以后依赖保存的本地仓库
```



#### （3）编写Shell脚本(拉取代码、编译、打包、启动)



**在/usr/local/sh目录下, 将shell脚本文件加入到该目录中**

![image-20240904150018801](./Linux-Learning-Local.assets/image-20240904150018801.png)

**shell脚本（需要根据自己的项目，==自定义配置==）**

- **==APP_NAME==**
- **存放Git拉取后的==项目位置==，cd /usr/local/helloworld**
- **启动项目的==jar包==和存放==实时日志文件==的位置即文件名，nohup java -jar helloworld-1.0-SNAPSHOT.jar &> helloworld.log &**

```sh
#!/bin/sh
echo =================================
echo  自动化部署脚本启动
echo =================================

echo 停止原来运行中的工程
APP_NAME=helloworld

tpid=`ps -ef|grep $APP_NAME|grep -v grep|grep -v kill|awk '{print $2}'`
if [ ${tpid} ]; then
    echo 'Stop Process...'
    kill -15 $tpid
fi
sleep 2
tpid=`ps -ef|grep $APP_NAME|grep -v grep|grep -v kill|awk '{print $2}'`
if [ ${tpid} ]; then
    echo 'Kill Process!'
    kill -9 $tpid
else
    echo 'Stop Success!'
fi

echo 准备从Git仓库拉取最新代码
cd /usr/local/helloworld

echo 开始从Git仓库拉取最新代码
git pull
echo 代码拉取完成

echo 开始打包
output=`mvn clean package -Dmaven.test.skip=true`

cd target

echo 启动项目
nohup java -jar helloworld-1.0-SNAPSHOT.jar &> helloworld.log &
echo 项目启动完成
```



**==可以遇到的问题：==**

- **`$'\r': 未找到命令`**：这通常是因为脚本文件中包含了 Windows 风格的换行符（`CRLF`）而不是 Unix 风格的换行符（`LF`）。Unix 系统要求换行符为 LF，而 Windows 使用 CRLF。如果脚本是从 Windows 环境中复制或编辑的，可能会出现这个问题。

  - 如果你的系统没有安装 `dos2unix`，你可以用 ==`sed` 命令==来修复：

  ```
  sed -i 's/\r$//' sky-take-out.sh
  ```

- **`语法错误: 未预期的文件结尾`**：这可能是因为文件末尾的换行符问题，或者脚本文件中有其他格式问题导致的。也有可能是因为有一些未闭合的结构，比如 `if` 语句没有正确结束。

  - 确保脚本中的每个 `if`、`for`、`while` 语句都有正确的结束标记。例如，确保 `if` 语句后面有 `fi`。



#### （4）为用户授予执行Shell脚本的权限

##### ①文件权限

![image-20240904150444220](./Linux-Learning-Local.assets/image-20240904150444220.png)

**==chmod==（英文全拼：changemode）命令是控制用户对文件的权限的命令**

- **Linux中的权限分为：读(r)、写(w)、执行(x)三种权限**
- **Linux的文件调用权限分为三级：==文件所有者==（Owner）、==用户组==（Group）、==其它用户==（OtherUsers）**
- **只有文件的==所有者和超级用户(root)==可以修改文件或目录的权限**
- **要执行ShelL脚本需要有对此脚本文件的==执行权限==，如果没有则不能执行**



##### ①为用户授权

<img src="./Linux-Learning-Local.assets/image-20240904151304576.png" alt="image-20240904151304576" style="zoom: 80%;" />

- **除了第一位使用==-或者d==来区分该文件时==目录还是文件==**
- **将之后的九位数，划分为三组，通过0~7(000~111)的八进制数来代表授予每组的权限**

- **注意：三位数字分别代表不同用户的权限**

  - **第1位表示==文件拥有者==的权限**
  - **第2位表示==同组用户==的权限**
  - **第3位表示==其他用户==的权限**

  

![image-20240904150725763](./Linux-Learning-Local.assets/image-20240904150725763.png)

<img src="./Linux-Learning-Local.assets/image-20240904151600417.png" alt="image-20240904151600417" style="zoom:80%;" />

#### （5）执行Shell脚本

<img src="./Linux-Learning-Local.assets/image-20240904151754547.png" alt="image-20240904151754547" style="zoom:80%;" />



#### （6）==设置静态ip==

**为了防止==每次重新启动虚拟机==，让ip地址发生变化，导致网站的ip地址不确定，需要设置虚拟机的ip为==静态ip==**

##### ①设置静态ip

```shell
vim /etc/sysconfig/network-scripts/ifcfg-ens33
```

![image-20240904151507650](./Linux-Learning-Local.assets/image-20240904151507650.png)

**==注意：修改后的静态ip、网关、DNS服务器的网段需要和此处保持一致，即192.168.138.xx==**

```shell
BOOTPROTO="static"  #使用静态IP地址，默认为dhcp
IPADDR="192.168.138.100" #设置的静态IP地址
NETMASK="255.255.255.0"  #子网掩码
GATEWAY="192.168.138.2"  #网关地址
DNS1="8.8.8.8"  #DNS服务器
```



##### ②重启网络服务

```shell
systemctl restart network
```

**==注意：重启完网络服务后ip地址已经发生了改变，此时FinalShell已经连接不上Linux系统，需要创建一个新连接才能连接到Linux。==**

![image-20240904152400011](./Linux-Learning-Local.assets/image-20240904152400011.png)





### 3、部署架构-前后端，客户端、主从数据库、Redis

<img src="./Linux-Learning-Local.assets/image-20240905202404025.png" alt="image-20240905202404025" style="zoom:80%;" />

<img src="./Linux-Learning-Local.assets/image-20240905202420884.png" alt="image-20240905202420884" style="zoom:50%;" />



#### （1）安装/配置/启停 Nginx  

##### **① 前言**

Nginx是一款卓越的高性能Web服务器，被广泛用于托管网站和应用程序。本文旨在为您提供详细的指南，帮助您在Linux系统上成功安装、配置和启动Nginx服务器。通过这一过程，您将了解如何将Nginx集成到您的系统中，以便轻松地托管您的网站和应用程序。



##### **② 安装依赖项**

在开始安装Nginx之前，首先需要安装一些依赖项，以确保Nginx编译和运行正常。打开终端并执行以下命令：

```shell
yum install -y wget gcc-c++ pcre-devel zlib-devel openssl-devel
```

这将安装必要的工具和库，以支持Nginx的编译和运行。



##### **③下载Nginx**

从Nginx官网下载最新的稳定版本。您可以在<https://nginx.org/en/download.html>上找到最新版本的下载链接。

<img src="./Linux-Learning-Local.assets/image-20240905165019611.png" alt="image-20240905165019611" style="zoom:67%;" />

```shell
# 例如，下载Nginx 1.24.0版本
wget https://nginx.org/download/nginx-1.24.0.tar.gz
```



**创建一个文件夹** 

- cd /usr/local

- mkdir nginx

- cd nginx

  

**解压Nginx**

解压下载的Nginx源代码包：

```shell
tar -zxvf nginx-1.24.0.tar.gz -C /usr/local/nginx
```



**编译和安装**

进入解压后的Nginx目录并进行编译和安装：

```shell
# 切换到 Nginx 解压目录
cd /usr/local/nginx/nginx-1.24.0
# 编译前的配置和依赖检查,考虑到后续安装ssl证书(https)、http 添加两个模块
./configure --with-http_stub_status_module --with-http_ssl_module
# 编译安装
make && make install
```

Nginx安装完成后，默认自动创建 `/usr/local/nginx` 目录，并创建必要的文件和目录，包括配置文件、日志文件、HTML文件等。

![image-20240905165148247](./Linux-Learning-Local.assets/image-20240905165148247.png)



##### ④ 配置nginx环境变量

```shell
vim /etc/profile
```

```shell
export NGINX_HOME=/usr/local/nginx
export PATH=$PATH:$NGINX_HOME/sbin 
```



##### ⑤ 重新加载配置文件

```shell
 source /etc/profile
```



##### ⑥ 启动Nginx

进入Nginx的安装目录：

```shell
cd /usr/local/nginx/sbin
```

然后，启动Nginx服务器：

```shell
./nginx
```

<img src="./Linux-Learning-Local.assets/image-20240905201004088.png" alt="image-20240905201004088" style="zoom: 50%;" />

您现在可以通过浏览器访问您的服务器的IP地址或域名来验证Nginx是否正常工作。

<img src="./Linux-Learning-Local.assets/image-20240905165429147.png" alt="image-20240905165429147" style="zoom:67%;" />


##### ==配置nginx.conf=>打开配置文件==

<img src="./Linux-Learning-Local.assets/image-20240905200715948.png" alt="image-20240905200715948" style="zoom:50%;" />

```shell
vi /usr/local/nginx/conf/nginx.conf
```

将端口号改成8089(随便挑个端口)，因为可能apeache占用80端口，apeache端口尽量不要修改，我们选择修改nginx端口。

将localhost修改为你服务器的公网ip地址。

![image-20240905175330977](./Linux-Learning-Local.assets/image-20240905175330977.png)

**nginx.conf**

```shell
#user  nobody;  #指定 Nginx 进程以哪个用户的身份运行，通常会设置为非特权用户以增强安全性。被注释掉了，默认运行用户可能是 nginx 或 www-data。
worker_processes  1;  #指定 Nginx 使用的工作进程数量。一般根据 CPU 核心数设置，1 是最基本的配置。

#error_log  logs/error.log;   #指定错误日志文件的位置和日志级别。被注释掉了，默认的错误日志级别和位置会被使用。
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;  #指定 Nginx 进程 ID 文件的位置。被注释掉了，默认位置可能是 /var/run/nginx.pid。


events {
    worker_connections  1024;  #每个工作进程最大可以打开的连接数。设置为 1024，这意味着 Nginx 可以同时处理最多 1024 个连接。
}


http {
    include       mime.types;  #包含 MIME 类型配置文件，以便为响应设置适当的 Content-Type。
    default_type  application/octet-stream;  #设置默认 MIME 类型为 application/octet-stream，通常用于未指定类型的文件。

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;  #启用高效的文件传输。
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;  #设置客户端与服务器之间的持久连接超时时间为 65 秒。

    #gzip  on;
	
	map $http_upgrade $connection_upgrade{  #配置 WebSocket 连接的升级机制。
		default upgrade;
		'' close;
	}

#使用upstream指令配置后端服务器组
	upstream webservers{  #定义了一个名为 webservers 的负载均衡后端服务器组
	#负载均衡

      #本地后端，8080端口
	  #server 127.0.0.1:8080 weight=90 ;

      #Linux部署后端
      server 192.168.88.129:9090 weight=90 ;

      #本地后端，9090端口
      #server 127.0.0.1:9090 weight=90 ;  

	  #server 127.0.0.1:8088 weight=10 ;
	}

    server {
        listen    80;  #监听 80 端口的 HTTP 请求
        server_name  localhost;  #指定外部访问的服务器名称为 localhost。

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {  #根路径配置，将请求的根路径指向 html/dist 目录，默认首页是 index.html 和 index.htm。
            root   html/dist;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # 反向代理,处理管理端发送的请求
        location /api/ {  #反向代理到 http://webservers/admin/
        		#rewrite ^/api/(.*)$ /$1 break;  #请求 /api/data 会被前端代理重写为 /data，然后在 Nginx 层直接转发到 http://webservers/admin/data。
			proxy_pass   http://webservers/admin/;
            #proxy_pass   http://webservers/admin/;
        }
		
		# 反向代理,处理用户端发送的请求
        location /user/ { #反向代理到 http://webservers/user/
            proxy_pass   http://webservers/user/;
        }
		
		# WebSocket
		location /ws/ {  #处理 WebSocket 连接，设置 proxy_http_version 1.1 和其他 WebSocket 特定的头部。
            proxy_pass   http://webservers/ws/;
			proxy_http_version 1.1;
			proxy_read_timeout 3600s;
			proxy_set_header Upgrade $http_upgrade;
			proxy_set_header Connection "$connection_upgrade";
        }

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}
```





##### ⑦ 停止Nginx

```shell
#寻找Nginx进程
ps -ef | grep nginx

#杀死Nginx进程
kill -9 78879
```



##### ⑧ 防火墙设置

如果您的系统启用了防火墙，需要**关闭防火墙**或者**==开发相应的端口==**

```shell
# 查看防火墙状态
systemctl status firewalld

# 关闭防火墙
systemctl stop firewalld

# 开机禁用防火墙
systemctl disable firewalld

#开放Nginx的80端口
firewall-cmd --zone=public --add-port=80/tcp --permanent
firewall-cmd --reload  #开放或者关闭端口后==需要执行立即生效命令
firewall-cmd --zone=public --list-ports  #查看开放的端口
```





#### （2）前端-Nginx部署

##### ①前端打包成dist

**终端输入，打包获得dist目录文件**

```shell
npm run build
```

<img src="./Linux-Learning-Local.assets/image-20240905201142120.png" alt="image-20240905201142120" style="zoom:50%;" />

<img src="./Linux-Learning-Local.assets/image-20240905201241901.png" alt="image-20240905201241901" style="zoom:50%;" />



##### 上传到服务端

<img src="./Linux-Learning-Local.assets/image-20240905201449911.png" alt="image-20240905201449911" style="zoom:50%;" />



##### ②WebSocket请求路径错误

**VUE_APP_SOCKET_URL = 'ws://192.168.88.130:80'** 

**这里是WebSocket的地址,Nginx会反向代理到后端,**
		**需要注意的是,这里的url==不能写为ws://192.168.88.129:9090/ws/==，否则会导致WebSocket连接失败，需要在使用的时候再去==拼接'/ws/'==，**

<img src="./Linux-Learning-Local.assets/image-20240905223422534.png" alt="image-20240905223422534" style="zoom:67%;" />

```shell
# Base api
VUE_APP_BASE_API = '/api'
# 统一前缀,'/api' http://localhost:8080/api

NODE_ENV = 'development'
VUE_APP_NODE_ENV = 'dev'

//后端服务的地址
#VUE_APP_URL = 'http://localhost:8080/admin'
VUE_APP_URL = 'http://192.168.88.129:9090/admin'

#VUE_APP_SOCKET_URL = 'ws://localhost:8080/ws/'

VUE_APP_SOCKET_URL = 'ws://192.168.88.130:80' #这里是WebSocket的地址,Nginx会反向代理到后端,
#需要注意的是,这里的url不能写为ws://192.168.88.129:9090/ws/，否则会导致WebSocket连接失败，需要在使用的时候再去拼接'/ws/'，

//VUE_APP_SOCKET_URL = 'ws://http://23ce4dbd.cpolar.cn/ws/'

VUE_CLI_BABEL_TRANSPILE_MODULES = true
# 删除权限 true/有
VUE_APP_DELETE_PERMISSIONS = true

```





## 八、(MySQL的==主从复制==)数据库的读写分离

### 1、介绍

![image-20240905103716596](./Linux-Learning-Local.assets/image-20240905103716596.png)



**MySQL主从复制是一个异步的复制过程，底层是基于Mysql数据库自带的==二进制日志功能==。就是一台或多台MySQL数据**
**库（==slave==，即从库）从另一台MySQL数据库（==master==，即主库）进行日志的==复制==然后再==解析日志并应用到自身==，最**
**终实现从库的数据和主库的数据保持一致。MySQL主从复制是MySQL数据库自带功能，无需借助第三方工具。**

**MySQL复制过程分成三步：**

- **master将改变记录到==二进制日志（binarylog)==**
- **slave将master的binarylog拷贝到它的==中继日志（relaylog）==**
  1. **通过开启I/O thread 线程从master主库中读取binlog，在写入slave从库的中继日志relaylog。**
  2. **在从库中在通过SQL thread线程解析日志，执行和主库一样的sql操作**
- **slave重做中继日志中的事件，将改变应用到自己的数据库中**



### 2、配置

#### （1）前置条件

![image-20240905104412444](./Linux-Learning-Local.assets/image-20240905104412444.png)

##### ①解决 VMware 克隆linux 网卡UUID重复问题

> 2019年04月06日
> 系统版本：CentOS Linux release 7.6.1810

**参考文档**

https://www.cnblogs.com/wayneliu007/p/10388417.html

------

当我们使用 VMware **克隆** linux 主机时会发生克隆主机和原主机网卡 UUID 重复的问题，这样会对网络通信产生影响。
只要保证每台主机的 UUID 独一无二即可，即为新的主机绑定新的 UUID。

1. **生成随机uuid号**

```bash
# uuidgen	
46269697-0bd5-4088-af92-337325daea9e
```

2. **替换UUID值**

```ini
# vi /etc/sysconfig/network-scripts/ifcfg-ens33

TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=none
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
DEVICE=ens33
ONBOOT=yes
IPV6_PRIVACY=no
IPADDR=192.168.0.11
PREFIX=24
GATEWAY=192.168.0.1
DNS1=192.168.0.1
DNS2=114.114.114.114
UUID=46269697-0bd5-4088-af92-337325daea9e
```

3. **重启网络服务**

```bash
# systemctl restart network
```

4. **验证查看**

此时新主机的网卡UUID值设置完毕，可以通过 **nmcli 命令**查看
查看网卡 UUID值

```delphi
# nmcli connection show
NAME   UUID                                  TYPE      DEVICE 
ens33  46269697-0bd5-4088-af92-337325daea9e  ethernet  ens33  
```

查看网卡 MAC

```makefile
# nmcli device show ens33
GENERAL.DEVICE:                         ens33
GENERAL.TYPE:                           ethernet
GENERAL.HWADDR:                         00:0C:29:BD:FC:FA
GENERAL.MTU:                            1500
GENERAL.STATE:                          100 (连接的)
GENERAL.CONNECTION:                     ens33
GENERAL.CON-PATH:                       /org/freedesktop/NetworkManager/ActiveConnection/3
WIRED-PROPERTIES.CARRIER:               开
IP4.ADDRESS[1]:                         192.168.0.11/24
IP4.GATEWAY:                            192.168.0.1
IP4.ROUTE[1]:                           dst = 192.168.0.0/24, nh = 0.0.0.0, mt = 100
IP4.ROUTE[2]:                           dst = 0.0.0.0/0, nh = 192.168.0.1, mt = 100
IP4.DNS[1]:                             192.168.0.1
IP4.DNS[2]:                             114.114.114.114
IP6.ADDRESS[1]:                         fe80::f5fc:c628:ab36:49a1/64
IP6.GATEWAY:                            --
IP6.ROUTE[1]:                           dst = fe80::/64, nh = ::, mt = 100
IP6.ROUTE[2]:                           dst = ff00::/8, nh = ::, mt = 256, table=255
```



#### （2）主库-Master

```shell
find / -name "my.cnf"
```

```shell
log-bin=mysql-bin  #[必须]启用二进制日志
server-id=100  #[必须]服务器唯一ID
```

```shell
systemctl restart mysqld
```

<img src="./Linux-Learning-Local.assets/image-20240905104635992.png" alt="image-20240905104635992" style="zoom: 67%;" />

<img src="./Linux-Learning-Local.assets/image-20240905104811911.png" alt="image-20240905104811911" style="zoom:80%;" />

<img src="./Linux-Learning-Local.assets/image-20240905105014235.png" alt="image-20240905105014235" style="zoom:80%;" />

```shell
GRANT REPLICATION SLAVE ON *.* to'xiaopeng'@'%'identified by'123456';

#报错就分开执行
CREATE USER 'xiaopeng'@'%' IDENTIFIED BY '123456';
GRANT REPLICATION SLAVE ON *.* TO 'xiaopeng'@'%';

```

注：上面SQL的作用是创建一个**用户**xiaoming，密码为Root@123456，并且给xia0ming用户授予**==REPLICATION SLAVE权限==**。常用于建立复制时所需要用到的用户权限，也就是**==slave必须被master授权，成为具有该权限的用户，才能通过该用户复制==**。



<img src="./Linux-Learning-Local.assets/image-20240905105346000.png" alt="image-20240905105346000" style="zoom: 80%;" />

**==由于主库的二进制日志文件和位置，会因为操作数据库发生变化，后续在从库中需要使用；==**

```shell
show master status; #由于主库的二进制日志文件和位置，会因为操作数据库发生变化，后续在从库中需要使用；
```



#### （3）从库-Slave

<img src="./Linux-Learning-Local.assets/image-20240905105700199.png" alt="image-20240905105700199" style="zoom: 67%;" />

<img src="./Linux-Learning-Local.assets/image-20240905105753248.png" alt="image-20240905105753248" style="zoom:80%;" />



```shell
find / -name "my.cnf"
```

```shell
server-id=101  #[必须]服务器唯一ID
```

```shell
systemctl restart mysqld
```

![image-20240905105812458](./Linux-Learning-Local.assets/image-20240905105812458.png)

```shell
change master to master_host='192.168.138.100',master_user='xiaopeng',master_password='123456',master_log_file='mysql-bin.000001',master_log_pos=439;
```

```shell
start slave;
```

**==注意==**

![image-20240905110339727](./Linux-Learning-Local.assets/image-20240905110339727.png)



<img src="./Linux-Learning-Local.assets/image-20240905110403499.png" alt="image-20240905110403499" style="zoom:80%;" />

```shell
show slave status\G
```



#### （4）注意事项

##### ①在从库中使用 show slave status; 时报错

**主从复制报错Fatal error:The slave I/O thread stops because master and slave have equal MySQL server ==UUIDs==；**

[主从复制报错Fatal error:The slave I/O thread stops because master and slave have equal MySQL server UUIDs；_fatal error: master and slave have equal mysql ser-CSDN博客](https://blog.csdn.net/cnds123321/article/details/117925881)

<img src="./Linux-Learning-Local.assets/image-20240905121523722.png" alt="image-20240905121523722" style="zoom:67%;" />

<img src="./Linux-Learning-Local.assets/image-20240905121542643.png" alt="image-20240905121542643" style="zoom: 67%;" />

<img src="./Linux-Learning-Local.assets/image-20240905121615376.png" alt="image-20240905121615376" style="zoom:67%;" />

<img src="./Linux-Learning-Local.assets/image-20240905121627663.png" alt="image-20240905121627663" style="zoom:67%;" />
