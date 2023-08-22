import { createRouter, createWebHistory } from 'vue-router';
import { authRoutes } from './auth-routes';
import { dashboardRoutes } from './dashboard-routes';
import { isAuthenticated } from '../api/auth';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        authRoutes,
        dashboardRoutes,
        {
            path: '/style-guide',
            name: 'style-guide',
            component: () => import('@/js/views/StyleGuideView.vue'),
        },
    ],
});

router.beforeEach(async (to) => {
    const dialogs = document.querySelectorAll(
        'dialog[open]'
    ) as NodeListOf<HTMLDialogElement>;

    if (dialogs.length > 0) {
        dialogs.forEach((dialog) => dialog.close());
        return false;
    }

    const reqAuth = to.matched.some((record) => record.meta.requiresAuth);
    const reqGuest = to.matched.some((record) => record.meta.requiresGuest);
    const authenticated = await isAuthenticated();

    if (!reqAuth && !reqGuest) {
        return;
    }

    if (reqAuth && !authenticated) {
        return { name: 'login', query: { redirect: to.fullPath } };
    }

    if (reqGuest && authenticated) {
        return { name: 'dashboard' };
    }

    return;
});

export default router;
