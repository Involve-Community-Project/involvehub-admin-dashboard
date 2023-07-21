import { createRouter, createWebHashHistory } from 'vue-router';
import { authRoutes } from './auth-routes';
import { dashboardRoutes } from './dashboard-routes';
import { isAuthenticated } from '../api/auth';

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),
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

router.beforeEach(async (to, from, next) => {
    const reqAuth = to.matched.some((record) => record.meta.requiresAuth);
    const reqGuest = to.matched.some((record) => record.meta.requiresGuest);

    if (!reqAuth && !reqGuest) {
        next();
        return;
    }

    const authenticated = await isAuthenticated();

    if (reqAuth && !authenticated) {
        next({ name: 'login', query: { redirect: to.fullPath } });
    } else if (reqGuest && authenticated) {
        next({ name: 'dashboard' });
    } else {
        next();
    }
});

export default router;
