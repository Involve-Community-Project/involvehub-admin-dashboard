<script lang="ts" setup>
import IHButton from './atoms/IHButton.vue';
import { ref, watch, nextTick } from 'vue';
import { useEventListener } from '@vueuse/core';
import { IconClose } from '@iconify-prerendered/vue-material-symbols';

const props = defineProps({
    open: Boolean,
});

const emit = defineEmits(['update:open', 'on-open', 'on-close']);

const dialog = ref<HTMLDialogElement | null>(null);

const closeDialog = () => {
    dialog.value?.close();
    emit('on-close');
};

const openDialog = () => {
    nextTick(() => {
        dialog.value?.showModal();
        emit('update:open', true);
        emit('on-open');
    });
};

watch(
    () => props.open,
    (value) => {
        console.log(value);
        if (value) {
            openDialog();
        } else {
            closeDialog();
        }
    }
);

useEventListener(dialog, 'close', () => {
    emit('update:open', false);
});

useEventListener(dialog, 'keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        closeDialog();
    }
});

const expposedData = {
    openDialog,
    closeDialog,
    dialog,
};
</script>
<template>
    <Teleport to="body">
        <!-- <transition
            enter-active-class="duration-300 ease-in-out"
            enter-from-class="transform opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="duration-300 ease-in-out"
            leave-from-class="opacity-100"
            leave-to-class="transform opacity-0"
            mode="out-in"
            appear
        > -->

        <dialog
            class="transition-colors-500 w-150 rounded-2xl shadow-xl bg-surface-100 text-on-surface-100 dark:bg-surface-900 dark:text-on-surface-800"
            ref="dialog"
            role="dialog"
            :open="false"
            v-bind="$attrs"
        >
            <form class="flex flex-col p-6 gap-4" method="dialog">
                <IconClose
                    class="absolute top-4 right-4 w-6 h-6 cursor-pointer"
                    @click="closeDialog()"
                />
                <slot name="header" v-bind="expposedData">
                    <h1 class="text-xl">Modal</h1>
                </slot>
                <slot v-bind="expposedData"></slot>
                <slot name="footer" v-bind="expposedData">
                    <div class="flex justify-end gap-4">
                        <IHButton
                            type="reset"
                            @click="closeDialog()"
                            variant="text"
                            autofocus
                        >
                            Cancel
                        </IHButton>
                        <IHButton type="submit">Submit</IHButton>
                    </div>
                </slot>
            </form>
        </dialog>
        <!-- </transition> -->
    </Teleport>
</template>
<style lang="css">
::backdrop {
    /* background-color: rgb(0, 0, 0, 50%); */
    /* backdrop-filter: blur(5px); */
    @apply bg-black/50 dark:bg-surface-800/50 backdrop-blur-sm;
}
</style>
