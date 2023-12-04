import axios, {create} from "axios";
import {type} from "@testing-library/user-event/dist/type";
import {logOutHook} from "../hooks/receivment_hooks";
const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

export default client;

export const access_token = localStorage.getItem('access');

export const user_permissions = JSON.parse(
    localStorage.getItem('user_permissions')
);

export const user_data = JSON.parse(localStorage.getItem('user'));

export const user_permission_group = localStorage.getItem('permission_group');

export const headers = {
    Authorization: `Bearer ${access_token}`
};

export const countSessionTime = () => {
    const current_time = new Date();

    const final_time = new Date(localStorage.getItem('final_session_time')); // Convert stored time to Date object
    if ((final_time - current_time)/1000 <= 0){
        localStorage.clear();
        // eslint-disable-next-line no-restricted-globals
        history.push('/');
    }

    console.log(current_time);
}
export const handleUpdateUser = (userData, access_token, user_id) => {
    console.log("Handle update user");
    client
        .post(`/api/user/${user_id}`, userData, {
            headers: {
                Authorization: `Bearer ${access_token}`
            },
        })
        .then(response => {
            console.log("esa");
            console.log(response);
            alert("Zmiana danych uzytkownika zakonczona sukcesem");
        })
        .catch(error => {
            console.log(error);

        });
};


