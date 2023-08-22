const endPoints = {
    login_url: '/api/login',
    refresh_token_url: '/api/refresh-token',
    logout_url: '/api/logout',
    check_auth_url: '/api/check-auth',
    register_url: '/api/register',
    user_url: '/api/user',
    users_url: '/api/users',
    user_roles_url: '/api/user-roles',
    change_password_url: '/api/change-password',
    edit_contact_info_url: '/api/contact-info',
    companies: '/api/companies',
    company: (id: string | number) => `/api/companies/${id}`,
    create_company: '/api/companies',
    update_company: (id: string | number) => `/api/companies/${id}`,
    delete_company: (id: string | number) => `/api/companies/${id}`,
};

export const login_url = endPoints.login_url;
export const refresh_token_url = endPoints.refresh_token_url;
export const logout_url = endPoints.logout_url;
export const check_auth_url = endPoints.check_auth_url;
export const register_url = endPoints.register_url;
export const user_url = endPoints.user_url;
export const users_url = endPoints.users_url;
export const user_roles_url = endPoints.user_roles_url;
export const change_password_url = endPoints.change_password_url;
export const edit_contact_info_url = endPoints.edit_contact_info_url;
export const companies_url = endPoints.companies;
export const company_url = endPoints.company;
export const create_company_url = endPoints.create_company;
export const update_company_url = endPoints.update_company;
export const delete_company_url = endPoints.delete_company;

export default endPoints;
