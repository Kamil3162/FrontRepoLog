import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import icon1 from "../layouts/icons/dashboard.png";
import icon2 from "../layouts/icons/dashboard.png";
import icon3 from "../layouts/icons/settings.png";
import icon4 from "../layouts/icons/logout.png";
import icon5 from "../layouts/icons/trailer.png";
import icon6 from "../layouts/icons/user.png";
import icon7 from "../layouts/icons/conversation.png";
import icon8 from "../layouts/icons/contract.png";
import icon9 from "../layouts/icons/cargo-truck.png";

import {
    PageContainer,
    LeftPanel,
    PageWrapper,
    LeftPanelItem,
    ContentContainer,
    LeftPanelLogo,
    PanelItemText,
    LogoPanelItem
} from "../layouts/home_styled.js";

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