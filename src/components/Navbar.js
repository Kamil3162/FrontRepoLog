
import axios from "axios";
import {NavbarContainer, NavbarStyle, NavItem, Logo} from "../assets/styles/navbar_styled.js";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import client from "../utils/Sender";


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
        <NavbarContainer>
            <Logo src="/path/to/logo.png" alt="Logo" />
            <NavItem href="/">Home</NavItem>
            <NavItem href="/login">Login</NavItem>
            <NavItem href="/contact">Contact</NavItem>
            <NavbarStyle>
                { isValidSession ? (
                    <button onClick={handleLogout}>Logout</button>
                ): (
                    <p>Error something wrong</p>
                )}
            </NavbarStyle>
        </NavbarContainer>
    )
}

export default Navbar;