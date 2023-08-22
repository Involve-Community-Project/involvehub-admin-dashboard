import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { companies_url, company_url } from './endpoints';

export const getCompanies = () => {
    return new Promise<AxiosResponse<any, any>>((resolve, reject) => {
        axios
            .get(companies_url)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const getCompanyById = (id: string | number) => {
    return new Promise<AxiosResponse<any, any>>((resolve, reject) => {
        axios
            .get(company_url(id))
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const createCompany = (
    name: string,
    email: string,
    password: string
) => {
    return new Promise<AxiosResponse<any, any>>((resolve, reject) => {
        axios
            .post(companies_url, { name, email, password })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const updateCompany = (
    id: string | number,
    name: string,
    email: string
) => {
    return new Promise<AxiosResponse<any, any>>((resolve, reject) => {
        axios
            .put(company_url(id), { name, email })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const deleteCompany = (id: string | number) => {
    return new Promise<AxiosResponse<any, any>>((resolve, reject) => {
        axios
            .delete(company_url(id))
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
