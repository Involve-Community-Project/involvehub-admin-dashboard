<script lang="ts" setup>
import { ref } from 'vue';
import IHModal from './IHModal.vue';
import IHButton from '../components/atoms/IHButton.vue';
import { editUserContactInfo } from '../api/user';
import { useUserStore } from '../store/user';

const userStore = useUserStore();

const name = ref(userStore.user.name as string);
const email = ref(userStore.user.email as string);
const loading = ref(false);
const done = ref(false);
const errors = ref({} as Record<string, string[]>);

const handleSubmit = async () => {
    loading.value = true;
    errors.value = {};

    // await new Promise((resolve) => setTimeout(resolve, 10000));

    await editUserContactInfo(name.value, email.value)
        .then(async () => {
            done.value = true;
            await userStore.fetchUser();
        })
        .catch((error) => {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        })
        .finally(() => {
            loading.value = false;
        });
};
</script>
<template>
    <IHModal class="w-100" @onClose="done = false">
        <template #header="{}">
            <template></template>
        </template>
        <template #default="{ closeDialog }">
            <Transition name="fade" mode="out-in" appear>
                <div class="w-full" v-if="!done">
                    <h1 class="text-2xl font-semibold">
                        Edit Contact Information
                    </h1>
                    <form
                        id="edit-contact-form"
                        @submit.prevent="handleSubmit()"
                        class="flex flex-col items-center justify-center w-full mt-4 transition-colors-500"
                    >
                        <label class="self-start font-semibold">Name</label>
                        <div class="w-full mb-4">
                            <input
                                type="text"
                                class="input"
                                placeholder="Name"
                                v-model="name"
                                :disabled="loading"
                                required
                            />
                            <div class="w-full" v-if="errors.name?.length > 0">
                                <p
                                    class="text-xs text-error leading-6 w-full text-left"
                                    v-for="error in errors.name"
                                    :key="error"
                                >
                                    {{ error }}
                                </p>
                            </div>
                        </div>
                        <label class="self-start font-semibold">Email</label>
                        <div class="w-full mb-4">
                            <input
                                type="email"
                                class="input"
                                placeholder="e-mial"
                                v-model="email"
                                :disabled="loading"
                                required
                            />
                            <div class="w-full" v-if="errors.email?.length > 0">
                                <p
                                    class="text-xs text-error leading-6 w-full text-left"
                                    v-for="error in errors.email"
                                    :key="error"
                                >
                                    {{ error }}
                                </p>
                            </div>
                        </div>
                        <div
                            class="w-full flex justify-between gap-4 flex-col sm:flex-row"
                        >
                            <IHButton
                                class="w-full"
                                type="reset"
                                @click="closeDialog()"
                                variant="text"
                                :disabled="loading"
                                autofocus
                            >
                                Cancel
                            </IHButton>
                            <IHButton
                                class="w-full"
                                type="submit"
                                form="edit-contact-form"
                                :loading="loading"
                            >
                                Save
                            </IHButton>
                        </div>
                    </form>
                </div>
                <div
                    v-else
                    class="w-full flex flex-col justify-center items-center text-center p-6"
                >
                    <div class="w-full flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-24 h-w-24 text-success"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042a.751.751 0 0 0-1.042-.018l-5.97 5.97l-2.47-2.47a.751.751 0 0 0-1.042.018a.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"
                            />
                        </svg>
                    </div>
                    <div class="w-full flex flex-col gap-2">
                        <h1 class="text-lg font-semibold">Got It !</h1>
                        <p class="text-lg">Information Modified Successfully</p>
                        <IHButton
                            class="w-full mt-4"
                            type="button"
                            @click="closeDialog()"
                            autofocus
                        >
                            Accept
                        </IHButton>
                    </div>
                </div>
            </Transition>
        </template>
        <template #footer="{}">
            <template></template>
        </template>
    </IHModal>
</template>
