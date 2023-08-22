import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { currentUser, isAuthenticated, login, logout } from '../api/auth';

interface User {
    id: number | null;
    name: string | null;
    email: string | null;
    email_verified_at: string | null;
    created_at: string | null;
    updated_at: string | null;
}

export const useUserStore = defineStore('user', () => {
    const router = useRouter();
    const user = ref({} as User);

    const isAuthenticatedUsser = computed(() => {
        return isAuthenticated();
    });

    async function setUser(data: any) {
        user.value = {
            id: data.id,
            name: data.name,
            email: data.email,
            email_verified_at: data.email_verified_at,
            created_at: data.created_at,
            updated_at: data.updated_at,
        };
    }

    async function loginUser(data: any) {
        const response = await login(data.email, data.password);

        switch (response.status) {
            case 200:
                localStorage.setItem('token', response.data.access_token);
                setUser((await currentUser()).data);

                break;
            case 302:
                break;
            case 401:
                break;
            case 500:
                break;
            default:
                break;
        }
    }

    async function fetchUser() {
        const response = await currentUser();

        switch (response.status) {
            case 200:
                setUser(response.data);
                break;
            case 302:
                break;
            case 401:
                break;
            case 500:
                break;
            default:
                break;
        }
    }

    // async function refreshTokenUser() {
    //     const response = await refreshAccessToken();

    //     switch (response.status) {
    //         case 200:
    //             localStorage.setItem('token', response.data.access_token);
    //             // setUser((await currentUser()).data);

    //             break;
    //         case 302:
    //             break;
    //         case 401:
    //             break;
    //         case 500:
    //             break;
    //         default:
    //             break;
    //     }
    // }

    const logoutUser = async () => {
        await logout();
        router.push({ name: 'login' });
    };

    return {
        user,
        isAuthenticatedUsser,
        setUser,
        loginUser,
        fetchUser,
        logoutUser,
    };
});
