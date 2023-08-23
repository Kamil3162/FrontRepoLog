import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import icon1 from "../assets/dashboard.png";
import icon2 from "../assets/dashboard.png";
import icon3 from "../assets/settings.png";
import icon4 from "../assets/logout.png";
import icon5 from "../assets/trailer.png";
import icon6 from "../assets/user.png";
import icon7 from "../assets/conversation.png";
import icon8 from "../assets/contract.png";
import icon9 from "../assets/cargo-truck.png";

import {
    PageContainer,
    LeftPanel,
    PageWrapper,
    LeftPanelItem,
    ContentContainer,
    LeftPanelLogo,
    PanelItemText,
    LogoPanelItem
} from "../assets/styles/home_styled.js";

import Navbar from "./Navbar";
import {GlobalStyle} from "../fonts/fontStyles.js";


const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

function Home(){
    const access_token = localStorage.getItem('access');

    useEffect(() =>{
        client.get('/api/home/token',{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(response =>{
                console.log(response.data);
            })
            .catch(error =>{
                console.log(error);
            })
    });

    return (
        <PageContainer>
            <ContentContainer>
                dsa
            </ContentContainer>
        </PageContainer>
    )
}

export default Home;