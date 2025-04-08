# 集合

![image-20250307214125063](%E9%9B%86%E5%90%88.assets/image-20250307214125063.png)

## 一、集合存储数据类型的特点

![image-20250307204320821](%E9%9B%86%E5%90%88.assets/image-20250307204320821.png)

![image-20250307204404476](%E9%9B%86%E5%90%88.assets/image-20250307204404476.png)

![image-20250307212449477](%E9%9B%86%E5%90%88.assets/image-20250307212449477.png)

Java 集合（`Collection` 和 `Map` 体系）用于存储和管理对象，具有以下特点：

1. **存储对象的类型**：
   - **单列集合（Collection）**：如 `List`、`Set` 存储单个对象元素。
   - **双列集合（Map）**：如 `HashMap` **存储键值对**（`key-value`）。
2. **数据结构灵活**：
   - `List` **允许重复元素**，支持索引访问（如 `ArrayList`）。
   - `Set` **不允许重复元素**，通常不保证顺序（如 `HashSet`）。
   - `Map` 使用键值对存储，**键唯一**，值可以重复（如 `HashMap`、`TreeMap`）。
3. **动态扩展**：
   - 集合的大小可以**动态变化**，无需预定义容量（不像数组固定大小）。
   - 例如，`ArrayList` 自动扩容，`HashMap` 也会根据负载因子扩展。
4. **数据操作便捷**：
   - 提供丰富的方法，如添加（`add()`）、删除（`remove()`）、查找（`contains()`）。
   - `Map` 提供 `put()`、`get()`、`remove()` 方法，支持高效查找。
5. **支持泛型**：
   - 集合支持泛型，如 `List` &lt;String&gt;，避免类型转换，提高代码安全性。





## 二、集合和数组的对比

![image-20250307204443960](%E9%9B%86%E5%90%88.assets/image-20250307204443960.png)

集合的优势：

- **长度可变**
- **添加数据的时候不需要考虑索引，==默认将数据添加到末尾==**

#### （1）**集合和数组的对比**

| 特性             | **集合（Collection/Map）**                                   | **数组（Array）**                  |
| ---------------- | ------------------------------------------------------------ | ---------------------------------- |
| **存储类型**     | 只能存储引用数据类型（对象）                                 | 可存储基本数据类型和对象           |
| **数据结构**     | 动态结构，可自动扩展                                         | 静态结构，大小固定                 |
| **是否允许重复** | `List` 允许重复，`Set` 不允许                                | 允许重复                           |
| **是否有索引**   | `List` 支持索引，`Set`、`Map` 不支持                         | 有索引，可通过索引访问             |
| **增删效率**     | `LinkedList` 插入/删除快，`ArrayList` 较慢                   | 需手动移动元素，效率较低           |
| **查找效率**     | `HashSet`、`HashMap` 查找快（基于哈希）                      | 需要遍历或索引访问                 |
| **存储方式**     | `List` 线性存储，`Map` 基于哈希表或树                        | 线性存储                           |
| **线程安全性**   | `HashMap`、`ArrayList` 线程不安全（可用 `ConcurrentHashMap`、`Vector`） | 数组本身线程不安全                 |
| **适用场景**     | 适用于存储大量数据，支持动态扩展                             | 适用于固定大小数据存储，访问速度快 |

#### （2）**总结**

- **数组** 适用于**少量固定数据**、高效索引访问的场景，如存储基本数据类型。
- **集合** 适用于**动态数据存储**，特别是当元素数量不固定或需要执行插入、删除、去重等操作时。



## 三、集合的体系结构

![image-20250307215451531](%E9%9B%86%E5%90%88.assets/image-20250307215451531.png)





## 四、==_数据结构_==

### 1、概述

![image-20250308105651145](%E9%9B%86%E5%90%88.assets/image-20250308105651145.png)

![image-20250308105745833](%E9%9B%86%E5%90%88.assets/image-20250308105745833.png)



### 2、常见的数据结构

![image-20250308105844869](%E9%9B%86%E5%90%88.assets/image-20250308105844869.png)

![image-20250308163850928](%E9%9B%86%E5%90%88.assets/image-20250308163850928.png)



### 3、栈-Stack

![image-20250308105935254](%E9%9B%86%E5%90%88.assets/image-20250308105935254.png)



![image-20250308110013276](%E9%9B%86%E5%90%88.assets/image-20250308110013276.png)

![image-20250308110032839](%E9%9B%86%E5%90%88.assets/image-20250308110032839.png)

### 4、队列-Queue

![image-20250308110148870](%E9%9B%86%E5%90%88.assets/image-20250308110148870.png)

![image-20250308110226196](%E9%9B%86%E5%90%88.assets/image-20250308110226196.png)



### 5、数组-Array

![image-20250308110455051](%E9%9B%86%E5%90%88.assets/image-20250308110455051.png)



### 6、链表-LinkedList

![image-20250308110618901](%E9%9B%86%E5%90%88.assets/image-20250308110618901.png)



#### （1）创建链表的过程

##### ①尾插法

![image-20250308110807660](%E9%9B%86%E5%90%88.assets/image-20250308110807660.png)



#### （2）增删过程

##### ①插入

![image-20250308111005958](%E9%9B%86%E5%90%88.assets/image-20250308111005958.png)

##### ②删除

![image-20250308110932871](%E9%9B%86%E5%90%88.assets/image-20250308110932871.png)



#### （3）双向链表

![image-20250308111254715](%E9%9B%86%E5%90%88.assets/image-20250308111254715.png)

![image-20250308111336546](%E9%9B%86%E5%90%88.assets/image-20250308111336546.png)







### 7、二叉树-Tree

####  （1）概述

![image-20250308164336133](%E9%9B%86%E5%90%88.assets/image-20250308164336133.png)

##### ①父子节点关系

![image-20250308163927613](%E9%9B%86%E5%90%88.assets/image-20250308163927613.png)

##### ②节点的数据结构

![image-20250308164043643](%E9%9B%86%E5%90%88.assets/image-20250308164043643.png)



##### ③树的==度==

![image-20250308164205884](%E9%9B%86%E5%90%88.assets/image-20250308164205884.png)



##### ④树高

![image-20250308164248460](%E9%9B%86%E5%90%88.assets/image-20250308164248460.png)





#### （2）==遍历方式==

![image-20250308165159212](%E9%9B%86%E5%90%88.assets/image-20250308165159212.png)

##### ①前序遍历

![image-20250308164946158](%E9%9B%86%E5%90%88.assets/image-20250308164946158.png)

##### ②==中序遍历==

![image-20250308165056545](%E9%9B%86%E5%90%88.assets/image-20250308165056545.png)

##### ③后序遍历

![image-20250308165113087](%E9%9B%86%E5%90%88.assets/image-20250308165113087.png)

##### ④层序遍历

![image-20250308165130942](%E9%9B%86%E5%90%88.assets/image-20250308165130942.png)



#### （3）BST-==二叉查找树==(二叉排序、搜索树)

##### 概述

二叉搜索树（**Binary Search Tree, ==BST==**）在很多场景下能高效地支持查找、插入和删除操作

![image-20250308164549568](%E9%9B%86%E5%90%88.assets/image-20250308164549568.png)



##### ①添加节点

![image-20250308164638939](%E9%9B%86%E5%90%88.assets/image-20250308164638939.png)

##### ②查找节点

![image-20250308164731038](%E9%9B%86%E5%90%88.assets/image-20250308164731038.png)



##### ③==弊端==-不平衡

![image-20250308165447674](%E9%9B%86%E5%90%88.assets/image-20250308165447674.png)

二叉树虽然在很多场景下是高效的数据结构，但也存在一些弊端，主要包括以下几点：

1. **不平衡问题**
   - 如果插入或删除操作没有进行有效的平衡处理，二叉树可能会变得**极不平衡**，==**退化成类似链表的结构**==。这种情况下，搜索、插入和删除操作的时间复杂度会**从理想的 O(log n) 降为 O(n)** 。
2. **额外的空间开销**
   - 每个节点通常需要存储左右子节点的指针，这在存储空间上会有一定的额外开销，尤其是在节点数据量较小时，这种指针占用可能显得比较浪费。
3. **实现和维护复杂度**
   - 为了保证树的平衡性（比如实现 AVL 树、红黑树等自平衡二叉树），需要设计并实现旋转、平衡因子调整等复杂操作。这样一来，代码实现和调试的难度都会增加。
4. **删除操作的复杂性**
   - 当删除一个有两个子节点的节点时，需要找到其后继（或前驱）节点来替换，这个过程较为繁琐，而且在平衡树中，还可能涉及额外的旋转和重新平衡操作。
5. **对某些操作不够友好**
   - 在某些应用场景下，二叉树并不是最优的选择。例如，频繁需要查找范围内数据或排序时，平衡二叉搜索树的效率可能**不如 B 树**等更**适合磁盘存储**的数据结构。
6. **递归调用的潜在风险**
   - 很多 BST 的实现依赖递归进行查找或遍历，当树的深度非常大时，递归调用可能导致栈溢出问题，需要特别设计非递归算法来规避这一风险。

这些弊端促使人们在不同场景下选择更合适的数据结构或对二叉树进行改进（如使用自平衡机制），以达到更高效的性能和更低的维护成本。



#### （4）==平衡二叉树==

##### ①概述

平衡二叉树是一种自我调整的二叉搜索树，其主要目标是通过保持**左右子树高度接近（==任意节点的高度差不超过1==）**，从而确保树的高度保持在 O(log n) 级别，以提高查找、插入和删除等操作的效率。下面详细介绍一下平衡二叉树的主要特点、常见类型以及它们的优缺点。

![image-20250308170424753](%E9%9B%86%E5%90%88.assets/image-20250308170424753.png)

![image-20250308170445787](%E9%9B%86%E5%90%88.assets/image-20250308170445787.png)



###### 1. 定义与目标

平衡二叉树要求每个节点的左右子树高度差（平衡因子）在一个允许的范围内（例如 AVL 树要求差值不超过 1）。通过这种限制，平衡二叉树能有效避免普通二叉搜索树在最坏情况下退化成链表的情况，从而保证操作的时间复杂度保持在 O(log n) 以内。

###### 2. 常见类型

- **AVL 树**
  - **特点**：AVL 树是一种严格平衡的二叉树，每个节点的左右子树高度差最多为 1。
  - **优点**：查找操作非常高效，因为树的高度较低；平衡性更强。
  - **缺点**：在插入和删除时，可能需要频繁进行旋转操作来恢复平衡，增加了实现和运行时的复杂度。
- ==**红黑树**==
  - **特点**：红黑树**通过节点颜色（红或黑）来间接保证平衡性**，不要求绝对平衡，但**能确保最长路径不超过最短路径的两倍。**
  - **优点**：插入和删除时旋转次数较少，**平均性能优良**；实现较为灵活，常用于 Java 的 `TreeMap`、C++ STL 的 `set` 和 `map`。
  - **缺点**：平衡性没有 AVL 树那么严格，查找操作在某些场景下可能略逊一筹。

###### 3. 优势

- **高效操作**：由于平衡二叉树的**高度始终保持在对数级别**，查找、插入、删除等操作在最坏情况下都能达到 O(log n) 的时间复杂度。
- **动态调整**：当树中数据发生变化时，平衡二叉树能通过**旋转等操作自动调整结构，防止性能退化。**
- **广泛应用**：平衡二叉树是很多复杂数据结构和算法的基础，在数据库索引、内存管理以及各种集合数据类型中都有应用。

###### 4. 缺点

- **实现复杂度高**：相比于普通的二叉搜索树，平衡二叉树需要额外的旋转和重新平衡操作，代码实现和理解难度更大。
- **维护开销**：每次数据更新（插入或删除）时，为了保持树的平衡，可能会产生额外的旋转或颜色调整操作，这在某些场景下会带来一定的性能开销。
- **空间开销**：为了支持平衡操作，通常需要在每个节点中存储额外的信息（例如 AVL 树的高度或红黑树的颜色），这会占用更多内存。

###### 5. 总结

平衡二叉树通过保持树的高度平衡，有效提高了二叉搜索树在最坏情况下的性能表现。尽管它们在实现和维护上比普通二叉搜索树更为复杂，但在需要频繁查找和动态更新的数据结构中，它们提供了稳定且高效的性能保障，是现代计算机科学中非常重要的一类数据结构。



##### ②演变过程

![image-20250308170612067](%E9%9B%86%E5%90%88.assets/image-20250308170612067.png)



##### ③==旋转机制==

![image-20250308172321640](%E9%9B%86%E5%90%88.assets/image-20250308172321640.png)

##### ④旋转情况-==左旋==

###### 1. 支点不为根节点

![image-20250308172615348](%E9%9B%86%E5%90%88.assets/image-20250308172615348.png)



###### 2. ==支点为根节点==

![image-20250308172952824](%E9%9B%86%E5%90%88.assets/image-20250308172952824.png)

![GIF 2025-3-8 17-31-55](%E9%9B%86%E5%90%88.assets/GIF%202025-3-8%2017-31-55.gif)

##### ⑤旋转情况-==右旋==

###### 1. 支点不为根节点

![image-20250308173443435](%E9%9B%86%E5%90%88.assets/image-20250308173443435.png)

###### 2. ==支点为根节点==

![image-20250308173647575](%E9%9B%86%E5%90%88.assets/image-20250308173647575.png)

![GIF 2025-3-8 17-38-45](%E9%9B%86%E5%90%88.assets/GIF%202025-3-8%2017-38-45.gif)

##### ⑥四种==平衡手段==

![image-20250308175346809](%E9%9B%86%E5%90%88.assets/image-20250308175346809.png)

###### 1. 左左-LL

![image-20250308174345119](%E9%9B%86%E5%90%88.assets/image-20250308174345119.png)



###### 2. 左右-LR

![image-20250308174937252](%E9%9B%86%E5%90%88.assets/image-20250308174937252.png)

###### 3. 右右-RR

![image-20250308175038615](%E9%9B%86%E5%90%88.assets/image-20250308175038615.png)

###### 4. 右左-RL

![image-20250308175245994](%E9%9B%86%E5%90%88.assets/image-20250308175245994.png)



##### ⑦小结

![image-20250308175416598](%E9%9B%86%E5%90%88.assets/image-20250308175416598.png)

###### 1. 在平衡二叉树中如何添加节点？

在平衡二叉树（如 AVL 树、红黑树）中，添加节点的步骤如下：

1. **按二叉搜索树（BST）的规则插入**：
   - 从根节点开始，若新节点的值小于当前节点，则进入左子树；否则进入右子树。
   - 递归或迭代找到合适的空位置，并插入新节点。
2. **更新节点高度（适用于 AVL 树）**：
   - 插入后，沿着插入路径向上更新每个节点的高度。
3. **检查平衡因子**：
   - 平衡因子（Balance Factor, BF）定义为 `BF = 左子树高度 - 右子树高度`。
   - 如果某个节点的平衡因子超出允许范围（通常 AVL 树要求 -1 ≤ BF ≤ 1），则该节点失衡，需要进行旋转。
4. **执行旋转恢复平衡**：
   - 旋转的方式取决于失衡的类型（LL、LR、RR、RL）。

------

###### 2. 在平衡二叉树中如何查找单个节点？

查找过程与普通二叉搜索树（BST）相同：

1. 从根节点开始，比较目标值与当前节点值：
   - 若相等，则查找成功；
   - 若小于当前节点，则进入左子树；
   - 若大于当前节点，则进入右子树。
2. 递归或迭代上述步骤，直到找到目标节点或遍历完整棵树（即目标值不存在）。

时间复杂度：
 由于平衡二叉树的高度始终保持在 O(log n) 级别，查找的时间复杂度为 **O(log n)**。

------

###### 3. 为什么要旋转？

旋转的主要目的是 **恢复平衡**，保证树的高度保持在 O(log n)，避免退化成链表。
 如果树失衡：

- 查找、插入、删除的时间复杂度可能退化到 O(n)；
- **旋转操作可以重新分配子树节点，降低树的高度，保持高效性。**

------

###### 4. 旋转的触发时机？

当插入或删除节点导致某个节点的平衡因子（BF）变为 **|BF| > 1** 时，需要进行旋转。

------

###### 5. 旋转类型及操作

旋转有四种情况，分别是：

1. **左左（LL）旋转** → **右旋**
2. **左右（LR）旋转** → **先左旋，再右旋**
3. **右右（RR）旋转** → **左旋**
4. **右左（RL）旋转** → **先右旋，再左旋**

**5.1 左左（==LL==）情况 - 右旋**

- **触发条件**：插入发生在某个失衡节点的**左子树的左子树**上。
- **解决方法**：对失衡节点**右旋（单次旋转）**。

**示意图**

```
      A                       B
     /                       / \
    B         ==>           C   A
   /
  C
```

**旋转步骤**

1. 让 B 成为新的根节点；
2. A 变成 B 的右子树；
3. C 保持原位。

------

**5.2 左右（==LR==）情况 - 先左旋，再右旋**

- **触发条件**：插入发生在某个失衡节点的**左子树的右子树**上。

- 解决方法

  ：

  - **先对 B 进行左旋**，使得 C 变成 B 的父节点；
  - **再对 A 进行右旋**，使得 C 成为新的根节点。

**示意图**

```
      A                       A                       C
     /                       /                       / \
    B         ==>           C         ==>          B   A
     \                     /
      C                   B
```

**旋转步骤**

1. **左旋**：B 变成 C 的左子树；
2. **右旋**：A 变成 C 的右子树，C 成为新的根节点。

------

**5.3 右右（==RR==）情况 - 左旋**

- **触发条件**：插入发生在某个失衡节点的**右子树的右子树**上。
- **解决方法**：对失衡节点**左旋（单次旋转）**。

**示意图**

```
    A                         B
     \                       / \
      B         ==>         A   C
       \
        C
```

**旋转步骤**

1. 让 B 成为新的根节点；
2. A 变成 B 的左子树；
3. C 保持原位。

------

**5.4 右左（==RL==）情况 - 先右旋，再左旋**

- **触发条件**：插入发生在某个失衡节点的**右子树的左子树**上。

- 解决方法

  ：

  - **先对 B 进行右旋**，使得 C 变成 B 的父节点；
  - **再对 A 进行左旋**，使得 C 成为新的根节点。

**示意图**

```
      A                          A                          C
       \                          \                        / \
        B           ==>            C           ==>        A   B
       /                            \
      C                              (C的右子树)
```

**旋转步骤**

1. **右旋**：B 变成 C 的右子树；
2. **左旋**：A 变成 C 的左子树，C 成为新的根节点。

------

###### 6. 总结

| 失衡类型 | 触发条件             | 旋转方式           |
| -------- | -------------------- | ------------------ |
| **LL**   | 插入到左子树的左子树 | **右旋**           |
| **LR**   | 插入到左子树的右子树 | **先左旋，再右旋** |
| **RR**   | 插入到右子树的右子树 | **左旋**           |
| **RL**   | 插入到右子树的左子树 | **先右旋，再左旋** |

**核心要点**

- 平衡二叉树需要维护平衡因子（AVL 树中绝对值不得超过 1）。
- 失衡后通过旋转恢复：
  - **单旋**（LL → 右旋，RR → 左旋）。
  - **双旋**（LR → 先左旋再右旋，RL → 先右旋再左旋）。
- 旋转的本质是调整子树结构，保证 O(log n) 的高度。

------

通过这些旋转操作，平衡二叉树能够在插入和删除后保持平衡，从而确保查找、插入、删除操作的时间复杂度始终维持在 **O(log n)**。



#### （5）==红黑树==-B树

##### ①引入

![image-20250309145229845](%E9%9B%86%E5%90%88.assets/image-20250309145229845.png)



##### ②==红黑规则==

![image-20250309145341499](%E9%9B%86%E5%90%88.assets/image-20250309145341499.png)



- ①每一个节点或是红色的，或者是黑色的
- ②**==根节点==必须是黑色**
- ③如果一个节点没有子节点或者父节点，则该节点相应的**指针属性值为Nil**，这些**Nil视为叶节点**，每个叶节点(Nil)是**黑色**的
  - ![image-20250309145629606](%E9%9B%86%E5%90%88.assets/image-20250309145629606.png)
- ④如果某一个节点是红色，那么它的子节点必须是黑色(**==不能出现两个红色节点相连==**的情况)
- ⑤对每一个节点，从该节点到其==**所有后代叶节点的简单路径上**，均**包含相同数目的黑色节点**；==



##### ③添加节点的==默认颜色选择==

![image-20250309145945049](%E9%9B%86%E5%90%88.assets/image-20250309145945049.png)

###### 1. 若每次添加时是==黑色==结点

![image-20250309150313870](%E9%9B%86%E5%90%88.assets/image-20250309150313870.png)



###### 2. 若每次添加时是==红色==结点

![image-20250309150628832](%E9%9B%86%E5%90%88.assets/image-20250309150628832.png)



##### ④添加节点的==规则==

![image-20250309151519370](%E9%9B%86%E5%90%88.assets/image-20250309151519370.png)





## 五、_==泛型==_

<a id="泛型"></a> 设置锚点：方便从其他文件快速跳到该位置



### 1、泛型的基础知识

#### （1）引入

##### ①没有泛型时

**没有泛型的时候，集合如何存储数据**

 结论：

-  如果我们没有给集合指定类型，默认认为所有的数据类型都是Object类型， 此时可以往集合添加任意的数据类型。带来一个坏处：我们在获取数据的时候，无法使用他的特有行为。

- 此时推出了泛型，可以在添加数据的时候就把**类型进行统一**。而且我们在获取数据的时候，也省的强转了，非常的方便。
- **遍历集合**时，由于==**多态的弊端**==是**不能访问子类的特有功能**，**同时又无法确定集合中的类型**

```java
package com.pyw.a34genericity;


import java.util.ArrayList;
import java.util.Iterator;

public class GenericsDemo1 {
    public static void main(String[] args) {
        //没有泛型的时候，集合如何存储数据
        //结论：
        //如果我们没有给集合指定类型，默认认为所有的数据类型都是Object类型
        //此时可以往集合添加任意的数据类型。
        //带来一个坏处：我们在获取数据的时候，无法使用他的特有行为。

        //此时推出了泛型，可以在添加数据的时候就把类型进行统一。
        //而且我们在获取数据的时候，也省的强转了，非常的方便。

        //1.创建集合的对象
        ArrayList`&lt;String&gt;` list = new ArrayList<>();

        //2.添加数据
        //list.add(123);
        list.add("aaa");
        //list.add(new Student("zhangsan",123));


        //3.遍历集合获取里面的每一个元素
        Iterator`&lt;String&gt;` it = list.iterator();
        while(it.hasNext()){
            String str = it.next();
            //多态的弊端是不能访问子类的特有功能
            //obj.length();
            //str.length();
            System.out.println(str);
        }
    }
}

```

##### ②泛型的好处

![image-20250308150200475](%E9%9B%86%E5%90%88.assets/image-20250308150200475.png)

#### （2）伪泛型-==泛型擦除==

![image-20250308150654165](%E9%9B%86%E5%90%88.assets/image-20250308150654165.png)

![image-20250308150802889](%E9%9B%86%E5%90%88.assets/image-20250308150802889.png)



#### （3）泛型的细节

![image-20250308151015284](%E9%9B%86%E5%90%88.assets/image-20250308151015284.png)



#### （4）泛型的==使用==

##### ①泛型==类==

![image-20250308151752531](%E9%9B%86%E5%90%88.assets/image-20250308151752531.png)

**示例代码：**

```java
package com.pyw.a34genericity;


import java.util.Arrays;

/*
*       当我在编写一个类的时候，如果不确定类型，那么这个类就可以定义为泛型类。
* */
public class MyArrayList`&lt;E&gt;` {

    Object[] obj = new Object[10];
    int size;

    /*
    E : 表示是不确定的类型。该类型在类名后面已经定义过了。
    e：形参的名字，变量名
    * */
    public boolean add(E e){
        obj[size] = e;
        size++;
        return true;
    }

    public E get(int index){
        return (E) obj[index];
    }

    @Override
    public String toString() {
        return Arrays.toString(obj);
    }
}

```

**测试：**

```java
package com.pyw.a34genericity;

public class GenericsDemo2 {
    public static void main(String[] args) {
        MyArrayList`&lt;String&gt;` list = new MyArrayList<>();

        list.add("aaa");
        list.add("bbb");
        list.add("ccc");
        list.add("ccc");
        list.add("ccc");
        list.add("ccc");

        System.out.println(list);

        
//        MyArrayList`&lt;Integer&gt;` list2 = new MyArrayList<>();
//        list2.add(123);
//        list2.add(456);
//        list2.add(789);
//
//
//        int i = list2.get(0);
//        System.out.println(i);
//
//
//        System.out.println(list2);
    }
}
```



##### ②泛型==方法==

![image-20250308152644499](%E9%9B%86%E5%90%88.assets/image-20250308152644499.png)



![image-20250308152753315](%E9%9B%86%E5%90%88.assets/image-20250308152753315.png)

![image-20250308152557634](%E9%9B%86%E5%90%88.assets/image-20250308152557634.png)

![image-20250308152713491](%E9%9B%86%E5%90%88.assets/image-20250308152713491.png)



**示例代码：**

