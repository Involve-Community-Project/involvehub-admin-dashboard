<script lang="ts" setup>
import { IconRingResize } from '@iconify-prerendered/vue-svg-spinners';
import { computed, type ButtonHTMLAttributes, type PropType } from 'vue';

const props = defineProps({
    type: {
        type: String as PropType<ButtonHTMLAttributes['type']>,
        default: 'button',
    },
    disabled: {
        type: Boolean as PropType<ButtonHTMLAttributes['disabled']>,
        default: false,
    },
    variant: {
        type: String as PropType<
            | 'link'
            | 'primary'
            | 'primary-outline'
            | 'secondary'
            | 'success'
            | 'warning'
            | 'error'
            | 'info'
            | 'contrast'
        >,
        default: 'primary',
    },
    loading: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    loadingPosition: {
        type: String as PropType<'left' | 'right' | 'cover'>,
        default: 'cover',
    },
});

const btnClass = computed(() => {
    switch (props.variant) {
        case 'link':
            return 'btn btn-link';
        case 'primary':
            return 'btn btn-primary';
        case 'primary-outline':
            return 'btn btn-primary-outline';
        case 'secondary':
            return 'btn btn-secondary';
        case 'success':
            return 'btn btn-success';
        case 'warning':
            return 'btn btn-warning';
        case 'error':
            return 'btn btn-error';
        case 'info':
            return 'btn btn-info';
        case 'contrast':
            return 'btn btn-contrast';
        default:
            return '';
    }
});
</script>
<template>
    <button
        :type="props.type"
        class="flex justify-center items-center gap-4"
        :class="btnClass"
        :disabled="props.disabled"
    >
        <template v-if="props.loading && props.loadingPosition === 'left'">
            <IconRingResize class="" />
        </template>
        <slot v-if="!(props.loading && props.loadingPosition === 'cover')" />
        <template v-if="props.loading && props.loadingPosition === 'right'">
            <IconRingResize class="" />
        </template>
        <template v-if="props.loading && props.loadingPosition === 'cover'">
            <div class="flex flex-nowrap items-center justify-center">
                <IconRingResize class="" />
                <span> &#8288; </span>
            </div>
        </template>
    </button>
</template>
