import AuthLayout from '@/js/layouts/AuthLayout.vue';
import IHLoading from '@/js/components/atoms/IHLoading.vue';
import IHError from '@/js/components/atoms/IHError.vue';
import { defineAsyncComponent } from 'vue';
import type { AxiosError } from 'axios';

export const authRoutes = {
    path: '/',
    name: 'auth',
    component: AuthLayout,
    redirect: '/login',
    children: [
        {
            path: '/login',
            name: 'login',
            component: defineAsyncComponent({
                loader: () => import('@/js/pages/LoginPage.vue'),
                loadingComponent: IHLoading,
                errorComponent: IHError,
                onError: (error, retry, fail, attempts) => {
                    console.log(error, retry, fail, attempts);
                    if (error.name === 'AxiosError') {
                        if ((error as AxiosError).response?.status === 401) {
                            // redirect to login
                            // retry();
                        }
                    }

                    fail();
                },
            }),
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            component: defineAsyncComponent({
                loader: () => import('@/js/pages/ForgotPasswordPage.vue'),
                loadingComponent: IHLoading,
                errorComponent: IHError,
            }),
        },
    ],
    meta: { requiresAuth: false, requiresGuest: true },
};
