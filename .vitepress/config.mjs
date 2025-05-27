import {
  defineConfig
} from 'vitepress'
import {
  set_sidebar
} from "../utils/auto-sidebar.mjs"; // 改成自己的路径

import markdownItMark from 'markdown-it-mark'

import {
  nav
} from './myconfigs/index.ts'

import {
  iconMap
} from './theme/utils/iconMap.ts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 语言
  lang: 'zh-CN',
  // 网页图标
  head: [
    ['link', {
      rel: 'icon',
      href: '/blog-logo.png'
    }]
  ],

  title: "小鹏的Notes",
  description: "A VitePress Site",

  lastUpdated: true, //首次配置不会立即生效，需git提交后爬取时间戳


  // vite: {
  //   vue: {
  //     template: {
  //       compilerOptions: {
  //         whitespace: 'preserve'  // 更宽松的解析
  //       }
  //     }
  //   }
  // },

  // markdown 配置
  markdown: {
    // 启用大纲
    toc: {
      level: [1, 3]
    },
    // headers: {
    //   level: [2, 3, 4, 5, 6] // 确保所有级别标题都被解析
    // },
    // 扩展 markdown-it 配置
    config: (md) => {
      // md.set({ breaks: true })
      md.use(markdownItMark)
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      }
    },

    // 允许 HTML 标签（防御性配置）
    html: true,
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },

  // 主题配置
  themeConfig: {
    //自定义上下页名 //
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    //手机端深浅模式文字修改 //
    darkModeSwitchLabel: '深浅模式',

    //上次更新时间 
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },
    //返回顶部文字修改
    returnToTopLabel: '返回顶部',
    // 侧边栏-目录设置
    outlineTitle: '目录',
    //outline: 'deep',
    //outline: [2, 3],
    outline: {
      level: [1, 3], // 显示1-3级标题
      // level: 'deep', // 显示2-6级标题
      //label: '当前页大纲' // 文字显示
    },
    // 左上角logo
    logo: '/blog-logo.png',
    // https://vitepress.dev/reference/default-theme-config

    nav: [{
        text: `${iconMap.home}首页`,
        link: '/'
      },
      {
        text: `${iconMap.notes} 笔记汇总`,
        link: '/自我介绍/self-introduction.md'
      },
      {
        text: `${iconMap.funny} Funny Web`,
        items: [{
            text: '📱 3D翻盖手机',
            link: 'https://chaz.fun/phone/n93i/'
          },
          {
            text: '🎬 Siena Film',
            link: 'https://www.siena.film/'
          },
          {
            text: '✨ 设计动效',
            link: 'https://www.jiejoe.com/home'
          },
          // 新增推荐：在线游戏类
          {
            text: '🎲 疯狂 3D 游戏库',
            link: 'https://www.crazygames.com/',
            desc: '免费 3D 游戏合集，含射击/竞速/解谜等类型'
          },
        ]
      },
      {
        text: `${iconMap.github_16} Github仓库`,
        link: 'https://github.com/XiaoPeng03182/blogs-vitepress'
      },
      {
        text: `${iconMap.message_boards} 留言板`,
        link: 'https://wordpress.xiaopeng.online/留言板/'
      },
      {
        text: `${iconMap.shoushuo} 说说`,
        link: 'https://wordpress.xiaopeng.online/碎碎念/'
      },
      {
        text: `${iconMap.tools} 工具`,
        items: [{
            text: `${iconMap.tool_snipaste} 电脑截屏工具Snipaste`,
            link: 'https://wwsd.lanzouw.com/iupCX2tlx0ta'
          },
          {
            text: `${iconMap.tool_pdf} PDF工具`,
            link: 'https://www.ilovepdf.com/zh-cn'
          },
          {
            text: `${iconMap.tool_images} 编辑图片`,
            link: 'https://www.iloveimg.com/zh-cn'
          },
          {
            text: `${iconMap.tool_ip} ip解析`,
            link: 'https://zh-hans.ipshu.com/'
          },
          {
            text: `${iconMap.tool_screen} 电脑屏幕检测`,
            link: 'https://screen.bmcx.com/#welcome'
          },
          {
            text: `${iconMap.tool_format_conversion} 文件格式转换`,
            link: 'https://www.alltoall.net/'
          },
        ]
      },
    ],


    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    // 侧边栏-自动生成目录
    // sidebar: {
    //   "/backend/rabbitmq": set_sidebar("/backend/rabbitmq"),
    //   "/backend/example": set_sidebar("/backend/example"),
    //   "/notes": set_sidebar("/"),
    // },
    sidebar: [{
        text: '自我介绍',
        collapsed: true, // true默认折叠,false:展开
        items: [{
          text: '👨「代码炼金术士」',
          link: '/自我介绍/self-introduction-2.md'
        }, {
          text: '🌍「诗的浪漫极客」',
          link: '/自我介绍/self-introduction.md'
        }]
      }, {
        text: `${iconMap.java} Java基础学习`,
        collapsed: true, // true默认折叠,false:展开
        items: [{
            text: `${iconMap.java_base} Java基础知识`,
            link: '/Java基础/Java-Learning-Local.md'
          }, {
            text: `${iconMap.collection} Java集合`,
            link: '/Java基础/集合/集合-Local.md'
          },
          {
            text: `${iconMap.io_stream} IO流`,
            link: '/Java基础/IO/IO流-Local.md'
          },
          {
            text: `${iconMap.thread} 多线程`,
            link: '/Java基础/多线程/多线程-Local.md'
          },
          {
            text: `${iconMap.file} File文件`,
            link: '/Java基础/File/File-Local.md'
          }, {
            text: `${iconMap.exception} 异常`,
            link: '/Java基础/异常/异常-Local.md'
          },
          {
            text: `${iconMap.network_code} 网络编程`,
            link: '/Java基础/网络编程/网络编程-Local.md'
          },
          {
            text: `${iconMap.note} 注解`,
            link: '/Java基础/注解/注解-Local.md'
          },
          {
            text: `${iconMap.stream} Stream流`,
            link: '/Java基础/Stream/Stream流-Local.md'
          },
          {
            text: `${iconMap.log} log日志`,
            link: '/Java基础/log/Log日志-Local.md'
          },
          {
            text: `${iconMap.xml} XML`,
            link: '/Java基础/Xml/XML-Local.md'
          },
          {
            text: `${iconMap.reflection} 反射和动态代理`,
            link: '/Java基础/反射和动态代理/反射和动态代理-Local.md'
          },
          {
            text: `${iconMap.method_reference} 方法引用`,
            link: '/Java基础/方法引用/方法引用-Local.md'
          },
          {
            text: `${iconMap.unit_test} 单元测试`,
            link: '/Java基础/单元测试/单元测试-Local.md'
          },
          {
            text: `${iconMap.class_loader} 类加载器`,
            link: '/Java基础/类加载器/类加载器-Local.md'
          },
        ]
      },
      {
        text: `${iconMap.back_end} Java后端`,
        collapsed: true, // true默认折叠,false:展开
        items: [{
          text: `${iconMap.springboot} JavaWeb SpringBoot 学习`,
          link: '/Java后端/JavaWeb学习/Web-Learning-Local.md'
        }, {
          text: `${iconMap.sky_take_out} 苍穹外卖`,
          link: '/Java后端/苍穹外卖/Project-TakeOut-Local.md'
        }]
      },
      {
        text: `${iconMap.microservice} 微服务`,
        collapsed: true, // true默认折叠,false:展开
        items: [{
          text: `${iconMap.spring_cloud} SpringCloud学习`,
          link: '/微服务/SpringCloud/微服务SpringCloud-Local.md'
        }, {
          text: `${iconMap.rabbit_mq} RabbitMQ`,
          link: '/微服务/RabbitMQ/MQ-Local.md'
        }, {
          text: `${iconMap.nacos} Nacos源码分析`,
          link: '/微服务/Nacos源码分析/Nacos源码分析-Local.md'
        }, {
          text: `${iconMap.sentinel} Sentinel源码分析`,
          link: '/微服务/Sentinel源码分析/Sentinel源码分析-Local.md'
        }, ]
      },
      {
        text: `${iconMap.linux} Linux学习`,
        collapsed: true, // true默认折叠,false:展开
        items: [{
          text: 'Linux学习',
          link: '/Linux学习/Linux-Learning-Local.md'
        }]
      },
      {
        text: `${iconMap.git} Git学习`,
        collapsed: true, // true默认折叠,false:展开
        items: [{
          text: 'Git学习',
          link: '/Git学习笔记/Git-Learning-Local.md'
        }]
      },
      {
        text: `${iconMap.docker} Docker学习`,
        collapsed: true, // true默认折叠,false:展开
        items: [{
          text: 'Docker学习',
          link: '/Docker学习/Docker-Learning-Local.md'
        }]
      },
      {
        text: `${iconMap.middleware} 中间件`,
        collapsed: true, // true默认折叠,false:展开
        items: [{
          text: `${iconMap.elasticsearch} ElasticSearch`,
          link: '/中间件/ElasticSearch/Elasticsearch-Local.md'
        }, {
          text: `${iconMap.rabbit_mq} RabbitMQ`,
          link: '/微服务/RabbitMQ/MQ-Local.md'
        }]
      },
      {
        text: `${iconMap.database}数据库学习`,
        collapsed: true, // true默认折叠,false:展开
        items: [{
          text: `${iconMap.mysql} Mysql学习-汇总`,
          link: '/数据库学习/Mysql/Mysql-Learning-Local.md'
        }, {
          text: `${iconMap.mysql} Mysql学习-基础篇`,
          link: '/数据库学习/Mysql/Mysql-Learning-基础篇.md'
        }, {
          text: `${iconMap.mysql} Mysql学习-高级篇`,
          link: '/数据库学习/Mysql/Mysql-Learning-高级篇.md'
        }, {
          text: `${iconMap.mysql} Mysql学习-运维篇`,
          link: '/数据库学习/Mysql/Mysql-Learning-运维篇.md'
        }, {
          text: `${iconMap.middleware} 中间件学习`,
          collapsed: true, // true默认折叠,false:展开
          items: [{
            text: `${iconMap.mybatis_plus} MybatisPlus学习`,
            link: '/数据库学习/中间件/MybatisPlus/MybatisPlus-Learning-Local.md'
          }, {
            text: '待续...',
            link: '/404.md'
          }]
        }]
      },
      {
        text: `${iconMap.frontend} 前端学习`,
        collapsed: true, // true默认折叠,false:展开
        items: [{
          text: `${iconMap.vue} Vue学习`,
          link: '/前端学习/Vue/Vue-进阶学习-Local.md'
        }, {
          text: `${iconMap.html}${iconMap.css} HTML+CSS+移动端`,
          link: '/前端学习/Html+Css+移动Web/HTML+CSS+移动端web-Learning-Local.md'
        }, ]
      }
    ],

    // sidebar: false, // 关闭左侧侧边栏
    // aside: "left", // 设置右侧侧边栏(目录)在左侧显示

    // 社交链接
    socialLinks: [{
        icon: {
          svg: iconMap.github
        },
        link: 'https://github.com/XiaoPeng03182'
      },
      {
        icon: {
          svg: iconMap.wechat_with_color,
        },
        // link: 'https://weixin.qq.com/'
        // link: '/微信信息展示/index'
        link: '/wechat-info/index.html'
      },
      {
        icon: {
          svg: iconMap.gitee
        },
        link: 'https://gitee.com/xiaopeng03/projects'
      },
      // {
      //   icon: {
      //     svg: iconMap.email
      //   },
      //   link: 'qq:2872259389@qq.com'
      // }
    ],

    // 底部配置
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 <a href="https://beian.miit.gov.cn/" target="_blank">渝ICP备2025054279号</a>',
      // 自动更新时间
      // copyright: `Copyright © 2023-${new Date().getFullYear()} 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京****号</a>`, 
    },


    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})