![image-20250308152845953](%E9%9B%86%E5%90%88.assets/image-20250308152845953.png)

```java
package com.pyw.a34genericity;

import java.util.ArrayList;

public class ListUtil {
    private ListUtil(){}

    //类中定义一个静态方法addAll，用来添加多个集合的元素

    /*
    * 参数一：集合
    * 参数二~最后：要添加的预算
     */

    //泛型方法：修饰符(例：public static 以上两个都是修饰符)<泛型名称> 返回值类型 方法名称(参数1,参数2,.......)
    //可变参数
    public static `&lt;E&gt;` void addAll(ArrayList`&lt;E&gt;` list,E...e){
        for (E elem : e) {
            list.add(elem);
        }
    }
}
```

**测试：**

```java
package com.pyw.a34genericity;


import java.util.ArrayList;

/*
    定义一个工具类：ListUtil
    类中定义一个静态方法addAll，用来添加多个集合的元素。
*/
public class GenericsDemo3 {
    public static void main(String[] args) {

        ArrayList`&lt;String&gt;` list1 = new ArrayList<>();
        ListUtil.addAll(list1, "aaa", "bbb", "ccc", "ddd","eee");
        System.out.println(list1);


        ArrayList`&lt;Integer&gt;` list2 = new ArrayList<>();
        ListUtil.addAll(list2,1,2,3,4);
        System.out.println(list2);

    }
}

```



##### ③泛型==接口==

![image-20250308153240871](%E9%9B%86%E5%90%88.assets/image-20250308153240871.png)

###### 方式一：==**实现类给出具体类型**==

```java
package com.pyw.a34genericity;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

public class MyArrayList3 implements List`&lt;String&gt;` {

    @Override
    public int size() {
        return 0;
    }

    @Override
    public boolean isEmpty() {
        return false;
    }

    @Override
    public boolean contains(Object o) {
        return false;
    }

    @Override
    public Iterator`&lt;String&gt;` iterator() {
        return null;
    }

    ......

    @Override
    public List`&lt;String&gt;` subList(int fromIndex, int toIndex) {
        return null;
    }
}

```

**使用时**

```java
package com.pyw.a34genericity;

public class GenericsDemo4 {
    public static void main(String[] args) {
        /*
            泛型接口的两种使用方式：
                1.实现类给出具体的类型
                2.实现类延续泛型，创建实现类对象时再确定类型
        */

        //已指定泛型了，MyArrayList3实现时没有泛型，不需尖括号`&lt;String&gt;`再指定了
        MyArrayList3 list = new MyArrayList3();
        list.add("123");
        System.out.println(list);
    }
}
```



###### 方式二：==**实现类延续泛型**==

```java
package com.pyw.a34genericity;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

public class MyArrayList31`&lt;E&gt;` implements List`&lt;E&gt;` {

    @Override
    public int size() {
        return 0;
    }

    @Override
    public boolean isEmpty() {
        return false;
    }

    @Override
    public boolean contains(Object o) {
        return false;
    }

    @Override
    public Iterator`&lt;E&gt;` iterator() {
        return null;
    }

    ......

    @Override
    public List`&lt;E&gt;` subList(int fromIndex, int toIndex) {
        return null;
    }
}

```

**使用时**

```java
package com.pyw.a34genericity;

public class GenericsDemo4 {
    public static void main(String[] args) {
        /*
            泛型接口的两种使用方式：
                1.实现类给出具体的类型
                2.实现类延续泛型，创建实现类对象时再确定类型
        */

        //未指定泛型了，MyArrayList3实现时没有指定泛型，需尖括号<>指定类型
        MyArrayList31`&lt;String&gt;` listString = new MyArrayList31();
        listString.add("456");
        System.out.println(listString);
    }
}
```



#### （5）泛型的==继承==和==通配符==

![image-20250308154542560](%E9%9B%86%E5%90%88.assets/image-20250308154542560.png)

##### ①继承性问题

```java
package com.pyw.a34genericity;


import java.util.ArrayList;

public class GenericsDemo5 {
    public static void main(String[] args) {
        /*
            泛型不具备继承性，但是数据具备继承性
        */

        //创建集合的对象
        ArrayList`&lt;Ye&gt;` list1 = new ArrayList<>();
        ArrayList`&lt;Fu&gt;` list2 = new ArrayList<>();
        ArrayList`&lt;Zi&gt;` list3 = new ArrayList<>();

        //验证 泛型不具备继承性
        //调用method方法
//        method(list1);
//        method(list2);
//        method(list3);

        //是数据具备继承性
        list1.add(new Ye());
        list1.add(new Fu());
        list1.add(new Zi());

    }


    /*
    * 此时，泛型里面写的是什么类型，那么只能传递什么类型的数据。
    * */
    public static void method(ArrayList`&lt;Ye&gt;` list) {

    }

}

class Ye{}

class Fu extends Ye{}

class Zi extends Fu{}


```

**解释：**

在这段代码中，`list1` 的声明为 `ArrayList`&lt;Ye&gt;``，这意味着这个集合要求存储的元素类型必须是 `Ye` 类型或者是 `Ye` 的子类。由于 Java 中的继承关系满足“里氏替换原则”（Liskov Substitution Principle），==即任何 `Fu` 或 `Zi` 的实例都是 `Ye` 类型的实例，==因此可以添加 `Ye`、`Fu` 和 `Zi` 对象。

简单来说：

- **泛型不具备继承性**：指的是 `ArrayList`&lt;Fu&gt;`` 并不是 `ArrayList`&lt;Ye&gt;`` 的子类，即使 `Fu` 是 `Ye` 的子类。
- **数据具备继承性**：指的是，实际存储在集合中的对象如果是 `Fu` 或 `Zi`，它们**本质上都是 `Ye` 的实例**，因而符合 `ArrayList`&lt;Ye&gt;`` 的要求。

因此：

```java
list1.add(new Ye()); // Ye 本身
list1.add(new Fu()); // Fu 是 Ye 的子类
list1.add(new Zi()); // Zi 是 Fu 的子类，间接也是 Ye 的子类
```

这种设计确保了集合内的所有元素都至少具备 `Ye` 的特性，可以安全地使用 `Ye` 的方法或属性。



##### ②泛型的==通配符==

利用**泛型方法**

* ```java
    public static `&lt;E&gt;` void method(ArrayList`&lt;E&gt;` list) {
    
    }
    ```

* 弊端：

    * 利用泛型方法有一个小弊端，此时**他可以接受任意的数据类型**
    * Ye  Fu   Zi    Student

    

希望：本方法虽然不确定类型，但是以后我希望==**只能传递Ye Fu Zi**==

* 此时我们就可以使用**泛型的通配符**：

* ?也表示不确定的类型,他可以进行类型的限定

    * **? extends E: 表示可以传递E或者E所有的子类类型**
    * **? super E:表示可以传递E或者E所有的父类类型**

* ```java
    //? extends E: 表示可以传递E或者E所有的子类类型
    public static void method(ArrayList<? extends Ye> list) {
    
    }
    
    //? super E:表示可以传递E或者E所有的父类类型
    public static void method2(ArrayList<? super Fu> list) {
    
    }
    ```



**应用场景**：

- 如果我们在定义类、方法、接口的时候，如果类型不确定，就可以**定义泛型类、泛型方法、泛型接口**。

* 如果类型不确定，但是能知道以后**==只能传递==某个继承体系中**的，就可以泛型的通配符，泛型的通配符：关键点：可以**限定类型的范围**。



**示例代码：**

```java
package com.pyw.a34genericity;

import java.util.ArrayList;

public class GenericsDemo6 {
    public static void main(String[] args) {
        /*
        *   需求：
        *       定义一个方法，形参是一个集合，但是集合中的数据类型不确定。
        *
        * */


        //创建集合的对象
        ArrayList`&lt;Ye&gt;` list1 = new ArrayList<>();
        ArrayList`&lt;Fu&gt;` list2 = new ArrayList<>();
        ArrayList`&lt;Zi&gt;` list3 = new ArrayList<>();

        ArrayList`&lt;Student2&gt;` list4 = new ArrayList<>();

        //限定Ye和Ye的所有子类
        method(list1);
        method(list2);
        method(list3);
        //不行了，因为不属于Ye和Ye的子类
//        method(list4);

        //限定fu和fu的父类
        method2(list1);
        method2(list2);
        //不行了，因为不属于fu和fu的父类
//        method2(list3);

//        method(list4);


    }

    /*
     * 此时，泛型里面写的是什么类型，那么只能传递什么类型的数据。
     * 弊端：
     *      利用泛型方法有一个小弊端，此时他可以接受任意的数据类型
     *      Ye  Fu   Zi    Student
     *
     * 希望：本方法虽然不确定类型，但是以后我希望只能传递Ye Fu Zi
     *
     * 此时我们就可以使用泛型的通配符：
     *      ?也表示不确定的类型
     *      他可以进行类型的限定
     *      ? extends E: 表示可以传递E或者E所有的子类类型
     *      ? super E:表示可以传递E或者E所有的父类类型
     *
     * 应用场景：
     *      1.如果我们在定义类、方法、接口的时候，如果类型不确定，就可以定义泛型类、泛型方法、泛型接口。
     *      2.如果类型不确定，但是能知道以后只能传递某个继承体系中的，就可以泛型的通配符
     * 泛型的通配符：
     *      关键点：可以限定类型的范围。
     *
     * */
    //? extends E: 表示可以传递E或者E所有的子类类型
    public static void method(ArrayList<? extends Ye> list) {

    }

    //? super E:表示可以传递E或者E所有的父类类型
    public static void method2(ArrayList<? super Fu> list) {

    }
}

class Ye {
}

class Fu extends Ye {
}

class Zi extends Fu {
//}

class Student2{}
```



##### ③综合案例

**抽象类和接口**都是用于抽象设计的工具，但它们在概念和使用上有一些关键区别：

1. **定义方式**
   - **抽象类**：使用 `abstract class` 声明，可以包含抽象方法（没有实现的方法）和具体方法（已实现的方法）。
   - **接口**：使用 `interface` 声明，传统上只能声明抽象方法和常量（public static final 变量），但从 Java 8 开始，可以包含默认方法（default methods）和静态方法，还从 Java 9 开始允许私有方法。
2. **方法实现**
   - **抽象类**：可以提供部分实现，允许子类直接使用这些实现，或者通过重写来定制行为。
   - **接口**：最初设计为纯粹的抽象合同，不提供实现（除了默认方法和静态方法），其目的是定义一组方法的规范。
3. **成员变量**
   - **抽象类**：可以包含实例变量，可以维护状态。
   - **接口**：只能包含常量（即 `public static final` 的变量），不允许定义实例变量，因此接口本身不能维护对象状态。
4. **继承与实现**
   - **抽象类**：**一个类只能继承一个抽象类（单继承）**，这对于类的层次结构有一定的限制。
   - **接口**：一个类可以实现多个接口（多实现），这提供了更灵活的设计方式，能够同时从多个角度定义行为。
5. **构造函数**
   - **抽象类**：可以有构造函数，虽然抽象类不能被实例化，但其构造函数可以供子类调用。
   - **接口**：没有构造函数，因为接口不能直接实例化。
6. **设计目的**
   - **抽象类**：适用于“是什么”的关系，适合建立类的层次结构，==**提供一些基础实现供子类继承和扩展。**==
   - **接口**：主要用于定义能力或行为（“能做什么”），强调行为的抽象和实现的解耦，常用于多个不相关类之间实现共同行为。

**总结**：

- 如果需要共享代码、状态或实现细节，并且类之间存在紧密的层次关系，使用抽象类比较合适。
- 如果只需要定义行为契约，允许多个类实现这些行为，而且希望避免单继承的限制，则应使用接口。

这些区别在设计大型系统时尤为重要，选择合适的抽象机制能使代码更灵活、更易于维护。



```java
package com.pyw.a34genericity.test1.domain;


public abstract class Animal {
    private String name;
    private Integer age;

    public Animal() {
    }

    public Animal(String name, Integer age) {
        this.name = name;
        this.age = age;
    }
    
    public abstract void eat();
}

public abstract class Cat extends Animal{
    //1.继承抽象类，重写里面所有的抽象方法
    //2.本身Cat也是一个抽象的，让Cat的子类再重写重写方法
    //此时采取第二种处理方案
    //因为猫的两个子类中eat的方法体还是不一样的。
}

public abstract class Dog extends Animal{
}

//实现类
public class BossCat extends Cat{
    @Override
    public void eat() {
        System.out.println("一只叫做"+getName()+"的,"+getAge()+"岁的波斯猫，正在吃东西");
    }
}

public class LiHuaCat extends Cat{
    @Override
    public void eat() {
        System.out.println("一只叫做"+getName()+"的,"+getAge()+"岁的梨花猫，正在吃东西");
    }
}

public class HuskyDog extends Dog{
    @Override
    public void eat() {
        System.out.println("一只叫做"+getName()+"的,"+getAge()+"岁的哈士奇，正在吃东西");
    }
}

public class TidiDog extends Dog {
    @Override
    public void eat() {
        System.out.println("一只叫做"+getName()+"的,"+getAge()+"岁的泰迪狗，正在吃东西");
    }
}

public class Test1 extends LiHuaCat{
    @Override
    public void eat() {
        System.out.println("我是吃方法！");
    }
}
```



```java
package com.pyw.a34genericity.test1;

import com.pyw.a34genericity.test1.domain.*;

import java.util.ArrayList;
import java.util.Arrays;

public class main {
    public static void main(String[] args) {
        /*
            需求：
                定义一个继承结构：
                                    动物
                         |                           |
                         猫                          狗
                      |      |                    |      |
                   波斯猫   狸花猫                泰迪   哈士奇


                 属性：名字，年龄
                 行为：吃东西
                       波斯猫方法体打印：一只叫做XXX的，X岁的波斯猫，正在吃小饼干
                       狸花猫方法体打印：一只叫做XXX的，X岁的狸花猫，正在吃鱼
                       泰迪方法体打印：一只叫做XXX的，X岁的泰迪，正在吃骨头，边吃边蹭
                       哈士奇方法体打印：一只叫做XXX的，X岁的哈士奇，正在吃骨头，边吃边拆家

            测试类中定义一个方法用于饲养动物
                public static void keepPet(ArrayList<???> list){
                    //遍历集合，调用动物的eat方法
                }
            要求1：该方法能养所有品种的猫，但是不能养狗
            要求2：该方法能养所有品种的狗，但是不能养猫
            要求3：该方法能养所有的动物，但是不能传递其他类型
         */
        ArrayList`&lt;BossCat&gt;` list1 = new ArrayList<>();
        ArrayList`&lt;LiHuaCat&gt;` list2 = new ArrayList<>();
        ArrayList`&lt;TidiDog&gt;` list3 = new ArrayList<>();
        ArrayList`&lt;HuskyDog&gt;` list4 = new ArrayList<>();
        ArrayList`&lt;Test1&gt;` tests = new ArrayList<>();

        LiHuaCat l1 = new LiHuaCat();
        l1.setName("LiHua");
        l1.setAge(3);
        list2.add(l1);

        Test1 test = new Test1();
        tests.add(test);

        keepPet(list1);
        keepPet(list2);
        //不能传狗
//        keepPet(list3);
//        keepPet(list4);

        //不能传猫
//        keepPet2(list1);
//        keepPet2(list2);

        keepPet2(list3);
        keepPet2(list4);

        //所有动物都能传
        keepPet3(list1);
        keepPet3(list2);
        keepPet3(list3);
        keepPet3(list4);
        keepPet3(tests);
    }

    //要求1：该方法能养所有品种的猫，但是不能养狗
    public static void keepPet(ArrayList<? extends Cat> list){
        for (Cat cat : list) {
            cat.eat();
        }
    }

    // 要求2：该方法能养所有品种的狗，但是不能养猫
    public static void keepPet2(ArrayList<? extends Dog> list){
        for (Dog dog : list) {
            dog.eat();
        }
    }

    //要求3：该方法能养所有的动物，但是不能传递其他类型
    public static void keepPet3(ArrayList<? extends Animal> list){
        for (Animal animal : list) {
            animal.eat();
        }
    }
}

```



#### （6）总结

![image-20250308161947000](%E9%9B%86%E5%90%88.assets/image-20250308161947000.png)

![image-20250308161926254](%E9%9B%86%E5%90%88.assets/image-20250308161926254.png)



## 六、单列集合顶层接口-_==Collection==_

![image-20250307225144093](%E9%9B%86%E5%90%88.assets/image-20250307225144093.png)

### 1、Collection-基础知识

#### （1）接口和对应的实现类

![image-20250307215524739](%E9%9B%86%E5%90%88.assets/image-20250307215524739.png)

#### （2）==特点==

![image-20250307215713736](%E9%9B%86%E5%90%88.assets/image-20250307215713736.png)

#### （3）常用方法

![image-20250307215849765](%E9%9B%86%E5%90%88.assets/image-20250307215849765.png)

#### （4）==方法细节==

##### ①添加元素

- 细节1：如果我们要往List系列集合中添加数据，那么**方法永远返回true**，因为List系列的是允许元素重复的。
- 细节2：如果我们要往Set系列集合中添加数据，
  - 如果当前要添加元素不存在，方法返回true，表示添加成功。
  - 如果当前要添加的元素已经存在，方法返回false，表示添加失败。因为Set系列的集合不允许重复。

##### ②删除

- 细节1：因为Collection里面定义的是**共性**的方法，所以此时**不能通过索引进行删除**。**只能通过元素的对象进行删除。**
- 细节2：方法会有一个布尔类型的返回值，删除成功返回true，删除失败返回false
  - 如果要删除的元素不存在，就会删除失败。



##### ③判断元素是否包含

- 细节：底层是**依赖equals方法**进行判断是否存在的。所以，如果集合中存储的是自定义对象，也想通过contains方法来判断是否包含，那么在**javabean类中，一定要重写equals方法。**



#### （5）示例代码

```java
package com.pyw.a29collectiondemo;

import java.util.ArrayList;
import java.util.Collection;

public class A01_CollectionDemo1 {
    public static void main(String[] args) {
        //TODO Collection类 所有集合的接口
/*
        public boolean add(E e)             添加
        public void clear()                 清空
        public boolean remove(E e)          删除
        public boolean contains(Object obj) 判断是否包含
        public boolean isEmpty()            判断是否为空
        public int size()                   集合长度


       注意点：
        Collection是一个接口,我们不能直接创建他的对象。
        所以，现在我们学习他的方法时，只能创建他实现类的对象。
        实现类：ArrayList
*/
        //目的：为了学习Collection接口里面的方法
        //自己在做一些练习的时候，还是按照之前的方式去创建对象。
        Collection`&lt;String&gt;` coll = new ArrayList<>();

        //1.添加元素
        //细节1：如果我们要往List系列集合中添加数据，那么方法永远返回true，因为List系列的是允许元素重复的。
        //细节2：如果我们要往Set系列集合中添加数据，如果当前要添加元素不存在，方法返回true，表示添加成功。
        //如果当前要添加的元素已经存在，方法返回false，表示添加失败。
        //因为Set系列的集合不允许重复。
        coll.add("aaa");
        coll.add("bbb");
        coll.add("ccc");
        System.out.println(coll);

        //2.清空
        //coll.clear();

        //3.删除
        //细节1：因为Collection里面定义的是共性的方法，所以此时不能通过索引进行删除。只能通过元素的对象进行删除。
        //细节2：方法会有一个布尔类型的返回值，删除成功返回true，删除失败返回false
        //如果要删除的元素不存在，就会删除失败。
        System.out.println(coll.remove("aaa"));
        //不存在
        System.out.println(coll.remove("abc"));
        System.out.println(coll);

        //4.判断元素是否包含
        //细节：底层是依赖equals方法进行判断是否存在的。
        //所以，如果集合中存储的是自定义对象，也想通过contains方法来判断是否包含，那么在javabean类中，一定要重写equals方法。
        boolean result1 = coll.contains("bbb");
        System.out.println(result1);

        //5.判断集合是否为空
        boolean result2 = coll.isEmpty();
        System.out.println(result2);//false

        //6.获取集合的长度
        coll.add("ddd");
        int size = coll.size();
        System.out.println(size);//3
    }
}

```



### 2、Collection-==迭代器==遍历

![image-20250307221854160](%E9%9B%86%E5%90%88.assets/image-20250307221854160.png)

#### （1）迭代器对象==Iterator==

![image-20250307222525753](%E9%9B%86%E5%90%88.assets/image-20250307222525753.png)

##### ①获取迭代器对象

```java
//1.创建集合并添加元素
Collection`&lt;String&gt;` coll = new ArrayList<>();
coll.add("aaa");
coll.add("bbb");
coll.add("ccc");
coll.add("ddd");

//2.获取迭代器对象
//迭代器就好比是一个箭头，默认指向集合的0索引处
Iterator`&lt;String&gt;` it = coll.iterator();
```

![image-20250307221941889](%E9%9B%86%E5%90%88.assets/image-20250307221941889.png)

##### ②常用方法

-  Iterator`&lt;E&gt;` iterator()  ：获取一个迭代器对象

-  boolean hasNext()
   - 判断**==当前位置==是否有元素**，有元素返回true，没有元素返回false
-  E next()
   - **获取当前位置的元素**，并**将迭代器对象移向下一个位置**。

##### ③==细节==

![image-20250307222809890](%E9%9B%86%E5%90%88.assets/image-20250307222809890.png)

==**细节注意点：**==

- 报错NoSuchElementException

- 迭代器遍历完毕，**指针不会复位**（若想再次遍历，再次使用list.iterator()获取迭代器对象）

- **==循环中只能用一次next方法==**

  - ![image-20250307223417186](%E9%9B%86%E5%90%88.assets/image-20250307223417186.png)

- 迭代器遍历时，==**不能用集合的方法进行增加或者删除**==-会报**并发异常**，如果需要删除，可以用迭代器进行删除（iterator.remove()）

  - ```java
    //2.获取迭代器对象
    //迭代器就好比是一个箭头，默认指向集合的0索引处
    Iterator`&lt;String&gt;` it = coll.iterator();
    //3.利用循环不断的去获取集合中的每一个元素
    while(it.hasNext()){
        //4.next方法的两件事情：获取元素,并移动指针
        String str = it.next();
        if("bbb".equals(str)){
            //coll.remove("bbb");//并发异常
            it.remove();//如果需要删除，可以用迭代器进行删除
        }
    }
    System.out.println(coll);
    ```



**代码：**

```java
package com.pyw.a29collectiondemo;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

public class A04_CollectionDemo4 {
    public static void main(String[] args) {
      /*
        迭代器的细节注意点：
            1.如果没有位置，还要强行获取，报错NoSuchElementException
            2.迭代器遍历完毕，指针不会复位
            3.循环中只能用一次next方法
            4.迭代器遍历时，不能用集合的方法进行增加或者删除
       */

        //1.创建集合并添加元素
        Collection`&lt;String&gt;` coll = new ArrayList<>();
        coll.add("aaa");
        coll.add("bbb");
        coll.add("ccc");
        coll.add("ddd");

        //2.获取迭代器对象
        //迭代器就好比是一个箭头，默认指向集合的0索引处
        Iterator`&lt;String&gt;` it = coll.iterator();
        //3.利用循环不断的去获取集合中的每一个元素
        while(it.hasNext()){
            //4.next方法的两件事情：获取元素并移动指针
            String str = it.next();
            System.out.println(str);
        }

        //当上面循环结束之后，迭代器的指针已经指向了最后没有元素的位置
        //System.out.println(it.next());//NoSuchElementException

        //迭代器遍历完毕，指针不会复位
        System.out.println(it.hasNext());

        //如果我们要继续第二次遍历集合，只能再次获取一个新的迭代器对象
        Iterator`&lt;String&gt;` it2 = coll.iterator();
        while(it2.hasNext()){
            String str = it2.next(); //
            System.out.println(str);
        }
    }
}
```



##### ④案例

```java
package com.pyw.a29collectiondemo;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

public class A03_CollectionDemo3 {
    public static void main(String[] args) {
        /*
            Collection系列集合三种通用的遍历方式：
                1.迭代器遍历
                2.增强for遍历
                3.lambda表达式遍历


             迭代器遍历相关的三个方法：
                    Iterator`&lt;E&gt;` iterator()  ：获取一个迭代器对象
                    boolean hasNext()       ：判断当前指向的位置是否有元素
                    E next()                ：获取当前指向的元素并移动指针
        */

        //1.创建集合并添加元素
        Collection`&lt;String&gt;` coll = new ArrayList<>();
        coll.add("aaa");
        coll.add("bbb");
        coll.add("ccc");
        coll.add("ddd");

        //2.获取迭代器对象
        //迭代器就好比是一个箭头，默认指向集合的0索引处
        Iterator`&lt;String&gt;` it = coll.iterator();
        //3.利用循环不断的去获取集合中的每一个元素
        while(it.hasNext()){
            //4.next方法的两件事情：获取元素并移动指针
            String str = it.next();
            System.out.println(str);
        }

    }
}

```



### 3、Collection-==增强for==遍历

#### （1）概念

![image-20250307223859955](%E9%9B%86%E5%90%88.assets/image-20250307223859955.png)

**增强for遍历**

