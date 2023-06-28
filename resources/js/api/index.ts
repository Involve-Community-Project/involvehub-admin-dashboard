import axios from 'axios';
import { check_auth_url, login_url, logout_url } from './endpoints';

const loginReq = (email: string, password: string) => {
    return axios.post(login_url, { email, password });
};

const logoutReq = () => {
    return axios.post(logout_url);
};

const checkAuthReq = () => {
    return axios.get(check_auth_url);
};

export { loginReq, logoutReq, checkAuthReq };

export default {
    loginReq: loginReq,
    logoutReq: logoutReq,
    checkAuthReq: checkAuthReq,
};
