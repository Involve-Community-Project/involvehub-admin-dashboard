<script lang="ts" setup>
import ForgotPasswordFormVue from '../components/auth/ForgotPasswordForm.vue';
import BaseCard from '../components/BaseCard.vue';
import InvolveHubTextLogo from '../components/logos/InvolveHubTextLogo.vue';
</script>
<template>
    <BaseCard
        class="!w-130 !p-6 sm:!p-14 !text-surface-700 dark:!text-surface-400"
    >
        <template #header>
            <div class="w-full flex flex-col items-center justify-center">
                <InvolveHubTextLogo class="w-60 h-auto max-w-full" />
                <h1 class="text-center text-lg font-semibold mt-6">
                    Forget Password
                </h1>
                <h2 class="text-center text-base font-normal">
                    Please enter the email address
                </h2>
            </div>
        </template>
        <ForgotPasswordFormVue />
    </BaseCard>
</template>
