<script setup>
import { onMounted, ref, watchEffect } from 'vue'

const tocContainer = ref(null)
const activeItem = ref(null)
const expandedItems = ref(new Set())

// 展开父级目录
function expandParents(hash) {
  const items = tocContainer.value.querySelectorAll('.outline-item')
  items.forEach(item => {
    const link = item.querySelector('.outline-link')
    if (link?.getAttribute('href') === hash) {
      let parent = item.closest('.outline-item[data-has-children]')
      while (parent) {
        parent.setAttribute('data-expanded', 'true')
        expandedItems.value.add(parent.dataset.id)
        parent = parent.closest('.outline-item[data-has-children]')
      }
    }
  })
}

// 折叠非活跃目录
function collapseInactive() {
  const items = tocContainer.value.querySelectorAll('.outline-item[data-has-children]')
  items.forEach(item => {
    if (!expandedItems.value.has(item.dataset.id)) {
      item.setAttribute('data-expanded', 'false')
    }
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const hash = `#${entry.target.id}`
          activeItem.value = hash
          expandParents(hash)
          scrollToActiveItem()
        } else {
          // 延迟折叠以避免闪烁
          setTimeout(() => {
            const currentActive = tocContainer.value.querySelector('.outline-link.active')
            if (!currentActive || currentActive.getAttribute('href') !== `#${entry.target.id}`) {
              expandedItems.value.delete(entry.target.id)
              collapseInactive()
            }
          }, 300)
        }
      })
    },
    {
      rootMargin: '0px 0px -70% 0px',
      threshold: 0.1
    }
  )

  // 观察所有标题
  document.querySelectorAll('h2, h3, h4, h5, h6').forEach(heading => {
    if (!heading.id) {
      heading.id = heading.textContent
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '')
    }
    observer.observe(heading)
  })

  // 点击目录项时展开
  tocContainer.value?.addEventListener('click', (e) => {
    const item = e.target.closest('.outline-item[data-has-children]')
    if (item) {
      const isExpanded = item.getAttribute('data-expanded') === 'true'
      item.setAttribute('data-expanded', isExpanded ? 'false' : 'true')
    }
  })
})

function scrollToActiveItem() {
  if (!tocContainer.value || !activeItem.value) return
  
  const activeElement = tocContainer.value.querySelector(`.outline-link[href="${activeItem.value}"]`)
  if (activeElement) {
    // 计算偏移量确保居中
    const containerRect = tocContainer.value.getBoundingClientRect()
    const elementRect = activeElement.getBoundingClientRect()
    const scrollTop = elementRect.top - containerRect.top - (containerRect.height / 2) + (elementRect.height / 2)
    
    tocContainer.value.scrollTo({
      top: tocContainer.value.scrollTop + scrollTop,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <div class="toc-auto-scroll" ref="tocContainer">
    <slot />
  </div>
</template>

<style scoped>
.toc-auto-scroll {
  max-height: calc(100vh - var(--vp-nav-height) - 64px);
  overflow-y: auto;
  position: sticky;
  top: calc(var(--vp-nav-height) + 32px);
  scroll-behavior: smooth;
}
</style>