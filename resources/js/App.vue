<script lang="ts" setup>
import { RouterView } from 'vue-router';
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
