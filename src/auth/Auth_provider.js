import React, {createContext, useState, useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import client, {access_token} from "../utils/Sender";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true); // response status is 200
    const [userPermissionGroup, setUserPermissionGroup] = useState(localStorage.getItem('user_permission_group'));
    const [leftPanelToogled, setLeftPanelToogled] = useState(false);

    const navigate = useNavigate();
    const login = (email, password) =>{
        client.post("/api/login/token",{
            email,
            password
        })
            .then(response => {

                let today = new Date();
                let hour_later = new Date(today);
                hour_later.setHours(hour_later.getHours() + 1);
                localStorage.setItem('access', response.data.access);
                localStorage.setItem('refresh', response.data.refresh);
                localStorage.setItem('user_permissions', JSON.stringify(response.data.permissions));
                localStorage.setItem('permission_group', JSON.parse(response.data.permission_group)[0].fields.name);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                localStorage.setItem('start_session_time', today);
                localStorage.setItem('final_session_time', hour_later);

                window.dispatchEvent(new Event('storageUpdate'));

                console.log('esa test logowania');

                navigate('/home-guest');
                window.location.reload(false);

            })
            .catch(error =>{
                console.log(error);
            })
    };
    const logout = () => {
        localStorage.clear();
        setUserPermissionGroup(null);
        window.dispatchEvent(new Event('storageUpdate')); // Dispatch custom event
        navigate('/login');
    };

    useEffect(() => {
        const handleStorageUpdate = () => {
            setUserPermissionGroup(localStorage.getItem('user_permission_group'));
        };

        window.addEventListener('storageUpdate', handleStorageUpdate);

        return () => {
            window.removeEventListener('storageUpdate', handleStorageUpdate);
        };
    }, []);

    return (
        <AuthContext.Provider value={{login, logout, userPermissionGroup, leftPanelToogled}}>
            {children}
        </AuthContext.Provider>
    );
};