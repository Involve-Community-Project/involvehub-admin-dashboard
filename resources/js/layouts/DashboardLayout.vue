<script lang="ts" setup>
import { inject, onMounted } from 'vue';
import SidebarMenu from '../components/SidebarMenu.vue';
import { useUserStore } from '@/js/store/user';
import {
    IconMenuRounded,
    IconNotificationsOutline,
} from '@iconify-prerendered/vue-material-symbols';
import InvolveHubTextLogo from '../components/logos/InvolveHubTextLogo.vue';
import { type Emitter, type EventType } from 'mitt';

const emitter: Emitter<Record<EventType, unknown>> | undefined =
    inject('emitter');

const toggleMenu = () => {
    emitter?.emit('menu:toggle');
};

const userStore = useUserStore();

onMounted(() => {
    console.log('mounted once');
    userStore.fetchUser();
});
</script>
<template>
    <div
        class="grid grid-cols-1 sm:grid-cols-[minmax(auto,_22rem),minmax(0,_1fr)] grid-rows-[minmax(auto,_0px),1fr] sm:grid-rows-[1fr] w-full h-full"
    >
        <SidebarMenu />
        <header
            class="mobile-header flex justify-between items-center w-full h-14 p-4 gap-1 shadow-md sm:hidden"
        >
            <InvolveHubTextLogo class="w-auto h-9" />
            <div class="grow"></div>
            <button class="btn btn-icon text-surface-900 dark:text-surface-50">
                <IconNotificationsOutline class="w-6 h-6" />
            </button>
            <button
                class="btn btn-icon text-surface-900 dark:text-surface-50"
                @click="toggleMenu"
            >
                <IconMenuRounded class="w-6 h-6" />
            </button>
        </header>
        <main class="main-content h-full overflow-y-auto col-span-1 p-6">
            <RouterView v-slot="{ Component, route }">
                <Transition
                    enter-active-class="duration-300 ease-in-out"
                    enter-from-class="transform opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="duration-300 ease-in-out"
                    leave-from-class="opacity-100"
                    leave-to-class="transform opacity-0"
                    mode="out-in"
                    appear
                >
                    <div class="w-full" :key="route.path">
                        <component :is="Component" />
                    </div>
                </Transition>
            </RouterView>
        </main>
    </div>
</template>
<style lang="css" scoped></style>
