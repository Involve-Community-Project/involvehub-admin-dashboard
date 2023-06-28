import type { AxiosResponse } from 'axios';
import { loginReq, logoutReq } from './index';

const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
};

const login = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            localStorage.setItem('token', '123456789');
            resolve(true);
        }, 10000);
    });
    // return new Promise<AxiosResponse<any, any>>((resolve, reject) => {
    //     loginReq(email, password)
    //         .then((response) => {
    //             localStorage.setItem('token', response.data.token);
    //             resolve(response);
    //         })
    //         .catch((error) => {
    //             reject(error);
    //         });
    // });
};

const logout = () => {
    logoutReq()
        .then(() => {
            localStorage.removeItem('token');
        })
        .catch((error) => {
            console.log(error);
        });
};

export { isAuthenticated, login, logout };
