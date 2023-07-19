
import axios from "axios";
import NavbarStyle from "../layouts/NavbarStyled.js";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

function Navbar(){
    const [isValidSession, setIsValidSession] = useState(false);
    const access_token = localStorage.getItem('access');
    const refresh_token = localStorage.getItem('refresh');
    const navigate = useNavigate();

    useEffect(() => {
        client
            .post(
                "/api/validate-token/",
                {
                    token: access_token,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response) => {
                setIsValidSession(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const handleLogout = () => {
        client
            .post(
                '/api/logout-token/',
                {
                    access_token: access_token,
                    refresh_token: refresh_token,
                },
                {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                }
            )
            .then(response => {
                localStorage.clear();
                navigate('/login');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <NavbarStyle>
            { isValidSession ? (
                <button onClick={handleLogout}>Logout</button>
            ): (
                <p>Error something wrong</p>
            )}
        </NavbarStyle>
    )
}

export default Navbar;