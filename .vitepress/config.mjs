import {
  defineConfig
} from 'vitepress'
import {
  set_sidebar
} from "../utils/auto-sidebar.mjs"; // 改成自己的路径

import markdownItMark from 'markdown-it-mark'

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
  title: "小鹏的Blogs",
  description: "A VitePress Site",

  lastUpdated: true, //首次配置不会立即生效，需git提交后爬取时间戳

  // markdown 配置
  markdown: {
    // 扩展 markdown-it 配置
    config: (md) => {
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
      level: [2, 4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      //label: '当前页大纲' // 文字显示
    },
    // 左上角logo
    logo: '/blog-logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Examples',
        link: '/markdown-examples'
      },
      {
        text: 'Java基础学习',
        items: [{
            text: 'Java集合',
            link: '/java/collection'
          },
          {
            text: 'IO流',
            link: '/java/IO'
          },
        ]
      },

      {
        text: '中间件',
        items: [{
          text: 'RabbitMQ',
          link: '/backend/rabbitmq/MQ-Local.md'
        }, ]
      },
      {
        text: '示例文档',
        collapsed: false, // true默认展开,false:折叠
        items: [{
          text: 'api-examples',
          link: '/backend/example/api-examples.md'
        }, {
          text: 'markdown-examples',
          link: '/backend/example/markdown-examples.md'
        }, ]
      },
      {
        text: 'Linux学习',
        link: '/linux-learning/Linux-Learning-Local.md'
      }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    // 侧边栏-自动生成目录
    sidebar: {
      "/backend/rabbitmq": set_sidebar("/backend/rabbitmq"),
      "/backend/example": set_sidebar("/backend/example"),
    },
    // {
    //   text: 'Examples',
    //   items: [{
    //       text: 'Markdown Examples',
    //       link: '/markdown-examples'
    //     },
    //     {
    //       text: 'Runtime API Examples',
    //       link: '/api-examples'
    //     }
    //   ]
    // }
    // ],
    // sidebar: false, // 关闭左侧侧边栏
    // aside: "left", // 设置右侧侧边栏(目录)在左侧显示

    socialLinks: [{
        icon: 'github',
        link: 'https://github.com/vuejs/vitepress'
      },
      {
        icon: {
          svg: '<svg t="1703483542872" class="icon" viewBox="0 0 1309 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6274" width="200" height="200"><path d="M1147.26896 912.681417l34.90165 111.318583-127.165111-66.823891a604.787313 604.787313 0 0 1-139.082747 22.263717c-220.607239 0-394.296969-144.615936-394.296969-322.758409s173.526026-322.889372 394.296969-322.889372C1124.219465 333.661082 1309.630388 478.669907 1309.630388 656.550454c0 100.284947-69.344929 189.143369-162.361428 256.130963zM788.070086 511.869037a49.11114 49.11114 0 0 0-46.360916 44.494692 48.783732 48.783732 0 0 0 46.360916 44.494693 52.090549 52.090549 0 0 0 57.983885-44.494693 52.385216 52.385216 0 0 0-57.983885-44.494692z m254.985036 0a48.881954 48.881954 0 0 0-46.09899 44.494692 48.620028 48.620028 0 0 0 46.09899 44.494693 52.385216 52.385216 0 0 0 57.983886-44.494693 52.58166 52.58166 0 0 0-57.951145-44.494692z m-550.568615 150.018161a318.567592 318.567592 0 0 0 14.307712 93.212943c-14.307712 1.080445-28.746387 1.768001-43.283284 1.768001a827.293516 827.293516 0 0 1-162.394168-22.296458l-162.001279 77.955749 46.328175-133.811485C69.410411 600.858422 0 500.507993 0 378.38496 0 166.683208 208.689602 0 463.510935 0c227.908428 0 427.594322 133.18941 467.701752 312.379588a427.463358 427.463358 0 0 0-44.625655-2.619261c-220.24709 0-394.100524 157.74498-394.100525 352.126871zM312.90344 189.143369a64.270111 64.270111 0 0 0-69.803299 55.659291 64.532037 64.532037 0 0 0 69.803299 55.659292 53.694846 53.694846 0 0 0 57.852923-55.659292 53.465661 53.465661 0 0 0-57.852923-55.659291z m324.428188 0a64.040926 64.040926 0 0 0-69.574114 55.659291 64.302852 64.302852 0 0 0 69.574114 55.659292 53.694846 53.694846 0 0 0 57.951145-55.659292 53.465661 53.465661 0 0 0-57.951145-55.659291z" p-id="6275"></path></svg>'
        },
        link: 'https://weixin.qq.com/'
      },
      {
        icon: 'discord',
        link: 'https://chat.vitejs.dev/'
      }
    ],

    // 底部配置
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-2024 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京****号</a>',
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