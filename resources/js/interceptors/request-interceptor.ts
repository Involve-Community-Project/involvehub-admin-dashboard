import { type InternalAxiosRequestConfig } from 'axios';
import { login_url, refresh_token_url } from '../api/endpoints';

export const onRequestFulfilled = async (
    config: InternalAxiosRequestConfig<any>
) => {
    const isGuessUrl = [login_url, refresh_token_url].some(
        (s) => config.url?.includes(s)
    );

    if (!isGuessUrl) {
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
};

export const onRequestRejected = (error: any) => {
    Promise.reject(error);
};