- 增强for的**底层就是迭代器**，为了简化迭代器的代码书写的。
- 它是JDK5之后出现的，其内部原理就是一个lterator迭代器
- 所有的**==单列集合和数组==才能用增强for进行遍历**。



#### （2）格式

```java
增强for格式：
    for(数据类型 变量名: 集合/数组){

    }
```

 **快速生成方式：**
            **==集合的名字.for==     回车**



#### （3）案例

```java
package com.pyw.a29collectiondemo;

import java.util.ArrayList;
import java.util.Collection;

public class A06_CollectionDemo6 {
    public static void main(String[] args) {
       /* Collection系列集合三种通用的遍历方式：
        1.迭代器遍历
        2.增强for遍历
        3.lambda表达式遍历

        增强for格式：
            for(数据类型 变量名: 集合/数组){

            }

        快速生成方式：
            集合的名字 + for 回车

        */

        //1.创建集合并添加元素
        Collection`&lt;String&gt;` coll = new ArrayList<>();
        coll.add("zhangsan");
        coll.add("lisi");
        coll.add("wangwu");

        //2.利用增强for进行遍历
        //注意点：
        //s其实就是一个第三方变量，在循环的过程中依次表示集合中的每一个数据
        for(String s : coll){
            s = "qqq";
        }
        System.out.println(coll);//仍然是 zhangsan lisi wangwu
    }
}

```



#### （5）细节

![image-20250307224320983](%E9%9B%86%E5%90%88.assets/image-20250307224320983.png)

**==修改增强for中的变量，不会改变集合中原本的数据==**

```java
//s其实就是一个第三方变量，在循环的过程中依次表示集合中的每一个数据
for(String s : coll){
    s = "qqq";
}
System.out.println(coll);//仍然是 zhangsan lisi wangwu
```



### 4、Collection-==Lambda表达式==遍历

#### （1）匿名内部类的形式（原始）

```java
//2.利用匿名内部类的形式
//底层原理：
//其实也会自己遍历集合，依次得到每一个元素
//把得到的每一个元素，传递给下面的accept方法
//s依次表示集合中的每一个数据
coll.forEach(new Consumer`&lt;String&gt;`() {
    @Override
    public void accept(String s) {
    System.out.println(s);
    }
});
```



#### （2）Lambda表达式形式

```java
coll.forEach((Steing s) -> {
    temp = temp+"进入Lambda了哦";
    System.out.println(s);
});

coll.forEach( (s) -> {
    temp = temp+"进入Lambda了哦";
    System.out.println(s);
});

coll.forEach( s -> {
    temp = temp+"进入Lambda了哦";
    System.out.println(s);
});
```



#### （3）案例

```java
package com.pyw.a29collectiondemo;

import java.util.ArrayList;
import java.util.Collection;
import java.util.function.Consumer;

public class A07_CollectionDemo7 {
    public static void main(String[] args) {
       /* Collection系列集合三种通用的遍历方式：
        1.迭代器遍历
        2.增强for遍历
        3.lambda表达式遍历

        lambda表达式遍历：
                default void forEach(Consumer<? super T> action):
        */

        //1.创建集合并添加元素
        Collection`&lt;String&gt;` coll = new ArrayList<>();
        coll.add("zhangsan");
        coll.add("lisi");
        coll.add("wangwu");
        //2.利用匿名内部类的形式
        //底层原理：
        //其实也会自己遍历集合，依次得到每一个元素
        //把得到的每一个元素，传递给下面的accept方法
        //s依次表示集合中的每一个数据
        coll.forEach(new Consumer`&lt;String&gt;`() {
            @Override
            public void accept(String s) {
                System.out.println(s);
            }
        });

        coll.forEach(s-> {
            temp = temp+"进入Lambda了哦";
            System.out.println(s);
        });
        //lambda表达式 简化格式
        coll.forEach((temp)-> System.out.println(temp));


    }
}

```











## 七、_==List==_集合

### 1、List-==基础==知识

#### （1）List集合的特点

![image-20250307225439948](%E9%9B%86%E5%90%88.assets/image-20250307225439948.png)

- 有序：==**存和取的元素顺序一致**==
- 有索引：可以**通过索引操作元素**
- 可重复：存储的元素**可以重复**



#### （2）List集合的特有方法

![image-20250307225644255](%E9%9B%86%E5%90%88.assets/image-20250307225644255.png)

 List系列集合独有的方法：

- void add(int index,E element)       在此集合中的指定位置插入指定的元素
  - 细节：原来索引上的元素会依次往后移
- E **remove**(int index)                 删除指定索引处的元素，返回被删除的元素
- E set(int index,E element)          修改指定索引处的元素，返回被修改的元素
- E get(int index)                    返回指定索引处的元素



##### **①代码案例**

```java
package com.pyw.a30listdemo;

import java.util.ArrayList;
import java.util.List;

public class A01_ListDemo1 {
    public static void main(String[] args) {
       /*

        List系列集合独有的方法：
            void add(int index,E element)       在此集合中的指定位置插入指定的元素
            E remove(int index)                 删除指定索引处的元素，返回被删除的元素
            E set(int index,E element)          修改指定索引处的元素，返回被修改的元素
            E get(int index)                    返回指定索引处的元素
        */

        //1.创建一个集合
        List`&lt;String&gt;` list = new ArrayList<>();

        //2.添加元素
        list.add("aaa");
        list.add("bbb");//1
        list.add("ccc");

        //void add(int index,E element)       在此集合中的指定位置插入指定的元素
        //细节：原来索引上的元素会依次往后移
        list.add(1,"QQQ");

        //E remove(int index)                 删除指定索引处的元素，返回被删除的元素
        String remove = list.remove(1);
        System.out.println(remove);//aaa

        //E set(int index,E element)          修改指定索引处的元素，返回被修改的元素
        String result = list.set(0, "QQQ");
        System.out.println(result);

        // E get(int index)                    返回指定索引处的元素
        String s = list.get(0);
        System.out.println(s);

        //3.打印集合
        System.out.println(list);
    }
}

```

##### ②细节

List系列集合中的两个删除的方法**remove(1)**,**是通过索引删，还是直接删除元素1**，

​		list.remove(1); 	//结论：此时remove方法是不会自动装箱的

- **直接删除元素**
- **通过索引进行删除**



在 `List` 系列集合中，`remove(1)` 方法的行为取决于参数的类型：

1. **如果参数是 `int` 类型**（如 `remove(1)`），它会被当作 **索引** 进行删除。
2. **如果参数是 `Integer` 类型**（如 `remove(Integer.valueOf(1))` 或 `remove((Integer) 1)`），它会被当作 **元素** 进行删除。

###### **==细节总结==**

| 调用方式                          | 作用         | 说明                                           |
| --------------------------------- | ------------ | ---------------------------------------------- |
| `list.remove(1)`                  | 通过索引删除 | 删除索引 `1` 位置的元素                        |
| `list.remove(Integer.valueOf(1))` | 通过值删除   | 删除 **值为 `1`** 的元素（如果存在）           |
| `list.remove((Integer) 1)`        | 通过值删除   | 强制转换 `1` 为 `Integer`，删除值为 `1` 的元素 |
| `list.remove((Object) 1)`         | 通过值删除   | 将 `1` 视为 `Object`，删除值为 `1` 的元素      |

------

###### **⚠️==注意==**

- `remove(int index)` **不会自动装箱**，默认是按索引删除，而 **不会删除值为 `1` 的元素**。
- 如果列表是 `List`&lt;String&gt;``，`remove("1")` 则会删除 **字符串 `"1"`**，而不会误认为是索引。

**🔹 结论：**
 `remove(1)` 默认是 **按索引删除**，不会自动装箱为 `Integer`。如果想按元素值删除，必须手动装箱 `Integer.valueOf(1)` 或 `(Integer) 1`。

```java
package com.pyw.a30listdemo;

import java.util.ArrayList;
import java.util.List;

public class A02_ListDemo2 {
    public static void main(String[] args) {

        //List系列集合中的两个删除的方法
        //1.直接删除元素
        //2.通过索引进行删除

        //1.创建集合并添加元素
        List`&lt;Integer&gt;` list = new ArrayList<>();

        list.add(1);
        list.add(2);
        list.add(3);


        //2.删除元素
        //请问：此时删除的是1这个元素，还是1索引上的元素？
        //为什么？
        //因为在调用方法的时候，如果方法出现了重载现象
        //优先调用，实参跟形参类型一致的那个方法。

        //默认int类型，所有是删除的index
        list.remove(1); //结论：此时remove方法是不会自动装箱的
        System.out.println(list);

        //手动装箱，手动把基本数据类型的1，变成Integer类型
        Integer i = Integer.valueOf(1);

        //如果需要使用重载的方法remove(Object o)那需要传入Integer
        list.remove(i);

        System.out.println(list);
    }
}
```



#### （3）List集合的遍历方法

![image-20250307230944209](%E9%9B%86%E5%90%88.assets/image-20250307230944209.png)

##### ①普通for循环

```java
//4.普通for循环
//size方法跟get方法还有循环结合的方式，利用索引获取到集合中的每一个元素
for (int i = 0; i < list.size(); i++) {
    //i:依次表示集合中的每一个索引
    String s = list.get(i);
    System.out.println(s);
}
```



##### ②==列表迭代器-ListIterator==

![image-20250307231450480](%E9%9B%86%E5%90%88.assets/image-20250307231450480.png)

![image-20250307232350383](%E9%9B%86%E5%90%88.assets/image-20250307232350383.png)

**==额外添加了一个方法：在遍历的过程中，可以添加元素==**

- 不能使用集合添加，已经被占用了，会报出并发修改异常
- 这个时候应该**用列表迭代器添加（额外新增的方法）**

```java
// 5.列表迭代器
//获取一个列表迭代器的对象，里面的指针默认也是指向0索引的
ListIterator`&lt;String&gt;` it = list.listIterator();
//额外添加了一个方法：在遍历的过程中，可以添加元素
    while(it.hasNext()){
    String s = it.next();
        if("bbb".equals(s)){
        //不能使用集合添加，已经被占用了，会报出并发修改异常
        //这个时候应该用列表迭代器添加（额外新增的方法）
        it.add("qqq");
        }
    System.out.println(s);
}
```



##### ③五种遍历方式的对比

![image-20250307232631320](%E9%9B%86%E5%90%88.assets/image-20250307232631320.png)



##### ④示例代码

```java
package com.pyw.a30listdemo;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

public class A03_ListDemo3 {
    public static void main(String[] args) {
        /*
            List系列集合的五种遍历方式：
                1.迭代器 遍历过程中需要删除元素，用迭代器
                2.列表迭代器 在遍历过程中需要添加元素，用列表迭代器
                3.增强for 仅想遍历，使用增强for或Lambda
                4.Lambda表达式 仅想遍历，使用增强for或Lambda
                5.普通for循环 遍历的时候需要操作索引，使用普通for
         */


        //创建集合并添加元素
        List`&lt;String&gt;` list = new ArrayList<>();
        list.add("aaa");
        list.add("bbb");
        list.add("ccc");

        //1.迭代器
        Iterator`&lt;String&gt;` it = list.iterator();
        while(it.hasNext()){
            String str = it.next();
            System.out.println(str);
        }


        //2.增强for
        //下面的变量s，其实就是一个第三方的变量而已。
        //在循环的过程中，依次表示集合中的每一个元素
        for (String s : list) {
            System.out.println(s);
        }

        //3.Lambda表达式
        //forEach方法的底层其实就是一个循环遍历，依次得到集合中的每一个元素
        //并把每一个元素传递给下面的accept方法
        //accept方法的形参s，依次表示集合中的每一个元素
        list.forEach(s->System.out.println(s) );


        //4.普通for循环
        //size方法跟get方法还有循环结合的方式，利用索引获取到集合中的每一个元素
        for (int i = 0; i < list.size(); i++) {
            //i:依次表示集合中的每一个索引
            String s = list.get(i);
            System.out.println(s);
        }

        // 5.列表迭代器
        //获取一个列表迭代器的对象，里面的指针默认也是指向0索引的
        ListIterator`&lt;String&gt;` it = list.listIterator();
        //额外添加了一个方法：在遍历的过程中，可以添加元素
        while(it.hasNext()){
            String s = it.next();
            if("bbb".equals(s)){
                //不能使用集合添加，已经被占用了，会报出并发修改异常
                //这个时候应该用列表迭代器添加（额外新增的方法）
                it.add("qqq");
            }
            System.out.println(s);
        }
        System.out.println(list);
    }
}

```



### 2、_==ArrayList==_-基础知识

#### （1）**概述**

`ArrayList` 是 Java 中的一个**动态数组**实现，属于 `java.util` 包下的 `List` 接口的实现类。它提供了**可变大小的数组**，支持**随机访问**，并允许存储**重复元素**和 **`null` 值**。



#### （2）**特点**

1. ==**动态扩展**==：`ArrayList` 初始容量为 10，当容量不足时，会自动扩展 `1.5` 倍（`newCapacity = oldCapacity + (oldCapacity >> 1)`）。
2. **有序存储**：保持插入顺序。
3. ==**允许重复**==：`ArrayList` 允许存储重复的元素。
4. ==**可存储null值：**==允许存储**重复元素**和 **`null` 值**
5. **支持==随机访问==**：基于数组实现，查询性能高 (`O(1)`)，插入/删除相对较慢 (`O(n)`，需要移动元素)。
6. **非线程安全**：在多线程环境下需要使用 `Collections.synchronizedList()` 或 `CopyOnWriteArrayList` 来保证安全。

------



#### （3）创建ArrayList集合的多种方式

##### **方式 1：使用无参构造（默认容量 10）**

```java
ArrayList`&lt;String&gt;` list1 = new ArrayList<>();
```

##### **方式 2：使用指定初始容量的构造方法**

```java
ArrayList`&lt;Integer&gt;` list2 = new ArrayList<>(20);
```

##### **方式 3：使用现有集合创建 `ArrayList`**

```java
List`&lt;String&gt;` oldList = List.of("A", "B", "C");
ArrayList`&lt;String&gt;` list3 = new ArrayList<>(oldList);
```

##### **方式 4：使用 `Arrays.asList()`（固定大小，不能增删）**

```java
List`&lt;Integer&gt;` list4 = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
```

##### **方式 5：使用 `Collections.synchronizedList()`（线程安全）**

```java
List`&lt;String&gt;` syncList = Collections.synchronizedList(new ArrayList<>());
```



#### （4）==遍历==集合的多种方式

遍历 `ArrayList` 集合的方法有多种，下面列举几种常见的方式，并附带示例代码。

![image-20250307213601633](%E9%9B%86%E5%90%88.assets/image-20250307213601633.png)

------

##### **1. 使用==普通 for 循环==**

**适用场景**：需要使用索引访问元素或进行索引计算的情况。

```java
ArrayList`&lt;String&gt;` list = new ArrayList<>(Arrays.asList("Java", "Python", "C++", "Go"));
for (int i = 0; i < list.size(); i++) {
    System.out.println("索引 " + i + ": " + list.get(i));
}
```

------

##### **2. 使用==增强 for 循环 (foreach)==**

**适用场景**：适用于不需要修改元素的情况，更简洁。

```java
for (String item : list) {
    System.out.println("增强 for 循环: " + item);
}
```

------

##### **3. 使用==`Iterator` 迭代器==**

**适用场景**：适用于需要在遍历时删除元素的情况（`remove()` 方法）。

```java
Iterator`&lt;String&gt;` iterator = list.iterator();
while (iterator.hasNext()) {
    String item = iterator.next();
    System.out.println("Iterator 遍历: " + item);
}
```

------

##### **4. 使用 `ListIterator`（支持双向遍历）**

**适用场景**：需要双向遍历（前后移动）或在遍历时修改元素。

```java
ListIterator`&lt;String&gt;` listIterator = list.listIterator();
while (listIterator.hasNext()) {
    System.out.println("ListIterator 正向遍历: " + listIterator.next());
}

// 反向遍历
while (listIterator.hasPrevious()) {
    System.out.println("ListIterator 反向遍历: " + listIterator.previous());
}
```

------

##### **5. 使用==`forEach` 方法==（Lambda 表达式）**

**适用场景**：简洁高效，适用于 Java 8 及以上版本。

```java
list.forEach(item -> System.out.println("Lambda 遍历: " + item));
```

------

##### **6. 使用 ==`Stream API`==（Java 8 及以上）**

**适用场景**：适用于数据处理（过滤、映射等）。

```java
list.stream().forEach(item -> System.out.println("Stream API 遍历: " + item));
```

------

##### **7. 使用 `Parallel Stream`（并行流，适用于大数据量）**

**适用场景**：适用于数据量大且可以并行处理的情况。

```java
list.parallelStream().forEach(item -> System.out.println("并行流遍历: " + item));
```

------

##### **8. 使用 `forEachRemaining` 方法**

**适用场景**：适用于 `Iterator` 遍历时的批量处理。

```java
Iterator`&lt;String&gt;` it = list.iterator();
it.forEachRemaining(item -> System.out.println("forEachRemaining 遍历: " + item));
```

------

##### **总结**

| 遍历方式           | 是否可修改集合 | 是否可删除元素                              | 是否支持并行 |
| ------------------ | -------------- | ------------------------------------------- | ------------ |
| `for` 循环         | ✅              | ✅                                           | ❌            |
| 增强 `for`         | ❌              | ❌（会抛 `ConcurrentModificationException`） | ❌            |
| `Iterator`         | ❌              | ✅（`iterator.remove()`）                    | ❌            |
| `ListIterator`     | ✅              | ✅                                           | ❌            |
| `forEach` (Lambda) | ❌              | ❌                                           | ❌            |
| `Stream API`       | ❌              | ❌                                           | ✅            |
| `Parallel Stream`  | ❌              | ❌                                           | ✅            |
| `forEachRemaining` | ❌              | ❌                                           | ❌            |

选择适合的遍历方式，可以提高代码的可读性和执行效率。 🚀



#### **（5）常用方法**

| **方法**                              | **返回值类型** | **返回值示例**  | **说明**                                                     |
| ------------------------------------- | -------------- | --------------- | ------------------------------------------------------------ |
| `add(E e)`                            | `boolean`      | `true/false`    | 添加元素到 `ArrayList` 末尾，成功返回 `true`，失败返回 `false`（几乎不会失败）。 |
| `add(int i, E e)`                     | `void`         | `-`             | 在指定索引 `i` 处插入元素 `e`，不会返回值，但可能抛 `IndexOutOfBoundsException`。 |
| `remove(Object o)`                    | `boolean`      | `true/false`    | **删除第一次出现的 `o`**，删除成功返回 `true`，否则返回 `false`。 |
| `remove(int i)`                       | `E`            | 被删除的元素    | 删除索引 `i` 处的元素，并返回该元素，若索引超出范围则抛 `IndexOutOfBoundsException`。 |
| `get(int i)`                          | `E`            | 取出的元素      | 获取索引 `i` 处的元素，若索引超出范围则抛 `IndexOutOfBoundsException`。 |
| `set(int i, E e)`                     | `E`            | 旧值            | 将索引 `i` 处的元素替换为 `e`，并**返回旧值**，若索引超出范围则抛 `IndexOutOfBoundsException`。 |
| `indexOf(Object o)`                   | `int`          | 元素索引 / `-1` | 返回 **`o` 第一次出现的索引**，若**不存在则返回 `-1`。**     |
| `contains(Object o)`                  | `boolean`      | `true/false`    | 判断 `ArrayList` 是否包含 `o`，存在返回 `true`，否则返回 `false`。 |
| `size()`                              | `int`          | 元素个数        | 返回 `ArrayList` 当前存储的元素个数。                        |
| `isEmpty()`                           | `boolean`      | `true/false`    | **判断 `ArrayList` 是否为空**，若 `size() == 0` 则返回 `true`，否则返回 `false`。 |
| `clear()`                             | `void`         | `-`             | 清空 `ArrayList` 中的所有元素，不返回值。                    |
| `toArray()`                           | `Object[]`     | `[E1, E2, ...]` | 返回包含 `ArrayList` 所有元素的 **Object 数组**。            |
| `toArray(T[] a)`                      | `T[]`          | `[E1, E2, ...]` | 以**指定类型数组 `a` 返回 `ArrayList` 中的所有元素**，若 `a` 容量不足，则创建新数组。 |
| `subList(int fromIndex, int toIndex)` | `List`&lt;E&gt;``      | `[E1, E2, ...]` | 返回一个**视图子列表**（从 `fromIndex` 到 `toIndex` 的部分），修改子列表会影响原 `ArrayList`，索引超出范围会抛 `IndexOutOfBoundsException`。**左闭右开** |



#### **（6）示例代码**

```java
import java.util.*;

public class ArrayListDemo {
    public static void main(String[] args) {
        // 1. 创建 ArrayList
        ArrayList`&lt;String&gt;` list = new ArrayList<>();
        
        // 2. 添加元素
        list.add("Java");
        list.add("Python");
        list.add("C++");
        list.add("Java"); // 允许重复
        System.out.println("添加元素后: " + list); // [Java, Python, C++, Java]

        // 3. 在指定位置插入元素
        list.add(1, "JavaScript");
        System.out.println("插入元素后: " + list); // [Java, JavaScript, Python, C++, Java]

        // 4. 获取元素
        String firstElement = list.get(0);
        System.out.println("索引 0 处的元素: " + firstElement); // Java

        // 5. 删除元素
        list.remove("Python");
        System.out.println("删除 'Python' 后: " + list); // [Java, JavaScript, C++, Java]

        String removedElement = list.remove(2);
        System.out.println("删除索引 2 处的元素: " + removedElement); // C++
        System.out.println("删除后: " + list); // [Java, JavaScript, Java]

        // 6. 修改元素
        list.set(1, "Go");
        System.out.println("修改索引 1 处的元素: " + list); // [Java, Go, Java]

        // 7. 查找元素
        int index = list.indexOf("Java");
        System.out.println("Java 的索引: " + index); // 0

        boolean contains = list.contains("Go");
        System.out.println("是否包含 'Go': " + contains); // true

        // 8. 遍历元素
        System.out.print("遍历元素: ");
        for (String s : list) {
            System.out.print(s + " ");
        }
        System.out.println();

        // 9. 获取大小
        System.out.println("ArrayList 大小: " + list.size()); // 3

        // 10. 使用 toArray() 转换为数组
        Object[] array1 = list.toArray();
        System.out.println("toArray() 结果: " + Arrays.toString(array1)); // [Java, Go, Java]

        // 11. 使用 toArray(T[] a) 转换为指定类型数组
        String[] array2 = list.toArray(new String[0]);
        System.out.println("toArray(T[] a) 结果: " + Arrays.toString(array2)); // [Java, Go, Java]

        // 12. 获取子列表 subList()
        List`&lt;String&gt;` subList = list.subList(0, 2);
        System.out.println("子列表 (索引 0-2): " + subList); // [Java, Go]

        // 13. 清空集合
        list.clear();
        System.out.println("清空后: " + list); // []
        System.out.println("是否为空: " + list.isEmpty()); // true
    }
}

```

------



#### （7）适用场景

1. **频繁随机访问**：`ArrayList` 通过索引访问，`O(1)` 时间复杂度，适用于查找频繁的场景。
2. **元素数量变化不频繁**：`ArrayList` 适用于少量新增/删除，避免因扩容或移动元素导致的性能损失。
3. **适用于多线程读多写少场景**：可使用 `Collections.synchronizedList()` 进行同步。

**不适用场景：**

- **频繁插入/删除**：应使用 `LinkedList`，避免 `O(n)` 元素移动开销。
- **线程安全需求**：`CopyOnWriteArrayList` 适用于高并发场景。

------



#### **（8）总结**

- `ArrayList` 是**基于数组**实现的**动态集合**，提供了**有序存储**，允许重复元素，支持**随机访问**，但插入/删除性能较低。
- 适用于**查询多、修改少**的场景，不适用于**大量插入/删除**。
- **线程不安全**，在多线程环境下需要额外同步处理。



#### （9）练习

![image-20250307211957960](%E9%9B%86%E5%90%88.assets/image-20250307211957960.png)

##### ①ArrayList存储字符串并遍历

**案例需求**

​	创建一个存储字符串的集合，存储3个字符串元素，使用程序实现在控制台遍历该集合

 **代码实现**

```java
public class ArrayListDemo3 {
    public static void main(String[] args) {
        //1.创建集合对象
        ArrayList`&lt;String&gt;` list = new ArrayList<>();

        //2.添加元素
        list.add("aaa");
        list.add("bbb");
        list.add("ccc");
        list.add("ddd");

        //3.遍历
        //快捷键: list.fori 正向遍历
        //list.forr 倒着遍历
        System.out.print("[");
        for (int i = 0; i < list.size(); i++) {
            //i 依次表示集合里面的每一个索引

            if(i == list.size() - 1){
                //最大索引
                System.out.print(list.get(i));
            }else{
                //非最大索引
                System.out.print(list.get(i) + ", ");
            }
        }
        System.out.print("]");
    }
}

```

##### ②ArrayList存储学生对象并遍历

**案例需求**

​	创建一个存储学生对象的集合，存储3个学生对象，使用程序实现在控制台遍历该集合

![image-20250307213601633](%E9%9B%86%E5%90%88.assets/image-20250307213601633.png)

**代码实现**

