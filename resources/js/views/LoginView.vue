<script lang="ts" setup>
import AuthLayout from '@/js/layouts/AuthLayout.vue';
import LoginForm from '../components/auth/LoginForm.vue';
import BaseCard from '../components/BaseCard.vue';
import InvolveHubTextLogo from '../components/logos/InvolveHubTextLogo.vue';
</script>
<template>
    <AuthLayout>
        <BaseCard
            class="!w-130 !p-6 sm:!p-14 !text-surface-700 dark:!text-surface-400"
        >
            <template #header>
                <div class="w-full flex flex-col items-center justify-center">
                    <InvolveHubTextLogo class="w-60 h-auto max-w-full" />
                    <h1 class="text-center text-lg font-semibold mt-6">
                        Super Admin
                    </h1>
                    <h2 class="text-center text-base font-normal">
                        Sign in to InvolveHub
                    </h2>
                </div>
            </template>
            <LoginForm />
        </BaseCard>
    </AuthLayout>
</template>
