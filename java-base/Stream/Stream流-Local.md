# Stream流

## 一、体验Stream流的作用

![image-20250312135120500](Stream%E6%B5%81.assets/image-20250312135120500.png)

```java
package com.pyw.a46StreamDemo1;

import java.util.ArrayList;

public class StreamDemo1 {
    public static void main(String[] args) {
        /*
            创建集合添加元素，完成以下需求：
            1.把所有以“张”开头的元素存储到新集合中
            2.把“张”开头的，长度为3的元素再存储到新集合中
            3.遍历打印最终结果
        */
        ArrayList<String> list1 = new ArrayList<>();
        list1.add("张无忌");
        list1.add("周芷若");
        list1.add("赵敏");
        list1.add("张强");
        list1.add("张三丰");

        //stream流
        list1.stream().filter(name -> name.startsWith("张"))
                .filter(name -> name.length() == 3)
                .forEach(name -> System.out.println(name));


        //1.把所有以“张”开头的元素存储到新集合中
        ArrayList<String> list2 = new ArrayList<>();

        for (String s : list1) {
            if (s.startsWith("张")) {
                list2.add(s);
            }
        }

        //2.把“张”开头的，长度为3的元素再存储到新集合中
        ArrayList<String> list3 = new ArrayList<>();

        for (String s : list2) {
            if (s.length() == 3) {
                list3.add(s);
            }
        }

        //3.遍历打印最终结果
        System.out.println(list2);
        System.out.println(list3);

    }
}
```



## 二、Stream流的思想

![image-20250312140333076](Stream%E6%B5%81.assets/image-20250312140333076.png)





## 三、Stream流的作用和步骤

![image-20250312140505254](Stream%E6%B5%81.assets/image-20250312140505254.png)



![image-20250312140535912](Stream%E6%B5%81.assets/image-20250312140535912.png)



- 先得到一条Stream流（流水线），并把数据放上去
- 使用**中间方法**对流水线上的数据进行操作
- 使用**终结方法**对流水线上的数据进行操作



## 四、==_获取Stream流_==

![image-20250312140641479](Stream%E6%B5%81.assets/image-20250312140641479.png)



### 1、单列集合-Collection-_==list.stream()==_

```java
package com.pyw.a46StreamDemo1;


import java.util.ArrayList;
import java.util.Collections;
import java.util.stream.Stream;

public class StreamDemo2 {
    public static void main(String[] args) {
/*
        单列集合   default Stream<E> stream()       Collection中的默认方法
        双列集合      无      	 无法直接使用stream流
        数组  public static <T> Stream<T> stream(T[] array)     Arrays工具类中的静态方法
        一堆零散数据   public static<T> Stream<T> of(T... values)   Stream接口中的静态方法
*/

        //1.单列集合获取Stream流
        ArrayList<String> list = new ArrayList<>();
        Collections.addAll(list,"a","b","c","d","e","f");
        //获取到一条流水线，并把集合中的数据放到流水线上
        Stream<String> stream = list.stream();
        //使用终结方法打印一下流水线上的所有数据
        stream.forEach(str -> System.out.println(str));

        //也可以简写
        list.stream().forEach(str -> System.out.println(str));

    }
}
```



### 2、双列集合-Map-==_map.keySet.stream()_==

```java
package com.pyw.a46StreamDemo1;

import java.util.HashMap;

public class StreamDemo3 {
    public static void main(String[] args) {
        // 双列集合      无      无法直接使用stream流


        //1.创建双列集合
        HashMap<String,Integer> hm = new HashMap<>();
        //2.添加数据
        hm.put("aaa",111);
        hm.put("bbb",222);
        hm.put("ccc",333);
        hm.put("ddd",444);

        //3.第一种获取stream流 key
        hm.keySet().stream().forEach(s -> System.out.println(s));

        //4.第二种获取stream流 获取键值对对象entry
        hm.entrySet().stream().forEach(s-> System.out.println(s));
    }
}
```

**输出：**

