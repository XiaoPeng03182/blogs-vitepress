<template>
    <!-- 外层容器添加了内边距、圆角以及边框 -->
    <div class="ball-container"
         @mousemove="handleMouseMove"
         @mouseleave="handleMouseLeave"
         ref="container">
      <!-- 渲染所有气泡 -->
      <div v-for="(ball, index) in balls" :key="index" class="balloon"
           :style="{
             width: ball.size + 'px',
             height: ball.size + 'px',
             transform: `translate(${ball.x}px, ${ball.y}px)`
           }"></div>
      <!-- 鼠标指示器 -->
      <div class="mouse-indicator" 
           :style="{ left: (mouse.x - 5) + 'px', top: (mouse.y - 5) + 'px' }"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
  
  /* -----------------------
     1. 气泡物理模拟相关
  ----------------------- */
  // 保存鼠标在容器内的位置
  const mouse = reactive({ x: 0, y: 0 })
  const containerRect = ref({ width: 0, height: 0 })
  
  // 存储所有气泡的信息（位置、速度、尺寸）
  const balls = reactive([])
  
  // 配置参数
  const numBalls = 20                 // 气泡数量
  // 移除 buoyancy 效果（即气泡不再持续上浮）
  // 这里我们通过添加随机漂移（drift）让气泡随机运动
  const friction = 0.99               // 摩擦系数
  const repelForce = 1                // 鼠标靠近时产生的排斥力度
  const drift = 0.1                   // 随机漂移系数，每帧随机添加一定加速度
  const margin = 20                   // 容器内边距，防止气泡与容器四壁过于接近
  
  // 初始化气泡：随机分布在容器内预留边距区域
  const initBalls = () => {
    balls.length = 0
    const effectiveWidth = containerRect.value.width - 2 * margin
    const effectiveHeight = containerRect.value.height - 2 * margin
    for (let i = 0; i < numBalls; i++) {
      balls.push({
        // x/y 坐标在有效区域内随机生成
        x: margin + Math.random() * effectiveWidth,
        y: margin + Math.random() * effectiveHeight,
        vx: 0,
        vy: 0,
        size: 20 + Math.random() * 10  // 尺寸在20~30px之间
      })
    }
  }
  
  // 每帧更新气泡位置、速度及边界碰撞
  let animationFrame
  const updateBalls = () => {
    balls.forEach(ball => {
      // 随机漂移：每帧添加一个小的随机加速度
      ball.vx += (Math.random() - 0.5) * drift
      ball.vy += (Math.random() - 0.5) * drift
  
      // 鼠标排斥：当气泡与鼠标距离小于100px时施加排斥力
      const dx = (ball.x + ball.size / 2) - mouse.x
      const dy = (ball.y + ball.size / 2) - mouse.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 100) {
        const angle = Math.atan2(dy, dx)
        const force = ((100 - dist) / 100) * repelForce
        ball.vx += Math.cos(angle) * force
        ball.vy += Math.sin(angle) * force
      }
  
      // 更新位置
      ball.x += ball.vx
      ball.y += ball.vy
  
      // 应用摩擦减速
      ball.vx *= friction
      ball.vy *= friction
  
      // 边界碰撞检测（考虑容器内边距 margin）
      if (ball.x < margin) {
        ball.x = margin
        ball.vx *= -1
      }
      if (ball.x + ball.size > containerRect.value.width - margin) {
        ball.x = containerRect.value.width - margin - ball.size
        ball.vx *= -1
      }
      if (ball.y < margin) {
        ball.y = margin
        ball.vy *= -1
      }
      if (ball.y + ball.size > containerRect.value.height - margin) {
        ball.y = containerRect.value.height - margin - ball.size
        ball.vy *= -1
      }
    })
    animationFrame = requestAnimationFrame(updateBalls)
  }
  
  /* -----------------------
     2. 鼠标事件处理：更新鼠标在容器中的位置
  ----------------------- */
  const container = ref(null)
  const handleMouseMove = (e) => {
    const rect = container.value.getBoundingClientRect()
    containerRect.value = { width: rect.width, height: rect.height }
    mouse.x = e.clientX - rect.left
    mouse.y = e.clientY - rect.top
  }
  const handleMouseLeave = () => {
    // 鼠标离开时，将鼠标坐标设置为远离容器的值，避免影响气泡运动
    mouse.x = -1000
    mouse.y = -1000
  }
  
  onMounted(() => {
    containerRect.value = container.value.getBoundingClientRect()
    initBalls()
    updateBalls()
  })
  onBeforeUnmount(() => {
    cancelAnimationFrame(animationFrame)
  })
  </script>
  
  <style scoped>
  /* 外层容器：设置内边距、圆角、边框，背景透明 */
  .ball-container {
    margin: 50px 0;
    padding: 20px;
    position: relative;
    width: 100%;
    height: 400px;
    background: transparent;
    overflow: hidden;
    cursor: default;
    border-radius: 20px;
    border: 1px solid rgba(122, 116, 116, 0.2);
  }
  
  /* 气泡样式：采用较透明的灰白渐变效果 */
  .balloon {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(196, 234, 220, 0.7) 0%, rgba(200,200,200,0.3) 70%);
    pointer-events: none;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  }
  
  /* 鼠标位置指示器 */
  .mouse-indicator {
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(255,255,255,0.8);
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 50%;
    pointer-events: none;
  }
  </style>
  