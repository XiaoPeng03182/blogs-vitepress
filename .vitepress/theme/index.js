// https://vitepress.dev/guide/custom-theme
import {
  h
} from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import {
  watch
} from 'vue'
import update from "./components/update.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"

import mediumZoom from 'medium-zoom';
import {
  onMounted,
  nextTick
} from 'vue';
import {
  useRoute
} from 'vitepress';

import confetti from "./components/confetti.vue"


import MyLayout from './components/MyLayout.vue'

import { inBrowser } from "vitepress";
import busuanzi from "busuanzi.pure.js";
import DataPanel from "./components/DataPanel.vue";

// import {
//   NolebaseHighlightTargetedHeading
// } from '@nolebase/vitepress-plugin-highlight-targeted-heading'
// import {
//   NolebaseEnhancedReadabilitiesPlugin,
//   NolebaseEnhancedReadabilitiesMenu,
//   NolebaseEnhancedReadabilitiesScreenMenu
// } from '@nolebase/vitepress-plugin-enhanced-readabilities'

import './custom.css'

import TocAutoScroll from './components/TocAutoScroll.vue'


// .vitepress/theme/index.js
import InteractiveSeparator from './components/InteractiveSeparator.vue'


// 彩虹背景动画样式
let homePageStyle

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,


  //添加自定义布局组件
  Layout: () => {
    return h(MyLayout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'aside-outline-before': () => h(TocAutoScroll)
    })
    // return h(MyLayout) 
  },

  setup() {
    const route = useRoute()
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }) // 默认
      mediumZoom('.main img', {
        background: 'var(--vp-c-bg)'
      }) // 为所有 .main 下的图片启用缩放
    }

    onMounted(() => {
      initZoom()
    })

    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },

  enhance({
    app
  }) {
    // 注册高亮插件
    // app.use(NolebaseHighlightTargetedHeading)

    // 注册增强可读性插件
    // app.use(NolebaseEnhancedReadabilitiesPlugin)
    // app.use(NolebaseEnhancedReadabilitiesMenu)
    // app.use(NolebaseEnhancedReadabilitiesScreenMenu)
  },


  enhanceApp({
    app,
    router,
    siteData
  }) {
    // 注册全局组件
    app.component('update', update)
    app.component('ArticleMetadata', ArticleMetadata)
    app.component('confetti', confetti)

    app.component('TocAutoScroll', TocAutoScroll)
    app.component('InteractiveSeparator', InteractiveSeparator)

    app.component("DataPanel", DataPanel);//注册全局组件

    // 统计访问量
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
    
    // 彩虹背景动画样式
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'), {
          immediate: true
        }
      )
    }
  }
}

// 彩虹背景动画样式
function updateHomePageStyle(value) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}