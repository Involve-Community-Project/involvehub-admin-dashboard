<script lang="ts" setup></script>
<template>
    <div
        class="auth-container p-4 w-full h-full overflow-y-auto flex items-center justify-center"
    >
        <RouterView v-slot="{ Component }">
            <Transition name="fade_slide" mode="out-in" appear>
                <component :is="Component" />
            </Transition>
        </RouterView>
    </div>
</template>
<style lang="css" scoped>
.auth-container {
    @apply bg-surface-600 dark:bg-surface-900 bg-blend-luminosity bg-no-repeat bg-cover bg-center;
    background-image: url('@/assets/AuthBackground.svg');
    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity;
    transition-duration: 500ms;
}

.fade_slide-enter-active,
.fade_slide-leave-active {
    transition:
        opacity 0.35s ease-in-out,
        transform 0.35s ease-in-out;
}

.fade_slide-enter-from,
.fade_slide-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>
