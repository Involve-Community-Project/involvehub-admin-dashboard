import type { AxiosResponse } from 'axios';
import axios from 'axios';
import {
    check_auth_url,
    login_url,
    logout_url,
    refresh_token_url,
    user_url,
    change_password_url,
} from './endpoints';

const isAuthenticated = (): Promise<boolean> => {
    // return localStorage.getItem('token') !== null;
    return checkAuth()
        .then((response) => {
            return response.status === 200;
        })
        .catch(() => {
            return false;
        })
        .finally(() => {
            return false;
        });
};

const checkAuth = () => {
    return new Promise<AxiosResponse<any, any>>((resolve, reject) => {
        axios
            .get(check_auth_url)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const currentUser = () => {
    return new Promise<AxiosResponse<any, any>>((resolve, reject) => {
        axios
            .get(user_url)
            .then((response) => {
                // const userStore = useUserStore();
                // userStore.setUser(response.data);
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const login = (email: string, password: string) => {
    return new Promise<AxiosResponse<any, any>>((resolve, reject) => {
        axios
            .post(login_url, { email, password })
            .then((response) => {
                const access_token = response.data.access_token;
                localStorage.setItem('token', access_token);
                // axios.defaults.headers[
                //     'Authorization'
                // ] = `Bearer ${access_token}`;
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const refreshAccessToken = () => {
    return new Promise<AxiosResponse<any, any>>((resolve, reject) => {
        axios
            .post(refresh_token_url)
            .then((response) => {
                const access_token = response.data.access_token;
                localStorage.setItem('token', access_token);
                // axios.defaults.headers[
                //     'Authorization'
                // ] = `Bearer ${access_token}`;
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const changePassword = (
    current_password: string,
    new_password: string,
    new_password_confirmation: string
) => {
    return new Promise<AxiosResponse<any, any>>((resolve, reject) => {
        axios
            .post(change_password_url, {
                current_password: current_password,
                password: new_password,
                password_confirmation: new_password_confirmation,
            })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const requestPasswordReset = (email: string) => {
    return new Promise<AxiosResponse<any, any>>((resolve, reject) => {
        axios
            .post('/api/forgot-password', { email })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const logout = () => {
    axios
        .post(logout_url)
        .then(() => {
            localStorage.removeItem('token');
            delete axios.defaults.headers['Authorization'];
        })
        .catch(() => {});
};

export {
    checkAuth,
    isAuthenticated,
    currentUser,
    login,
    refreshAccessToken,
    changePassword,
    logout,
    requestPasswordReset,
};
