<script setup lang="ts"></script>

<template>
    <div class="panel">
        <div class="container">
            <section class="grid">
                <span class="text">
                    本站总访问量
                    <span id="busuanzi_value_site_pv" class="font-bold">--</span> 次
                </span>
                <img src="/public/svg/访问量.svg" alt="view" width="100" height="100" />
                <span class="text">
                    本站访客数
                    <span id="busuanzi_value_site_uv" class="font-bold">--</span> 人次
                </span>
            </section>
        </div>
    </div>
</template>

<style scoped>
/* 白天模式 */
.panel {
    margin-top: 100px;
    margin-bottom: 100px;
}

.container {
    border-radius: 8px;
    width: 100%;
    min-height: 32px;
    max-width: 1152px;
    margin: 0 auto;
    box-shadow: 0 5px 15px rgba(82, 79, 79, 0.1);
}

/* 夜间模式适配 */
:deep([data-theme="dark"]) .container {
    background: #1a1a1a; /* Vitepress 暗色背景 */
    border: 1px solid #333; /* 深色边框 */
    box-shadow: 0 1px 2px rgba(255, 255, 255, 0.05);
}


.text {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: inherit; /* 继承文字颜色 */
}

/* 全局文字颜色适配 */
:deep([data-theme="dark"]) .text {
    color: rgba(255, 255, 255, 0.8);
}

.grid {
    font-weight: 500;
    padding: 12px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: center;
    justify-items: center;
}
</style>