```java
public class ArrayListDemo4 {
    public static void main(String[] args) {
        //1.创建集合对象，用来存储数据
        ArrayList`&lt;Student&gt;` list = new ArrayList<>();

        //2.创建学生对象
        Student s1 = new Student("zhangsan",16);
        Student s2 = new Student("lisi",15);
        Student s3 = new Student("wangwu",18);

        //3.把学生对象添加到集合中
        list.add(s1);
        list.add(s2);
        list.add(s3);

        //4.遍历
        for (int i = 0; i < list.size(); i++) {
            //i 依次表示集合中的每一个索引
            Student stu = list.get(i);
            System.out.println(stu.getName() + ", " + stu.getAge());
        }
    }
}

```



##### ③查找用户的索引

**需求：** 

- main方法中定义一个集合，存入三个用户对象。 

  -    用户属性为：id，username，password    

- 要求：定义一个方法，根据id查找对应的学生信息。

  -    如果存在，**返回索引**

  -    如果不存在，返回-1


**代码示例：**

```java
public class ArrayListDemo6 {
    public static void main(String[] args) {
        /*需求：
        1，main方法中定义一个集合，存入三个用户对象。
        用户属性为：id，username，password
        2，要求：定义一个方法，根据id查找对应的学生信息。
        如果存在，返回索引
        如果不存在，返回-1*/


        //1.创建集合对象
        ArrayList`&lt;User&gt;` list = new ArrayList<>();

        //2.创建用户对象
        User u1 = new User("heima001", "zhangsan", "123456");
        User u2 = new User("heima002", "lisi", "1234");
        User u3 = new User("heima003", "wangwu", "1234qwer");

        //3.把用户对象添加到集合当中
        list.add(u1);
        list.add(u2);
        list.add(u3);

        //4.调用方法，通过id获取对应的索引
        int index = getIndex(list, "heima001");

        System.out.println(index);

    }


    //1.我要干嘛？  根据id查找对应的学生信息
    //2.我干这件事情需要什么才能完成？   集合 id
    //3.方法的调用处是否需要继续使用方法的结果？
    //要用必须返回，不要用可以返回也可以不返回
    //明确说明需要有返回值 int
    public static int getIndex(ArrayList`&lt;User&gt;` list, String id) {
        //遍历集合得到每一个元素
        for (int i = 0; i < list.size(); i++) {
            User u = list.get(i);
            String uid = u.getId();
            if(uid.equals(id)){
                return i;
            }
        }
        //因为只有当集合里面所有的元素都比较完了，才能断定id是不存在的。
        return -1;
    }
}

```



##### ④ 判断用户的是否存在

**需求：**

- main方法中定义一个集合，存入三个用户对象。
  - 用户属性为：id，username，password
- 要求：定义一个方法，根据id查找对应的学生信息。
  - 如果存在，返回true
  - 如果不存在，返回false

```java
public class ArrayListDemo5 {
    public static void main(String[] args) {
       /* 需求：
        1，main方法中定义一个集合，存入三个用户对象。
        用户属性为：id，username，password
        2，要求：定义一个方法，根据id查找对应的学生信息。
        如果存在，返回true
        如果不存在，返回false*/

        //1.定义集合
        ArrayList`&lt;User&gt;` list = new ArrayList<>();

        //2.创建对象
        User u1 = new User("heima001","zhangsan","123456");
        User u2 = new User("heima002","lisi","12345678");
        User u3 = new User("heima003","wangwu","1234qwer");

        //3.把用户对象添加到集合当中
        list.add(u1);
        list.add(u2);
        list.add(u3);

        //4.调用方法，查询id是否存在
        boolean result = contains(list, "heima001");
        System.out.println(result);

    }

    //定义在测试类中的方法需要加static
    //1.我要干嘛？ 我要根据id查询学生是否存在
    //2.我干这件事情，需要什么才能完成？ 集合 id
    //3.方法的调用处是否需要使用方法的结果？
    //如果要用，必须返回，如果不用，可以返回也可以不返回
    //但是本题明确说明需要返回
    public static boolean contains(ArrayList`&lt;User&gt;` list, String id){
        //循环遍历集合，得到集合里面的每一个元素
        //再进行判断

        for (int i = 0; i < list.size(); i++) {
            //i 索引  list.get(i); 元素
            User u = list.get(i);
            //判断id是否存在，我是拿着谁跟谁比较
            //需要把用户对象里面的id拿出来再进行比较。
            String uid = u.getId();
            if(id.equals(uid)){
                return true;//return 关键字：作用就是结束方法。
            }
        }
        //只有当集合里面所有的元素全部比较完毕才能认为是不存在的。
        return false;
    }

}
```



### 3、🚀ArrayList-==底层原理==

![image-20250308113425698](%E9%9B%86%E5%90%88.assets/image-20250308113425698.png)

#### （1）分类-添加集合的方式

![image-20250308112943908](%E9%9B%86%E5%90%88.assets/image-20250308112943908.png)

##### ①一次添加一个

![image-20250308113358660](%E9%9B%86%E5%90%88.assets/image-20250308113358660.png)



##### ②一次添加多个

![image-20250308113300903](%E9%9B%86%E5%90%88.assets/image-20250308113300903.png)

#### （2）==源码分析==

##### ①==添加第一个==元素时

![image-20250308113720637](%E9%9B%86%E5%90%88.assets/image-20250308113720637.png)

##### ②后续==需要扩容==时

![image-20250308114042303](%E9%9B%86%E5%90%88.assets/image-20250308114042303.png)



### 4、_==LinkedList==_-基础知识

![image-20250308140438554](%E9%9B%86%E5%90%88.assets/image-20250308140438554.png)

![image-20250308140512955](%E9%9B%86%E5%90%88.assets/image-20250308140512955.png)



### 5、🚀LinkedList-==底层源码==

**这里以add(E e)方法为例**

![image-20250308142154700](%E9%9B%86%E5%90%88.assets/image-20250308142154700.png)



### 6、🚀迭代器==_Iterator_==-底层源码

**这里以==ArrayList==为例**

![image-20250308143948267](%E9%9B%86%E5%90%88.assets/image-20250308143948267.png)





## 八、_==Set==_集合

![image-20250307215524739](%E9%9B%86%E5%90%88.assets/image-20250307215524739.png)

### 1、Set-基础知识

#### （1）Set集合的特点

![image-20250309152641133](%E9%9B%86%E5%90%88.assets/image-20250309152641133.png)

#### （2）Set集合的方法

![image-20250309152659549](%E9%9B%86%E5%90%88.assets/image-20250309152659549.png)

#### （3）Set的==三种==遍历方式

![image-20250309152811148](%E9%9B%86%E5%90%88.assets/image-20250309152811148.png)

```java
package com.pyw.a35set;


import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import java.util.function.Consumer;

public class A01_SetDemo1 {
    public static void main(String[] args) {
       /*
           利用Set系列的集合，添加字符串，并使用多种方式遍历。
            迭代器
            增强for
            Lambda表达式

        */

        //1.创建一个Set集合的对象
        Set`&lt;String&gt;` s = new HashSet<>();

        //2,添加元素-元素不重复
        //如果当前元素是第一次添加，那么可以添加成功，返回true
        //如果当前元素是第二次添加，那么添加失败，返回false
        s.add("张三");
        s.add("李四");
        s.add("王五");

        //3.打印集合
        //无序
        System.out.println(s);//[李四, 张三, 王五]

        System.out.println("=====迭代器=====");
        //迭代器遍历
        Iterator`&lt;String&gt;` it = s.iterator();
        while (it.hasNext()){
            String next = it.next();
            System.out.println(next);
        }

        System.out.println("=====增强for=====");
        for (String s1 : s) {
            System.out.println(s1);
        }

        System.out.println("=====Lambda表达式=====");
        // Lambda表达式
        s.forEach(str -> System.out.println(str));

        // Lambda表达式-复杂写法
        s.forEach(new Consumer`&lt;String&gt;`() {
            @Override
            public void accept(String str) {
                System.out.println(str);
            }
        });

    }
}

```

#### （4）小结

![image-20250309153102047](%E9%9B%86%E5%90%88.assets/image-20250309153102047.png)

### 2、_==HashSet==_-数组+链表+红黑树

#### （1）概述

![image-20250309154058599](%E9%9B%86%E5%90%88.assets/image-20250309154058599.png)



#### （2）哈希值-==hashCode==()

![image-20250309154112875](%E9%9B%86%E5%90%88.assets/image-20250309154112875.png)

##### ①哈希值



![image-20250309154133486](%E9%9B%86%E5%90%88.assets/image-20250309154133486.png)

![image-20250309154212674](%E9%9B%86%E5%90%88.assets/image-20250309154212674.png)

##### ②对象的哈希值==特点==

![image-20250309154428300](%E9%9B%86%E5%90%88.assets/image-20250309154428300.png)

- 如果==**没有重写**==hashCode方法，不同对象计算出的哈希值是不同的

  - ![image-20250309154620685](%E9%9B%86%E5%90%88.assets/image-20250309154620685.png)

- 如果==**已经重写**==hashcode方法，**不同的对象只要属性值相同**，计算出的哈希值就是一样的

  - ![image-20250309154546159](%E9%9B%86%E5%90%88.assets/image-20250309154546159.png)

- 在小部分情况下，不同的属性值或者不同的地址值计算出来的哈希值==**也有可能一样**==。（**哈希碰撞**）

  - ![image-20250309154521469](%E9%9B%86%E5%90%88.assets/image-20250309154521469.png)

  - ```java
    System.out.println("abc".hashCode());//96354
    System.out.println("acD".hashCode());//96354
    ```



##### ③代码示例

```java
package com.pyw.a35set;

import java.util.Objects;

public class Student implements Comparable`&lt;Student&gt;`{
    private String name;
    private int age;


    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

	//get() set()方法 .....

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return age == student.age && Objects.equals(name, student.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}

```

**测试**

```java
package com.pyw.a35set;

public class A02_HashSetDemo1 {
    public static void main(String[] args) {
        /*
            哈希值：
                对象的整数表现形式
                1. 如果没有重写hashCode方法，不同对象计算出的哈希值是不同的
                2. 如果已经重写hashcode方法，不同的对象只要属性值相同，计算出的哈希值就是一样的
                3. 但是在小部分情况下，不同的属性值或者不同的地址值计算出来的哈希值也有可能一样。（哈希碰撞）

         */

        //1.创建对象
        Student s1 = new Student("zhangsan",23);
        Student s2 = new Student("zhangsan",23);

        //2.如果没有重写hashCode方法，不同对象计算出的哈希值是不同的
        //  如果已经重写hashcode方法，不同的对象只要属性值相同，计算出的哈希值就是一样的
        System.out.println(s1.hashCode());//-1461067292
        System.out.println(s2.hashCode());//-1461067292


        //在小部分情况下，不同的属性值或者不同的地址值计算出来的哈希值也有可能一样。
        //哈希碰撞
        System.out.println("abc".hashCode());//96354
        System.out.println("acD".hashCode());//96354

    }
}
```



#### （3）🚀HashSet==底层原理==

##### ①哈希表的组成

- JDK8之前：数组+链表
- JDK8开始：**数组+链表+红黑树**

![image-20250309160639391](%E9%9B%86%E5%90%88.assets/image-20250309160639391.png)

##### ②添加元素的==过程==

![image-20250309160621159](%E9%9B%86%E5%90%88.assets/image-20250309160621159.png)



![image-20250309160735821](%E9%9B%86%E5%90%88.assets/image-20250309160735821.png)

##### ③==重写==hashCode和equals

![image-20250309161020895](%E9%9B%86%E5%90%88.assets/image-20250309161020895.png)

##### ④==问题==

![image-20250309161318892](%E9%9B%86%E5%90%88.assets/image-20250309161318892.png)



###### 1. **HashSet 存取顺序不同的原因**

`HashSet` 是基于 **哈希表（HashMap）** 实现的，它的存储顺序与插入顺序无关，而是由哈希函数计算出的哈希值决定的。当你向 `HashSet` 添加元素时，它会：

- 计算元素的哈希值
- 确定存储位置（哈希桶）
- 可能涉及**哈希冲突**和**链地址法/红黑树**等机制

因此，元素在 `HashSet` 中的存储顺序取决于哈希值，而不是插入顺序，所以存入和取出的顺序可能不同。

------

###### 2. **HashSet 为什么没有索引？**

`HashSet` 本质上是基于 **`HashMap`** 来实现的，而 `HashMap` 的存储方式是 **key-value 映射**，底层采用哈希桶存储，并不按**顺序排列**元素。因此：

- `HashSet` 只关注 **是否包含元素**，不关心 **顺序**，不支持 **按索引访问**。
- 由于哈希表的结构，它不像 **`ArrayList`** 那样可以通过索引快速访问元素，而是通过 **计算哈希值** 进行查找。

如果需要 **有序** 并且 **支持索引** 的集合，可以使用 `ArrayList` 或 `LinkedHashSet`（维护插入顺序）。

------

###### 3. **HashSet 如何保证数据去重？**

`HashSet` **利用哈希值和 equals() 方法保证数据不重复**：

1. 当添加元素时，`HashSet` 先计算元素的哈希值，确定存储位置。
2. 如果该位置已有元素：
   - 调用 `equals()` 方法，检查是否为相同元素。
   - 若 `equals()` 返回 `true`，则认为元素重复，不会添加。
   - 若 `equals()` 返回 `false`，则发生**哈希冲突**，新元素将存入链表或红黑树中。
3. 由于相同对象的 `hashCode()` 结果相同，并且 `equals()` 保证对象内容不同的情况下仍可区分，因此 `HashSet` 能够确保**不会存入重复的元素**。

总结：

- 依赖 `hashCode()` 确定存储位置
- 依赖 `equals()` 确保不存入重复元素
- 可能发生**哈希冲突**，需要处理（链表/红黑树）

------

###### **补充：如何优化 HashSet 性能？**

1. **重写 `hashCode()` 和 `equals()` 方法**
   - 确保哈希值分布均匀，避免大量哈希冲突。
   - 确保 `equals()` 逻辑正确，避免误判重复元素。
2. **适当调整 `HashSet` 的初始容量**
   - `HashSet` 的默认初始容量是 16，负载因子 0.75。
   - 如果预计数据量较大，可以在**构造 `HashSet` 时设定合适的容量**，减少扩容操作。

------

###### **总结**

| 特性         | 解释                                             |
| ------------ | ------------------------------------------------ |
| 存取顺序不同 | **存储顺序由哈希值决定，非插入顺序**             |
| 无索引       | **基于 `HashMap`**，不按顺序存储，无法按索引访问 |
| 数据去重     | 依赖 `hashCode()` 和 `equals()` **保证唯一性**   |

如果需要**顺序存储的 Set**，可以使用 `LinkedHashSet`；如果需要 **自动排序的 Set**，可以使用 `TreeSet`（基于红黑树）。



##### ⑤示例代码

```java
package com.pyw.a35set;

import java.util.HashSet;

public class A03_HashSetDemo2 {
    public static void main(String[] args) {
        /* 需求：创建一个存储学生对象的集合，存储多个学生对象。
            使用程序实现在控制台遍历该集合。
            要求：学生对象的成员变量值相同，我们就认为是同一个对象

        String   Integer
*/
        //1.创建三个学生对象
        Student s1 = new Student("zhangsan",23);
        Student s2 = new Student("lisi",24);
        Student s3 = new Student("wangwu",25);
        Student s4 = new Student("zhangsan",23);
        Student s5 = new Student("zhangsan",23);

        //2.创建集合用来添加学生
        HashSet`&lt;Student&gt;` hs = new HashSet<>();

        //3.添加元素
        System.out.println(hs.add(s1));
        System.out.println(hs.add(s2));
        System.out.println(hs.add(s3));
        System.out.println(hs.add(s4));
        System.out.println(hs.add(s5));
        /*
            这个时候是没有去重的，因为hashcode默认是按照地址值进行计算的
            如果需要去重，则需要重写hashcode方法和equals方法

            但是像Integer String这种方法是已经写好了的，就不用重写了
         */
        //4.打印
        System.out.println(hs);
    }
}
```



### 3、_==LinkedHashSet==_-双链表记录顺序

#### （1）概述

![image-20250309162006435](%E9%9B%86%E5%90%88.assets/image-20250309162006435.png)

#### （2）🚀==特点和底层原理==

![image-20250309162954108](%E9%9B%86%E5%90%88.assets/image-20250309162954108.png)



####  （3）示例代码

```java
package com.pyw.a35set;

import java.util.LinkedHashSet;

public class A04_LinkedHashSetDemo {
    public static void main(String[] args) {
        //特点 有序、不重复、无索引
        //底层基于哈希表，使用双链表记录添加顺序
        //1.创建4个学生对象
        Student s1 = new Student("zhangsan",23);
        Student s2 = new Student("lisi",24);
        Student s3 = new Student("wangwu",25);
        Student s4 = new Student("zhangsan",23);


        //2.创建集合的对象
        LinkedHashSet`&lt;Student&gt;` lhs = new LinkedHashSet<>();


        //3.添加元素
        System.out.println(lhs.add(s3)); 
        System.out.println(lhs.add(s2));
        System.out.println(lhs.add(s1));
        System.out.println(lhs.add(s4));

        //4.打印集合
        System.out.println(lhs);  //读取和存取顺序一致
    }
}
```



#### （4）小结

![image-20250309163157071](%E9%9B%86%E5%90%88.assets/image-20250309163157071.png)





### 4、_==TreeSet==_-红黑树

#### （1）TreeSet的特点

![image-20250309165247384](%E9%9B%86%E5%90%88.assets/image-20250309165247384.png)

#### （2）TreeSet-==可排序==

**示例代码**

![image-20250309165343389](%E9%9B%86%E5%90%88.assets/image-20250309165343389.png)

```java
package com.pyw.a35set;


import java.util.Iterator;
import java.util.TreeSet;

public class A04_TreeSetDemo1 {
    public static void main(String[] args) {
        /*
        *
        *       需求：利用TreeSet存储整数并进行排序
        *
        * */

        //1.创建TreeSet集合对象
        TreeSet`&lt;Integer&gt;` ts = new TreeSet<>();

        //2.添加元素
        ts.add(4);
        ts.add(5);
        ts.add(1);
        ts.add(3);
        ts.add(2);

        //3.打印集合
        System.out.println(ts);

        //4.遍历集合（三种遍历）
        //迭代器
        Iterator`&lt;Integer&gt;` it = ts.iterator();
        while(it.hasNext()){
            int i = it.next();
            System.out.println(i);
        }

        System.out.println("--------------------------");
        //增强for
        for (int t : ts) {
            System.out.println(t);
        }
        System.out.println("--------------------------");
        //lambda
        ts.forEach( i-> System.out.println(i));

    }
}
```



#### （3）默认排序规则

![image-20250309165606631](%E9%9B%86%E5%90%88.assets/image-20250309165606631.png)

![image-20250309165646643](%E9%9B%86%E5%90%88.assets/image-20250309165646643.png)



#### （4）TreeSet的两种比较方式

<a id="TreeSet的两种排序规则"> </a>

![image-20250309170842676](%E9%9B%86%E5%90%88.assets/image-20250309170842676.png)



#### （5）==默认排序比较规则==-重写==compareTo==方法

**默认排序/自然排序：Javabean类==实现comparable接口指定比较规则==**

![image-20250309170015750](%E9%9B%86%E5%90%88.assets/image-20250309170015750.png)

##### ①概述

方式一：

- 默认的排序规则/自然排序

- Student**实现Comparable接口**，**重写里面的抽象方法compareTo**，再**指定比较规则**

  - **返回值：**
  
    - 负数：认为要添加的元素是小的，存树的左边
    - 正数：认为要添加的元素是大的，存树的右边
    - 0：认为添加的元素**已存在**，舍弃
  
  - ```java
    public class Student implements Comparable`&lt;Student&gt;`{
    
        @Override
        public int compareTo(Student o) {
            //指定排序规则
            //只看年龄，想要按照年龄的升序进行排序
            /*
                this表示当前要添加的元素
                o表示已在红黑树中存在的元素
                  o是会变的，一只代表当前比较的元素，直到在红黑树找到自己的位置
                返回值：
                    负数：认为要添加的元素是小的，存左边
                    正数：认为要添加的元素是大的，存右边
                    0：认为添加的元素已存在，舍弃
             */
            System.out.println("====");
            System.out.println("this:"+this.getAge());
            System.out.println("o:"+o.getAge());
            return this.getAge() - o.getAge();
        }
    }
    ```
  
    
  

##### ②练习

![image-20250309165819929](%E9%9B%86%E5%90%88.assets/image-20250309165819929.png)

**示例代码**

```java
package com.pyw.a35set;
import java.util.Objects;

public class Student implements Comparable`&lt;Student&gt;`{
    private String name;
    private int age;


    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    //get set ......

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return age == student.age && Objects.equals(name, student.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }

    @Override
    public int compareTo(Student o) {
        //指定排序规则
        //只看年龄，想要按照年龄的升序进行排序
        /*
            this表示当前要添加的元素
            o表示已在红黑树中存在的元素
              o是会变的，一只代表当前比较的元素，直到在红黑树找到自己的位置
            返回值：
                负数：认为要添加的元素是小的，存左边
                正数：认为要添加的元素是大的，存右边
                0：认为添加的元素已存在，舍弃
         */
        System.out.println("====");
        System.out.println("this:"+this.getAge());
        System.out.println("o:"+o.getAge());
        return this.getAge() - o.getAge();
    }
}

```

**测试**

```java
package com.pyw.a35set;
import java.util.TreeSet;

public class A05_TreeSetDemo2 {
    public static void main(String[] args) {
        /*
            需求：创建TreeSet集合，并添加3个学生对象
            学生对象属性：
                姓名，年龄。
                要求按照学生的年龄进行排序
                同年龄按照姓名字母排列（暂不考虑中文）
                同姓名，同年龄认为是同一个人

            方式一：
                默认的排序规则/自然排序
                Student实现Comparable接口，重写里面的抽象方法，再指定比较规则
        */


        //1.创建三个学生对象
        Student s2 = new Student("lisi",24);
        Student s1 = new Student("zhangsan",23);
        Student s3 = new Student("wangwu",25);
        Student s4 = new Student("zhaoliu",26);


        //2.创建集合对象
        TreeSet`&lt;Student&gt;` ts = new TreeSet<>();

        /*
            排序规则：
                如果是字符、字符串类型，按照ASCII码表中的升序进行排序

            注：如果使用TreeSet集合存储对象，需要实现Comparabl接口，
            不然就是没有排序规则添加时会报错
         */
        //3.添加元素
        ts.add(s3);
        ts.add(s2);
        ts.add(s1);
        ts.add(s4);

        //4.打印集合
        System.out.println(ts);

        //HashCode和equals方法和哈希表有关
        //TreeSet 底层是红黑树不需要重写HashCode和equals

    }
}
```



##### ③==底层过程分析==

```java
@Override
public int compareTo(Student o) {
    //指定排序规则
    //只看年龄，想要按照年龄的升序进行排序
    /*
            this表示当前要添加的元素
            o表示已在红黑树中存在的元素
              o是会变的，一只代表当前比较的元素，直到在红黑树找到自己的位置
            返回值：
                负数：认为要添加的元素是小的，存左边
                正数：认为要添加的元素是大的，存右边
                0：认为添加的元素已存在，舍弃
         */
    System.out.println("====");
    System.out.println("this:"+this.getAge());
    System.out.println("o:"+o.getAge());
    return this.getAge() - o.getAge();
}
```



![image-20250309170551415](%E9%9B%86%E5%90%88.assets/image-20250309170551415.png)





#### （6）==自定义==排序比较规则-==比较器Comparator==排序

##### ①==使用场景==

比如说如果TreeSet集合中的**元素类型是String**，若使用方式一：重写String的compareTo方法，**显然是不可行的**；这时就可以通过使用自定义的排序比较规则-**比较器Comparator**

```java
package com.pyw.a35set;

import java.util.Comparator;
import java.util.TreeSet;

public class A06_TreeSetDemo3 {
    public static void main(String[] args) {
       /*
            需求：请自行选择比较器排序和自然排序两种方式；
            要求：存入四个字符串， “c”, “ab”, “df”, “qwer”
            按照长度排序，如果一样长则按照首字母排序

            采取第二种排序方式：比较器排序
        */

        //1.创建集合
        //o1:表示当前要添加的元素
        //o2：表示已经在红黑树存在的元素
        //返回值规则跟之前是一样的

        TreeSet`&lt;String&gt;` ts = new TreeSet<>((o1, o2) -> {
            //按照长度排序
            int i = o1.length() - o2.length();
            //如果长度一样，按照首字母排序 o1.compareTo(o2)(默认首字母排序方法)
            i = i == 0 ? o1.compareTo(o2): i;
            return i;
        });

        /* TreeSet`&lt;String&gt;` ts = new TreeSet<>(new Comparator`&lt;String&gt;`() {
            @Override
            public int compare(String o1, String o2) {
                //按照长度排序
                int i = o1.length() - o2.length
                if(i == 0){
                    //如果长度一样，按照首字母排序 o1.compareTo(o2)(默认首字母排序方法)
                    i = o1.compareTo(o2);
                }
                return i;
        });*/

        //2.添加元素
        ts.add("c");
        ts.add("ab");
        ts.add("df");
        ts.add("qwer");

        //3.打印集合
        System.out.println(ts);
    }
}

```