```java
aaa
ccc
bbb
ddd
aaa=111
ccc=333
bbb=222
ddd=444
```



### 3、数组-_==Arrays.stream()==_

![image-20250312141606076](Stream%E6%B5%81.assets/image-20250312141606076.png)

```java
package com.pyw.a46StreamDemo1;

import java.util.Arrays;
import java.util.stream.Stream;

public class StreamDemo4 {
    public static void main(String[] args) {
        //数组 public static <T> Stream<T> stream(T[] array)        Arrays工具类中的静态方法

        //1.创建数组
        int[] arr1 = {1,2,3,4,5,6,7,8,9,10};

        String[] arr2 = {"a","b","c"};

        //2.获取stream流
        Arrays.stream(arr1).forEach(str -> System.out.println(str));
        System.out.println("============================");
        //引用数据类型-使用泛型接收
        Arrays.stream(arr2).forEach(str -> System.out.println(str));

        System.out.println("============================");
        //注意：
        //Stream接口中静态方法of的细节
        //方法的形参是一个可变参数，可以传递一堆零散的数据，也可以传递数组
        //但是数组必须是引用数据类型的，如果传递基本数据类型，是会把整个数组当做一个元素，放到Stream当中。
        Stream.of(arr1).forEach(str -> System.out.println(str));//[I@3b9a45b3

    }
}
```

==**注意：**==

- **Stream接口中静态方法of**的细节
- 方法的形参是**一个可变参数**，可以传递一堆零散的数据，也可以**传递数组**
- 但是数组必须是**引用数据类型**的，如果传递基本数据类型，**是会把整个数组当做一个元素**，放到Stream当中。



### 4、一堆零散数据-_==Stream.of(...)==_

==**注意：**==

- **Stream接口中静态方法of**的细节
- 方法的形参是**一个可变参数**，可以传递一堆零散的数据，也可以**传递数组**
- 但是数组必须是**引用数据类型**的，如果传递基本数据类型，**是会把整个数组当做一个元素**，放到Stream当中。

```java
package com.pyw.a46StreamDemo1;

import java.util.stream.Stream;

public class StreamDemo5 {
    public static void main(String[] args) {
        //一堆零散数据   public static<T> Stream<T> of(T... values)    Stream接口中的静态方法

        //类型必须一致
        Stream.of(1,2,3,4,5).forEach(str -> System.out.println(str));
        //引用数据类型
        Stream.of("a","b","c").forEach(str -> System.out.println(str));
    }
}
```



## 五、Stream流的==_中间方法_==

![image-20250312143318480](Stream%E6%B5%81.assets/image-20250312143318480.png)

### 0、==注意事项==

- 注意1：中间方法，返回新的Stream流，==**原来的Stream流只能使用一次**==，建议**使用==链式编程==**
- 注意2：修改Stream流中的数据，==**不会影响原来集合或者数组中的数据**==



### 1、_==filter==_-过滤

```java
package com.pyw.a46StreamDemo1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.function.Predicate;

public class StreamDemo6 {
    public static void main(String[] args) {
        /*
        TODO Stream 中间方法
            filter              过滤
            limit               获取前几个元素
            skip                跳过前几个元素

            注意1：中间方法，返回新的Stream流，原来的Stream流只能使用一次，建议使用链式编程
            注意2：修改Stream流中的数据，不会影响原来集合或者数组中的数据
        */

        ArrayList<String> list = new ArrayList<>();
        Collections.addAll(list, "张无忌", "周芷若", "赵敏", "张强", "张三丰", "张翠山", "张良", "王二麻子", "谢广坤");

        //filter   过滤  把张开头的留下，其余数据过滤不要
        list.stream().filter(new Predicate<String>() {
            @Override
            public boolean test(String s) {
                //如果返回值为true，表示当前数据留下
                //如果返回值为false，表示当前数据舍弃不要
                return s.startsWith("张");
            }
        }).forEach(s -> System.out.println(s));

        //简化写法
        //如果返回值为true，表示当前数据留下
        //如果返回值为false，表示当前数据舍弃不要
        list.stream().filter(s -> s.startsWith("张")).forEach(s -> System.out.println(s));


        System.out.println("=============");
        //limit获取前几个元素
        list.stream().limit(2).forEach(s -> System.out.println(s));
        System.out.println("=============");
        //skip跳过前几个元素
        list.stream().skip(3).forEach(s -> System.out.println(s));

        //课堂练习：
        //"张强", "张三丰", "张翠山"
        System.out.println("=============");
        list.stream().skip(3).limit(3).forEach(s -> System.out.println(s));

    }
}
```



