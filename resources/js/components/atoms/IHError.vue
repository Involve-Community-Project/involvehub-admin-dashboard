<script lang="ts" setup>
import { useRouter } from 'vue-router';
import IHButton from './IHButton.vue';
import {
    IconErrorOutline,
    IconForwardMediaRounded,
} from '@iconify-prerendered/vue-material-symbols';
import type { PropType } from 'vue';

const router = useRouter();

defineProps({
    error: {
        type: Error as PropType<Error>,
        default: () => new Error('Unknown error'),
    },
});

const reload = () => {
    router.go(0);
};
</script>
<template>
    <div
        class="@container w-130 max-w-full m-auto bg-surface-50 dark:bg-surface-900 rounded-lg p-4 flex flex-col gap-4 outline-offset-4 outline-dashed outline-error"
    >
        <div
            class="w-full flex flex-col-reverse justify-between text-error @sm:items-end @sm:flex-row @sm:gap-4"
        >
            <div>
                <h1 class="text-2xl break-all">{{ error.name ?? 'Error' }}</h1>
            </div>
            <IconErrorOutline
                class="w-12 h-12 shrink-0 self-end @sm:self-center"
            />
        </div>
        <p>{{ error.message ?? 'An unknown error occurred.' }}</p>
        <div class="flex flex-col-reverse justify-end gap-2 @sm:flex-row">
            <RouterLink
                class="btn btn-link text-center"
                :to="{ name: 'dashboard' }"
            >
                Return to home
            </RouterLink>
            <IHButton @click="reload">
                <template #icon>
                    <IconForwardMediaRounded />
                </template>
                <span>Reload page</span>
            </IHButton>
        </div>
    </div>
</template>
