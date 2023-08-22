<script lang="ts" setup>
import { useMemoize } from '@vueuse/core';
import { computed } from 'vue';

const props = defineProps({
    pages: {
        type: Number,
        required: true,
    },
    currentPage: {
        type: Number,
        required: true,
    },
    maxPagerItems: {
        type: Number,
        default: 7,
        validator: (value: number) => value >= 7,
    },
});

const emit = defineEmits(['update:currentPage']);

const setPage = (page: number) => {
    emit('update:currentPage', page);
};

const prevPage = () => {
    setPage(props.currentPage - 1);
};

const nextPage = () => {
    setPage(props.currentPage + 1);
};

const range = (start: number, end: number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};

const paginationRange = useMemoize(
    (
        totalPageCount: number,
        currentPage: number,
        maxPagerItems: number
        // siblingCount: number = 1
    ) => {
        let siblingCount = 0;
        if (maxPagerItems < 7) {
            throw new Error('maxPagerItems must be greater than or equal to 7');
        }

        // calculate sibling count to show on each side
        if (maxPagerItems % 2 === 0) {
            siblingCount = maxPagerItems / 2 - 1;
        } else {
            siblingCount = Math.floor(maxPagerItems / 2);
        }

        siblingCount = Math.max(siblingCount - 5, 1);

        const DOTS = '...';

        const totalPageNumbers = siblingCount + 5;

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }
);

const pageItemClass = (page: number | string) => {
    const isNumberItem = typeof page === 'number';
    const isDotsItem = typeof page === 'string';
    const isCurrentPage = isNumberItem && props.currentPage === page;

    return {
        'btn btn-primary border-primary-200 text-on-primary': isCurrentPage,
        'border-surface-900/10 dark:border-surface-50/20 bg-surface-50 dark:bg-surface-900 text-on-surface-50 dark:text-on-surface-900':
            !isCurrentPage && isNumberItem,
        'border-transparent bg-transparent text-on-surface-50 dark:text-on-surface-900':
            isDotsItem,
    };
};

const pagerItems = computed(() => {
    return paginationRange(props.pages, props.currentPage, props.maxPagerItems);
});
</script>
<template>
    <div class="flex gap-1">
        <button
            class="btn btn-text px-2 h-8 text-xs rounded-md flex justify-center items-center"
            :disabled="currentPage === 1"
            @click="prevPage"
        >
            Prev
        </button>
        <button
            v-for="page in pagerItems"
            :key="page"
            @click="
                () => {
                    if (typeof page === 'number') {
                        setPage(page);
                    }
                }
            "
            class="btn btn-text w-8 h-8 text-xs font-normal rounded-md flex justify-center items-center border"
            :class="pageItemClass(page)"
        >
            {{ page }}
        </button>
        <button
            class="btn btn-text px-2 h-8 text-xs rounded-md flex justify-center items-center"
            :disabled="currentPage === pages"
            @click="nextPage"
        >
            Next
        </button>
    </div>
</template>
