<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import InvolveHubLogo from '../components/logos/InvolveHubTextLogo.vue';

const classes = {
    bg: {
        primary: [
            {
                def: 0,
                hex: '#ebe8f2',
                shade: 50,
                name: 'bg-primary-50',
                textclass: 'text-on-primary-50',
            },
            {
                def: 0,
                hex: '#ccc7e0',
                shade: 100,
                name: 'bg-primary-100',
                textclass: 'text-on-primary-100',
            },
            {
                def: 0,
                hex: '#aba2cc',
                shade: 200,
                name: 'bg-primary-200',
                textclass: 'text-on-primary-200',
            },
            {
                def: 0,
                hex: '#8b7eb8',
                shade: 300,
                name: 'bg-primary-300',
                textclass: 'text-on-primary-300',
            },
            {
                def: 0,
                hex: '#7363a8',
                shade: 400,
                name: 'bg-primary-400',
                textclass: 'text-on-primary-400',
            },
            {
                def: 1,
                hex: '#5b4a9a',
                shade: 500,
                name: 'bg-primary-500',
                textclass: 'text-on-primary-500',
            },
            {
                def: 0,
                hex: '#544594',
                shade: 600,
                name: 'bg-primary-600',
                textclass: 'text-on-primary-600',
            },
            {
                def: 0,
                hex: '#493d8b',
                shade: 700,
                name: 'bg-primary-700',
                textclass: 'text-on-primary-700',
            },
            {
                def: 0,
                hex: '#3f3781',
                shade: 800,
                name: 'bg-primary-800',
                textclass: 'text-on-primary-800',
            },
            {
                def: 0,
                hex: '#312c6e',
                shade: 900,
                name: 'bg-primary-900',
                textclass: 'text-on-primary-900',
            },
        ],
        secondary: [
            {
                def: 0,
                hex: '#fbe7e6',
                shade: 50,
                name: 'bg-secondary-50',
                textclass: 'text-on-secondary-50',
            },
            {
                def: 0,
                hex: '#ffc7b9',
                shade: 100,
                name: 'bg-secondary-100',
                textclass: 'text-on-secondary-100',
            },
            {
                def: 0,
                hex: '#fea28c',
                shade: 200,
                name: 'bg-secondary-200',
                textclass: 'text-on-secondary-200',
            },
            {
                def: 1,
                hex: '#fd7c5f',
                shade: 300,
                name: 'bg-secondary-300',
                textclass: 'text-on-secondary-300',
            },
            {
                def: 0,
                hex: '#fd5d3d',
                shade: 400,
                name: 'bg-secondary-400',
                textclass: 'text-on-secondary-400',
            },
            {
                def: 0,
                hex: '#fb3c1d',
                shade: 500,
                name: 'bg-secondary-500',
                textclass: 'text-on-secondary-500',
            },
            {
                def: 0,
                hex: '#f03619',
                shade: 600,
                name: 'bg-secondary-600',
                textclass: 'text-on-secondary-600',
            },
            {
                def: 0,
                hex: '#e32f14',
                shade: 700,
                name: 'bg-secondary-700',
                textclass: 'text-on-secondary-700',
            },
            {
                def: 0,
                hex: '#d42710',
                shade: 800,
                name: 'bg-secondary-800',
                textclass: 'text-on-secondary-800',
            },
            {
                def: 0,
                hex: '#bb1806',
                shade: 900,
                name: 'bg-secondary-900',
                textclass: 'text-on-secondary-900',
            },
        ],
        success: [
            {
                def: 0,
                hex: '#e7f5eb',
                shade: 50,
                name: 'bg-success-50',
                textclass: 'text-on-success-50',
            },
            {
                def: 0,
                hex: '#c5e7cd',
                shade: 100,
                name: 'bg-success-100',
                textclass: 'text-on-success-100',
            },
            {
                def: 0,
                hex: '#a0d7ad',
                shade: 200,
                name: 'bg-success-200',
                textclass: 'text-on-success-200',
            },
            {
                def: 0,
                hex: '#79c98d',
                shade: 300,
                name: 'bg-success-300',
                textclass: 'text-on-success-300',
            },
            {
                def: 0,
                hex: '#5bbd75',
                shade: 400,
                name: 'bg-success-400',
                textclass: 'text-on-success-400',
            },
            {
                def: 1,
                hex: '#3cb15d',
                shade: 500,
                name: 'bg-success-500',
                textclass: 'text-on-success-500',
            },
            {
                def: 0,
                hex: '#34a253',
                shade: 600,
                name: 'bg-success-600',
                textclass: 'text-on-success-600',
            },
            {
                def: 0,
                hex: '#2a9048',
                shade: 700,
                name: 'bg-success-700',
                textclass: 'text-on-success-700',
            },
            {
                def: 0,
                hex: '#217f3d',
                shade: 800,
                name: 'bg-success-800',
                textclass: 'text-on-success-800',
            },
            {
                def: 0,
                hex: '#105f2a',
                shade: 900,
                name: 'bg-success-900',
                textclass: 'text-on-success-900',
            },
        ],
        error: [
            {
                def: 0,
                hex: '#ffecf1',
                shade: 50,
                name: 'bg-error-50',
                textclass: 'text-on-error-50',
            },
            {
                def: 0,
                hex: '#ffd0d9',
                shade: 100,
                name: 'bg-error-100',
                textclass: 'text-on-error-100',
            },
            {
                def: 0,
                hex: '#f19ea6',
                shade: 200,
                name: 'bg-error-200',
                textclass: 'text-on-error-200',
            },
            {
                def: 0,
                hex: '#e97984',
                shade: 300,
                name: 'bg-error-300',
                textclass: 'text-on-error-300',
            },
            {
                def: 0,
                hex: '#f75965',
                shade: 400,
                name: 'bg-error-400',
                textclass: 'text-on-error-400',
            },
            {
                def: 0,
                hex: '#fd464e',
                shade: 500,
                name: 'bg-error-500',
                textclass: 'text-on-error-500',
            },
            {
                def: 0,
                hex: '#ef3e4d',
                shade: 600,
                name: 'bg-error-600',
                textclass: 'text-on-error-600',
            },
            {
                def: 1,
                hex: '#dc3546',
                shade: 700,
                name: 'bg-error-700',
                textclass: 'text-on-error-700',
            },
            {
                def: 0,
                hex: '#cf2e3e',
                shade: 800,
                name: 'bg-error-800',
                textclass: 'text-on-error-800',
            },
            {
                def: 0,
                hex: '#cf2e3e',
                shade: 900,
                name: 'bg-error-900',
                textclass: 'text-on-error-900',
            },
        ],
        warning: [
            {
                def: 0,
                hex: '#fff8e1',
                shade: 50,
                name: 'bg-warning-50',
                textclass: 'text-on-warning-50',
            },
            {
                def: 0,
                hex: '#ffecb3',
                shade: 100,
                name: 'bg-warning-100',
                textclass: 'text-on-warning-100',
            },
            {
                def: 0,
                hex: '#ffe082',
                shade: 200,
                name: 'bg-warning-200',
                textclass: 'text-on-warning-200',
            },
            {
                def: 0,
                hex: '#ffd54f',
                shade: 300,
                name: 'bg-warning-300',
                textclass: 'text-on-warning-300',
            },
            {
                def: 0,
                hex: '#ffca28',
                shade: 400,
                name: 'bg-warning-400',
                textclass: 'text-on-warning-400',
            },
            {
                def: 1,
                hex: '#ffc107',
                shade: 500,
                name: 'bg-warning-500',
                textclass: 'text-on-warning-500',
            },
            {
                def: 0,
                hex: '#ffb300',
                shade: 600,
                name: 'bg-warning-600',
                textclass: 'text-on-warning-600',
            },
            {
                def: 0,
                hex: '#ffa000',
                shade: 700,
                name: 'bg-warning-700',
                textclass: 'text-on-warning-700',
            },
            {
                def: 0,
                hex: '#ff8f00',
                shade: 800,
                name: 'bg-warning-800',
                textclass: 'text-on-warning-800',
            },
            {
                def: 0,
                hex: '#ff6f00',
                shade: 900,
                name: 'bg-warning-900',
                textclass: 'text-on-warning-900',
            },
        ],
        info: [
            {
                def: 0,
                hex: '#e0f6f9',
                shade: 50,
                name: 'bg-info-50',
                textclass: 'text-on-info-50',
            },
            {
                def: 0,
                hex: '#b1e8f0',
                shade: 100,
                name: 'bg-info-100',
                textclass: 'text-on-info-100',
            },
            {
                def: 0,
                hex: '#7fd8e6',
                shade: 200,
                name: 'bg-info-200',
                textclass: 'text-on-info-200',
            },
            {
                def: 0,
                hex: '#4ec8db',
                shade: 300,
                name: 'bg-info-300',
                textclass: 'text-on-info-300',
            },
            {
                def: 0,
                hex: '#2dbdd2',
                shade: 400,
                name: 'bg-info-400',
                textclass: 'text-on-info-400',
            },
            {
                def: 0,
                hex: '#19b2cb',
                shade: 500,
                name: 'bg-info-500',
                textclass: 'text-on-info-500',
            },
            {
                def: 1,
                hex: '#17a3b8',
                shade: 600,
                name: 'bg-info-600',
                textclass: 'text-on-info-600',
            },
            {
                def: 0,
                hex: '#148e9e',
                shade: 700,
                name: 'bg-info-700',
                textclass: 'text-on-info-700',
            },
            {
                def: 0,
                hex: '#127a87',
                shade: 800,
                name: 'bg-info-800',
                textclass: 'text-on-info-800',
            },
            {
                def: 0,
                hex: '#0e585c',
                shade: 900,
                name: 'bg-info-900',
                textclass: 'text-on-info-900',
            },
        ],
        surface: [
            {
                def: 0,
                hex: '#fbf9fa',
                shade: 50,
                name: 'bg-surface-50',
                textclass: 'text-on-surface-50',
            },
            {
                def: 0,
                hex: '#f6f4f5',
                shade: 100,
                name: 'bg-surface-100',
                textclass: 'text-on-surface-100',
            },
            {
                def: 0,
                hex: '#efedee',
                shade: 200,
                name: 'bg-surface-200',
                textclass: 'text-on-surface-200',
            },
            {
                def: 1,
                hex: '#e0dedf',
                shade: 300,
                name: 'bg-surface-300',
                textclass: 'text-on-surface-300',
            },
            {
                def: 0,
                hex: '#bdbbbc',
                shade: 400,
                name: 'bg-surface-400',
                textclass: 'text-on-surface-400',
            },
            {
                def: 0,
                hex: '#9e9c9d',
                shade: 500,
                name: 'bg-surface-500',
                textclass: 'text-on-surface-500',
            },
            {
                def: 0,
                hex: '#757374',
                shade: 600,
                name: 'bg-surface-600',
                textclass: 'text-on-surface-600',
            },
            {
                def: 0,
                hex: '#615f60',
                shade: 700,
                name: 'bg-surface-700',
                textclass: 'text-on-surface-700',
            },
            {
                def: 0,
                hex: '#424041',
                shade: 800,
                name: 'bg-surface-800',
                textclass: 'text-on-surface-800',
            },
            {
                def: 0,
                hex: '#212020',
                shade: 900,
                name: 'bg-surface-900',
                textclass: 'text-on-surface-900',
            },
        ],
    },
};
</script>

