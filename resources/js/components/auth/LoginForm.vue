<script lang="ts" setup>
import { ref, computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();

let email = ref('');
let password = ref('');

let submitEnabled = computed(() => {
    return email.value.length == 0 || password.value.length == 0;
});

const submit = (event: Event) => {
    console.log('submit');
    console.log(event);
    console.log(email, password);

    router.push({ name: 'dashboard' });
};
</script>

<template>
    <form
        @submit.prevent="submit"
        class="flex flex-col items-center justify-center w-full max-w-2xl mt-4"
    >
        <input
            type="text"
            class="input mb-4"
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
        <button
            type="submit"
            class="btn btn-primary w-full"
            :disabled="submitEnabled"
        >
            Login
        </button>
        <RouterLink
            to="/forgot-password"
            class="text-center text-base font-normal mt-2"
        >
            Forgot your password?
        </RouterLink>
    </form>
</template>
