import AuthLayout from '@/js/layouts/AuthLayout.vue';

export const authRoutes = {
    path: '/',
    name: 'auth',
    component: AuthLayout,
    redirect: '/login',
    children: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/js/pages/LoginPage.vue'),
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            component: () => import('@/js/pages/ForgotPasswordPage.vue'),
        },
    ],
    meta: { requiresAuth: false, requiresGuest: true },
};
