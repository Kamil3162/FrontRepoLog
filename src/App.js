import axios from "axios";
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/User";
import HomeGuest from "./components/HomeGuest";
import SemiTrailerForm from "./components/SemiTrailerCreate";
import TruckCreate from "./components/TruckCreate";
import Truck from "./components/Truck";
import SemiTrailer from "./components/SemiTrailer";
import LeftPanelComponent from "./components/LeftPanel";
import ReceivmentsList from "./components/ReceivmentsList.js";
import ReceivmentFromCreate from "./components/ReceivmentsFormCreate";
import {
    PageContainer,
    LeftPanel,
    PageWrapper,
    ContentContainer,
    LeftPanelLogo,
    PanelItemText,
    LogoPanelItem
} from "./layouts/home_styled.js";



function App(){
    return (
    <PageContainer>
        <LeftPanelComponent/>
        <ContentContainer>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Register/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/home-guest" element={<HomeGuest/>}/>
                <Route path="/semitrailer-create" element={<SemiTrailerForm/>}/>
                <Route path="/truck-create" element={<TruckCreate/>}/>
                <Route path="/truck/:pk" element={<Truck/>}/>
                <Route path="/truck-create" element={<SemiTrailer/>}/>
                <Route path="/semitrailer/:pk" element={<SemiTrailer/>}/>
                <Route path="/receivments/" element={<ReceivmentsList/>}/>
                <Route path="/receivment-create/" element={<ReceivmentFromCreate/>}/>
            </Routes>
        </ContentContainer>
    </PageContainer>
    )
}

export default App;