### 2、_==limit==_-获取前几个元素

```java
System.out.println("=============");
//limit获取前几个元素
list.stream().limit(2).forEach(s -> System.out.println(s));
```



### 3、_==skip==_-跳过前几个元素

```java
System.out.println("=============");
//skip跳过前几个元素
list.stream().skip(3).forEach(s -> System.out.println(s));

//课堂练习：
//获取"张强", "张三丰", "张翠山"
System.out.println("=============");
list.stream().skip(3).limit(3).forEach(s -> System.out.println(s));
//或者
list.stream().limit(6).skip(3).forEach(s -> System.out.println(s));
```



### 4、_==distinct==_-元素去重

**依赖(==hashCode和equals方法==)**

- 因为**底层是使用==hashSet==去重的**，所以如果使用的是**自定义对象**如Student需要**重写hashCode和equals方法**

```java
package com.pyw.a46StreamDemo1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.stream.Stream;

public class StreamDemo7 {
    public static void main(String[] args) {
        /*
            distinct            元素去重，依赖(hashCode和equals方法)
            concat              合并a和b两个流为一个流

            注意1：中间方法，返回新的Stream流，原来的Stream流只能使用一次，建议使用链式编程
            注意2：修改Stream流中的数据，不会影响原来集合或者数组中的数据
        */

        ArrayList<String> list1 = new ArrayList<>();
        Collections.addAll(list1, "张无忌","张无忌","张无忌", "张强","张无忌", "张三丰", "张翠山", "张良", "王二麻子", "谢广坤");


        ArrayList<String> list2 = new ArrayList<>();
        Collections.addAll(list2, "周芷若", "赵敏");

        //distinct 去重
        //基于hashcode 和equals 如果是自定义封装对象需要重写这两个方法
        list1.stream().distinct().forEach(s -> System.out.println(s));

        System.out.println("=======");
        //concat 合并
        //注：最好使用一个类型，如果不一致使用a b共同的父类
        Stream.concat(list1.stream(),list2.stream()).forEach(s -> System.out.println(s));
    }
}
```



### 5、_==contact==_-合并两个流为一个流

```java
System.out.println("=======");
//concat 合并
//注：最好使用一个类型，如果不一致使用a b共同的父类
Stream.concat(list1.stream(),list2.stream()).forEach(s -> System.out.println(s));
```



### 6、_==map==_-转换数据类型

```java
package com.pyw.a46StreamDemo1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.function.Function;

public class StreamDemo8 {
    public static void main(String[] args) {
        /*
            //TODO map                 转换流中的数据类型

            注意1：中间方法，返回新的Stream流，原来的Stream流只能使用一次，建议使用链式编程
            注意2：修改Stream流中的数据，不会影响原来集合或者数组中的数据
        */

        ArrayList<String> list = new ArrayList<>();
        Collections.addAll(list, "张无忌-15", "周芷若-14", "赵敏-13", "张强-20", "张三丰-100", "张翠山-40", "张良-35", "王二麻子-37", "谢广坤-41");
        //需求：只获取里面的年龄并进行打印
        //String->int

        //第一个类型：流中原本的数据类型
        //第二个类型：要转成之后的类型

        //apply的形参s：依次表示流里面的每一个数据
        //返回值：表示转换之后的数据

        //当map方法执行完毕之后，流上的数据就变成了整数
        //所以在下面forEach当中，s依次表示流里面的每一个数据，这个数据现在就是整数了
        list.stream().map(new Function<String, Object>() {
            @Override
            public Integer apply(String s) {
                //按照-切割切割后0索引存储-左边的数据，1索引存储-右边的数据
                String[] split = s.split("-");
                Integer i = Integer.valueOf(split[1]);
                return i;
            }
        }).forEach(s -> System.out.println(s));
        

        System.out.println("==========");
        //简化
        list.stream().map(s -> Integer.valueOf(s.split("-")[1])).forEach(s -> System.out.println(s));
    }
}
```





