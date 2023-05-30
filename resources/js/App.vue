<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from '@/js/components/HelloWorld.vue';
</script>

<template>
    <HelloWorld msg="You did it!" />
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
</template>