<template>
    <div class="w-full h-full overflow-x-hidden overflow-y-auto p-4 md:px-8">
        <div class="flex flex-col md:flex-row justify-between">
            <InvolveHubLogo class="w-60 h-auto" />
            <h1
                class="text-primaryDim py-4 text-4xl font-bold dark:text-primaryDim-300"
            >
                Style Guide
            </h1>
        </div>
        <hr />
        <h2 class="py-4 text-2xl font-bold">Colors:</h2>
        <div
            class="flex flex-col md:flex-row md:items-center"
            v-for="(values, variant) in classes.bg"
            :key="variant"
        >
            <div class="pt-3 pb-1 w-32">
                <span class="text-xl">{{ variant }}</span>
            </div>
            <div class="md:py-3 flex">
                <div
                    tabindex="0"
                    class="group relative w-16 h-16 first:rounded-l-md last:rounded-r-md flex items-center justify-center"
                    :class="[
                        value.name,
                        value.def && 'rounded-full',
                        value.def && 'shrink-0',
                    ]"
                    v-for="value in values"
                    :key="value.name"
                >
                    <span class="text-sm" :class="value.textclass">{{
                        value.shade
                    }}</span>
                    <span
                        class="group-hover:opacity-100 opacity-0 z-10 transition-opacity absolute -bottom-5 text-xs p-1 bg-black text-white rounded"
                        >{{ value.hex }}</span
                    >
                </div>
            </div>
        </div>
        <hr />
        <h2 class="py-4 text-2xl font-bold">Typography:</h2>
        <hr />
        <h2 class="py-4 text-2xl font-bold">Buttons:</h2>
        <div class="w-full flex flex-row gap-4 flex-wrap">
            <button class="btn">Hello</button>
            <button class="btn" disabled>Hello</button>
            <button class="btn-primary">Hello</button>
            <button class="btn-primary" disabled>Hello</button>
            <button class="btn-primary-outline">Hello</button>
            <button class="btn-primary-outline" disabled>Hello</button>
            <button class="btn-secondary">Hello</button>
            <button class="btn-secondary" disabled>Hello</button>
            <button class="btn-success">Hello</button>
            <button class="btn-success" disabled>Hello</button>
            <button class="btn-warning">Hello</button>
            <button class="btn-warning" disabled>Hello</button>
            <button class="btn-error">Hello</button>
            <button class="btn-error" disabled>Hello</button>
            <button class="btn-info">Hello</button>
            <button class="btn-info" disabled>Hello</button>
            <button class="btn-contrast">Hello</button>
            <button class="btn-contrast" disabled>Hello</button>
            <RouterLink to="/" class="btn-link"> Link </RouterLink>
        </div>
        <hr class="my-5" />
        <h2 class="py-4 text-2xl font-bold">Inputs:</h2>
        <form
            @submit.prevent="(event) => {}"
            class="flex flex-col items-center justify-center w-full mt-4 transition-colors-500"
        >
            <input
                type="text"
                class="input mb-4"
                placeholder="Email"
                required
            />
            <input
                type="password"
                class="input mb-4"
                placeholder="Password"
                required
            />
            <select name="" id="" class="input mb-4">
                <option value="">Hello</option>
                <option value="">World</option>
                <option value="">!</option>
            </select>
            <textarea
                class="input mb-4"
                name=""
                id=""
                cols="30"
                rows="10"
            ></textarea>

            <button type="submit" class="btn btn-primary w-full">Login</button>
        </form>
    </div>
</template>
