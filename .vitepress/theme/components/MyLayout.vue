<!-- .vitepress/theme/MyLayout.vue -->
<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide, ref, onMounted } from 'vue'
import backtotop from "./backtotop.vue"
import { hashSync, compareSync } from 'bcryptjs'

// 密码验证逻辑
const showPasswordModal = ref(false)
const inputPassword = ref('')
const isAuthenticated = ref(false)
const errorMessage = ref('')
const showSuccess = ref(false)

const tryCount = ref(0)
const lastFailedTime = ref(0)
const isLocked = ref(false)
const remainingTime = ref(0)

// 生成哈希密码 (只需运行一次)
// console.log(hashSync("xxx", 10)) // 保存这个结果到hashedPassword

// 从环境变量获取密码（需在vite.config.ts中配置）
const hashedPassword = import.meta.env.VITE_SITE_PASSWORD || 'default_password'
//console.log(hashedPassword)

// 预先使用 hashSync("xxx", 10) 生成的哈希值
// 这个值应该从环境变量获取，这里为了演示直接写死
// const hashedPassword = 'xxx'

onMounted(() => {
  tryCount.value = Number(sessionStorage.getItem('try_count')) || 0
  checkLockStatus()

  if (sessionStorage.getItem('vp_authenticated') === 'true') {
    isAuthenticated.value = true
  } else {
    showPasswordModal.value = true
  }
})

const verifyPassword = () => {
  if (isLocked.value) return

  try {
    if (compareSync(inputPassword.value, hashedPassword)) {
      // 验证成功
      sessionStorage.setItem('vp_authenticated', 'true')
      sessionStorage.removeItem('try_count')
      sessionStorage.removeItem('last_failed_time')
      isAuthenticated.value = true
      showSuccess.value = true

      // 显示成功提示2秒后隐藏
      setTimeout(() => {
        showSuccess.value = false
        showPasswordModal.value = false
      }, 2000)
    } else {
      // 验证失败
      tryCount.value++
      sessionStorage.setItem('try_count', tryCount.value.toString())

      if (tryCount.value >= MAX_ATTEMPTS) {
        lastFailedTime.value = Date.now()
        sessionStorage.setItem('last_failed_time', lastFailedTime.value.toString())
        isLocked.value = true
        startCooldownTimer()
      }

      errorMessage.value = tryCount.value < MAX_ATTEMPTS
        ? `密码错误，请重试 (剩余 ${MAX_ATTEMPTS - tryCount.value} 次尝试)`
        : '尝试次数过多，请10分钟后再试'

      inputPassword.value = ''
      setTimeout(() => errorMessage.value = '', 3000)
    }
  } catch (error) {
    console.error('密码验证出错:', error)
    errorMessage.value = '验证过程中出现错误'
    setTimeout(() => errorMessage.value = '', 3000)
  }
}

// 最大尝试次数和冷却时间（毫秒）
const MAX_ATTEMPTS = 5
const COOLDOWN_DURATION = 10 * 60 * 1000 // 10分钟

// 检查锁定状态
const checkLockStatus = () => {
  const now = Date.now()
  const storedTime = Number(sessionStorage.getItem('last_failed_time') || 0)

  if (storedTime && (now - storedTime) < COOLDOWN_DURATION) {
    isLocked.value = true
    lastFailedTime.value = storedTime
    updateRemainingTime()
    startCooldownTimer()
  }
}

// 更新剩余时间
const updateRemainingTime = () => {
  const now = Date.now()
  remainingTime.value = Math.ceil((COOLDOWN_DURATION - (now - lastFailedTime.value)) / 1000)
}

// 冷却计时器
const startCooldownTimer = () => {
  const timer = setInterval(() => {
    updateRemainingTime()
    if (remainingTime.value <= 0) {
      clearInterval(timer)
      isLocked.value = false
      tryCount.value = 0
    }
  }, 1000)
}

// 原有主题切换逻辑
const { isDark } = useData()

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )
})
</script>

