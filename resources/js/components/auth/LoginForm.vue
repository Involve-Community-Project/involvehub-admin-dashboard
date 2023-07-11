<script lang="ts" setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { login } from '../../api/auth';
import IHButton from '../atoms/IHButton.vue';

let email = ref('');
let password = ref('');
let loading = ref(false);

let submitEnabled = computed(() => {
    return email.value.length > 0 && password.value.length > 0;
});

const submit = (event: Event) => {
    console.log('submit');
    console.log(event);
    console.log(email, password);

    loading.value = true;
    login(email.value, password.value)
        .then((response) => {
            console.log(response);
            // router.push({ name: 'dashboard' });
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log('finally');
            loading.value = false;
        });
};
</script>

<template>
    <form
        @submit.prevent="submit"
        class="flex flex-col items-center justify-center w-full max-w-2xl mt-4"
    >
        <input
            type="email"
            class="input peer mb-4"
            placeholder="Email"
            v-model="email"
            required
        />
        <input
            type="password"
            class="input mb-4"
            placeholder="Password"
            v-model="password"
            required
        />
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