#### （7）综合练习

![image-20250309171815375](%E9%9B%86%E5%90%88.assets/image-20250309171815375.png)

**Student对象**

```java
package com.pyw.a35set;

public class Student2 implements Comparable`&lt;Student2&gt;` {
    //姓名
    private String name;
    //年龄
    private int age;
    //语文成绩
    private int chinese;
    //数学成绩
    private int math;
    //英语成绩
    private int english;

    //总成绩
    private int allScore;


    public Student2() {
    }

    public Student2(String name, int age, int chinese, int math, int english) {
        this.name = name;
        this.age = age;
        this.chinese = chinese;
        this.math = math;
        this.english = english;
    }

	//set get toString

    /* 按照总分从高到低输出到控制台
     如果总分一样，按照语文成绩排
     如果语文一样，按照数学成绩排
     如果数学成绩一样，按照英语成绩排
     如果英文成绩一样，按照年龄排
     如果年龄一样，按照姓名的字母顺序排
     如果都一样，认为是同一个学生，不存。*/
    @Override
    public int compareTo(Student2 o) {
        //新增添加到集合的对象分数
        int thisScore = this.getChinese() + this.getEnglish() + this.getMath();
        //集合中元素的对象分数
        int listScore = o.getChinese() + o.getEnglish() + o.getMath();
        //为了后续遍历集合的时候看得到总分
        allScore = thisScore;
        //计算总分
        int result = thisScore - listScore;
        //如果总分一样，按照语文成绩排
        result = result == 0 ? this.getChinese() - o.getChinese() : result;
        result = result == 0 ? this.getMath() - o.getMath() : result;
        result = result == 0 ? this.getEnglish() - o.getEnglish() : result;
        result = result == 0 ? this.getAge() - o.getAge() : result;
        result = result == 0 ? this.getName().compareTo(o.getName()) : result;
        System.out.println("========================");
        System.out.println("添加元素总分：" + thisScore);
        System.out.println("历史元素总分：" + listScore);
        return result;

    }
}

```



```java
package com.pyw.a35set;

import java.util.TreeSet;

public class A06_TreeSetTest1 {
    public static void main(String[] args) {
      /*  需求：创建5个学生对象
        属性：(姓名,年龄，语文成绩,数学成绩,英语成绩),
        按照总分从高到低输出到控制台
        如果总分一样，按照语文成绩排
        如果语文一样，按照数学成绩排
        如果数学成绩一样，按照英语成绩排
        如果英文成绩一样，按照年龄排
        如果年龄一样，按照姓名的字母顺序排
        如果都一样，认为是同一个学生，不存。

        第一种：默认排序/自然排序
        第二种：比较器排序

        默认情况下，用第一种排序方式，如果第一种不能满足当前的需求，采取第二种方式。


        课堂练习：
            要求：在遍历集合的时候，我想看到总分。

      */
        //1.创建学生对象
        Student2 s1 = new Student2("zhangsan",23,90,99,50);
        Student2 s2 = new Student2("lisi",24,90,98,50);
        Student2 s3 = new Student2("wangwu",25,95,100,30);
        Student2 s7 = new Student2("zhaoliu",26,60,99,70);
        Student2 s4 = new Student2("zhaoliu",26,59,100,70);
        Student2 s5 = new Student2("qianqi",26,70,80,70);
        Student2 s6 = new Student2("abc",26,70,80,70);

        TreeSet`&lt;Student2&gt;` ts = new TreeSet<>();
        //3.添加元素
        ts.add(s1);
        ts.add(s2);
        ts.add(s3);
        ts.add(s4);
        ts.add(s5);
        ts.add(s6);
        ts.add(s7);

        //4.打印集合
        ts.forEach((str) -> System.out.println(str));
    }
}
```

#### （8）小结

![image-20250309173409625](%E9%9B%86%E5%90%88.assets/image-20250309173409625.png)



### 5、使用场景

![image-20250309173501297](%E9%9B%86%E5%90%88.assets/image-20250309173501297.png)

### 6、🚀各Set集合的==底层源码==

#### （1）HashSet

![image-20250309173652557](%E9%9B%86%E5%90%88.assets/image-20250309173652557.png)

#### （2）LinkedHashSet

![image-20250309173754911](%E9%9B%86%E5%90%88.assets/image-20250309173754911.png)

![image-20250309173835426](%E9%9B%86%E5%90%88.assets/image-20250309173835426.png)

#### （3）TreeSet

![image-20250309173854404](%E9%9B%86%E5%90%88.assets/image-20250309173854404.png)





## 九、双列集合-_==Map==_

![image-20250311144350489](%E9%9B%86%E5%90%88.assets/image-20250311144350489.png)

### 1、Map集合的基础知识

#### （1）双列集合的特点

![image-20250311134928987](%E9%9B%86%E5%90%88.assets/image-20250311134928987.png)

- 双列集合一次需要**存一对数据**，分别为**键和值**
- **==键不能重复，值可以重复==**
- 键和值是**一一对应**的，每一个键只能找到自己对应的值
- 键+值这个整体我们称之为“键值对”或者“键值对对象”，在Java中叫做“**==Entry对象==**”

![image-20250311134735904](%E9%9B%86%E5%90%88.assets/image-20250311134735904.png)

![image-20250311134821763](%E9%9B%86%E5%90%88.assets/image-20250311134821763.png)





![image-20250311134804690](%E9%9B%86%E5%90%88.assets/image-20250311134804690.png)

![image-20250311134912597](%E9%9B%86%E5%90%88.assets/image-20250311134912597.png)



#### （2）Map的==常见API==

![image-20250311135337165](%E9%9B%86%E5%90%88.assets/image-20250311135337165.png)

![image-20250311141636932](%E9%9B%86%E5%90%88.assets/image-20250311141636932.png)



- V **put(K key,V value)**                  ==**添加/覆盖**元素==
  - 在添加数据的时候，如果**键不存在**，那么直接把键值对对象添加到map集合当中,==**方法返回null**==
  - 在添加数据的时候，如果**键是存在的**，那么会把原有的**键值对对象覆盖**，会把==**被覆盖的值进行返回。**==
- V **remove(Object key)**                    根据键删除键值对元素
- V ==**get(Object key)**==           **返回指定键映射到的值**，如果此映射不包含该键的映射，则**返回 null** 。 
- void clear()                            移除所有的键值对元素
- boolean **containsKey(Object key)**         判断集合是否包含指定的键
- boolean containsValue(Object value)     判断集合是否包含指定的值
- boolean isEmpty()                       判断集合是否为空
- Set`&lt;K&gt;` **keySet()**                    返回此地图中**包含的键的Set视图**。 
  - 获取所有的键，把这些键放到一个**单列集合**当中
- static &lt;K,V&gt; Map.Entry&lt;K,V&gt;    **entry(K k, V v)**          返回包含给定键和值的不可变Map.Entry 。 
- Set<Map.Entry&lt;K,V>&gt;    **entrySet()**                    返回此地图中**包含的映射的Set视图**。 
  - Entry是Map接口的**内部接口**
- int **size()**                              集合的长度，也就是集合中键值对的个数

```java
package com.pyw.a36map;

import java.util.HashMap;
import java.util.Map;

public class A01_MapDemo1 {
    public static void main(String[] args) {
        //TODO Map集合
        /*
            V put(K key,V value)                    添加元素
            V remove(Object key)                    根据键删除键值对元素
            void clear()                            移除所有的键值对元素
            boolean containsKey(Object key)         判断集合是否包含指定的键
            boolean containsValue(Object value)     判断集合是否包含指定的值
            boolean isEmpty()                       判断集合是否为空
            int size()                              集合的长度，也就是集合中键值对的个数
        */


        //1.创建Map集合的对象
        Map<String, String> m = new HashMap<>();

        //2.添加元素
        //put方法的细节：
        //添加/覆盖
        //在添加数据的时候，如果键不存在，那么直接把键值对对象添加到map集合当中,方法返回null
        //在添加数据的时候，如果键是存在的，那么会把原有的键值对对象覆盖，会把被覆盖的值进行返回。
        m.put("zhangsan", "张三");
        m.put("lisi", "李四");
        String put = m.put("wangwu", "王五");
        System.out.println("为覆盖值的返回值：" + put);  //null

        //返回值:被覆盖的值
        String s = m.put("zhangsan", "老张三");
        System.out.println("覆盖值的返回值：" + s);  //"张三"

        //删除
        m.remove("zhangsan");


        //清空
//        m.clear();

        //判断是否包含
        boolean key = m.containsKey("lisi");
        //判断键
        System.out.println("判断键是否存在" + key);

        //判断值
        boolean value = m.containsValue("王五");
        System.out.println("判断值是否存在" + value);

        //判断集合是否为空
        boolean empty = m.isEmpty();
        System.out.println(empty);

        //集合的长度
        int size = m.size();
        System.out.println("集合的长度:"+size);

        //3.打印集合
  ![image-20250311142605949](%E9%9B%86%E5%90%88.assets/image-20250311142605949.png)      System.out.println(m);

    }
}
```



#### （3）Map集合的==遍历方式==

![image-20250311142607492](%E9%9B%86%E5%90%88.assets/image-20250311142607492.png)

##### ①键找值-==keySet==()

```java
package com.pyw.a36map;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class A02_MapDemo2 {
    public static void main(String[] args) {
        //TODO Map集合的第一种遍历方式

        //三个课堂练习：
        //
        //练习一：  利用键找值的方式遍历map集合，要求：装着键的单列集合使用增强for的形式进行遍历
        //练习二：  利用键找值的方式遍历map集合，要求：装着键的单列集合使用迭代器的形式进行遍历
        //练习三：  利用键找值的方式遍历map集合，要求：装着键的单列集合使用lambda表达式的形式进行遍历

        //1.创建Map集合的对象
        Map<String, String> map = new HashMap<>();
        //2.添加元素
        map.put("zhangsan", "张三");
        map.put("lisi", "李四");
        map.put("wangwu", "王五");

        //3.通过键找值
        String zhangsan = map.get("zhangsan");
        System.out.println(zhangsan);

        //3.1获取所有的键，把这些键放到一个单列集合当中
        Set`&lt;String&gt;` keys = map.keySet();
        //3.2遍历单列集合，得到每一个键
        //迭代器
        Iterator`&lt;String&gt;` it = keys.iterator();
        while (it.hasNext()) {
            String key = it.next();
            String value = map.get(key);
            System.out.println(key + "：" + value);
        }

        //增强for
        for (String key : keys) {
            String value = map.get(key);
            System.out.println(key + "：" + value);
        }

        //lambda
        keys.forEach((key) -> {
            String value = map.get(key);
            System.out.println(key + "：" + value);
        });


    }
}

```



##### ②键值对-==entrySet==()

```java
package com.pyw.a36map;


import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class A03_MapDemo3 {
    public static void main(String[] args) {
        //Map集合的第二种遍历方式-键值对

        //三个课堂练习：
        //
        //练习一：  通过键值对对象进行遍历map集合，要求：装着键值对对象的单列集合使用增强for的形式进行遍历
        //练习二：  通过键值对对象进行遍历map集合，要求：装着键值对对象的单列集合使用迭代器的形式进行遍历
        //练习三：  通过键值对对象进行遍历map集合，要求：装着键值对对象的单列集合使用lambda的形式进行遍历

        //1.创建Map集合的对象
        Map<String, String> map = new HashMap<>();

        //2.添加元素
        //键：人物的外号
        //值：人物的名字
        map.put("标枪选手", "马超");
        map.put("人物挂件", "明世隐");
        map.put("御龙骑士", "尹志平");

       //3.Map集合的第二种遍历方式
        //通过键值对对象进行遍历
        //3.1 通过一个方法获取所有的键值对对象，返回一个Set集合
        Set<Map.Entry<String, String>> entries = map.entrySet();

        //3.2 遍历entries这个集合，去得到里面的每一个键值对对象

        //增强for
        for (Map.Entry<String, String> entry : entries) {
            String key = entry.getKey();
            String value = entry.getValue();
            System.out.println(key + "：" + value);
        }

        //迭代器
        Iterator<Map.Entry<String, String>> it = entries.iterator();
        while (it.hasNext()){
            Map.Entry<String, String> entry = it.next();
            String key = entry.getKey();
            String value = entry.getValue();
            System.out.println(key + "：" + value);
        }

        //lambda表达式
        entries.forEach((entry) ->{
            String key = entry.getKey();
            String value = entry.getValue();
            System.out.println(key + "：" + value);
        });


    }
}
```



##### ③Lambda表达式-==forEach==

###### 函数式接口-BiConsumer

![image-20250311143723832](%E9%9B%86%E5%90%88.assets/image-20250311143723832.png)

###### 底层

![image-20250311144217454](%E9%9B%86%E5%90%88.assets/image-20250311144217454.png)

![image-20250311144148328](%E9%9B%86%E5%90%88.assets/image-20250311144148328.png)

- forEach其实就是利用**第二种方式**-==entrySet()==进行遍历，依次得到每一个键和值
- **再调用accept方法**
- 调用的函数式接口为**BiConsumer**

```java
package com.pyw.a36map;

import java.util.HashMap;
import java.util.Map;
import java.util.function.BiConsumer;

public class A04_MapDemo4 {
    public static void main(String[] args) {
        //Map集合的第三种遍历方式


        //1.创建Map集合的对象
        Map&lt;String,String&gt; map = new HashMap<>();

        //2.添加元素
        //键：人物的名字
        //值：名人名言
        map.put("鲁迅","这句话是我说的");
        map.put("曹操","不可能绝对不可能");
        map.put("刘备","接着奏乐接着舞");
        map.put("柯镇恶","看我眼色行事");

        //3.利用lambda表达式进行遍历
        //底层：
        //forEach其实就是利用第二种方式进行遍历，依次得到每一个键和值
        //再调用accept方法
        //调用的函数式接口为BiConsumer
        map.forEach(new BiConsumer<String, String>() {
            @Override
            public void accept(String key, String value) {
                System.out.println(key + "：" + value);
            }
        });

        //简化写法
        map.forEach((key,value)->System.out.println(key + "：" + value));

    }
}
```



### 2、_==HashMap==_

#### （0）基本概念

##### ①**什么是 `HashMap` 的`bucket`（桶）？**

在 `HashMap` 的实现中，**bucket（桶）是存储键值对的基本单位**。简单来说，`bucket` 是一个**数组中的槽位**，每个槽位存储链表或红黑树，以解决哈希冲突。



#### （1）API

###### **常用方法继承自==接口Map==**



#### （2）HashMap的特点

**put方法会==覆盖==原来的键值对**



![image-20250311145018493](%E9%9B%86%E5%90%88.assets/image-20250311145018493.png)



#### （3）🚀==底层原理==-==哈希表==

![image-20250311150140499](%E9%9B%86%E5%90%88.assets/image-20250311150140499.png)

**HashMap跟HashSet底层原理结构是一模一样的，都是==哈希表结构==**

- HashMap底层是哈希表结构的
- 依赖hashCode方法和equals方法保证键的唯一
- 如果**==键==存储的是自定义对象**，**需要重写**hashCode和equals方法
- 如果**==值==存储自定义对象**，**不需要重写**hashcode和equals方法

![image-20250311150109851](%E9%9B%86%E5%90%88.assets/image-20250311150109851.png)

==**注意：**==

当计算键的哈希值后，得到数组Index索引放入数组时，若此时该数组Index位置上已存在元素，则会调用默认或重写后的**equals方法比较键的值是否一样**

- **若一样则会覆盖原先的值**，这一点和HashSet有些不同，HashSet若发现和原先的一样则会**==不存==**
- **不一样**则会**链接到该元素**的**前**（JDK8以前）或**后**（JDK8以后）形成链表或者红黑树(**链表长度超过8并且数组长度超过64**)。



#### （4）示例代码-练习

##### ①练习1-重写hashCode和equals

![image-20250311150520641](%E9%9B%86%E5%90%88.assets/image-20250311150520641.png)

**核心点：**

- HashMap的键位置如果存储的是自定义对象，需要重写hashCode和equals方法。
- 如果是值，则不需要重写hashcode和equals方法



**学生对象**-重写hashCode和equals方法

```java
package com.pyw.a37hashmap;

import java.util.Objects;

public class Student {
    private String name;
    private int age;


    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

	//Set Get ...

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return age == student.age && Objects.equals(name, student.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age); 
    }

    public String toString() {
        return "Student{name = " + name + ", age = " + age + "}";
    }
}

```

```java
package com.pyw.a37hashmap;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class A01_HashMapDemo1 {
    public static void main(String[] args) {
       /*
        需求：创建一个HashMap集合，键是学生对象(Student)，值是籍贯(String)。
        存储三个键值对元素，并遍历
        要求：同姓名，同年龄认为是同一个学生（键唯一）

        核心点：
            HashMap的键位置如果存储的是自定义对象，需要重写hashCode和equals方法。
            如果是值，则不需要重写hashcode和equals方法
       */ 


        //1.创建HashMap的对象
        HashMap&lt;Student,String&gt; stuMap = new HashMap<>();

        //2.创建三个学生对象
        Student s1 = new Student("zhangsan",23);
        Student s2 = new Student("lisi",24);
        Student s3 = new Student("wangwu",25);
        Student s4 = new Student("wangwu",25);

        //3.添加元素
        stuMap.put(s1,"重庆");
        stuMap.put(s2,"四川");
        stuMap.put(s3,"北京"); //这个会被s4,"山东" 覆盖
        stuMap.put(s4,"山东");
        //4.遍历集合
        System.out.println("====lambda表达式====");
        stuMap.forEach(((student, s) -> System.out.println(student+"--->"+s)));

        System.out.println("====entrySet遍历===");
        Set<Map.Entry<Student, String>> entries = stuMap.entrySet();
        for (Map.Entry<Student, String> entry : entries) {
            Student key = entry.getKey();
            String value = entry.getValue();
            System.out.println(key+"--->"+value);
        }

        System.out.println("增强for遍历");
        Set`&lt;Student&gt;` students = stuMap.keySet();
        for (Student student : students) {
            String value = stuMap.get(student);
            System.out.println(student+"--->"+value);
        }

    }
}
```



##### ②练习2

![image-20250311150503886](%E9%9B%86%E5%90%88.assets/image-20250311150503886.png)

```java
package com.pyw.a37hashmap;

import java.util.*;

public class A02_HashMapDemo2 {
    public static void main(String[] args) {
        /*
            某个班级80名学生，现在需要组成秋游活动，
            班长提供了四个景点依次是（A、B、C、D）,
            每个学生只能选择一个景点，请统计出最终哪个景点想去的人数最多。
        */
        //1.需要先让同学们投票
        //定义一个数组，存储4个景点
        String[] areas = {"A","B","C","D"};
        //利用随机数模拟80个同学的投票，并把投票的结果存储起来
        Random r = new Random();
        HashMap&lt;String,Integer&gt; countMap = new HashMap<>();
        //2.如果要统计的东西比较多，不方便使用计数器思想
        //我们可以定义map集合，利用集合进行统计。
        for (int i = 0; i < 80; i++) {
            int index = r.nextInt(areas.length);
            String area = areas[index];
            if(countMap.containsKey(area)){
                Integer mapArea = countMap.get(area); 
                countMap.put(area,++mapArea); //因为已经存在该key，所以会覆盖原来的值
            }else {
                countMap.put(area,1);
            }
        }
//        countMap.put("A",25);
//        countMap.put("B",25);
//        countMap.put("C",5);
//        countMap.put("D",25);
        System.out.println("投票情况：");
        countMap.forEach((key,value)->System.out.println(key+"--->"+value));
        //3.求最大值
        Set<Map.Entry<String, Integer>> entries = countMap.entrySet();
        int max = -1;
        List`&lt;String&gt;` maxArea = new ArrayList<>();
        for (Map.Entry<String, Integer> entry : entries) {
            int value = entry.getValue();
            if(value >= max){
                max = value;
                //有可能几个投票是一样的
                if(value == max){
                    maxArea.add(entry.getKey());
                }else {
                    maxArea.clear();
                    maxArea.add(entry.getKey());
                }
            }
        }
        System.out.println("投票最高的景区为："+maxArea);

    }
}
```



#### （5）🚀==_HashMap_源码分析==

---

![image-20250311164835877](%E9%9B%86%E5%90%88.assets/image-20250311164835877.png)

```java
1.看源码之前需要了解的一些内容

Node&lt;K,V&gt;[] table   哈希表结构中数组的名字

DEFAULT_INITIAL_CAPACITY：   数组默认长度16

DEFAULT_LOAD_FACTOR：        默认加载因子0.75



HashMap里面每一个对象包含以下内容：
1.1 链表中的键值对对象
    包含：  
			int hash;         //键的哈希值
            final K key;      //键
            V value;          //值
            Node&lt;K,V&gt; next;   //下一个节点的地址值
			
			
1.2 红黑树中的键值对对象
	包含：
			int hash;         		//键的哈希值
            final K key;      		//键
            V value;         	 	//值
            TreeNode&lt;K,V&gt; parent;  	//父节点的地址值
			TreeNode&lt;K,V&gt; left;		//左子节点的地址值
			TreeNode&lt;K,V&gt; right;	//右子节点的地址值
			boolean red;			//节点的颜色
					


2.添加元素
HashMap&lt;String,Integer&gt; hm = new HashMap<>();
hm.put("aaa" , 111);
hm.put("bbb" , 222);
hm.put("ccc" , 333);
hm.put("ddd" , 444);
hm.put("eee" , 555);

添加元素的时候至少考虑三种情况：
2.1数组位置为null
2.2数组位置不为null，键不重复，挂在下面形成链表或者红黑树
2.3数组位置不为null，键重复，元素覆盖


//参数一：键
//参数二：值

//返回值：被覆盖元素的值，如果没有覆盖，返回null
public V put(K key, V value) {
    return putVal(hash(key), key, value, false, true);
}


//利用键计算出对应的哈希值，再把哈希值进行一些额外的处理
//简单理解：返回值就是返回键的哈希值
static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}

//参数一：键的哈希值
//参数二：键
//参数三：值
//参数四：如果键重复了是否保留
//		   true，表示老元素的值保留，不会覆盖
//		   false，表示老元素的值不保留，会进行覆盖
final V putVal(int hash, K key, V value, boolean onlyIfAbsent,boolean evict) {
	    //定义一个局部变量，用来记录哈希表中数组的地址值。
        Node&lt;K,V&gt;[] tab;
		
		//临时的第三方变量，用来记录键值对对象的地址值
        Node&lt;K,V&gt; p;
        
		//表示当前数组的长度
		int n;
		
		//表示索引
        int i;
		
		//把哈希表中数组的地址值，赋值给局部变量tab
		tab = table;

        if (tab == null || (n = tab.length) == 0){
			//1.如果当前是第一次添加数据，底层会创建一个默认长度为16，加载因子为0.75的数组
			//2.如果不是第一次添加数据，会看数组中的元素是否达到了扩容的条件
			//如果没有达到扩容条件，底层不会做任何操作
			//如果达到了扩容条件，底层会把数组扩容为原先的两倍，并把数据全部转移到新的哈希表中
			tab = resize();
			//表示把当前数组的长度赋值给n
            n = tab.length;
        }

		//拿着数组的长度跟键的哈希值进行计算，计算出当前键值对对象，在数组中应存入的位置
		i = (n - 1) & hash;//index
		//获取数组中对应元素的数据
		p = tab[i];
		
		
        if (p == null){
			//底层会创建一个键值对对象，直接放到数组当中
            tab[i] = newNode(hash, key, value, null);
        }else {
            Node&lt;K,V&gt; e;
            K k;
			
			//等号的左边：数组中键值对的哈希值
			//等号的右边：当前要添加键值对的哈希值
			//如果键不一样，此时返回false
			//如果键一样，返回true
			boolean b1 = p.hash == hash;
			
            if (b1 && ((k = p.key) == key || (key != null && key.equals(k)))){
                e = p;
            } else if (p instanceof TreeNode){
				//判断数组中获取出来的键值对是不是红黑树中的节点
				//如果是，则调用方法putTreeVal，把当前的节点按照红黑树的规则添加到树当中。
                e = ((TreeNode&lt;K,V&gt;)p).putTreeVal(this, tab, hash, key, value);
            } else {
				//如果从数组中获取出来的键值对不是红黑树中的节点
				//表示此时下面挂的是链表
                for (int binCount = 0; ; ++binCount) {
                    if ((e = p.next) == null) {
						//此时就会创建一个新的节点，挂在下面形成链表
                        p.next = newNode(hash, key, value, null);
						//判断当前链表长度是否超过8，如果超过8，就会调用方法treeifyBin
						//treeifyBin方法的底层还会继续判断
						//判断数组的长度是否大于等于64
						//如果同时满足这两个条件，就会把这个链表转成红黑树
                        if (binCount >= TREEIFY_THRESHOLD - 1)
                            treeifyBin(tab, hash);
                        break;
                    }
					//e：			  0x0044  ddd  444
					//要添加的元素： 0x0055   ddd   555
					//如果哈希值一样，就会调用equals方法比较内部的属性值是否相同
                    if (e.hash == hash && ((k = e.key) == key || (key != null && key.equals(k)))){
						 break;
					}

                    p = e;
                }
            }
			
			//如果e为null，表示当前不需要覆盖任何元素
			//如果e不为null，表示当前的键是一样的，值会被覆盖
			//e:0x0044  ddd  555
			//要添加的元素： 0x0055   ddd   555
            if (e != null) {
                V oldValue = e.value;
                if (!onlyIfAbsent || oldValue == null){
					
					//等号的右边：当前要添加的值
					//等号的左边：0x0044的值
					e.value = value;
				}
                afterNodeAccess(e);
                return oldValue;
            }
        }
		
        //threshold：记录的就是数组的长度 * 0.75，哈希表的扩容时机  16 * 0.75 = 12
        if (++size > threshold){
			 resize();
		}
        
		//表示当前没有覆盖任何元素，返回null
        return null;
    }
```







