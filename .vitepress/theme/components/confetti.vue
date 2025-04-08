<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import confetti from 'canvas-confetti'
import { inBrowser } from 'vitepress'

// 纸屑效果（只触发一次）
const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 170,
    origin: { y: 0.6 }
  })
}

// 雪花动画控制
let snowAnimationFrame: number | null = null
let stopTimer: number | null = null
let skew = 1

const randomInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}

// 启动雪花循环（持续1分钟）
const startSnow = () => {
  let lastSnowTime = 0
  const snowInterval = 150 // 每1.5秒生成一个雪花（每分钟约40个）

  const frame = () => {
    const now = performance.now()
    skew = Math.max(0.8, skew - 0.001)
    
    // 控制生成间隔
    if (now - lastSnowTime >= snowInterval) {
      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: 200,
        origin: {
          x: Math.random(),
          y: (Math.random() * skew) - 0.2
        },
        colors: ['#ffffff'],
        shapes: ['circle'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4)
      })
      lastSnowTime = now
    }

    snowAnimationFrame = requestAnimationFrame(frame)
  }

  snowAnimationFrame = requestAnimationFrame(frame)

  // 设置1分钟后自动停止
  stopTimer = window.setTimeout(() => {
    stopSnow()
  }, 300000)
}

// 停止雪花循环
const stopSnow = () => {
  if (snowAnimationFrame) {
    cancelAnimationFrame(snowAnimationFrame)
    snowAnimationFrame = null
  }
  if (stopTimer) {
    clearTimeout(stopTimer)
    stopTimer = null
  }
}

onMounted(() => {
  if (inBrowser) {
    triggerConfetti()
    startSnow()
  }
})

onBeforeUnmount(() => {
  stopSnow()
})
</script>