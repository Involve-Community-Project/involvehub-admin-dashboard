import { defineAsyncComponent } from 'vue';
import DashboardLayout from '../layouts/DashboardLayout.vue';
import IHLoading from '@/js/components/atoms/IHLoading.vue';
import IHError from '@/js/components/atoms/IHError.vue';
import { asyncComponentLoader, asyncComponentTester } from '../utils';
import { checkAuth } from '../api/auth';

export const dashboardRoutes = {
    path: '/',
    name: 'home',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: defineAsyncComponent({
                loader: () => import('@/js/pages/DashboardPage.vue'),
                loadingComponent: IHLoading,
                errorComponent: IHError,
            }),
        },
        {
            path: '/companies',
            name: 'companies',
            component: defineAsyncComponent({
                // loader: asyncComponentTester(
                //     import('@/js/pages/CompaniesPage.vue'),
                //     { latency: 10000 }
                // ),
                loader: () => import('@/js/pages/CompaniesPage.vue'),
                loadingComponent: IHLoading,
                errorComponent: IHError,
            }),
        },
        {
            path: '/account',
            name: 'account',
            component: defineAsyncComponent({
                loader: () => import('@/js/pages/AccountPage.vue'),
                loadingComponent: IHLoading,
                errorComponent: IHError,
            }),
        },
        {
            path: '/large-content',
            name: 'large-content',
            component: defineAsyncComponent({
                loader: () => import('@/js/pages/LargeContentPage.vue'),
                loadingComponent: IHLoading,
                errorComponent: IHError,
            }),
        },
    ],
    meta: { requiresAuth: true, requiresGuest: false },
};
