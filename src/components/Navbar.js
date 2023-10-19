
import axios from "axios";
import {NavbarContainer, NavbarLoginContainer, NavItem, Logo} from "../assets/styles/navbar_styled.js";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import client from "../utils/Sender";
import {ButtonLink} from "../assets/styles/link_buttons";
import {user_data} from "../utils/Sender";

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

            <NavbarLoginContainer>
                { isValidSession ? (
                    <>
                        <NavItem href="/">Home</NavItem>
                        <NavItem href="/contact">Contact</NavItem>
                        <NavItem style={{
                            border:'none',
                            backgroundColor: "purple"}}>Hello</NavItem>
                        <NavItem style={{ width:'120px'}}
                                 onClick={handleLogout}>Logout</NavItem>
                    </>
                ): (
                    <NavItem href="/login">Login</NavItem>

                )}
            </NavbarLoginContainer>
        </NavbarContainer>
    )
}

export default Navbar;