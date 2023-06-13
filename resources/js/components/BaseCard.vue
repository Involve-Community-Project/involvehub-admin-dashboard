<template>
    <div
        class="transition-colors-500 bg-surface-50 text-surface-900 rounded-xl flex flex-col items-center justify-center w-auto h-auto max-w-full p-4 dark:bg-surface-800 dark:text-surface-50"
    >
        <div class="card-header w-full">
            <slot name="header"></slot>
        </div>
        <div class="card-body w-full">
            <slot></slot>
        </div>
        <div class="card-footer w-full">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
