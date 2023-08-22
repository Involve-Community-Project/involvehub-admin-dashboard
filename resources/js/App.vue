<script lang="ts" setup>
import { RouterView } from 'vue-router';
// import { checkAuth } from './api/auth';
// import { finiteInterval } from './utils';

// finiteInterval(
//     ({ timer, iterations }: any) => {
//         checkAuth()
//             .then(() => {
//                 console.log('User is logged in. ', iterations, timer);
//             })
//             .catch(() => {
//                 console.log('User is not logged in.', iterations, timer);
//             });
//     },
//     1500,
//     1500,
//     100
// );
</script>

<template>
    <RouterView v-slot="{ Component }">
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
            <component :is="Component" />
        </Transition>
    </RouterView>
</template>

<style lang="scss" scoped></style>
