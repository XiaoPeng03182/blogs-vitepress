/* configs/nav.ts */
import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Examples",
    link: "/markdown-examples",
  },
  {
    text: "Java基础学习",
    items: [
      {
        text: "Java集合",
        link: "/java/collection",
      },
      {
        text: "IO流",
        link: "/java/IO",
      },
    ],
  },

  {
    text: "中间件",
    items: [
      {
        text: "RabbitMQ",
        link: "/backend/rabbitmq/MQ-Local.md",
      },
    ],
  },
  {
    text: "示例文档",
    collapsed: false, // true默认展开,false:折叠
    items: [
      {
        text: "api-examples",
        link: "/backend/example/api-examples.md",
      },
      {
        text: "markdown-examples",
        link: "/backend/example/markdown-examples.md",
      },
    ],
  },
  {
    text: "Linux学习",
    link: "/linux-learning/Linux-Learning-Local.md",
  },
];
