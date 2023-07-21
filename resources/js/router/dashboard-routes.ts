import DashboardLayout from '../layouts/DashboardLayout.vue';

export const dashboardRoutes = {
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
    meta: { requiresAuth: true, requiresGuest: false },
};
