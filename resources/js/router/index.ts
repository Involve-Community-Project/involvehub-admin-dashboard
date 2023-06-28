import { createRouter, createWebHashHistory } from 'vue-router';
import AuthLayout from '@/js/layouts/AuthLayout.vue';
import DashboardLayout from '@/js/layouts/DashboardLayout.vue';

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),
    routes: [
        {
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
                    component: () =>
                        import('@/js/pages/ForgotPasswordPage.vue'),
                },
            ],
        },
        {
            path: '/',
            name: 'home',
            component: DashboardLayout,
            redirect: '/dashboard',
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('@/js/pages/DashboardPage.vue'),
                },
                {
                    path: '/companies',
                    name: 'companies',
                    component: () => import('@/js/pages/CompaniesPage.vue'),
                },
                {
                    path: '/account',
                    name: 'account',
                    component: () => import('@/js/pages/AccountPage.vue'),
                },
            ],
        },
        {
            path: '/style-guide',
            name: 'style-guide',
            component: () => import('@/js/views/StyleGuideView.vue'),
        },
    ],
});

// router.beforeEach((to, from, next) => {});

export default router;
