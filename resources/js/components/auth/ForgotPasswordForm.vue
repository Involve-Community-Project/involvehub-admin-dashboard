<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

let email = ref('');

let submitEnabled = computed(() => {
    return email.value.length == 0;
});

const submit = () => {};

const cancel = () => {
    router.push({ name: 'login' });
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
        <button
            type="submit"
            class="btn-primary w-full mb-4"
            :disabled="submitEnabled"
        >
            Submit
        </button>
        <button
            type="button"
            class="btn-primary-outline w-full"
            @click="cancel"
        >
            Cancel
        </button>
    </form>
</template>
