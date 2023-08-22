import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { edit_contact_info_url } from './endpoints';

export const editUserContactInfo = (name: string, email: string) => {
    return new Promise<AxiosResponse<any, any>>((resolve, reject) => {
        axios
            .post(edit_contact_info_url, { name, email })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
