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


// 彩虹背景动画样式
let homePageStyle

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,

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


  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },

  enhanceApp({
    app,
    router,
    siteData
  }) {
    // 注册全局组件
    app.component('update', update)
    app.component('ArticleMetadata', ArticleMetadata)
    app.component('confetti' , confetti)

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