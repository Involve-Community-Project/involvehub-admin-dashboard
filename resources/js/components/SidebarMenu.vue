<script lang="ts" setup>
import IHButton from '../components/atoms/IHButton.vue';
import InvolveHubTextLogo from '../components/logos/InvolveHubTextLogo.vue';
import IsotypeLogo from '../components/logos/IsotypeLogo.vue';
import { IconBuildingLine } from '@iconify-prerendered/vue-clarity';
import { IconPlus } from '@iconify-prerendered/vue-bi';
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/user';
import { inject, ref } from 'vue';
import { type Emitter, type EventType } from 'mitt';
import ThemeSwitcher from './atoms/ThemeSwitcher.vue';

const userStore = useUserStore();
const router = useRouter();
const emitter: Emitter<Record<EventType, unknown>> | undefined =
    inject('emitter');

const menuOpen = ref(false);

const openMenu = () => {
    menuOpen.value = true;
};

const closeMenu = () => {
    menuOpen.value = false;
};

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};

emitter?.on('menu:open', () => {
    openMenu();
});

emitter?.on('menu:close', () => {
    closeMenu();
});

emitter?.on('menu:toggle', () => {
    toggleMenu();
});

const addCompanie = () => {
    // if current route is different from companies, then redirect to companies
    if (router.currentRoute.value.name !== 'companies') {
        router.push({ name: 'companies', query: { action: 'add' } });
    } else {
        // if current route is companies, then open modal
        emitter?.emit('companies:add');
    }
};

const menuItems = [
    {
        item: 1,
        text: 'Dashboard',
        route: '/dashboard',
    },
    {
        item: 2,
        text: 'Companies',
        route: '/companies',
    },
    {
        item: 3,
        text: 'Account',
        route: '/account',
    },
    // {
    //     item: 4,
    //     text: 'Large content',
    //     route: '/large-content',
    // },
    // {
    //     item: 5,
    //     text: 'Style Guide',
    //     route: '/style-guide',
    // },
];
</script>
<template>
    <div
        class="fixed max-sm:z-100 w-full h-full bg-surface-900/50 sm:hidden"
        :class="{
            'opacity-0 pointer-events-none': !menuOpen,
            'opacity-100 pointer-events-auto': menuOpen,
        }"
        @click="closeMenu"
    ></div>
    <nav
        class="transition-all duration-500 -translate-x-full sm:translate-x-0 sidebar-menu bg-surface-50 dark:bg-surface-900 fixed max-sm:z-100 h-full sm:relative overflow-hidden shadow-uniform-xs dark:shadow-surface-50/20 p-3 flex flex-col justify-between"
        :class="{
            '-translate-x-full max-sm:shadow-none': !menuOpen,
            'translate-x-0': menuOpen,
        }"
    >
        <div class="w-full flex justify-center items-center p-6">
            <InvolveHubTextLogo class="w-56 h-auto max-w-full" />
        </div>
        <div
            class="w-full rounded-xl shadow-uniform-xs dark:shadow-surface-50/20 flex flex-row items-center gap-4 py-2 px-8"
        >
            <div class="w-20 h-20 p-3">
                <IsotypeLogo class="w-full h-auto" />
            </div>
            <span class="text-base font-normal">{{ userStore.user.name }}</span>
        </div>
        <div
            class="w-full text-center p-2 rounded-md bg-primary-50 dark:bg-primary-300/10 text-primary dark:text-primaryDim-300 font-semibold mt-6 flex items-center justify-center gap-3"
        >
            <IconBuildingLine class="w-auto h-5" />
            <span>Super Admin</span>
        </div>
        <div class="w-auto mt-6 overflow-y-auto -m-3 p-3">
            <ul class="flex flex-col gap-4">
                <li
                    class="w-full relative"
                    v-for="item in menuItems"
                    :key="item.item"
                >
                    <RouterLink
                        :to="item.route"
                        @click="closeMenu"
                        class="block w-full py-2 px-9 rounded-lg font-normal border-l-4 border-transparent hover:!border-primary hover:!bg-surface-500/10"
                        active-class="bg-surface-500/10 text-primary dark:text-primaryDim-300 !border-primary"
                    >
                        {{ item.text }}
                    </RouterLink>
                </li>
                <li class="w-full relative">
                    <IHButton
                        @click="
                            async () => {
                                await userStore.logoutUser();
                            }
                        "
                        variant="link"
                        class="!justify-start block w-full py-2 px-9 rounded-lg font-normal border-l-4 border-transparent"
                    >
                        Logout
                    </IHButton>
                </li>
            </ul>
        </div>
        <div class="grow"></div>
        <div class="w-full flex flex-col my-4">
            <IHButton variant="contrast" @click="addCompanie()">
                <IconPlus class="w-auto h-6 font-bold" />
                <span>Add company</span>
            </IHButton>
            <!-- <button class="btn-contrast">Add company</button> -->
        </div>
        <ThemeSwitcher />
    </nav>
</template>
