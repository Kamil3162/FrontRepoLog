import axios, {create} from "axios";
import {type} from "@testing-library/user-event/dist/type";
const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

export default client;

export const access_token = localStorage.getItem('access');

export const user_permissions = JSON.parse(
    localStorage.getItem('user_permissions')
);
export const user_permission_group = localStorage.getItem('permission_group');

export const countSessionTime = () => {
    const current_time = new Date();

    const final_time = new Date(localStorage.getItem('final_session_time')); // Convert stored time to Date object
    if ((final_time - current_time)/1000 <= 0){
        localStorage.clear();
        // eslint-disable-next-line no-restricted-globals
        history.push('/');
    }
}