## 六、Stream流的==_终结方法_==

![image-20250312145014704](Stream%E6%B5%81.assets/image-20250312145014704.png)

###   1、_==forEach==_-遍历

```java
package com.pyw.a46StreamDemo1;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.function.Consumer;
import java.util.function.IntFunction;

public class StreamDemo9 {
    public static void main(String[] args) {
        /*
            //TODO Stream流中间方法
            void forEach(Consumer action)           遍历
            long count()                            统计
            toArray()                               收集流中的数据，放到数组中
       */

        ArrayList<String> list = new ArrayList<>();
        Collections.addAll(list, "张无忌", "周芷若", "赵敏", "张强", "张三丰", "张翠山", "张良", "王二麻子", "谢广坤");


        //对每一个数据进行操作
        //Consumer的泛型：表示流中数据的类型
        //accept方法的形参s：依次表示流里面的每一个数据
        //方法体：对每一个数据的处理操作（打印）
        //返回值为void，所以是终结方法了
        System.out.println("====遍历====");
        list.stream().forEach(new Consumer<String>() {
            @Override
            public void accept(String s) {
                System.out.println(s);
            }
        });

        list.stream().forEach(s -> System.out.println(s));


        //统计
        System.out.println("====统计====");
        long count = list.stream().count();
        System.out.println(count);

        //toArray把结果放到数组中
        //toArray方法的参数的作用：负责创建一个指定类型的数组
        //toArray方法的底层，会一次得到流里面每一个数组，并把他放到数组中
        //toArray方法的返回值，是一个装着流里面所有数组的数组
        //IntFunction的泛型：具体类型的数组
        //apply的形参：流中数据的个数，要跟数组的长度保持一致
        //apply的返回值：具体类型的数组
        //方法体：就是创建数组
        //value：流里面的数组的长度是多少value就是多少
        System.out.println("====toArray把结果放到数组中====");
        String[] arr = list.stream().toArray(new IntFunction<String[]>() {
            @Override
            public String[] apply(int value) {
                return new String[value];
            }
        });
        System.out.println(Arrays.toString(arr));

        System.out.println("====toArray把结果放到数组中(Lambda)====");
        //Lambda表达式
        String[] arr2 = list.stream().toArray(len -> new String[len]);
        System.out.println(Arrays.toString(arr2));
    }
}
```



###   2、_==count==_-统计

```java
//统计
System.out.println("====统计====");
long count = list.stream().count();
System.out.println(count);
```



###   3、_==toArray==_-收集数据转为数组



- ![image-20250312150058988](Stream%E6%B5%81.assets/image-20250312150058988.png)
  - toArray把结果放到数组中
  - toArray方法的参数的作用：**负责创建一个指定类型的数组**
  - toArray方法的**底层，会一次得到流里面每一个数组，并把他放到数组中**
  - toArray方法的返回值，是一个装着流里面所有数组的数组
  - **IntFunction的泛型**：具体类型的数组
  - apply的形参：流中数据的个数，要跟数组的长度保持一致
  - apply的返回值：具体类型的数组
  - 方法体：就是创建数组
  - **value：流里面的数组的长度是多少value就是多少**

