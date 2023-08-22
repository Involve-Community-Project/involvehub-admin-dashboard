<script lang="ts" setup>
import { ref, computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { login } from '../../api/auth';
import IHButton from '../atoms/IHButton.vue';

let email = ref('');
let password = ref('');
let loading = ref(false);
let error_message = ref('');

const router = useRouter();

const submitEnabled = computed(() => {
    return email.value.length > 0 && password.value.length > 0;
});

const showErrorMessage = computed(() => {
    return error_message.value.length > 0;
});

const submit = () => {
    loading.value = true;
    error_message.value = '';
    login(email.value, password.value)
        .then(async () => {
            // Current route has query redirect
            if (router.currentRoute.value.query.redirect) {
                router.push(router.currentRoute.value.query.redirect as string);
            } else {
                router.push({ name: 'dashboard' });
            }
        })
        .catch((error) => {
            console.log(error.response?.data?.message);
            error_message.value = error.response?.data?.message;
        })
        .finally(() => {
            loading.value = false;
        });
};
</script>

<template>
    <form
        @submit.prevent="submit"
        class="flex flex-col items-center justify-center w-full max-w-2xl mt-4 gap-4"
    >
        <div class="w-full">
            <input
                type="email"
                class="input"
                placeholder="Email"
                v-model="email"
                required
            />
        </div>
        <div class="w-full">
            <input
                type="password"
                class="input"
                placeholder="Password"
                v-model="password"
                required
            />
        </div>
        <div class="w-full">
            <span v-if="showErrorMessage" class="block text-error test-sm m">
                {{ error_message }}
            </span>
        </div>
        <IHButton
            type="submit"
            class="w-full"
            variant="primary"
            :disabled="!submitEnabled"
            :loading="loading"
            loading-position="cover"
        >
            Login
        </IHButton>
        <RouterLink
            to="/forgot-password"
            class="text-center text-base font-normal mt-2"
        >
            Forgot your password?
        </RouterLink>
    </form>
</template>
