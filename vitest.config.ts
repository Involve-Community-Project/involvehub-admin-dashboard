import { fileURLToPath } from 'node:url';
import { UserConfig, mergeConfig } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';
import viteConfig from './vite.config.js';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: 'jsdom',
            exclude: [...configDefaults.exclude, 'e2e/*'],
            root: fileURLToPath(new URL('./', import.meta.url)),
            transformMode: {
                web: [/\.[jt]sx$/],
            },
        },
    } as UserConfig)
);