```java
//toArray把结果放到数组中
//toArray方法的参数的作用：负责创建一个指定类型的数组
//toArray方法的底层，会一次得到流里面每一个数组，并把他放到数组中
//toArray方法的返回值，是一个装着流里面所有数组的数组
//IntFunction的泛型：具体类型的数组
//apply的形参：流中数据的个数，要跟数组的长度保持一致
//apply的返回值：具体类型的数组
//方法体：就是创建数组
//value：流里面的数组的长度是多少value就是多少
System.out.println("====toArray把结果放到数组中====");
String[] arr = list.stream().toArray(new IntFunction<String[]>() {
    @Override
    public String[] apply(int value) {
        return new String[value];
    }
});
System.out.println(Arrays.toString(arr));

System.out.println("====toArray把结果放到数组中(Lambda)====");
//Lambda表达式
String[] arr2 = list.stream().toArray(len -> new String[len]);
System.out.println(Arrays.toString(arr2));
```



###   4、_==collect==_-收集数据转为集合

```java
package com.pyw.a46StreamDemo1;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class StreamDemo10 {
    public static void main(String[] args) {
        /*
            collect(Collector collector)   收集流中的数据，放到集合中 (List Set Map)

            注意点：
                如果我们要收集到Map集合当中，键不能重复，否则会报错
       */

        ArrayList<String> list = new ArrayList<>();
        Collections.addAll(list, "张无忌-男-15", "周芷若-女-14", "赵敏-女-13", "张强-男-20",
                "张三丰-男-100", "张翠山-男-40", "张良-男-35", "王二麻子-男-37", "谢广坤-男-41");

        //收集List集合当中
        //需求：把所有的男性收集起来
        //List集合不去重
        List<String> newList1 = list.stream()
                .filter(s -> "男".equals(s.split("-")[1]))
                .collect(Collectors.toList());
        System.out.println(newList1);

        //收集到Set集合当中
        //需求：把所有的男性收集起来
        //HashSet集合去重
        Set<String> newList2 = list.stream()
                .filter(s -> "男".equals(s.split("-")[1]))
                .collect(Collectors.toSet());
        System.out.println(newList2);

        //收集到Map集合当中
        //需求：把所有的男性收集起来
        //键：姓名，值年龄
        //HashSet集合去重
        Map<String, Integer> newMap = list.stream()
                .filter(s -> "男".equals(s.split("-")[1]))
                /*
                * toMap:参数一表示键的生成规则
                *       参数二表示值的生成规则
                *
                * 参数一：
                *       funcation泛型一：表示流中的每一个数据的类型
                *                泛型二：表示Map集合中键的数据类型
                *       方法apply形参：一次表示流里面的每一个数据
                *               方法体：生成键的代码
                *               返回值：map集合键的类型
                * 参数二：
                *       funcation泛型一：表示流中的每一个数据的类型
                *                泛型二：表示Map集合中值的数据类型
                *       方法apply形参：一次表示流里面的每一个数据
                *               方法体：生成值的代码
                *               返回值：map集合值的类型
                *
                 */
                .collect(Collectors.toMap(new Function<String, String>() {
                    @Override
                    public String apply(String s) {
                        System.out.println(s.split("-")[0]);
                        return s.split("-")[0];
                    }
                }, new Function<String, Integer>() {
                    @Override
                    public Integer apply(String s) {
                        return Integer.valueOf(s.split("-")[2]);
                    }
                }));

        //Lambda简写
        Map<String, Integer> newMap2 = list.stream()
                .filter(s -> "男".equals(s.split("-")[1]))
                .collect(Collectors.toMap(
                        s -> s.split("-")[0],
                        s -> Integer.valueOf(s.split("-")[2])));
        System.out.println(newMap);

        System.out.println(newMap2);

    }
}
```



#### （1）收集到==List集合==-_==Collectors.toList()==_

```java
ArrayList<String> list = new ArrayList<>();
Collections.addAll(list, "张无忌-男-15", "周芷若-女-14", "赵敏-女-13", "张强-男-20",
                   "张三丰-男-100", "张翠山-男-40", "张良-男-35", "王二麻子-男-37", "谢广坤-男-41");

//收集List集合当中
//需求：把所有的男性收集起来
//List集合不去重
List<String> newList1 = list.stream()
    .filter(s -> "男".equals(s.split("-")[1]))
    .collect(Collectors.toList());  //调用Collectors类的toList方法，收集List集合
System.out.println(newList1);
```

