
import axios from "axios";
import NavbarStyle from "../layouts/NavbarStyled.js";
import {useState, useEffect} from "react";


const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

function Navbar(){
    const [isValidSession, setIsValidSession] = useState(false);
    const access_token = localStorage.getItem('access');

    useEffect(() =>{
        client.get('/api/validate-token/',{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        })
        .then(response =>{
            console.log(response);
            setIsValidSession(response.data['valid']);
        })
        .catch(error =>{
            console.log(error);
        })
    });

    return (
        <NavbarStyle>
            { isValidSession ? (
                <button>Logout</button>
            ): (
                <p>Error something wrong</p>
            )}
        </NavbarStyle>
    )
}

export default Navbar;