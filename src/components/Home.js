import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {PageContainer, LeftPanel, PageWrapper ,LeftPanelItem, ContentContainer} from "../layouts/home_styled.js";
import Navbar from "./Navbar";
const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

function Home(){
    const access_token = localStorage.getItem('access');
    const refresh_token = localStorage.getItem('refresh');

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
            <LeftPanel>
                dsa
            </LeftPanel>
            <ContentContainer>
                dsa
            </ContentContainer>
        </PageContainer>
    )
}

export default Home;