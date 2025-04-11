<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import confetti from 'canvas-confetti'
import { inBrowser } from 'vitepress'

if (inBrowser) {

/* 纸屑 */
confetti({
    particleCount: 100,
    spread: 170,
    origin: { y: 0.6 },
})
}

// 配置参数
const props = withDefaults(defineProps<{
  loopSnow?: boolean      // 是否循环播放
  loopDuration?: number   // 循环持续时间(ms)
}>(), {
  loopSnow: true,
  loopDuration: 300000    // 默认5分钟
})

// 动画控制状态
const snowAnimationFrame = ref<number | null>(null)
const stopTimer = ref<number | null>(null)
let skew = 1

const randomInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}

// 启动雪花动画
const startSnow = () => {
  let lastSnowTime = 0
  const snowInterval = 60 // 雪花生成间隔(ms)

  const frame = () => {
    const now = performance.now()
    skew = Math.max(0.8, skew - 0.001)
    
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

    snowAnimationFrame.value = requestAnimationFrame(frame)
  }

  snowAnimationFrame.value = requestAnimationFrame(frame)

  // 配置循环逻辑
  if (props.loopSnow) {
    stopTimer.value = window.setTimeout(() => {
      stopSnow()
      if (props.loopSnow) startSnow() // 循环重启
    }, props.loopDuration)
  }
}

// 停止动画
const stopSnow = () => {
  if (snowAnimationFrame.value) {
    cancelAnimationFrame(snowAnimationFrame.value)
    snowAnimationFrame.value = null
  }
  if (stopTimer.value) {
    clearTimeout(stopTimer.value)
    stopTimer.value = null
  }
}

onMounted(() => {
  if (inBrowser) {
    startSnow()
  }
})

onBeforeUnmount(() => {
  stopSnow()
})
</script>