### 3、_==LinkedHashMap==_

![image-20250311152526701](%E9%9B%86%E5%90%88.assets/image-20250311152526701.png)

#### （1）API

###### **常用方法继承自==HashMap==**



#### （2）LinkedHashMap的特点

- **由键决定：==有序==、不重复、无索引。**
  - 这里的有序指的是保证**存储和取出的元素顺序一致**

```java
package com.pyw.a38linkedhashmap;

import java.util.LinkedHashMap;

public class A01_LinkedHashMapDemo1 {
    public static void main(String[] args) {
        //TODO LinkedHashMap
        /*
            LinkedHashMap:
               由键决定：
                   有序、不重复、无索引。
               有序：
                   保证存储和取出的顺序一致
               原理：
                   底层数据结构是依然哈希表，只是每个键值对元素又额外的多了一个双链表的机制记录存储的顺序。
         */


        //1.创建集合
        LinkedHashMap&lt;String,Integer&gt; lhm = new LinkedHashMap<>();

        //2.添加元素
        lhm.put("a",123);
        lhm.put("a",111);
        lhm.put("c",789);
        lhm.put("b",456);
        lhm.put("d",101112);

        //3.打印集合
        System.out.println(lhm);

        //遍历与hashmap一致
    }
}
```



#### （3）🚀LinkedHashMap的原理

- 原理：底层数据结构是依然**哈希表**，只是每个键值对元素又额外的多了一个**==双链表的机制记录存储的顺序。==**

![image-20250311152808556](%E9%9B%86%E5%90%88.assets/image-20250311152808556.png)





### 4、==_TreeMap_==

#### （1）API



#### （2）TreeMap的特点

- 新的统计思想：利用map集合进行统计
- 如果题目中没有要求对结果进行排序，默认使用**HashMap,效率相对较高**
- 如果题目中要求对结果**进行排序**，请使用TreeMap

![image-20250311154031219](%E9%9B%86%E5%90%88.assets/image-20250311154031219.png)

- TreeMap跟TreeSet底层原理一样，都是**红黑树结构**的。

- 由键决定特性：不重复、无索引、**可排序**

- 可排序：**对键进行排序**。

