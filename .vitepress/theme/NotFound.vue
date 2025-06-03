<script setup>
import { useRouter } from 'vitepress'

const router = useRouter()

// 自动返回首页
setTimeout(() => router.go('/'), 3000)
</script>

<template>
  <div class="not-found">
    <h1>未授权访问</h1>
    <p>即将跳转到首页...</p>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 2rem;
}
</style>