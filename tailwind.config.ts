import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.ts',
        './resources/**/*.vue',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
                serif: ['Vollkorn', ...defaultTheme.fontFamily.serif],
            },
            colors: () => {
                const primary = {
                    50: '#ebe8f2',
                    100: '#ccc7e0',
                    200: '#aba2cc',
                    300: '#8b7eb8',
                    400: '#7363a8',
                    500: '#5b4a9a',
                    600: '#544594',
                    700: '#493d8b',
                    800: '#3f3781',
                    900: '#312c6e',
                    DEFAULT: '#5b4a9a',
                };
                const primaryDim = {
                    50: '#fbf5ff',
                    100: '#f5efff',
                    200: '#ede7ff',
                    300: '#ddd8fb',
                    400: '#bab5d7',
                    500: '#9a96b6',
                    600: '#716d8c',
                    700: '#5d5a77',
                    800: '#3e3b57',
                    900: '#1c1b34',
                    DEFAULT: '#3e3b57',
                };
                const secondary = {
                    50: '#fbe7e6',
                    100: '#ffc7b9',
                    200: '#fea28c',
                    300: '#fd7c5f',
                    400: '#fd5d3d',
                    500: '#fb3c1d',
                    600: '#f03619',
                    700: '#e32f14',
                    800: '#d42710',
                    900: '#bb1806',
                    DEFAULT: '#fd7c5f',
                };
                const success = {
                    50: '#e7f5eb',
                    100: '#c5e7cd',
                    200: '#a0d7ad',
                    300: '#79c98d',
                    400: '#5bbd75',
                    500: '#3cb15d',
                    600: '#34a253',
                    700: '#2a9048',
                    800: '#217f3d',
                    900: '#105f2a',
                    DEFAULT: '#3cb15d',
                };
                const error = {
                    50: '#ffecf1',
                    100: '#ffd0d9',
                    200: '#f19ea6',
                    300: '#e97984',
                    400: '#f75965',
                    500: '#fd464e',
                    600: '#ef3e4d',
                    700: '#dc3546',
                    800: '#cf2e3e',
                    900: '#c22737',
                    DEFAULT: '#dc3546',
                };
                const warning = {
                    50: '#fff8e1',
                    100: '#ffecb3',
                    200: '#ffe082',
                    300: '#ffd54f',
                    400: '#ffca28',
                    500: '#ffc107',
                    600: '#ffb300',
                    700: '#ffa000',
                    800: '#ff8f00',
                    900: '#ff6f00',
                    DEFAULT: '#ffc107',
                };
                const info = {
                    50: '#e0f6f9',
                    100: '#b1e8f0',
                    200: '#7fd8e6',
                    300: '#4ec8db',
                    400: '#2dbdd2',
                    500: '#19b2cb',
                    600: '#17a3b8',
                    700: '#148e9e',
                    800: '#127a87',
                    900: '#0e585c',
                    DEFAULT: '#17a3b8',
                };
                const surface = {
                    50: '#fbf9fa',
                    100: '#f6f4f5',
                    200: '#efedee',
                    300: '#e0dedf',
                    400: '#bdbbbc',
                    500: '#9e9c9d',
                    600: '#757374',
                    700: '#615f60',
                    800: '#424041',
                    900: '#212020',
                    DEFAULT: '#e0dedf',
                };

                const onPrimary = {
                    50: '#3f3781', // #ebe8f2
                    100: '#3f3781', // #ccc7e0
                    200: '#3f3781', // #aba2cc
                    300: '#312c6e', // #8b7eb8
                    400: '#ebe8f2', // #7363a8
                    500: '#ebe8f2', // #5b4a9a
                    600: '#ebe8f2', // #544594
                    700: '#ebe8f2', // #493d8b
                    800: '#ebe8f2', // #3f3781
                    900: '#ebe8f2', // #312c6e
                    DEFAULT: '#ebe8f2',
                };
                const onPrimaryDim = {
                    50: '#3e3b57', // '#fbf5ff'
                    100: '#3e3b57', // '#f5efff'
                    200: '#3e3b57', // '#ede7ff'
                    300: '#3e3b57', // '#ddd8fb'
                    400: '#3e3b57', // '#bab5d7'
                    500: '#1c1b34', // '#9a96b6'
                    600: '#fbf5ff', // '#716d8c'
                    700: '#fbf5ff', // '#5d5a77'
                    800: '#fbf5ff', // '#3e3b57'
                    900: '#fbf5ff', // '#1c1b34'
                    DEFAULT: '#fbf5ff',
                };
                const onSecondary = {
                    50: '#5d211d', // #fbe7e6
                    100: '#5d211d', // #ffc7b9
                    200: '#5d211d', // #fea28c
                    300: '#5d211d', // #fd7c5f
                    400: '#5d211d', // #fd5d3d
                    500: '#ffe1cf', // #fb3c1d
                    600: '#ffe1cf', // #f03619
                    700: '#ffe1cf', // #e32f14
                    800: '#ffe1cf', // #d42710
                    900: '#ffe1cf', // #bb1806
                    DEFAULT: '#5d211d',
                };
                const onSuccess = {
                    50: '#105f2a', // #e7f5eb
                    100: '#105f2a', // #c5e7cd
                    200: '#105f2a', // #a0d7ad
                    300: '#105f2a', // #79c98d
                    400: '#105f2a', // #5bbd75
                    500: '#e7f5eb', // #3cb15d
                    600: '#e7f5eb', // #34a253
                    700: '#e7f5eb', // #2a9048
                    800: '#e7f5eb', // #217f3d
                    900: '#e7f5eb', // #105f2a
                    DEFAULT: '#3cb15d',
                };
                const onError = {
                    50: '#831520', // #ffecf1
                    100: '#831520', // #ffd0d9
                    200: '#831520', // #f19ea6
                    300: '#831520', // #e97984
                    400: '#831520', // #f75965
                    500: '#ffecf1', // #fd464e
                    600: '#ffecf1', // #ef3e4d
                    700: '#ffecf1', // #dc3546
                    800: '#ffecf1', // #cf2e3e
                    900: '#ffecf1', // #b31d2c
                    DEFAULT: '#ffecf1',
                };
                const onWarning = {
                    50: '#510700', // #fff8e1
                    100: '#510700', // #ffecb3
                    200: '#510700', // #ffe082
                    300: '#510700', // #ffd54f
                    400: '#510700', // #ffca28
                    500: '#510700', // #ffc107
                    600: '#510700', // #ffb300
                    700: '#510700', // #ffa000
                    800: '#510700', // #ff8f00
                    900: '#510700', // #ff6f00
                    DEFAULT: '#510700',
                };
                const onInfo = {
                    50: '#0e585c', // #e0f6f9
                    100: '#0e585c', // #b1e8f0
                    200: '#0e585c', // #7fd8e6
                    300: '#0e585c', // #4ec8db
                    400: '#0e585c', // #2dbdd2
                    500: '#e0f6f9', // #19b2cb
                    600: '#e0f6f9', // #17a3b8
                    700: '#e0f6f9', // #148e9e
                    800: '#e0f6f9', // #127a87
                    900: '#e0f6f9', // #0e585c
                    DEFAULT: '#e0f6f9',
                };
                const onSurface = {
                    50: '#212020', // #fbf9fa
                    100: '#212020', // #f6f4f5
                    200: '#212020', // #efedee
                    300: '#212020', // #e0dedf
                    400: '#212020', // #bdbbbc
                    500: '#212020', // #9e9c9d
                    600: '#fbf9fa', // #757374
                    700: '#fbf9fa', // #615f60
                    800: '#fbf9fa', // #424041
                    900: '#fbf9fa', // #212020
                    DEFAULT: '#e0dedf',
                };

                return {
                    primary: primary,
                    primaryDim: primaryDim,
                    secondary: secondary,
                    success: success,
                    error: error,
                    warning: warning,
                    info: info,
                    surface: surface,
                    'on-primary': onPrimary,
                    'on-primary-dim': onPrimaryDim,
                    'on-secondary': onSecondary,
                    'on-success': onSuccess,
                    'on-error': onError,
                    'on-warning': onWarning,
                    'on-info': onInfo,
                    'on-surface': onSurface,
                };
            },
            animation: {},
            keyframes: {},
            spacing: {
                '1/1.5': '66.666667%',
                '1/3': '33.333333%',
                '1/5': '20%',
                '1/6': '16.666667%',
                '1/10': '10%',
            },
            scale: {
                175: '1.75',
                200: '2',
                225: '2.25',
                250: '2.5',
                275: '2.75',
                300: '3',
            },
            zIndex: {
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100',
                200: '200',
                300: '300',
                400: '400',
                500: '500',
                600: '600',
                700: '700',
                800: '800',
                900: '900',
                1000: '1000',
            },
            width: {
                91: '22rem',
                100: '25rem',
                110: '27.5rem',
                125: '31.25rem',
                130: '32.5rem',
                150: '37.5rem',
                175: '43.75rem',
                200: '50rem',
                250: '62.5rem',
                300: '75rem',
            },
            height: {
                100: '25rem',
                150: '37.5rem',
                200: '50rem',
                250: '62.5rem',
                300: '75rem',
            },
            boxShadow: {
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
                '4xl': '0 50px 100px -20px rgba(0, 0, 0, 0.25)',
                '5xl': '0 50px 100px -20px rgba(0, 0, 0, 0.3)',
                'uniform-xs': '0 0 2px 1px rgba(0, 0, 0, 0.15)',
                'uniform-sm': '0 0 4px 1px rgba(0, 0, 0, 0.2)',
                'uniform-md': '0 0 6px 1px rgba(0, 0, 0, 0.1)',
                'uniform-lg': '0 0 8px 1px rgba(0, 0, 0, 0.2)',
                'uniform-xl': '0 0 10px 1px rgba(0, 0, 0, 0.3)',
                'uniform-2xl': '0 0 12px 1px rgba(0, 0, 0, 0.4)',
                'uniform-3xl': '0 0 14px 1px rgba(0, 0, 0, 0.5)',
                'uniform-4xl': '0 0 16px 1px rgba(0, 0, 0, 0.6)',
                'uniform-5xl': '0 0 18px 1px rgba(0, 0, 0, 0.7)',
            },
        },
    },
    plugins: [],
};