![image-20250312151616697](Stream%E6%B5%81.assets/image-20250312151616697.png)

![image-20250312151731706](Stream%E6%B5%81.assets/image-20250312151731706.png)



#### （2）收集到Set集合-_==Collectors.toSet()==_

```java
//收集到Set集合当中
//需求：把所有的男性收集起来
//HashSet集合去重
Set<String> newList2 = list.stream()
    .filter(s -> "男".equals(s.split("-")[1]))
    .collect(Collectors.toSet());
System.out.println(newList2);
```

![image-20250312151923731](Stream%E6%B5%81.assets/image-20250312151923731.png)



#### （3）收集到==Map集合==-_==Collectors.toMap()==_

**注意点：如果我们要收集到Map集合当中，==键不能重复==，否则会报错**

- ![image-20250312152016351](Stream%E6%B5%81.assets/image-20250312152016351.png)
  - toMap
    - 参数一表示**键的生成规则**
    - 参数二表示**值的生成规则**
  - 参数一：
    - funcation **泛型一：表示流中的每一个数据的类型**
    - 泛型二：表示Map集合中**键的数据类型**
    - 方法apply形参：一次表示流里面的每一个数据
    - 方法体：生成键的代码
    - 返回值：**map集合键的类型**
  - 参数二：
    - funcation泛型一：表示流中的每一个数据的类型
    - 泛型二：表示Map集合中**值**的数据类型
    - 方法apply形参：一次表示流里面的每一个数据
    - 方法体：生成值的代码
    - 返回值：map集合**值的类型**

```java
        //收集到Map集合当中
        //需求：把所有的男性收集起来
        //键：姓名，值年龄
        //HashSet集合去重
        Map<String, Integer> newMap = list.stream()
                .filter(s -> "男".equals(s.split("-")[1]))
                /*
                * toMap:参数一表示键的生成规则
                *       参数二表示值的生成规则
                *
                * 参数一：
                *       funcation泛型一：表示流中的每一个数据的类型
                *                泛型二：表示Map集合中键的数据类型
                *       方法apply形参：一次表示流里面的每一个数据
                *               方法体：生成键的代码
                *               返回值：map集合键的类型
                * 参数二：
                *       funcation泛型一：表示流中的每一个数据的类型
                *                泛型二：表示Map集合中值的数据类型
                *       方法apply形参：一次表示流里面的每一个数据
                *               方法体：生成值的代码
                *               返回值：map集合值的类型
                *
                 */
                .collect(Collectors.toMap(new Function<String, String>() {
                    @Override
                    public String apply(String s) {
                        System.out.println(s.split("-")[0]);
                        return s.split("-")[0];
                    }
                }, new Function<String, Integer>() {
                    @Override
                    public Integer apply(String s) {
                        return Integer.valueOf(s.split("-")[2]);
                    }
                }));

        //Lambda简写
        Map<String, Integer> newMap2 = list.stream()
                .filter(s -> "男".equals(s.split("-")[1]))
                .collect(Collectors.toMap(
                        s -> s.split("-")[0],
                        s -> Integer.valueOf(s.split("-")[2])));
        System.out.println(newMap);

        System.out.println(newMap2);
```



## 七、小结

![image-20250312151233227](Stream%E6%B5%81.assets/image-20250312151233227.png)



## 八、综合练习

### 1、数据过滤

![image-20250312152514400](Stream%E6%B5%81.assets/image-20250312152514400.png)

```java
package com.pyw.a46StreamDemo1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class StreamTest1 {
    public static void main(String[] args) {
        /*
            把1~10添加进集合，过滤奇数，只留下偶数将结果保存起来
         */
        ArrayList<Integer> list = new ArrayList<>();
        Collections.addAll(list,1,2,3,4,5,6,7,8,9,10);
        List<Integer> list1 = list.stream()
                .filter(i -> i % 2 == 0)
                .collect(Collectors.toList());
        System.out.println(list1);
    }
}
```



