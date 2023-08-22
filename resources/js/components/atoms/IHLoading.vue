<template>
    <div class="w-80 max-w-full mx-auto my-4">
        <div class="h-1 bg-primary/20 w-full overflow-hidden rounded-full">
            <div class="progress-bar-value bg-primary w-full h-full"></div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.progress-bar-value {
    animation: indeterminateAnimation 1s infinite linear;
    transform-origin: 0% 50%;
}

@keyframes indeterminateAnimation {
    0% {
        transform: translateX(0) scaleX(0);
    }
    40% {
        transform: translateX(0) scaleX(0.4);
    }
    100% {
        transform: translateX(100%) scaleX(0.5);
    }
}
</style>
