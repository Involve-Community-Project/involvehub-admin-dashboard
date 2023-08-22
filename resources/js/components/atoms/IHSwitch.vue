<script lang="ts" setup>
// import { ref } from 'vue';

// const size = ref('md');
</script>
<template>
    <label class="ih-switch">
        <slot></slot>
        <input type="checkbox" role="switch" />
    </label>
</template>
<style lang="scss">
.ih-switch {
    --thumb-size: 1.5rem;
    --thumb: hsl(0 0% 100%);
    --thumb-highlight: hsl(0 0% 0% / 25%);

    --thumb-color: var(--thumb);
    --thumb-color-highlight: var(--thumb-highlight);

    --thumb-transition-duration: 0.25s;

    --track-size: calc(var(--thumb-size) * 2);
    --track-padding: 2px;

    --track-inactive: hsl(80 0% 80%);
    --track-active: hsl(80 60% 45%);

    --track-color-inactive: var(--track-inactive);
    --track-color-active: var(--track-active);

    display: flex;
    align-items: center;
    gap: 2ch;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    @media (prefers-color-scheme: dark) {
        --track-inactive: hsl(80 0% 35%);
        --track-active: hsl(80 60% 60%);

        --thumb: hsl(0 0% 5%);
        --thumb-highlight: hsl(0 0% 100% / 25%);
    }
}

.ih-switch > input {
    --thumb-position: 0%;
    appearance: none;

    inline-size: var(--track-size);
    block-size: var(--thumb-size);
    padding: var(--track-padding);

    flex-shrink: 0;
    display: grid;
    align-items: center;
    grid: [track] 1fr / [track] 1fr;

    border: none;
    outline-offset: 5px;
    box-sizing: content-box;

    background: var(--track-color-inactive);
    border-radius: var(--track-size);
}

.ih-switch > input:hover {
    background-color: var(--track-color-inactive);
}

.ih-switch > input:checked:hover,
.ih-switch > input:checked:focus {
    background-color: var(--track-color-active);
}

.ih-switch > input::before {
    content: '';
    grid-area: track;
    inline-size: var(--thumb-size);
    block-size: var(--thumb-size);

    background: var(--thumb-color);
    border-radius: 50%;

    box-shadow: 0 0 0 var(--highlight-size) var(--thumb-color-highlight);
    transition:
        transform var(--thumb-transition-duration) ease,
        box-shadow 0.25s ease;

    transform: translateX(var(--thumb-position));
}

.ih-switch > input:checked {
    background: var(--track-color-active);
    --thumb-position: calc(var(--track-size) - 100%);
}

.ih-switch > input:indeterminate {
    --thumb-position: calc((var(--track-size) / 2) - (var(--thumb-size) / 2));
}
</style>