<template>
  <!-- 密码模态框 -->
  <div v-if="showPasswordModal" class="password-modal">
    <div class="modal-backdrop"></div>
    <div class="modal-container">
      <div class="modal-content">
        <!-- 成功提示 -->
        <div v-if="showSuccess" class="success-message">
          <svg class="checkmark" viewBox="0 0 52 52">
            <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
            <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
          <h3>登录成功！</h3>
          <p>正在为您跳转...</p>
        </div>

        <!-- 锁定状态 -->
        <div v-else-if="isLocked" class="locked-message">
          <svg class="lock-icon" viewBox="0 0 24 24">
            <path d="M12 15a2 2 0 100-4 2 2 0 000 4z" />
            <path
              d="M19 11h-1V7a7 7 0 00-14 0v4H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM7 7a5 5 0 0110 0v4H7V7z" />
          </svg>
          <h3>尝试次数过多</h3>
          <p>请等待 {{ Math.floor(remainingTime / 60) }} 分 {{ remainingTime % 60 }} 秒后再试</p>
        </div>

        <!-- 密码输入表单 -->
        <div v-else>
          <!-- <div class="lock-icon">🔒</div> -->
          <div class="lock-icon">
            <svg t="1748927654348" class="icon" viewBox="0 0 1085 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="2767" width="64" height="64">
              <path
                d="M830.533293 1015.376842a80.872902 80.872902 0 0 0 81.334857-81.357955V89.049504A80.872902 80.872902 0 0 1 993.203008 7.699248H235.31982A80.872902 80.872902 0 0 0 153.984962 89.049504V1016.300752h676.548331v-0.92391z"
                fill="#FFFFFF" p-id="2768"></path>
              <path
                d="M996.567579 7.699248c-45.286977 0-81.327158 36.117173-81.327158 81.504241v112.994165H1077.894737V89.203489C1077.894737 43.808722 1040.930647 7.699248 996.567579 7.699248z m-148.795669 1008.601504H89.026406C43.739429 1016.300752 7.699248 980.183579 7.699248 934.796511v-50.014316h758.745504v50.014316c0 45.387068 36.971789 81.504241 81.327158 81.504241zM534.481805 755.119158c-100.736962 0-182.06412-58.344902-182.064121-159.297444v64.827669c0 100.952541 81.327158 159.297444 182.064121 159.297444 100.729263 0 182.056421-58.344902 182.056421-159.297444v-64.827669c0 100.020932-81.327158 159.297444-182.056421 159.297444z m236.590195-619.604692c0 14.813353-12.942436 27.778887-27.732692 27.778887H325.616602c-15.706466 0-27.724992-12.965534-27.724993-27.778887 0-14.821053 12.010827-27.794286 27.717293-27.794286h417.730406c14.790256 0 27.732692 12.049323 27.732692 27.794286z"
                fill="#C7CAC7" p-id="2769"></path>
              <path
                d="M716.030075 461.954887v132.81203C716.030075 696.01203 635.211068 754.526316 535.097744 754.526316S354.165414 696.01203 354.165414 594.766917V461.954887h361.864661z"
                fill="#F65D4F" p-id="2770"></path>
              <path
                d="M492.75188 573.593985a42.338165 42.338165 0 1 0 84.691729 0 42.338165 42.338165 0 1 0-84.691729 0z"
                fill="#FFFFFF" p-id="2771"></path>
              <path
                d="M995.204812 0H237.960662c-49.806436 0-90.389173 40.55194-90.389173 90.327579v783.436992H9.223699c-5.535759 0-9.223699 3.68794-9.223699 9.216v49.77564c0 49.76794 40.582737 90.31988 90.389173 90.319879h62.718075c0.92391 0.92391 2.771729 0.92391 3.695639 0.92391h676.070978c3.695639 0 8.299789 0 11.987729-0.92391h2.771729c1.84782 0 2.76403-0.92391 4.61185-0.92391 40.575038-8.29209 71.017865-45.15609 71.017865-88.479759V211.067188h153.107248c5.535759 0 9.223699-3.68794 9.223699-9.216V90.327579C1085.593985 40.55194 1045.011248 0 995.204812 0zM166.018887 1003.72018H89.465263c-39.658827 0-71.941774-32.25985-71.941774-71.887879v-40.559639h738.796752v40.559639c0 29.48812 13.835549 55.303699 35.970887 71.887879H166.018887z m737.872842-70.963969c0 35.94009-25.823278 65.443609-60.870255 70.963969-37.818707-1.84782-69.177744-33.183759-69.177745-71.887879v-49.775639c0-5.52806-3.695639-9.216-9.223699-9.216H166.018887V89.403669c0-39.635729 32.282947-71.88788 71.941775-71.88788h702.825864l-0.923909 0.92391c-1.84782 0.916211-2.771729 2.756331-4.61185 3.680241-0.92391 0.92391-1.84782 1.84782-2.771729 1.847819l-5.528061 5.528061c0 0.92391-0.92391 0.92391-0.923909 1.847819-1.84782 2.756331-3.68794 4.60415-5.53576 7.368181-0.92391 0.92391-0.92391 1.84782-1.847819 2.76403-0.916211 1.84782-2.756331 3.68794-3.680241 5.52806-0.92391 0.92391-0.92391 1.84782-1.847819 2.771729l-2.77173 5.52806c-0.92391 0.92391-0.92391 2.76403-0.92391 3.68794-0.916211 1.84012-0.916211 3.680241-1.84012 5.52806 0 0.92391-0.92391 2.76403-0.92391 3.68794-0.92391 1.84782-0.92391 4.60415-0.923909 6.45197 0 0.92391 0 1.84782-0.916211 2.76403 0 3.68794-0.92391 6.45197-0.92391 10.13991v845.192662z m163.254857-740.128722h-143.883548V90.335278c0-39.635729 32.282947-71.895579 71.941774-71.895579s71.941774 32.25985 71.941774 71.895579V192.635188z"
                fill="#000000" p-id="2772"></path>
              <path
                d="M715.814496 454.732992h-31.566917v-57.821353C684.23988 314.298707 616.440301 246.37594 531.925654 246.37594c-83.583038 0-152.306526 67.006556-152.306526 150.535699v57.821353h-31.566917c-5.581955 0-9.292992 3.672541-9.292993 9.177504v131.256782C338.766917 693.394286 417.707308 762.225564 531.009444 762.225564c113.294436 0 192.234827-68.838977 192.234827-167.058286V463.910496c1.855519-5.504962-1.855519-9.177504-7.429775-9.177504z m-316.685473-57.821353c0-72.519218 59.438195-132.180692 133.735939-132.180692 74.297744 0 133.73594 58.745263 133.73594 132.180692v57.821353h-34.369443v-57.821353c0-54.156511-44.578647-98.219308-99.366497-98.219308-54.795549 0-99.374195 44.062797-99.374195 98.219308v57.821353h-33.430135v-57.821353h-0.92391z m214.531849 0v57.821353H452.069053v-57.821353c0-44.062797 36.217263-79.856602 80.795909-79.856601s80.79591 34.877594 80.79591 79.856601z m92.868331 198.255639c0 74.351639-53.86394 148.703278-173.664241 148.703278s-173.664241-74.351639-173.66424-148.703278V473.095699h347.328481v122.071579z"
                fill="#000000" p-id="2773"></path>
              <path
                d="M535.097744 520.777143a52.73985 52.73985 0 0 0-52.863037 52.662857c0 25.869474 18.555188 47.119398 43.585443 51.738947v50.815038c0 5.543459 3.711038 9.239098 9.277594 9.239098 5.566556 0 9.277594-3.695639 9.277594-9.239098v-50.815038c25.037955-4.619549 43.577744-25.869474 43.577745-51.738947 0-29.565113-24.098647-52.662857-52.855339-52.662857z m0 86.847519c-18.555188 0-34.315549-15.706466-34.315549-34.184662 0-18.478195 15.76806-34.184662 34.315549-34.184662 18.555188 0 34.315549 15.706466 34.315549 34.184662 0 18.478195-15.76806 34.184662-34.315549 34.184662zM618.557594 149.365414h18.555188c5.566556 0 9.277594-3.695639 9.277594-9.239098S642.679338 130.887218 637.112782 130.887218h-18.555188c-5.558857 0-9.269895 3.695639-9.269895 9.239098s3.711038 9.239098 9.277594 9.239098z m-92.737444 0h18.555188c5.558857 0 9.269895-3.695639 9.269895-9.239098s-3.711038-9.239098-9.269895-9.239098h-18.555188c-5.558857 0-9.269895 3.695639-9.269894 9.239098s3.711038 9.239098 9.269894 9.239098z m-157.657503-9.239098c0-5.543459-3.711038-9.239098-9.269895-9.239098h-18.555188c-5.558857 0-9.269895 3.695639-9.269895 9.239098s3.711038 9.239098 9.277594 9.239098h18.547489c5.558857 0 9.269895-4.619549 9.269895-9.239098zM729.850226 130.887218h-18.547489c-5.558857 0-9.269895 3.695639-9.269895 9.239098s3.711038 9.239098 9.269895 9.239098h18.555188c5.558857 0 9.269895-3.695639 9.269895-9.239098s-3.711038-9.239098-9.277594-9.239098zM433.082707 149.365414h18.555188c5.558857 0 9.269895-3.695639 9.269894-9.239098s-3.711038-9.239098-9.277594-9.239098H433.082707c-5.566556 0-9.277594 3.695639-9.277594 9.239098s3.711038 9.239098 9.277594 9.239098z"
                fill="#000000" p-id="2774"></path>
            </svg>
          </div>
          <h3>欢迎访问</h3>
          <p class="hint-text">请输入访问密码继续</p>

          <div class="input-group">
            <input v-model="inputPassword" type="password" placeholder="输入密码..." @keyup.enter="verifyPassword"
              class="password-input" />
            <button @click="verifyPassword" class="submit-btn">
              <span>验证</span>
              <svg class="arrow-icon" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 主内容 (仅在认证后显示) -->
  <DefaultTheme.Layout v-show="isAuthenticated">
    <template #doc-footer-before>
      <backtotop />
    </template>
  </DefaultTheme.Layout>
