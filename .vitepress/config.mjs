import {
  defineConfig
} from 'vitepress'
import {
  set_sidebar
} from "../utils/auto-sidebar.mjs"; // 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 网页图标
  head: [
    ['link', {
      rel: 'icon',
      href: '/blog-logo.png'
    }]
  ],
  title: "小鹏的Blogs",
  description: "A VitePress Site",
  themeConfig: {
    // 侧边栏-目录设置
    outlineTitle: '目录',
    //outline: 'deep',
    outline: [2, 6],
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
    }],
    // 底部配置
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Evan You'
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