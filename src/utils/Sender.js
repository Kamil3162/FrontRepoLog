import axios from "axios";

const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

export default client;

export const access_token = localStorage.getItem('access');

export const user_permissions = JSON.parse(
    localStorage.getItem('user_permissions')
);
export const user_permission_group = localStorage.getItem('permission_group');