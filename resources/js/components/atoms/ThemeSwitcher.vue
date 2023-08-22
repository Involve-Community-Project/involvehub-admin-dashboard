<script lang="ts" setup>
import {
    IconDarkModeOutline,
    IconLightModeOutline,
} from '@iconify-prerendered/vue-material-symbols';
import { computed, ref, watchEffect } from 'vue';
import IHButton from './IHButton.vue';

const theme = ref('light'); // reactive data property

const setTheme = (newTheme: 'light' | 'dark') => {
    theme.value = newTheme;
    const html = document.querySelector('html');
    if (newTheme === 'dark') {
        html?.classList.add('dark');
    } else {
        html?.classList.remove('dark');
    }
};

watchEffect(() => {
    const html = document.querySelector('html');
    if (html?.classList.contains('dark')) {
        theme.value = 'dark';
    } else {
        theme.value = 'light';
    }
});

const currentTheme = computed(() => theme.value);
</script>

<template>
    <div class="w-full flex rounded-md gap-[2px]" role="group">
        <IHButton
            class="w-full !rounded-l-md !rounded-r-none base-outline !outline-primary/50 dark:!outline-primary/20"
            :variant="currentTheme === 'light' ? 'primary' : 'text'"
            @click="setTheme('light')"
        >
            <IconLightModeOutline class="w-auto h-6 font-bold" />
            <span>Light</span>
        </IHButton>
        <IHButton
            class="w-full !rounded-r-md !rounded-l-none base-outline !outline-primary/50 dark:!outline-primary/20"
            :variant="currentTheme === 'dark' ? 'primary' : 'text'"
            @click="setTheme('dark')"
        >
            <IconDarkModeOutline class="w-auto h-6 font-bold" />
            <span>Dark</span>
        </IHButton>
    </div>
</template>
