<script lang="ts" setup>
import { ref } from 'vue';
import { useUserStore } from '../store/user';
import { IconEdit20Regular } from '@iconify-prerendered/vue-fluent';
import IsotypeLogo from '../components/logos/IsotypeLogo.vue';
import ResetPasswordModal from '../components/ResetPasswordModal.vue';
import EditContactInfoModal from '../components/EditContactInfoModal.vue';
import IHButton from '../components/atoms/IHButton.vue';

const userStore = useUserStore();

const openChangePasswordModal = ref(false);
const openEditModal = ref(false);

const logout = async () => {
    await userStore.logoutUser();
};
</script>
<template>
    <div class="w-full px-3 py-3 border-b dark:border-surface-700">
        <h1 class="text-3xl font-bold">Account</h1>
    </div>
    <div class="w-full my-6 inline-flex gap-4 items-center">
        <div
            class="w-36 h-36 shrink-0 rounded-full overflow-hidden flex justify-center items-center shadow-uniform-sm shadow-surface-900/20 dark:shadow-surface-50/20 p-4"
        >
            <IsotypeLogo class="w-full h-full" />
        </div>
        <h2 class="text-4xl font-semibold">{{ userStore.user.name }}</h2>
    </div>
    <div class="w-full @container">
        <div class="w-full grid grid-cols-1 gap-4 @md:grid-cols-2">
            <div
                class="w-full rounded-lg border border-gray-400/50 px-6 py-3 overflow-hidden relative"
            >
                <div class="w-full flex justify-between items-center gap-4">
                    <h1 class="text-2xl font-semibold">
                        My Contact Information
                    </h1>
                    <IHButton
                        variant="text"
                        class="p-1"
                        @click="openEditModal = true"
                    >
                        <IconEdit20Regular class="w-6 h-6" />
                    </IHButton>
                </div>
                <table
                    class="w-full max-w-full border-spacing-4 -ml-4 border-separate"
                >
                    <tr class="">
                        <td class="">
                            <span class="whitespace-nowrap font-semibold">
                                Name:
                            </span>
                        </td>
                        <td class="">
                            <span>{{ userStore.user.name }}</span>
                        </td>
                    </tr>
                    <tr class="">
                        <td class="">
                            <span class="whitespace-nowrap font-semibold">
                                Bussines Email:
                            </span>
                        </td>
                        <td class="">
                            <span>{{ userStore.user.email }}</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div
                class="w-full rounded-lg border border-gray-400/50 px-6 py-3 space-y-4"
            >
                <h1 class="text-2xl font-semibold">My Settings</h1>
                <div class="w-full">
                    <span
                        class="underline cursor-pointer"
                        @click="openChangePasswordModal = true"
                    >
                        Change Password
                    </span>
                </div>
                <div class="w-full">
                    <span class="underline cursor-pointer" @click="logout()">
                        Logout
                    </span>
                </div>
                <div class="w-full flex gap-3"></div>
            </div>
        </div>
    </div>
    <ResetPasswordModal v-model:open="openChangePasswordModal" />
    <EditContactInfoModal v-model:open="openEditModal" />
</template>
