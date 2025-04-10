---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "XiaoPeng的Notes"
  text: "一个记录学习的网站"
  tagline: Life is coding, I will debug it.
  image:
    src: /coding-background.png
    alt: 背景图片
    
  actions:
    - theme: brand
      text: 📖笔记汇总
      link: /自我介绍/self-introduction.md
    - theme: alt
      text: 👨自我介绍
      link: /自我介绍/self-introduction-2.md

features:
  - icon: 
     src: /icons/features/java.svg 
    title: Java基础学习
    details:  集合/多线程/IO流核心知识库
    link: /Java基础/Java-Learning-Local.md
    linkText: Java基础学习

  # - icon: 
  #     src: https://vitepress.yiov.top/vitepress.png
  #   title: VitePress
  #   details: 使用VitePress快速搭建。
  #   link: https://vitepress.dev/zh/
  #   linkText: VitePress官网
    
  - icon: 
      src: /icons/features/spring-cloud.svg
    title: Spring Cloud 微服务学习
    details: 微服务架构与组件深度解析
    link: /微服务/SpringCloud/微服务SpringCloud-Local.md
    linkText: SpringCloud微服务学习


  - icon: 
      src: /icons/features/spring-boot.svg
    title: Spring Boot 学习
    details: 企业级开发最佳实践
    link: /Java后端/JavaWeb学习/Web-Learning-Local.md
    linkText: SpringBoot学习

  - icon: 
      src: /icons/features/blog-logo.jpg
    title: 个人博客
    details: 技术思考与实战沉淀
    link: https://wordpress.xiaopeng.online/
    linkText: 小鹏的博客

  - icon: 
      src: https://javaguide.cn/logo.svg
    title: JavaGuide
    details: 「Java学习 + 面试指南」
    link: https://javaguide.cn/
    linkText: JavaGuide

  - icon: 
      src: https://nav.yiov.top/logo.png
    title: 网站工具导航网站
    details: 效率工具大全
    link: https://nav.yiov.top/
    linkText: 工具网址导航
---

<confetti />


<DataPanel />

<InteractiveSeparator />

## 🎪 代码马戏团 —— 欢迎来到我的技术游乐园

### 🤹♂️ 今日演出节目单

#### 1. 程序员生存指南（伪代码版）
```python
while True:
    try:
        需求 = 产品经理.最新需求()
        代码 = 咖啡因(需求.魔改())
        测试通过 = True
    except 老板急催Error as e:
        咖啡因 *= 2
        写注释 = False
    finally:
        print("💰 工资到账提醒：", 支付宝.余额())
```

#### 2. 我与BUG的日常对话
```java
// 当我在周五下午看到生产环境报错时：
public class Emergency {
    public static void main(String[] args) {
        System.out.println("冷静！");     // 手在颤抖
        System.out.println("这是特性！");  // 说服自己
        System.out.println("重启试试？");  // 祖传手艺
        System.out.println("需要咖啡...");// 终极方案
    }
}
```

#### 3. 代码哲学（会动的ASCII艺术）
```text
          _____
        .'/L|__`.
       / =[_]O|` \
       |"+_____":|
     __:='|____`-:__
    ||[] ||====| []||
    ||[] | |=| | []||
    |:||_|=|U| |_||:|
    |:|||]_=_ =[_||:|
    | |||] [_][]C|| |
    | ||-'"""""`-|| |
    /|\\_\_|_|_/_//|\
    |\|  /|_|\  |/|/
    |_|  |_||_|  |_|
    我写的代码    生产环境的代码
```

#### 4. 技术栈连连看（点击展开惊喜）
<details>
<summary>🎁 我的隐藏技能树</summary>

```css
/* 让老板眼前一亮的进度条 */
.loading-bar {
  width: 100%;
  height: 20px;
  background: repeating-linear-gradient(
    45deg,
    #ff6b6b 25%,
    #4ecdc4 25%,
    #4ecdc4 50%,
    #ff6b6b 50%,
    #ff6b6b 75%,
    #4ecdc4 75%
  );
  animation: marquee 2s linear infinite;
}

@keyframes marquee {
  from { background-position: 0 0; }
  to { background-position: 100px 0; }
}
```
</details>

#### 5. 程序员专属天气预报
```bash
$ curl wttr.in/chongqing?lang=zh
🌞 重庆天气报告：
   温度: 39°C (体感温度: 47°C)
   💻 推荐活动: 
     - 空调房写代码
     - 冰咖啡调试法
     - 分布式散热系统研发
```

### 🎮 互动彩蛋区
<!-- 鼠标悬停查看程序员冷笑话 -->
<span title="为什么程序员总分不清万圣节和圣诞节？因为 Oct 31 == Dec 25！" style="cursor: help">
🎃🎄 悬停有惊喜
</span>

<!-- 点击召唤代码之神 -->
<button onclick="alert('🎉 你刚刚消耗了 42kJ 能量，获得：\n- 咖啡因×3\n- BUG修复券×1')" 
        style="padding: 8px 15px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">
点击领取程序员Buff
</button>

---

> "代码可以是严肃的，但写代码的人必须有趣"  
> —— 某位在注释里写诗的开发者 ✍️

---