- 注意：默认按照键的从小到大进行排序，也可以自己规定键的排序规则

  - 代码书写两种排序规则

    - **实现comparable接口**，指定比较规则。

    - **创建集合时传递Comparator比较器对象**，指定比较规则。

  - [TreeSet的两种排序规则](#TreeSet的两种排序规则)

​				

#### （3）示例代码-练习

##### ①练习1

- 按照键排序，重写compare方法
  - Integer Double **默认**情况下都是按照升序排列的
  - String 按照字母再ASCII码表中对应的数字升序进行排列 abcdefg ...

```java
package com.pyw.a39treemap;

import java.util.Comparator;
import java.util.TreeMap;

public class A01_TreeMapDemo1 {
    public static void main(String[] args) {
        //TODO TreeMap
        /*
           TreeMap集合：基本应用
           基于红黑树，增删改查性能较好
            需求1：
                键：整数表示id
	            值：字符串表示商品名称
	            要求1：按照id的升序排列

	            要求2：按照id的降序排列
         */

        //1.创建集合对象
        //按照键排序，重写compare方法
        //Integer Double 默认情况下都是按照升序排列的
        //String 按照字母再ASCII码表中对应的数字升序进行排列 abcdefg ...
        TreeMap&lt;Integer,String&gt; tm = new TreeMap<>(new Comparator`&lt;Integer&gt;`() {
            @Override
            public int compare(Integer o1, Integer o2) {
                //o1 添加的元素
                //o2 红黑树中的元素
                return o2 - o1;
            }
        });


        //2.添加元素
        tm.put(1,"iphone");
        tm.put(2,"huawei");
        tm.put(3,"xiaomi");
        tm.put(4,"meizu");
        tm.put(5,"redmi");

        //3.打印集合
        System.out.println(tm);
    }
}
```



##### ②练习2

**学生对象**

```java
package com.pyw.a39treemap;

public class Student implements Comparable`&lt;Student&gt;`{
    private String name;
    private int age;


    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

	// get set ...

    public String toString() {
        return "Student{name = " + name + ", age = " + age + "}";
    }

    @Override
    public int compareTo(Student o) {
        //o红黑树中的对象
        //this添加的对象
        int result = this.getAge() - o.getAge();
        result = result == 0 ? this.getName().compareTo(o.getName()) : result;
        return result;
    }
}

```

**测试**

```java
package com.pyw.a39treemap;

import java.util.TreeMap;

public class A02_TreeMapDemo2 {
    public static void main(String[] args) {
        /*
           TreeMap集合：基本应用
            需求2：
                键：学生对象
	            值：籍贯
	            要求：按照学生年龄的升序排列，年龄一样按照姓名的字母排列，同姓名年龄视为同一个人。
         */

        //1.创建集合
        TreeMap&lt;Student,String&gt; tm = new TreeMap<>();

        //2.创建三个学生对象
        Student s1 = new Student("zhangsan",23);
        Student s2 = new Student("lisi",24);
        Student s3 = new Student("wangwu",25);
        Student s4 = new Student("wangw",25);

        //3.添加元素
        tm.put(s1,"重庆");
        tm.put(s2,"四川");
        tm.put(s3,"甘肃");
        tm.put(s4,"甘肃");

        //4.打印集合
        System.out.println(tm);

    }
}
```



##### ③练习3

![image-20250311155417351](%E9%9B%86%E5%90%88.assets/image-20250311155417351.png)

- 新的统计思想：利用map集合进行统计

- 如果题目中没有要求对结果进行排序，默认使用**HashMap,效率相对较高**
- 如果题目中要求对结果进行排序，请使用TreeMap

```java
package com.pyw.a39treemap;

import java.util.StringJoiner;
import java.util.TreeMap;

public class A03_TreeMapDemo3 {
    public static void main(String[] args) {
       /* 需求：
        字符串“aababcabcdabcde”
        请统计字符串中每一个字符出现的次数，并按照以下格式输出
        输出结果：
        a（5）b（4）c（3）d（2）e（1）

            新的统计思想：利用map集合进行统计

          如果题目中没有要求对结果进行排序，默认使用HashMa,效率相对较高
          如果题目中要求对结果进行排序，请使用TreeMap

          键：表示要统计的内容
          值：表示次数

        */
        
        //1.定义字符串
        String s = "aababcabcdabcde";

        //2.创建集合
        TreeMap&lt;String,Integer&gt; tm = new TreeMap<>();

        //3.遍历字符串得到里面的每一个字符
        for (int i = 0; i < s.length(); i++) {
            String chatInS = String.valueOf(s.charAt(i));
            if(tm.containsKey(chatInS)){
                Integer count = tm.get(chatInS);
                tm.put(chatInS,++count);
            }else {
                tm.put(chatInS,1);
            }
        }
        System.out.println(tm);

        //4.遍历集合，并按照指定的格式进行拼接
        // a（5）b（4）c（3）d（2）e（1）
        StringBuilder sb = new StringBuilder();
        tm.forEach((key,value) -> sb.append(key).append("(").append(value).append(")"));
        System.out.println(sb);

        StringJoiner sj = new StringJoiner("","","");
        tm.forEach((key,value) -> sj.add(key).add("(").add(value+"").add(")"));
        System.out.println(sj);

    }
}
```

| 对比项         | `StringBuilder`  | `StringJoiner`                   |
| -------------- | ---------------- | -------------------------------- |
| **拼接方式**   | 直接 `append()`  | 通过 `add()`                     |
| **有无分隔符** | 没有（手动添加） | 需要 `StringJoiner` 构造参数指定 |
| **前后缀**     | 没有             | 可指定前缀和后缀                 |
| **可读性**     | 灵活但代码稍长   | 更简洁（若使用分隔符）           |

**何时使用哪种方式？**

1. **如果只是简单拼接**，推荐 `StringBuilder`，更直观。

2. 如果有固定格式（如逗号分隔）

   推荐 **StringJoiner**它可以自动加上分隔符，例如：

   ![image-20250311160459003](%E9%9B%86%E5%90%88.assets/image-20250311160459003.png)

   ```java
   StringJoiner sj = new StringJoiner(", ", "[", "]");
   tm.forEach((key, value) -> sj.add(key + "(" + value + ")"));
   System.out.println(sj);
   ```

   输出：

   ```java
   [a(5), b(4), c(3), d(2), e(1)]
   ```

**总结：**

- `StringBuilder` 适用于**普通字符串拼接**，更通用。
- `StringJoiner` 适用于**带分隔符、前缀、后缀的格式化字符串**，代码更简洁。





#### （4）🚀==_TreeMap_-源码分析==

**红黑规则**

![image-20250309151519370](%E9%9B%86%E5%90%88.assets/image-20250309151519370.png)

```java
1.TreeMap中每一个节点的内部属性
K key;					//键
V value;				//值
Entry&lt;K,V&gt; left;		//左子节点
Entry&lt;K,V&gt; right;		//右子节点
Entry&lt;K,V&gt; parent;		//父节点
boolean color;			//节点的颜色


2.TreeMap类中中要知道的一些成员变量
public class TreeMap&lt;K,V&gt;{
   
    //比较器对象
    private final Comparator<? super K> comparator;

	//根节点
    private transient Entry&lt;K,V&gt; root;

	//集合的长度
    private transient int size = 0;

   

3.空参构造
	//空参构造就是没有传递比较器对象
	 public TreeMap() {
        comparator = null;
    }
	
	
	
4.带参构造
	//带参构造就是传递了比较器对象。
	public TreeMap(Comparator<? super K> comparator) {
        this.comparator = comparator;
    }
	
	
5.添加元素
	public V put(K key, V value) {
        return put(key, value, true);
    }

参数一：键
参数二：值
参数三：当键重复的时候，是否需要覆盖值
		true：覆盖
		false：不覆盖
		
	private V put(K key, V value, boolean replaceOld) {
		//获取根节点的地址值，赋值给局部变量t
        Entry&lt;K,V&gt; t = root;
		//判断根节点是否为null
		//如果为null，表示当前是第一次添加，会把当前要添加的元素，当做根节点
		//如果不为null，表示当前不是第一次添加，跳过这个判断继续执行下面的代码
        if (t == null) {
			//方法的底层，会创建一个Entry对象，把他当做根节点
            addEntryToEmptyMap(key, value);
			//表示此时没有覆盖任何的元素
            return null;
        }
		//表示两个元素的键比较之后的结果
        int cmp;
		//表示当前要添加节点的父节点
        Entry&lt;K,V&gt; parent;
		
		//表示当前的比较规则
		//如果我们是采取默认的自然排序，那么此时comparator记录的是null，cpr记录的也是null
		//如果我们是采取比较去排序方式，那么此时comparator记录的是就是比较器
        Comparator<? super K> cpr = comparator;
		//表示判断当前是否有比较器对象
		//如果传递了比较器对象，就执行if里面的代码，此时以比较器的规则为准
		//如果没有传递比较器对象，就执行else里面的代码，此时以自然排序的规则为准
        if (cpr != null) {
            do {
                parent = t;
                cmp = cpr.compare(key, t.key);
                if (cmp < 0)
                    t = t.left;
                else if (cmp > 0)
                    t = t.right;
                else {
                    V oldValue = t.value;
                    if (replaceOld || oldValue == null) {
                        t.value = value;
                    }
                    return oldValue;
                }
            } while (t != null);
        } else {
			//把键进行强转，强转成Comparable类型的
			//要求：键必须要实现Comparable接口，如果没有实现这个接口
			//此时在强转的时候，就会报错。
            Comparable<? super K> k = (Comparable<? super K>) key;
            do {
				//把根节点当做当前节点的父节点
                parent = t;
				//调用compareTo方法，比较根节点和当前要添加节点的大小关系
                cmp = k.compareTo(t.key);
				
                if (cmp < 0)
					//如果比较的结果为负数
					//那么继续到根节点的左边去找
                    t = t.left;
                else if (cmp > 0)
					//如果比较的结果为正数
					//那么继续到根节点的右边去找
                    t = t.right;
                else {
					//如果比较的结果为0，会覆盖
                    V oldValue = t.value;
                    if (replaceOld || oldValue == null) {
                        t.value = value;
                    }
                    return oldValue;
                }
            } while (t != null);
        }
		//就会把当前节点按照指定的规则进行添加
        addEntry(key, value, parent, cmp < 0);
        return null;
    }	
	
	
	 // 把节点按照指定规则添加到红黑树中
	 private void addEntry(K key, V value, Entry<K, V> parent, boolean addToLeft) {
        Entry&lt;K,V&gt; e = new Entry<>(key, value, parent);
        if (addToLeft)
            parent.left = e;
        else
            parent.right = e;
		//添加完毕之后，需要按照红黑树的规则进行调整
        fixAfterInsertion(e);
        size++;
        modCount++;
    }
	
    //添加完毕之后，需要按照红黑树的规则进行调整
	private void fixAfterInsertion(Entry&lt;K,V&gt; x) {
		//因为红黑树的节点默认就是红色的
        x.color = RED;

		//按照红黑规则进行调整
		
		//parentOf:获取x的父节点
		//parentOf(parentOf(x)):获取x的爷爷节点
		//leftOf:获取左子节点
        while (x != null && x != root && x.parent.color == RED) {
			
			
			//判断当前节点的父节点是爷爷节点的左子节点还是右子节点
			//目的：为了获取当前节点的叔叔节点
            if (parentOf(x) == leftOf(parentOf(parentOf(x)))) {
				//表示当前节点的父节点是爷爷节点的左子节点
				//那么下面就可以用rightOf获取到当前节点的叔叔节点-y
                Entry&lt;K,V&gt; y = rightOf(parentOf(parentOf(x)));
                if (colorOf(y) == RED) {
					//叔叔节点为红色的处理方案
					
					//把父节点设置为黑色
                    setColor(parentOf(x), BLACK);
					//把叔叔节点设置为黑色
                    setColor(y, BLACK);
					//把爷爷节点设置为红色
                    setColor(parentOf(parentOf(x)), RED);
					
					//把爷爷节点设置为当前节点
                    x = parentOf(parentOf(x));
                } else {
					
					//叔叔节点为黑色的处理方案
					
					
					//表示判断当前节点是否为父节点的右子节点
                    if (x == rightOf(parentOf(x))) {
						
						//表示当前节点是父节点的右子节点
                        x = parentOf(x);
						//左旋
                        rotateLeft(x);
                    }
                    setColor(parentOf(x), BLACK);
                    setColor(parentOf(parentOf(x)), RED);
                    rotateRight(parentOf(parentOf(x)));
                }
            } else {
				//表示当前节点的父节点是爷爷节点的右子节点
				//那么下面就可以用leftOf获取到当前节点的叔叔节点
                Entry&lt;K,V&gt; y = leftOf(parentOf(parentOf(x)));
                if (colorOf(y) == RED) {
                    setColor(parentOf(x), BLACK);
                    setColor(y, BLACK);
                    setColor(parentOf(parentOf(x)), RED);
                    x = parentOf(parentOf(x));
                } else {
                    if (x == leftOf(parentOf(x))) {
                        x = parentOf(x);
                        rotateRight(x);
                    }
                    setColor(parentOf(x), BLACK);
                    setColor(parentOf(parentOf(x)), RED);
                    rotateLeft(parentOf(parentOf(x)));
                }
            }
        }
		
		//把根节点设置为黑色
        root.color = BLACK;
    }
	
	
6.课堂思考问题：
6.1TreeMap添加元素的时候，键是否需要重写hashCode和equals方法？
此时是不需要重写的。


6.2HashMap是哈希表结构的，JDK8开始由数组，链表，红黑树组成的。
既然有红黑树，HashMap的键是否需要实现Compareable接口或者传递比较器对象呢？
不需要的。
因为在HashMap的底层，默认是利用哈希值的大小关系来创建红黑树的




6.3TreeMap和HashMap谁的效率更高？
如果是最坏情况，添加了8个元素，这8个元素形成了链表，此时TreeMap的效率要更高
但是这种情况出现的几率非常的少。
一般而言，还是HashMap的效率要更高。



6.4你觉得在Map集合中，java会提供一个如果键重复了，不会覆盖的put方法呢？
此时putIfAbsent本身不重要。
传递一个思想：
	代码中的逻辑都有两面性，如果我们只知道了其中的A面，而且代码中还发现了有变量可以控制两面性的发生。
	那么该逻辑一定会有B面。
	
	习惯：
		boolean类型的变量控制，一般只有AB两面，因为boolean只有两个值
		int类型的变量控制，一般至少有三面，因为int可以取多个值。
		



6.5三种双列集合，以后如何选择？
	HashMap LinkedHashMap TreeMap
	
	默认：HashMap（效率最高）
	如果要保证存取有序：LinkedHashMap
	如果要进行排序：TreeMap
```

##### 思考问题-高频面试

课堂思考问题：
TreeMap添加元素的时候，键是否需要重写hashCode和equals方法？
此时是不需要重写的。

- 6.2HashMap是哈希表结构的，JDK8开始由数组，链表，红黑树组成的。
  既然有红黑树，HashMap的键是否需要实现Compareable接口或者传递比较器对象呢？
  不需要的。
  因为在HashMap的底层，默认是利用哈希值的大小关系来创建红黑树的
- 

- 6.3TreeMap和HashMap谁的效率更高？
  如果是最坏情况，添加了8个元素，这8个元素形成了链表，此时TreeMap的效率要更高
  但是这种情况出现的几率非常的少。
  一般而言，还是HashMap的效率要更高。
- 

- 6.4你觉得在Map集合中，java会提供一个如果键重复了，不会覆盖的put方法呢？
  此时putIfAbsent本身不重要。
  传递一个思想：
  代码中的逻辑都有两面性，如果我们只知道了其中的A面，而且代码中还发现了有变量可以控制两面性的发生。
  那么该逻辑一定会有B面。
- 习惯：
  boolean类型的变量控制，一般只有AB两面，因为boolean只有两个值
  int类型的变量控制，一般至少有三面，因为int可以取多个值。
- 

- 6.5三种双列集合，以后如何选择？
  HashMap LinkedHashMap TreeMap
- 默认：HashMap（效率最高）
  如果要保证存取有序：LinkedHashMap
  如果要进行排序：TreeMap



这些思考问题涵盖了 `TreeMap`、`HashMap` 以及 `LinkedHashMap` 的核心概念和使用场景。以下是对每个问题的总结和补充：

###### **6.1 TreeMap 添加元素时，键是否需要重写 `hashCode` 和 `equals` 方法？**

**不需要重写。**

- `TreeMap` 的底层是**红黑树**，它的键是通过**自然排序**（`Comparable` 接口）或者**指定的比较器**（`Comparator`）来排序的。
- `hashCode` 和 `equals` 方法主要**用于哈希表**（如 `HashMap`、`HashSet`），而 `TreeMap` 仅依赖**键的比较结果**来判断相等性和顺序。



###### **6.2 HashMap 中的==键==是否需要==实现 `Comparable` 接口或者传递比较器对象==？**

**==不需要==。**

- `HashMap` 的底层默认是**哈希表结构**，即数据存储在**数组+链表/红黑树**中，而键的存储位置由 `hashCode` 计算决定。
- 只有当链表长度超过 **8** 时，JDK 8 之后才会转换为**红黑树**。**但 HashMap 仍然==依赖哈希值进行比较大小关系==，而不是键的比较方法**。



###### **6.3 TreeMap 和 HashMap 谁的效率更高？**

**一般而言，==`HashMap` 效率更高。==**

- `HashMap` 的查找、插入和删除操作的平均时间复杂度是 **O(1)**（理想情况下），但如果发生哈希冲突，链表过长则会退化为 **O(n)**（最坏情况）。
- `TreeMap` 的操作复杂度始终是 **O(log n)**，因为它基于红黑树。
- 在**极端情况下**（如 `HashMap` 退化成链表时），`TreeMap` 可能会更高效，但这种情况较少发生。



###### **6.4 是否应该提供一个==不会覆盖重复键==的 `put` 方法？**

- Java 的 `Map` 提供了 ==`putIfAbsent(K key, V value)`==，即**如果键已存在，则不会覆盖**。

- 这体现了一种**逻辑的对称性**：

  - **普通 `put(K, V)`** 逻辑 → **键相同时覆盖**
  - **`putIfAbsent(K, V)`** 逻辑 → **键相同时不覆盖**

- 传递一个思想

  - 代码中的逻辑都有两面性，如果我们只知道了其中的A面，而且代码中还发现了有变量可以控制两面性的发生。那么该逻辑一定会有B面。

- 习惯

  - boolean类型的变量控制，一般只有AB两面，因为boolean只有两个值
    int类型的变量控制，一般至少有三面，因为int可以取多个值。

  

**逻辑思考习惯：**

- **`boolean` 变量控制的逻辑，一般只有 A/B 两面**（因为布尔值只有 `true` 或 `false`）。
- **`int` 变量控制的逻辑，通常有三种或以上的情况**（因为 `int` 取值范围大于 2）。



###### **6.5 ==选择哪种 `Map`？==**

1. **`HashMap`（默认选择）**
   - **适用于**：大部分情况下，查询效率最高，`O(1)` 复杂度。
   - **缺点**：==**无序存储**==，不能保证插入顺序或排序。
2. **`LinkedHashMap`（==保证插入顺序==）**
   - **适用于**：需要**按插入顺序或访问顺序**存储数据（如实现 LRU 缓存）。
   - **缺点**：比 `HashMap` **占用更多内存**，因为维护了双向链表。
3. **`TreeMap`（自动排序）**
   - **适用于**：需要==**按键排序**存储数据。==
   - **缺点**：增删改查效率比 `HashMap` 低，`O(log n)` 复杂度。

###### **总结**

| 选择              | 适用场景                   |
| ----------------- | -------------------------- |
| **HashMap**       | 默认选择，性能最高，键无序 |
| **LinkedHashMap** | 需要保持插入顺序或访问顺序 |
| **TreeMap**       | 需要按键排序存储数据       |

这种思考方式不仅能帮助理解 Java 集合框架，还能培养代码设计的思维方式。🚀



### 5、_Hashtable_-线程安全

![image-20250311153156566](%E9%9B%86%E5%90%88.assets/image-20250311153156566.png)

#### （1）概述

`Hashtable` 是 Java 早期（JDK 1.0）提供的 **线程安全** 的 **键值映射** 数据结构，底层基于**哈希表**实现，所有方法都**使用 ==`synchronized` 进行同步==**，因此**效率低于 HashMap**。

**特点：**

1. **线程安全**：使用 `synchronized` 方法保证线程安全，但并发性能较差（**推荐使用 `ConcurrentHashMap` 替代）**。
2. **不允许 `null` 键或 `null` 值**，否则会抛出 `NullPointerException`（与 `HashMap` 不同，`HashMap` 允许一个 `null` 键和多个 `null` 值）。
3. **无序存储**，但元素的存取顺序取决于哈希函数的计算结果。



#### （2）常见方法及代码示例

| 方法                          | 说明                          |
| ----------------------------- | ----------------------------- |
| `put(K key, V value)`         | 插入键值对                    |
| `get(Object key)`             | 获取指定键的值                |
| `remove(Object key)`          | 删除指定键值对                |
| `containsKey(Object key)`     | 是否包含指定键                |
| `containsValue(Object value)` | 是否包含指定值                |
| `size()`                      | 获取元素个数                  |
| `isEmpty()`                   | 判断是否为空                  |
| `clear()`                     | 清空所有元素                  |
| `elements()`                  | 获取 `Enumeration` 方式遍历值 |
| `keys()`                      | 获取 `Enumeration` 方式遍历键 |

**示例代码：**

```java
import java.util.Hashtable;

public class HashtableExample {
    public static void main(String[] args) {
        Hashtable<Integer, String> table = new Hashtable<>();

        // 添加元素
        table.put(1, "苹果");
        table.put(2, "香蕉");
        table.put(3, "橙子");

        // 获取元素
        System.out.println("键 2 对应的值：" + table.get(2));

        // 判断键值是否存在
        System.out.println("是否包含键 3: " + table.containsKey(3));
        System.out.println("是否包含值 '苹果': " + table.containsValue("苹果"));

        // 遍历元素
        System.out.println("遍历 Hashtable:");
        table.forEach((key, value) -> System.out.println(key + " -> " + value));

        // 删除元素
        table.remove(1);
        System.out.println("删除键 1 后：" + table);
    }
}
```



#### （3）底层原理

- **底层数据结构**：基于哈希表（JDK 1.8 之前是**数组 + 链表**）。
- **线程安全**：方法使用 `synchronized` 修饰，保证线程安全。
- **哈希冲突解决方式**：采用**链地址法**（**JDK 1.8 之前没有红黑树优化**）。
- 扩容机制：
  - 初始容量默认为 **11**，扩容时变为 **原来的 2 倍 + 1**（==与 `HashMap` 不同==）。
  - 负载因子默认 **0.75**，超过 `threshold = capacity * loadFactor` 时扩容。



#### （4）使用场景

- **多线程环境下需要同步**，但更推荐 `ConcurrentHashMap`。
- **不允许 `null` 键值** 的场景。



### 6、_Properties_-处理配置文件

![image-20250311153201207](%E9%9B%86%E5%90%88.assets/image-20250311153201207.png)

#### （1）概述

`Properties` 是 `Hashtable` 的**子类**，专门用于**==处理配置文件（key-value 格式的配置数据）==**，通常用于**读取 `.properties` 文件**（如**数据库连接配置**）。

**特点：**

1. **只能存储 `String` 类型的键值对**（不推荐存储其他类型）。
2. ==**支持文件 I/O 读写**==，可以从 `.properties` 文件**加载数据**，也可以**将数据写入文件**。
3. **常见应用**：配置文件（数据库配置、国际化资源、系统属性等）。



#### （2）常见方法及代码示例

| 方法                                       | 说明                                |
| ------------------------------------------ | ----------------------------------- |
| `setProperty(String key, String value)`    | 设置属性值                          |
| `getProperty(String key)`                  | 获取属性值                          |
| `load(InputStream inStream)`               | **从输入流加载 `.properties` 文件** |
| `store(OutputStream out, String comments)` | **保存到 `.properties` 文件**       |
| `list(PrintStream out)`                    | 以键值对的方式打印所有属性          |

**示例代码（手动添加配置）：**

```java
import java.util.Properties;

public class PropertiesExample {
    public static void main(String[] args) {
        Properties props = new Properties();

        // 设置键值对
        props.setProperty("username", "admin");
        props.setProperty("password", "123456");
        props.setProperty("url", "jdbc:mysql://localhost:3306/testdb");

        // 获取属性值
        System.out.println("数据库 URL: " + props.getProperty("url"));
        System.out.println("用户名: " + props.getProperty("username"));
        System.out.println("密码: " + props.getProperty("password"));

        // 列出所有属性
        System.out.println("所有属性:");
        props.list(System.out);
    }
}
```



#### **（3）💡读取和写入 `.properties` 文件**

##### **① 读取 `.properties` 文件**

**示例 `config.properties` 文件**

```
username=admin
password=123456
url=jdbc:mysql://localhost:3306/testdb
```

**Java 读取 `.properties` 文件**

```java
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class LoadPropertiesFile {
    public static void main(String[] args) {
        Properties props = new Properties();

        try (FileInputStream fis = new FileInputStream("config.properties")) {
            // 加载 .properties 文件
            props.load(fis);
            System.out.println("数据库 URL: " + props.getProperty("url"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

##### **②写入 `.properties` 文件**

```java
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Properties;

public class SavePropertiesFile {
    public static void main(String[] args) {
        Properties props = new Properties();
        props.setProperty("username", "admin");
        props.setProperty("password", "123456");
        props.setProperty("url", "jdbc:mysql://localhost:3306/testdb");

        try (FileOutputStream fos = new FileOutputStream("config.properties")) {
            props.store(fos, "Database Configurations");
            System.out.println("配置文件保存成功！");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```



#### （4）底层原理

- `Properties` 继承 `Hashtable`，其底层仍然是**哈希表结构**。
- 但 `Properties` 强制**键和值必须是 `String` 类型**。
- **支持文件 I/O**，可以读写 `.properties` 配置文件。



#### （5）使用场景

- **读取、写入配置文件**（如数据库配置、国际化资源）。
- **系统属性管理**（`System.getProperties()` 获取系统环境变量）。
- **应用程序中的静态配置信息**（如日志级别、文件路径等）。



#### **（5） 总结**

|                     | **Hashtable**                                     | **Properties**             |
| ------------------- | ------------------------------------------------- | -------------------------- |
| **继承关系**        | `Dictionary` → `Hashtable`                        | `Hashtable` → `Properties` |
| **线程安全**        | 是                                                | 是                         |
| **是否允许 `null`** | 否                                                | 否                         |
| **键值类型**        | 任意对象                                          | 仅 `String`                |
| **适用场景**        | 线程安全的 `Map`（已被 `ConcurrentHashMap` 取代） | 读取/写入配置文件          |

------

💡 **推荐**：

- **多线程环境**：使用 `ConcurrentHashMap` 代替 `Hashtable`。
- **存储配置**：使用 `Properties` 读取 `.properties` 文件。



### 7、_==ConcurrentHashMap==_

```java
static final &lt;K,V&gt; boolean casTabAt(Node&lt;K,V&gt;[] tab, int i,
                                    Node&lt;K,V&gt; c, Node&lt;K,V&gt; v) {
    return U.compareAndSetReference(tab, ((long)i << ASHIFT) + ABASE, c, v);
}
```

`ConcurrentHashMap` 是 Java 提供的高性能**线程安全** `Map`，它改进了 `Hashtable` 的同步性能，在多线程环境下广泛应用。

------

#### **（1）ConcurrentHashMap 概述**

##### **①主要特点**

- **线程安全**：采用 **分段锁（JDK 1.7）/CAS+红黑树（JDK 1.8）**，效率远高于 `Hashtable`。
- **不允许 `null` 键和 `null` 值**（与 `Hashtable` 类似）。
- **高并发性能**：JDK 1.7 使用**分段锁**，JDK 1.8 改用**CAS（无锁操作）+ Synchronized + 红黑树**，大幅提升性能。
- **默认并发级别**：JDK 1.7 **==默认 16 个分段==**，JDK 1.8 取消分段，使用**==Node 数组 + CAS + Synchronized==** 控制并发。

------

#### **（2） 常见方法及代码示例**

##### **①ConcurrentHashMap 常见 API**

| 方法                                                      | 说明                   |
| --------------------------------------------------------- | ---------------------- |
| `put(K key, V value)`                                     | 插入键值对（线程安全） |
| `get(Object key)`                                         | 获取指定键的值         |
| `remove(Object key)`                                      | 删除键值对             |
| `containsKey(Object key)`                                 | 是否包含指定键         |
| `containsValue(Object value)`                             | 是否包含指定值         |
| `size()`                                                  | 获取当前元素个数       |
| `isEmpty()`                                               | 判断是否为空           |
| `clear()`                                                 | 清空所有元素           |
| `replace(K key, V value)`                                 | 仅当键存在时替换值     |
| **`compute(K key, BiFunction remappingFunction)`**        | **根据函数计算值**     |
| **`merge(K key, V value, BiFunction remappingFunction)`** | **合并新值**           |

------

##### **②ConcurrentHashMap 基本使用**

```java
import java.util.concurrent.ConcurrentHashMap;

public class ConcurrentHashMapExample {
    public static void main(String[] args) {
        ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();

        // 添加键值对
        map.put("Java", 100);
        map.put("Python", 95);
        map.put("C++", 90);

        // 获取值
        System.out.println("Java 评分: " + map.get("Java"));

        // 是否包含键
        System.out.println("是否包含 Python: " + map.containsKey("Python"));

        // 并发安全更新
        map.compute("Java", (k, v) -> v != null ? v + 10 : 100);
        System.out.println("更新后的 Java 评分: " + map.get("Java"));

        // 删除键
        map.remove("C++");
        System.out.println("删除后: " + map);
    }
}
```

------

##### **③ `compute()` 方法**

- **作用**：根据键的旧值，计算新值，并原子性地更新。
- **示例**：

```java
map.compute("Java", (k, v) -> v != null ? v + 5 : 100);
```

------

##### **④ `merge()` 方法**

- **作用**：合并值（若键存在则合并，否则插入）。
- **示例**：

```java
map.merge("Java", 10, Integer::sum);
System.out.println(map.get("Java"));  // Java 评分增加 10
```



#### **（3）==_底层原理_==**

`ConcurrentHashMap` 是 `Map` 的并发版本，它的核心目标是在**多线程环境下提供高效的并发访问**，同时避免传统 `Hashtable` 的全局锁带来的性能瓶颈。为了实现这一点，它在不同版本（JDK 1.7 和 JDK 1.8）中采用了不同的底层机制。

------

##### **①JDK 1.7 的 `ConcurrentHashMap`（==_分段锁机制_==）**

###### **1.1 数据结构**

在 JDK 1.7 中，`ConcurrentHashMap` 采用了 **分段锁（Segment Lock）**，其底层结构如下：

- **Segment 数组（类似多个小 `HashMap`）**
- **每个 `Segment` 维护一个 `HashEntry<K, V>[]`**
- **每个 `HashEntry` 代表一个链表结点（类似 `HashMap`）**

📌 **结构示意图：**

```css
ConcurrentHashMap
 ├── Segment[0]  -->  HashEntry[] (链表)
 ├── Segment[1]  -->  HashEntry[] (链表)
 ├── Segment[2]  -->  HashEntry[] (链表)
 ├── ...
 ├── Segment[15] -->  HashEntry[] (链表)  （默认16个 Segment）
```

- `ConcurrentHashMap` 由多个 `Segment` 组成，每个 `Segment` 管理一个独立的小 `HashMap`，类似 `HashMap` 的 `bucket`。
- **每个 `Segment` 拥有一把独立的 `ReentrantLock` 锁**，这样多个线程可以同时操作不同 `Segment`，提升并发能力。

###### **1.2 工作方式**

- **插入数据**：
  1. 计算 `key` 的 `hash` 值，确定属于哪个 `Segment`。
  2. **只对该 `Segment` 加锁**，然后执行 `put()` 操作（不会影响其他 `Segment`）。
  3. 插入 `HashEntry` 结点（如果发生哈希冲突，则形成链表）。
  4. 解锁。
- **查询数据**：
  1. 计算 `key` 的 `hash` 值，找到 `Segment`。
  2. **无锁读取**（只读操作不需要加锁，提高性能）。
  3. 在 `HashEntry` 链表中查找 `key`，返回 `value`。
- **扩容机制**：
  1. 由于 `ConcurrentHashMap` 由多个 `Segment` 组成，扩容时需要对**所有 `Segment` 分别进行扩容**。
  2. 这个过程较为复杂，扩容时可能影响多个线程的性能。

###### **1.3 分段锁的优缺点**

✅ **优点**：

- **提升并发性能**：多个线程可以同时操作不同 `Segment`，**避免全局锁竞争**。
- **减少锁粒度**：相比 `Hashtable` 的全局锁，**`Segment` 级别的锁更细粒度**，性能更高。

❌ **缺点**：

- 固定并发级别（Segment 数量固定）：
  - 默认 `Segment` 数量为 `16`，无法动态调整，可能导致**负载不均衡**（部分 `Segment` 负载过重）。
- 扩容成本高：
  - **需要扩容所有 `Segment`，操作复杂且影响性能。**

------



##### ②==_CAS(无锁操作)_原理==

CAS（Compare And Swap，比较并交换）是一种 **无锁操作**，用于在多线程环境下实现并发控制，避免使用传统的锁（`synchronized`），从而提高性能。

------

###### **1.CAS（无锁操作）原理**

CAS 主要依赖于 ==**CPU 提供的原子指令**==，通过 ==**比较当前值与预期值**==，如果一致，则更新；否则，**说明数据已被其他线程修改，更新失败，需要重试。**

###### 2.**CAS 三个核心变量**

1. **V（旧值）**：当前内存中的实际值。
2. **E（期望值）**：希望当前值等于某个预期值。
3. **N（新值）**：如果当前值等于期望值，则将其更新为新值。

###### 3.==**CAS 过程**==

1. 读取变量 **V** 的当前值。
2. 比较 V 是否等于 E：
   - **如果相等**，说明没有其他线程修改过该变量，**更新为 N**，操作成功。
   - **如果不相等**，说明数据已被修改，**操作失败，需要重新获取 V 再尝试**。

**CAS 由 CPU 指令级别的操作支持**（如 `cmpxchg` 指令），在 **Java 中通过 `Unsafe` 类**的方法 `compareAndSwapXXX()` 实现，**确保 CAS 操作不会被线程切换打断**。

------

###### **4.CAS 示例（Java 代码）**

Java 中 `AtomicInteger` 是基于 CAS 实现的。

```java
import java.util.concurrent.atomic.AtomicInteger;

public class CASTest {
    public static void main(String[] args) {
        AtomicInteger atomicInteger = new AtomicInteger(5);  // 初始值 5

        // CAS 操作，期望值是 5，如果是 5，则更新为 10
        boolean success = atomicInteger.compareAndSet(5, 10);
        System.out.println("CAS 操作成功吗？" + success);  // true
        System.out.println("当前值：" + atomicInteger.get());  // 10

        // 再次尝试修改，但期望值设为 5（当前值已变成 10），所以失败
        success = atomicInteger.compareAndSet(5, 15);
        System.out.println("CAS 操作成功吗？" + success);  // false
        System.out.println("当前值：" + atomicInteger.get());  // 10
    }
}
```

**运行结果**

```
CAS 操作成功吗？true
当前值：10
CAS 操作成功吗？false
当前值：10
```

**解释**：

1. **第一次 CAS** 成功：内存中值是 5，预期也是 5，所以更新为 10。
2. **第二次 CAS** 失败：当前值是 10，而期望值是 5，更新失败。

------

###### **5.CAS 在 ==`ConcurrentHashMap` 中的应用==**

在 `ConcurrentHashMap`（JDK 1.8）中，CAS 主要用于无锁更新：

- **插入新节点** 时，先用 `CAS` 检查当前位置是否为空，如果为空就直接放入节点。
- **更新已有值** 时，**先用 `CAS` 尝试更新，如果==失败再使用 `synchronized`==**。

**代码示例**

```java
if (casTabAt(tab, i, null, new Node&lt;K,V&gt;(hash, key, value, null))) 
    return null;
```

**解析**：

- casTabAt() 是 **CAS 操作**：
  - **tab[i] == null**：当前位置为空，尝试插入新节点。
  - **如果成功**，说明线程安全地完成了插入。
  - **如果失败**，**说明==其他线程修改了 `tab[i]`==，此时==需要加锁 `synchronized`==进行处理**。

------

###### **6.CAS vs. Synchronized**

| **对比**     | **CAS（无锁操作）**                | **Synchronized（锁机制）**     |
| ------------ | ---------------------------------- | ------------------------------ |
| **原理**     | 直接通过 CPU 指令 `cmpxchg` 修改值 | 线程获取互斥锁后修改变量       |
| **开销**     | 低（无锁，不涉及线程切换）         | 高（涉及线程切换、上下文切换） |
| **是否阻塞** | 非阻塞（失败时不断重试）           | 阻塞（获取不到锁时等待）       |
| **适用场景** | 适用于高并发、竞争较少的情况       | 适用于竞争激烈的情况           |

------

###### **7.CAS 存在的==问题==**

1. **==ABA 问题==**

   - 假设一个变量 `V`，线程 A 读取到值 `5`，接着线程 B 将其改为 `10`，然后又改回 `5`。
   - 线程 A 再次执行 `CAS(5 → 10)` 时会成功，**但它==无法检测到变量曾被修改过==**。
   - 解决方案：使用 **`AtomicStampedReference`** **记录版本号**。

   ```java
   AtomicStampedReference`&lt;Integer&gt;` atomicStampedRef = new AtomicStampedReference<>(5, 0);
   ```

2. **自旋导致 CPU 消耗**

   - CAS 操作在失败时**会一直重试**，可能导致 **高 CPU 消耗**。
   - 解决方案：如果失败次数过多，采用 `synchronized`。

3. **只能保证单个变量的原子性**

   - **CAS 只能保证一个变量的原子性**，不能保证多个变量的原子更新。
   - 解决方案：使用 `AtomicReference` 或 `synchronized`。

------

###### 8.**总结**

1. **CAS（无锁操作）通过 CPU 指令（cmpxchg）实现变量的原子更新，避免使用 synchronized，提高性能。**
2. **CAS 在 `ConcurrentHashMap`、`AtomicInteger` 等并发工具类中广泛应用。**
3. **==CAS 适用于低冲突环境==，避免了线程阻塞，但可能导致 ABA 问题、自旋消耗 CPU。**

🚀 **在高并发场景下，CAS 是提高性能的重要机制，但也需要结合 synchronized 解决复杂竞争问题！**



##### **③JDK 1.8 的 `ConcurrentHashMap`（==_CAS + synchronized + 红黑树_==）**

###### **2.1 数据结构**

JDK 1.8 **彻底移除了 `Segment` 结构**，采用了更先进的**无锁并发控制（CAS）+ `synchronized` + 红黑树**。 底层结构：

- **Node<K, V>[] table**（类似 `HashMap` 的 `Entry[]`）
- **链表 + 红黑树**
- **CAS + synchronized 代替 `Segment`**

📌 **结构示意图：**

```css
ConcurrentHashMap
 ├── Node[0]  -->  链表 / 红黑树
 ├── Node[1]  -->  链表 / 红黑树
 ├── Node[2]  -->  链表 / 红黑树
 ├── ...
 ├── Node[N]  -->  链表 / 红黑树
```

- `Node<K, V>[]` 取代了 `Segment`，直接存储键值对。
- **当某个桶的链表长度 ≥ 8 且桶数组容量 ≥ 64 时，链表自动转换为红黑树**（提高查询效率）。
- **多线程写入时，先尝试 CAS（无锁）更新，失败则回退到 `synchronized` 方式加锁**。

------

###### **2.2 ==工作方式==**

- **插入数据**

  1. 计算 `hash` 值，找到 `table` 中对应的 `Node`。

  2. **使用 ==CAS（无锁操作）==尝试插入**：

     ```java
     if (casTabAt(tab, i, null, new Node&lt;K,V&gt;(hash, key, value, null)))
         return null;
     ```

  3. ==**CAS 失败，使用 `synchronized` 竞争锁**==，执行 `put()` 操作。

  4. **如果链表长度超过 8 且桶数组容量 >= 64**，则将链表转换为红黑树。

- **查询数据**

  - 计算 `hash`，直接查找 `table` 数组，查找 `Node` 链表（或红黑树）。

- **扩容**

  - **懒加载扩容**（分批进行）：
    - 采用 **transfer()** 方法，把旧数据逐步迁移到新表。
    - 迁移时**多个线程可以同时参与，减少阻塞**。

------

###### **2.3 线程安全机制**

**1. CAS（无锁操作）**

**CAS（Compare And Swap）** 是一种**无锁原子操作**，用于保证并发安全：

- 在 `put()` 时，**首先使用 CAS 尝试插入数据**，如果成功，直接返回。
- **如果 CAS 失败**（因为其他线程已经修改），则**回退到 `synchronized` 加锁**方式。

📌 **CAS 插入示例**

```java
if (casTabAt(tab, i, null, new Node&lt;K,V&gt;(hash, key, value, null)))
    return null;
```

- **casTabAt()** 方法会检查 `table[i]` 是否为 `null`，如果是 `null`，就直接插入新的 `Node`。
- **如果 `table[i]` 不是 `null`，CAS 失败，则进入 `synchronized` 加锁方式。**

------

**2. synchronized**

- **CAS 失败后，`synchronized` 加锁**，确保多线程安全。
- 由于 JDK 1.8 只在必要时加锁，锁的粒度比 JDK 1.7 的 `Segment` 还要细，性能更优。

------

**3. 链表转红黑树**

- **当链表长度 ≥ 8 且桶数组容量 ≥ 64 时**，链表自动转换为 **红黑树**，提升查询效率。
- 红黑树的查询时间复杂度由 **O(n) → O(log n)**。

------

##### **④ JDK 1.7 vs JDK 1.8 对比**

| 版本         | JDK 1.7                   | JDK 1.8                         |
| ------------ | ------------------------- | ------------------------------- |
| **数据结构** | Segment + HashEntry[]     | Node[] + CAS + 红黑树           |
| **锁机制**   | 分段锁（`ReentrantLock`） | CAS + `synchronized`            |
| **查询性能** | 低（链表）                | 高（红黑树）                    |
| **扩容机制** | 每个 `Segment` 独立扩容   | 多线程 `transfer()` 并发扩容    |
| **写入方式** | 需要 `ReentrantLock` 加锁 | 先 `CAS`，失败后 `synchronized` |

------

###### **总结**

- **JDK 1.7 使用** `Segment` 分段锁，**JDK 1.8 采用** `CAS + synchronized`，提升并发性能。

- **JDK 1.8 移除 `Segment`，引入红黑树**，避免哈希冲突带来的链表查询性能下降问题。

- **多线程环境下，`ConcurrentHashMap` 远优于 `Hashtable` 和 `Collections.synchronizedMap()`。** 

  

##### **⑤使用场景**

| 使用场景            | 说明                                  |
| ------------------- | ------------------------------------- |
| **多线程环境**      | 需要高效并发的 `Map`                  |
| **缓存系统**        | 适用于高并发场景的本地缓存            |
| **计数器/访问统计** | `compute()`、`merge()` 适用于计数场景 |
| **任务队列**        | 适用于生产者-消费者模型               |

------

##### **⑥ 与其他 Map 的对比**

|                     | `ConcurrentHashMap`                     | `HashMap`            | `Hashtable`          |
| ------------------- | --------------------------------------- | -------------------- | -------------------- |
| **线程安全**        | ✅ 是（CAS + 锁）                        | ❌ 否                 | ✅ 是（synchronized） |
| **并发性能**        | ✅ 高（无锁或局部锁）                    | ❌ 低（非线程安全）   | ❌ 低（全局锁）       |
| **是否允许 `null`** | ❌ 否                                    | ✅ 允许 `null` 键和值 | ❌ 否                 |
| **底层结构**        | `JDK 1.7`: 分段锁 `JDK 1.8`: Node + CAS | Node + 红黑树        | 早期 Hash 表         |
| **适用场景**        | 高并发                                  | 单线程               | 早期同步             |

------

##### **⑦结论**

1. **多线程环境下推荐使用 `ConcurrentHashMap`，避免 `Hashtable` 低效的全局锁。**
2. **对于普通 `Map` 需求，使用 `HashMap`（非线程安全）。**
3. **在高并发环境下，推荐 `ConcurrentHashMap` 代替 `synchronized Map`。**
4. **避免 `null` 作为键或值，以减少 `NullPointerException`。**

------

🚀 **推荐用法**

- **高并发下替代 `Hashtable` 或 `Collections.synchronizedMap(new HashMap<>())`**
- **可用于缓存、访问计数、统计等应用场景**





## 十、可变参数

**底层：**

- 底层就是一个数组，不过不需要我们自己创建，java会帮我们创建好

**小细节**

- **在方法的形参中最多只能写一个可变参数**
- **在方法中，如果除了可变参数的其它形参，那么可变参数要写在最后**



![image-20250311210029271](%E9%9B%86%E5%90%88.assets/image-20250311210029271.png)

```java
package com.pyw.a41variableparameter;

public class ArgsDemo1 {
    public static void main(String[] args) {
       /*
        假如需要定义一个方法求和，该方法可以灵活的完成如下需求：
        计算2个数据的和
        计算3个数据的和
        计算4个数据的和
        计算n个数据的和

        可变参数形参格式：数据类型...数据名
            这样定义可以传输任意长度的参数

        底层：
            底层就是一个数组，不过不需要我们自己创建，java会帮我们创建好
        小细节
            1.在方法的形参中最多只能写一个可变参数
            2.在方法中，如果除了可变参数的其它形参，那么可变参数要写在最后
       */

        System.out.println(getSum(10,20));
        System.out.println(getSum(10,20,30));
        System.out.println(getSum(10,20,30,40));
        System.out.println(getSum(10,20,30,40,50,60));


    }

    //计算2个数据的和
    public static int getSum(int a, int b) {
        return a + b;
    }

    //计算3个数据的和
    public static int getSum(int a, int b, int c) {
        return a + b + c;
    }

    //计算4个数据的和
    public static int getSum(int a, int b, int c, int d) {
        return a + b + c + d;
    }

    public static int getSum(Integer...a){
        int sum = 0;
        for (int i = 0; i < a.length; i++) {
            sum += a[i];
        }
        return sum;
    }
}
```

![image-20250311210439199](%E9%9B%86%E5%90%88.assets/image-20250311210439199.png)





## 十一、集合工具类-==_Collections_==

### 1、概述

![image-20250311211300140](%E9%9B%86%E5%90%88.assets/image-20250311211300140.png)

### 2、常用的API

![image-20250311211335813](%E9%9B%86%E5%90%88.assets/image-20250311211335813.png)



### 3、示例代码

**测试1**

```java
package com.pyw.a42collections;

import java.util.ArrayList;
import java.util.Collections;

public class CollectionsDemo1 {
    /*
        public static `&lt;T&gt;` boolean addAll(Collection`&lt;T&gt;` c, T... elements)   批量添加元素
        public static void shuffle(List<?> list)        打乱List集合元素的顺序
     */
    public static void main(String[] args) {
        //addAll  批量添加元素
        //1.创建集合对象
        ArrayList`&lt;String&gt;` list = new ArrayList<>();
        Collections.addAll(list,"123","abc","defg","hijk","456");
        System.out.println(list);

        //2.打乱集合
        Collections.shuffle(list);

        System.out.println(list);
    }
}
```



**测试2**

```java
package com.pyw.a42collections;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class CollectionsDemo2 {
    public static void main(String[] args) {
      /*
        public static `&lt;T&gt;` void sort(List`&lt;T&gt;` list)                       排序
        public static `&lt;T&gt;` void sort(List`&lt;T&gt;` list, Comparator`&lt;T&gt;` c)      根据指定的规则进行排序
        public static `&lt;T&gt;` int binarySearch (List`&lt;T&gt;` list,  T key)       以二分查找法查找元素
        public static `&lt;T&gt;` void copy(List`&lt;T&gt;` dest, List`&lt;T&gt;` src)          拷贝集合中的元素
        public static `&lt;T&gt;` int fill (List`&lt;T&gt;` list,  T obj)               使用指定的元素填充集合
        public static `&lt;T&gt;` void max/min(Collection`&lt;T&gt;` coll)              根据默认的自然排序获取最大/小值
        public static `&lt;T&gt;` void swap(List<?> list, int i, int j)         交换集合中指定位置的元素
     */


        System.out.println("-------------sort默认规则--------------------------");
        //默认规则，需要重写Comparable接口compareTo方法。Integer已经实现，按照从小打大的顺序排列
        //如果是自定义对象，需要自己指定规则
        ArrayList`&lt;Integer&gt;` list1 = new ArrayList<>();
        Collections.addAll(list1, 10, 1, 2, 4, 8, 5, 9, 6, 7, 3);
        Collections.sort(list1);
        System.out.println(list1);


        System.out.println("-------------sort自己指定规则规则--------------------------");
        Collections.sort(list1, new Comparator`&lt;Integer&gt;`() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o2 - o1;
            }
        });
        System.out.println(list1);

        Collections.sort(list1, (o1, o2) -> o2 - o1);
        System.out.println(list1);

        System.out.println("-------------binarySearch--------------------------");
        //需要元素有序
        ArrayList`&lt;Integer&gt;` list2 = new ArrayList<>();
        Collections.addAll(list2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        System.out.println(Collections.binarySearch(list2, 9));
        System.out.println(Collections.binarySearch(list2, 1));
        System.out.println(Collections.binarySearch(list2, 20));

        System.out.println("-------------copy--------------------------");
        //把list3中的元素拷贝到list4中
        //会覆盖原来的元素
        //注意点：如果list3的长度 > list4的长度，方法会报错
        ArrayList`&lt;Integer&gt;` list3 = new ArrayList<>();
        ArrayList`&lt;Integer&gt;` list4 = new ArrayList<>();
        Collections.addAll(list3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        Collections.addAll(list4, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
        Collections.copy(list4, list3);
        System.out.println(list3);
        System.out.println(list4);

        System.out.println("-------------fill--------------------------");
        //把集合中现有的所有数据，都修改为指定数据
        ArrayList`&lt;Integer&gt;` list5 = new ArrayList<>();
        Collections.addAll(list5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        Collections.fill(list5, 100);
        System.out.println(list5);

        System.out.println("-------------max/min--------------------------");
        //求最大值或者最小值
        ArrayList`&lt;Integer&gt;` list6 = new ArrayList<>();
        Collections.addAll(list6, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        System.out.println(Collections.max(list6));
        System.out.println(Collections.min(list6));

        System.out.println("-------------max/min指定规则--------------------------");
        // String中默认是按照字母的abcdefg顺序进行排列的
        // 现在我要求最长的字符串
        // 默认的规则无法满足，可以自己指定规则
        // 求指定规则的最大值或者最小值
        ArrayList`&lt;String&gt;` list7 = new ArrayList<>();
        Collections.addAll(list7, "a","aa","aaa","aaaa");
        System.out.println(Collections.max(list7, new Comparator`&lt;String&gt;`() {
            @Override
            public int compare(String o1, String o2) {
                return o1.length() - o2.length();
            }
        }));

        System.out.println("-------------swap--------------------------");
        //交换
        ArrayList`&lt;Integer&gt;` list8 = new ArrayList<>();
        Collections.addAll(list8, 1, 2, 3);
        Collections.swap(list8,0,2);
        System.out.println(list8);
    }
}
```



## 十二、综合练习题

### 1、随机点名器1

![image-20250311211856462](%E9%9B%86%E5%90%88.assets/image-20250311211856462.png)

```java
package com.pyw.a43test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Random;

public class test1 {
    public static void main(String[] args) {
        //1.定义集合
        ArrayList`&lt;String&gt;` list = new ArrayList<>();
        //2.添加数据
        Collections.addAll(list, "范闲", "范建", "范统", "杜子腾", "杜琦燕", "宋合泛", "侯笼藤", "朱益群", "朱穆朗玛峰", "袁明媛");
        
        //3.随机点名
        Random r = new Random();
        int index = r.nextInt(list.size());
        String name = list.get(index);
        System.out.println(name);
        
        //使用shuffle
        Collections.shuffle(list);
        System.out.println(list.get(0));
    }
}
```



### 2、随机点名器2-男女概率

![image-20250311211918884](%E9%9B%86%E5%90%88.assets/image-20250311211918884.png)

```java
package com.pyw.a43test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

public class test2 {
    public static void main(String[] args) {
/*       自动点名器 70%概率随机到男生，30%随机到女生  */
        //1.创建集合
        ArrayList`&lt;Integer&gt;` list = new ArrayList<>();
        //2.添加数据
        Collections.addAll(list, 1, 1, 1, 1, 1, 1, 1);
        Collections.addAll(list, 0, 0, 0);
        //3.打乱集合中的数据
        Collections.shuffle(list);
        //4.从list集合中随机抽取e或者1
        Random r = new Random();
        int index = r.nextInt(list.size());
        int number = list.get(index);
        System.out.println(number);
        //5.创建两个集合分别存储男生和女生的名字
        ArrayList`&lt;String&gt;` boyList = new ArrayList<>();
        ArrayList`&lt;String&gt;` girlList = new ArrayList<>();
        Collections.addAll(boyList, "范闲", "范建", "范统", "杜子腾", "宋合泛", "侯笼藤", "朱益群", "朱穆朗玛峰");
        Collections.addAll(girlList, "杜琦燕", "袁明媛", "李猜", "田蜜蜜");
        //6.判断此时是从boyList里面抽取还是从girlList里面抽取
        if (number == 1) {
            //boyList
            int boyIndex = r.nextInt(boyList.size());
            String name = boyList.get(boyIndex);
            System.out.println(name);
        } else {
            //girllist
            int girlIndex = r.nextInt(girlList.size());
            String name = girlList.get(girlIndex);
            System.out.println(name);
        }
    }
}
```



### 3、随机点名器3-不重复点名

![image-20250311211941687](%E9%9B%86%E5%90%88.assets/image-20250311211941687.png)

```java
package com.pyw.a43test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

public class test3 {
    public static void main(String[] args) {
        // TODO 自动点名 如果学生被点到了就不会再被点了，如果所有学生都点完了会开启第二轮

        // 1. 定义集合
        ArrayList`&lt;String&gt;` list1 = new ArrayList<>();
        // 2. 添加数据
        Collections.addAll(list1,
                "范闲", "范建", "范统", "杜子腾", "杜琦燕",
                "宋合泛", "侯笼滕", "朱益群", "朱穆朗玛峰");

        // 创建一个临时的集合，用来存已经被点到的学生的名字
        ArrayList`&lt;String&gt;` list2 = new ArrayList<>();

        // 外循环：表示轮数
        for (int i = 1; i <= 10; i++) {
            System.out.println("=== 第" + i + "轮点名开始了 ===");

            // 3. 获取集合的长度
            int count = list1.size();
            // 4. 随机点名
            Random r = new Random();

            // 内循环：每一轮中随机抽取的过程
            for (int j = 0; j < count; j++) {
                int index = r.nextInt(list1.size());
                String name = list1.remove(index);
                list2.add(name);
                System.out.println(name);
            }

            // 此时表示一轮点名结束
            // list1 为空，list2 存满所有学生的名字
            list1.addAll(list2);
            list2.clear();
        }
    }
}
```



### 4、自动点名器4-==权重问题==

![image-20250311212226827](%E9%9B%86%E5%90%88.assets/image-20250311212226827.png)

 

```java
package com.pyw.a43test;

import java.io.*;
import java.util.*;

public class RandomRollCall {
    public static void main(String[] args) {
        // 读取学生名单
        List`&lt;String&gt;` students = readStudentsFromFile("E:\\AAWeb-Learing\\Java-Learning\\ProjectCode\\JavaSECodeDemo\\src\\com\\pyw\\a43test\\students.txt");
        if (students.isEmpty()) {
            System.out.println("学生名单为空，请检查 students.txt 文件");
            return;
        }

        // 初始化权重，每个学生的初始权重相等
        Map<String, Double> weightMap = new HashMap<>();
        double initialWeight = 1.0 / students.size();
        for (String student : students) {
            weightMap.put(student, initialWeight);
        }

        Random random = new Random();

        // 进行 10 轮点名
        for (int i = 1; i <= 10; i++) {
            System.out.println("=== 第 " + i + " 次点名 ===");
            String selectedStudent;

            if (i == 3) {
                // 第三次点名作弊，强制选择 "张三"
                selectedStudent = "张三";
                System.out.println(selectedStudent + "（作弊点名）");
            } else {
                // 根据权重随机选择学生
                selectedStudent = weightedRandomSelect(weightMap, random);
                System.out.println(selectedStudent);
            }

            // 降低被选中者的权重（降低一半）
            weightMap.put(selectedStudent, weightMap.get(selectedStudent) / 2);
            // 归一化权重，确保所有权重的总和始终为 1
            normalizeWeights(weightMap);
        }
    }

    /**
     * 读取学生名单
     * @param filePath 学生名单文件路径
     * @return 学生名单列表
     */
    private static List`&lt;String&gt;` readStudentsFromFile(String filePath) {
        List`&lt;String&gt;` students = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = reader.readLine()) != null) {
                students.add(line.trim());
            }
        } catch (IOException e) {
            System.err.println("文件读取错误：" + e.getMessage());
        }
        return students;
    }

    /**
     * 根据权重随机选择一个学生
     * @param weightMap 存储学生名称及其对应的权重
     * @param random 随机数生成器
     * @return 被选中的学生姓名
     */
    private static String weightedRandomSelect(Map<String, Double> weightMap, Random random) {
        // 计算所有权重的总和
        double totalWeight = weightMap.values().stream().mapToDouble(Double::doubleValue).sum();
        // 生成一个 0 ~ totalWeight 之间的随机数
        double rand = random.nextDouble() * totalWeight;

        double cumulativeWeight = 0.0;
        // 遍历所有学生的权重
        for (Map.Entry<String, Double> entry : weightMap.entrySet()) {
            cumulativeWeight += entry.getValue();
            // 当累积权重超过随机值时，选择当前学生
            if (rand <= cumulativeWeight) {
                return entry.getKey();
            }
        }
        return null; // 正常情况下不会返回 null
    }

    /**
     * 归一化权重，确保所有学生的权重总和始终为 1
     * @param weightMap 存储学生名称及其对应的权重
     */
    private static void normalizeWeights(Map<String, Double> weightMap) {
        // 计算当前所有权重的总和
        double totalWeight = weightMap.values().stream().mapToDouble(Double::doubleValue).sum();
        // 遍历所有学生，将每个学生的权重调整，使其占比保持一致
        for (String key : weightMap.keySet()) {
            weightMap.put(key, weightMap.get(key) / totalWeight);
        }
    }
}

```

#### 主要注释点

1. **`weightedRandomSelect` 方法**：
   - 计算所有学生的权重总和。
   - 生成一个 `0 ~ totalWeight` 之间的随机数。
   - 遍历 `weightMap`，累加权重，直到超过该随机数，返回当前学生。
   - 这个方法确保了学生的权重越高，被选中的概率越大。
2. **`normalizeWeights` 方法**：
   - 计算当前所有学生权重的总和。
   - 遍历 `weightMap`，让每个学生的权重按比例缩放，使得所有权重的总和始终保持为 `1.0`。
   - 这个步骤确保了概率分布的合理性，否则随着点名次数的增加，可能会出现某些学生概率异常增大的情况。

这段代码保证了：

- **随机点名的权重调整机制**：被选中过的学生，后续被选中的概率会逐渐下降。
- **第三次点名作弊规则**：在第 3 轮固定选择 "张三"。
- **确保权重始终归一化**，保证概率计算的正确性。



### 5、Map集合案例-==集合嵌套==

![image-20250311220657551](%E9%9B%86%E5%90%88.assets/image-20250311220657551.png)

```java
package com.pyw.a43test;

import java.util.*;

public class test4 {
    public static void main(String[] args) {
        /* 需求
        定义一个Map集合，键用表示省份名称province，值表示市city，但是市会有多个。
        添加完毕后，遍历结果格式如下：
                江苏省 = 南京市，扬州市，苏州市，无锡市，常州市
                湖北省 = 武汉市，孝感市，十堰市，宜昌市，鄂州市
                河北省 = 石家庄市，唐山市，邢台市，保定市，张家口市*/
        HashMap<String, ArrayList`&lt;String&gt;`> hm = new HashMap<>();

        //2.创建单列集合存储市
        ArrayList`&lt;String&gt;` city1 = new ArrayList<>();
        city1.add("南京市");
        city1.add("扬州市");
        city1.add("苏州市");
        city1.add("无锡市");
        city1.add("常州市");

        ArrayList`&lt;String&gt;` city2 = new ArrayList<>();
        city2.add("武汉市");
        city2.add("孝感市");
        city2.add("十堰市");
        city2.add("宜昌市");
        city2.add("鄂州市");

        ArrayList`&lt;String&gt;` city3 = new ArrayList<>();
        city3.add("石家庄市");
        city3.add("唐山市");
        city3.add("邢台市");
        city3.add("保定市");
        city3.add("张家口市");

        //3.把省份和多个市添加到map集合
        hm.put("江苏省", city1);
        hm.put("湖北省", city2);
        hm.put("河北省", city3);

        hm.forEach((str, arr) -> {
            StringJoiner sj = new StringJoiner(", ", "", "");
            for (String s : arr) {
                sj.add(s);
            }
            System.out.println(str + " = " + sj);
        });


        Set<Map.Entry<String, ArrayList`&lt;String&gt;`>> entries = hm.entrySet();
        for (Map.Entry<String, ArrayList`&lt;String&gt;`> entry :entries){
            //entry依次表示每一个键值对对象
            String key = entry.getKey();
            ArrayList`&lt;String&gt;` value = entry.getValue();
            StringJoiner sj = new StringJoiner( ", ",  "", "");
            for (String city :value)
                sj.add(city);
            System.out.println(key + " = " +sj);
        }
    }
}
```



## 十三、是否允许null键或null值

在 Java 集合框架中，`List`、`Set` 和 `Map` 处理 `null` 键或 `null` 值的方式各不相同。以下是详细的规则：

------

### **1、`List`（允许 `null` 值）**

- `List` **允许** 存储 `null` 值，因为 `List` 主要是**按索引存储元素**，不会影响唯一性约束。

- 常见的 

  ```
  List
  ```

   实现：

  | **实现类**   | **是否允许 `null`** |
  | ------------ | ------------------- |
  | `ArrayList`  | ✅ 允许 `null`       |
  | `LinkedList` | ✅ 允许 `null`       |
  | `Vector`     | ✅ 允许 `null`       |

#### **示例**

```java
List`&lt;String&gt;` list = new ArrayList<>();
list.add(null);
System.out.println(list);  // 输出: [null]
```

------

### **2、`Set`（部分允许 `null`）**

- `Set` 由于**不允许元素重复**，`null` 只能存储一次。

- 不同实现的处理方式：

  | **实现类**      | **是否允许 `null`**                                          |
  | --------------- | ------------------------------------------------------------ |
  | `HashSet`       | ✅ 允许一个 `null`                                            |
  | `LinkedHashSet` | ✅ 允许一个 `null`                                            |
  | `TreeSet`       | ❌ **不允许 `null`**（基于 `TreeMap`，**==排序时 `null` 无法比较==**） |

#### **示例**

```java
Set`&lt;String&gt;` set = new HashSet<>();
set.add(null);
set.add(null);
System.out.println(set);  // 输出: [null] （不会存入多个 `null`）
Set`&lt;String&gt;` treeSet = new TreeSet<>();
treeSet.add(null);  // 抛出 NullPointerException
```

------

### **3、**`Map`（部分允许 `null` 键或 `null` 值）

#### **(1) `null` 键**

- **`HashMap`** 和 **`LinkedHashMap`** **允许** 一个 `null` 作为键。
- **`TreeMap`** ❌ **不允许 `null` 键**（基于 `TreeSet`，排序时 `null` 无法比较）。
- **`Hashtable`** ❌ **不允许 `null` 键**（线程安全的 `Map`，不允许 `null`）。

#### **(2) `null` 值**

- **`HashMap`** ✅ **允许 `null` 值**。
- **`LinkedHashMap`** ✅ **允许 `null` 值**。
- **`TreeMap`** ✅ **允许 `null` 值**（但键不能是 `null`）。
- **`Hashtable`** ❌ **不允许 `null` 值**（线程安全的 `Map`，不允许 `null`）。

#### **不同 `Map` 实现对 `null` 的支持**

| **实现类**      | **是否允许 `null` 键** | **是否允许 `null` 值** |
| --------------- | ---------------------- | ---------------------- |
| `HashMap`       | ✅ 允许 1 个 `null` 键  | ✅ 允许多个 `null` 值   |
| `LinkedHashMap` | ✅ 允许 1 个 `null` 键  | ✅ 允许多个 `null` 值   |
| `TreeMap`       | ❌ **不允许 `null` 键** | ✅ 允许多个 `null` 值   |
| `Hashtable`     | ❌ **不允许 `null` 键** | ❌ **不允许 `null` 值** |

#### **示例**

```java
Map<String, String> hashMap = new HashMap<>();
hashMap.put(null, "value1");  // 允许
hashMap.put("key1", null);    // 允许
System.out.println(hashMap);  // {null=value1, key1=null}
Map<String, String> treeMap = new TreeMap<>();
treeMap.put(null, "value");  // NullPointerException（TreeMap 不允许 `null` 键）
Map<String, String> hashtable = new Hashtable<>();
hashtable.put(null, "value");  // NullPointerException（Hashtable 不允许 `null` 键）
hashtable.put("key", null);    // NullPointerException（Hashtable 不允许 `null` 值）
```

------

### **总结**

| 集合类型                                     | `null` 值    | `null` 键    |
| -------------------------------------------- | ------------ | ------------ |
| `List` (`ArrayList`, `LinkedList`, `Vector`) | ✅ 允许多个   | ❌ 无键       |
| `Set` (`HashSet`, `LinkedHashSet`)           | ✅ 允许一个   | ❌ 无键       |
| `Set` (`TreeSet`)                            | ❌ **不允许** | ❌ 无键       |
| `Map` (`HashMap`, `LinkedHashMap`)           | ✅ 允许多个   | ✅ 允许 1 个  |
| `Map` (`TreeMap`)                            | ✅ 允许多个   | ❌ **不允许** |
| `Map` (`Hashtable`)                          | ❌ **不允许** | ❌ **不允许** |

如果你的应用需要存储 `null` 值或 `null` 键，建议选择 `HashMap` 或 `ArrayList`，而避免 `TreeMap` 和 `Hashtable`。



## 十四、不可变集合

### 1、概念和应用场景

![image-20250311221946604](%E9%9B%86%E5%90%88.assets/image-20250311221946604.png)



![image-20250311222022789](%E9%9B%86%E5%90%88.assets/image-20250311222022789.png)



### 2、静态方法-_of_

![image-20250311222114748](%E9%9B%86%E5%90%88.assets/image-20250311222114748.png)

### 3、不可变集合-_List_

```java
package com.pyw.a45Immutable;


import java.util.Iterator;
import java.util.List;

public class ImmutableDemo1 {
    public static void main(String[] args) {
        /*
            创建不可变的List集合
            "张三", "李四", "王五", "赵六"
        */

        //一旦创建完毕之后，是无法进行修改的，在下面的代码中，只能进行查询操作
        List`&lt;String&gt;` list = List.of("张三","李四","王五","赵六");
        System.out.println(list.get(0));
        System.out.println(list.get(1));
        System.out.println(list.get(2));
        System.out.println(list.get(3));

        System.out.println("---------------------------");

        for (String s : list) {
            System.out.println(s);
        }

        System.out.println("---------------------------");


        Iterator`&lt;String&gt;` it = list.iterator();
        while(it.hasNext()){
            String s = it.next();
            System.out.println(s);
        }
        System.out.println("---------------------------");

        for (int i = 0; i < list.size(); i++) {
            String s = list.get(i);
            System.out.println(s);
        }
        System.out.println("---------------------------");

//        list.remove("李四");
//        list.add("aaa");
//        list.set(0,"aaa");
    }
}
```



### 4、不可变集合-_Set_

细节：

- **当我们要获取一个不可变的Set集合时，里面的参数要保证唯一性**

```java
package com.pyw.a45Immutable;

import java.util.Set;

public class ImmutableDemo2 {
    public static void main(String[] args) {
        /*
            创建不可变的Set集合
            "张三","李四","王五","赵六"

            细节：
                当我们要获取一个不可变的Set集合时，里面的参数要保证唯一性
         */

        Set`&lt;String&gt;` set = Set.of("张三","李四","王五","赵六");

        for (String s : set) {
            System.out.println(s);
        }

        System.out.println("===========");

        set.forEach((str)->{
            System.out.println(str);
        });
    }
}
```



### 5、不可变集合-_Map_

**细节：**

- **键是不能重复的**
- **Map里面的of方法**，参数是有上限的，最多只能传递20个参数，**10个键值对**
  - ![image-20250311223028084](%E9%9B%86%E5%90%88.assets/image-20250311223028084.png)
  - ![image-20250311222851737](%E9%9B%86%E5%90%88.assets/image-20250311222851737.png)
- 如果要传超过10个的键值对可以写entry对象
  - ![image-20250311223151956](%E9%9B%86%E5%90%88.assets/image-20250311223151956.png)

```java
package com.pyw.a45Immutable;

import java.util.Map;
import java.util.Set;

public class ImmutableDemo3 {
    /*
        创建Map的不可变集合
        只能传20个参数 也就是10个键值对

        如果要传超过10个的键值对可以写entry对象
     */
    public static void main(String[] args) {
        Map<String, String> map = Map.of("张三", "北京", "李四", "王五", "赵六", "广州",
                "孙七", "杭州");

        map.forEach((key,value) ->{
            System.out.println(key+":"+value);
        });

        Set`&lt;String&gt;` set = map.keySet();
        for (String key : set) {
            String value = map.get(key);
            System.out.println(key+":"+value);
        }

        Set<Map.Entry&lt;String,String>&gt; entries = map.entrySet();
        for (Map.Entry<String, String> entry : entries) {
            String key = entry.getKey();
            String value = entry.getValue();
            System.out.println(key+":"+value);
        }
    }
}
```

**超过10个键值对**

```java
package com.pyw.a45Immutable;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class ImmutableDemo4 {
    public static void main(String[] args) {

        /*
            创建Map的不可变集合,键值对的数量超过10个
        */

        //1.创建一个普通的Map集合
        HashMap<String, String> hm = new HashMap<>();
        hm.put("张三", "南京");
        hm.put("李四", "北京");
        hm.put("王五", "上海");
        hm.put("赵六", "北京");
        hm.put("孙七", "深圳");
        hm.put("周八", "杭州");
        hm.put("吴九", "宁波");
        hm.put("郑十", "苏州");
        hm.put("刘一", "无锡");
        hm.put("陈二", "嘉兴");
        hm.put("aaa", "111");

/*        //2.利用上面的数据来获取一个不可变的集合
        //获取到所有的键值对对象（Entry对象）
        Set<Map.Entry<String, String>> entries = hm.entrySet();
        //把entries变成一个数组
        Map.Entry[] arr1 = new Map.Entry[0]; //0表示数组大小
        //toArray方法在底层会比较集合的长度跟数组的长度两者的大小
        //如果集合的长度 > 数组的长度 ：数据在数组中放不下，此时会根据实际数据的个数，重新创建数组
        //如果集合的长度 <= 数组的长度：数据在数组中放的下，此时不会创建新的数组，而是直接用
        Map.Entry[] arr2 = entries.toArray(arr1);
        //不可变的map集合
        Map map = Map.ofEntries(arr2);
        map.put("bbb","222");*/

        //jdk10以前
        //不可变的map集合链式写法
//        Map<Object, Object> map = Map.ofEntries(hm.entrySet().toArray(new Map.Entry[0]));

        //jdk10以后
        Map<String, String> map = Map.copyOf(hm);
        map.put("bbb","222");

    }
}
```

### 6、小结

![image-20250311223850570](%E9%9B%86%E5%90%88.assets/image-20250311223850570.png)