### 2、字符串过滤并收集

![image-20250312152539568](Stream%E6%B5%81.assets/image-20250312152539568.png)

```java
package com.pyw.a46StreamDemo1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Map;
import java.util.stream.Collectors;

public class StreamTest2 {
    public static void main(String[] args) {
        /*
             在集合中保留年龄大于等于24岁的人，并存到map集合中
             姓名为键，年龄为值
             集合添加"zhangsan, 23","lisi, 24","wangwu, 25"

         */
        ArrayList<String> list = new ArrayList<>();
        Collections.addAll(list,"zhangsan, 23","lisi, 24","wangwu, 25");

        Map<String, Integer> newMap = list.stream()
                .filter(s -> Integer.valueOf(s.split(", ")[1]) >= 24)
                .collect(Collectors.toMap(
                        s -> s.split(", ")[0],
                        s -> Integer.valueOf(s.split(", ")[1])));
        System.out.println(newMap);
    }
}
```



### 3、==自定义对象过滤==并收集-map

![image-20250312152652037](Stream%E6%B5%81.assets/image-20250312152652037.png)

```java
package com.pyw.a46StreamDemo1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class StreamTest3 {
    public static void main(String[] args) {
        /*
        //TODO 将两个集合合并后再转为自定义封装对象练习
        现在有两个ArrayList集合，分别存储6名男演员的名字和年龄以及6名女演员的名字和年龄。
        姓名和年龄中间用逗号隔开。
        比如：张三,23
        要求完成如下的操作：
        1，男演员只要名字为3个字的前两人
        2，女演员只要姓杨的，并且不要第一个
        3，把过滤后的男演员姓名和女演员姓名合并到一起
        4，将上一步的演员信息封装成Actor对象。
        5，将所有的演员对象都保存到List集合中。
        备注：演员类Actor，属性有：name，age

        男演员：  "蔡坤坤,24" , "叶齁咸,23", "刘不甜,22", "吴签,24", "谷嘉,30", "肖梁梁,27"
        女演员：  "赵小颖,35" , "杨颖,36", "高元元,43", "张天天,31", "刘诗,35", "杨小幂,33"
      */
        ArrayList<String> actor = new ArrayList<>();
        Collections.addAll(actor,"蔡坤坤,24" , "叶齁咸,23", "刘不甜,22", "吴签,24", "谷嘉,30", "肖梁梁,27");

        ArrayList<String> actress = new ArrayList<>();
        Collections.addAll(actress,"赵小颖,35" , "杨颖,36", "高元元,43", "张天天,31", "刘诗,35", "杨小幂,33");

        //1，男演员只要名字为3个字的前两人
        int count = 0;
        List<String> newActor = actor.stream()
                //获取名字为三个字
                .filter(s -> s.split(",")[0].length() == 3)
                //获取前两个数据
                .limit(2)
                .collect(Collectors.toList());
        System.out.println(newActor);

        List<String> newActress = actress.stream()
                //获取名字为杨开头的
                .filter(s -> s.startsWith("杨"))
                //获取第一个数据
                .skip(1)
                .collect(Collectors.toList());
        System.out.println(newActress);

        //3，把过滤后的男演员姓名和女演员姓名合并到一起
        List<Actor> actorList = Stream.concat(newActor.stream(), newActress.stream())
            	//4，类型转换-String -> Actor 将上一步的演员信息封装成Actor对象。
                .map(s -> new Actor(s.split(",")[0], Integer.valueOf(s.split(",")[1])))
            	//5，将所有的演员对象都保存到List集合中。
                .collect(Collectors.toList());
        System.out.println(actorList);
    }
}
```

**Actor演员类**

```java
package com.pyw.a46StreamDemo1;

public class Actor {
    private String name;

    private Integer age;

    public Actor() {
    }

    public Actor(String name, Integer age) {
        this.name = name;
        this.age = age;
    }

	//get set...

    @Override
    public String toString() {
        return "Actor{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```