</template>

<style>
/* 原有样式保留 */
.check .icon {
  top: -2px;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}

/* 新增密码模态框样式 */
/* 磨砂玻璃背景 */
.password-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.modal-container {
  position: relative;
  width: 100%;
  max-width: 380px;
  padding: 2rem;
}

.modal-content {
  background: rgba(var(--vp-c-bg-soft-rgb), 0.85);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(var(--vp-c-divider-rgb), 0.1);
  text-align: center;
  animation: fadeIn 0.3s ease-out;
}

.lock-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.hint-text {
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.password-input {
  padding: 0.85rem 1.25rem;
  background: rgba(var(--vp-c-bg-alt-rgb), 0.7);
  border: 1px solid rgba(var(--vp-c-divider-rgb), 0.3);
  border-radius: 12px;
  font-size: 1rem;
  color: var(--vp-c-text-1);
  transition: all 0.2s ease;
  outline: none;
}

.password-input:focus {
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 2px rgba(var(--vp-c-brand-rgb), 0.2);
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1.5rem;
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.submit-btn:hover {
  background: var(--vp-button-brand-hover-bg);
  transform: translateY(-1px);
}

.arrow-icon {
  width: 1.25rem;
  height: 1.25rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.2s ease;
}

.submit-btn:hover .arrow-icon {
  transform: translateX(3px);
}

.error-message {
  margin-top: 1rem;
  color: var(--vp-c-red);
  font-size: 0.9rem;
  animation: shake 0.4s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shake {

  0%,
  100% {
    transform: translateX(0);
  }

  20%,
  60% {
    transform: translateX(-5px);
  }

  40%,
  80% {
    transform: translateX(5px);
  }
}

/* 成功提示样式 */
.success-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
}

.checkmark {
  width: 56px;
  height: 56px;
  margin-bottom: 1rem;
  animation: scaleIn 0.3s ease-out;
}

.checkmark-circle {
  stroke: var(--vp-c-green);
  stroke-width: 2;
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark-check {
  stroke: var(--vp-c-green);
  stroke-width: 2;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.4s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

/* 新增锁定状态样式 */
.locked-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  text-align: center;
}

.locked-message .lock-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
  fill: none;
  stroke: var(--vp-c-text-2);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.locked-message h3 {
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.locked-message p {
  color: var(--vp-c-text-2);
}

/* 禁用状态样式 */
.password-input:disabled,
.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-btn:disabled:hover {
  background: var(--vp-button-brand-bg);
  transform: none;
}

/* 适配暗黑模式 */
.dark .modal-content {
  background: rgba(var(--vp-c-bg-soft-rgb), 0.75);
  border: 1px solid rgba(var(--vp-c-divider-rgb), 0.2);
}

.dark .password-input {
  background: rgba(var(--vp-c-bg-alt-rgb), 0.5);
}
</style>