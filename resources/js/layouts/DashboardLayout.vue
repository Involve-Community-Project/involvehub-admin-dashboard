<script lang="ts" setup>
import InvolveHubTextLogo from '../components/logos/InvolveHubTextLogo.vue';
import IsotypeLogo from '../components/logos/IsotypeLogo.vue';

const menuItems = [
    {
        item: 1,
        text: 'Dashboard',
        route: '#',
        active: true,
    },
    {
        item: 2,
        text: 'Companies',
        route: '#',
        active: false,
    },
    {
        item: 3,
        text: 'Account',
        route: '#',
        active: false,
    },
    {
        item: 4,
        text: 'Logout',
        route: '#',
        active: false,
    },
];
</script>
<template>
    <div class="main-container w-full h-full">
        <nav
            class="sidebar-menu shadow-uniform-xs dark:shadow-surface-50/20 p-3 flex flex-col justify-between"
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
                <span class="text-base font-normal">SuperAdmin User 1</span>
            </div>
            <div
                class="w-full text-center p-2 rounded-md bg-primary-50 dark:bg-primary-300/10 text-primary dark:text-primaryDim-300 font-semibold mt-6"
            >
                <span>Super Admin</span>
            </div>
            <div class="w-full mt-6">
                <ul class="flex flex-col gap-4">
                    <li
                        class="w-full relative"
                        v-for="item in menuItems"
                        :key="item.item"
                    >
                        <a
                            href="#"
                            class="block w-full py-2 px-9 rounded-lg font-normal border-l-4"
                            :class="{
                                'bg-surface-500/10 text-primary dark:text-primaryDim-300 border-primary':
                                    item.active,
                                'border-transparent': !item.active,
                            }"
                        >
                            {{ item.text }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="grow"></div>
            <div class="w-full flex flex-col my-4">
                <button class="btn-contrast">Add company</button>
            </div>
        </nav>
        <header class="mobile-header sm:hidden"></header>
        <main class="main-content p-6">
            <div class="w-full px-3 py-3 border-b dark:border-surface-600">
                <h1 class="text-3xl font-bold">Dashboard</h1>
            </div>
        </main>
    </div>
</template>
<style lang="css" scoped>
.main-container {
    display: grid;
    grid-template-columns: 22rem 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: 'sidebar-menu main-content main-content';
}

.main-content {
    grid-area: main-content;
}

.sidebar-menu {
    grid-area: sidebar-menu;
}
</style>
