import axios, { type AxiosResponse } from 'axios';
import { refreshAccessToken } from '../api/auth';
import { login_url, refresh_token_url } from '../api/endpoints';

export const onResponseFulfilled = async (
    response: AxiosResponse<any, any>
) => {
    return response;
};

export const onResponseRejected = async (error: any) => {
    const conf = error.config;
    const isUnauthorized = error.response.status === 401;
    const hasAuthHeader = !!conf.headers.Authorization;
    const isGuessURL = [login_url, refresh_token_url].some(
        (s) => conf.url?.includes(s)
    );

    if (isUnauthorized && hasAuthHeader && !isGuessURL && !conf._retry) {
        conf._retry = true;
        const response = await refreshAccessToken();

        if (response.status === 200) {
            const access_token = response.data.access_token;
            conf.headers['Authorization'] = `Bearer ${access_token}`;
            return axios(conf);
        }

        localStorage.removeItem('token');
        delete axios.defaults.headers['Authorization'];
        delete conf.headers['Authorization'];
    }

    return Promise.reject(error);
};
