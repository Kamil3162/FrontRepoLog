import axios from "axios";
import React, {StrictMode, useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/user/User";
import HomeGuest from "./components/home/HomeGuest";
import SemiTrailerForm from "./components/semitrailer/SemiTrailerCreate";
import TruckCreate from "./components/truck/TruckCreate";
import Truck from "./components/truck/Truck";
import SemiTrailer from "./components/semitrailer/SemiTrailer";
import LeftPanelComponent from "./components/left_panel/LeftPanel";
import ReceivmentsList from "./components/receivment/ReceivmentsList.js";
import ReceivmentFromCreate from "./components/receivment/ReceivmentsFormCreate.js";
import ReceivmentsDetail from "./components/receivment/ReceivmentDetail";
import Trucks from "./components/truck/Trucks";
import {
    PageContainer,
    LeftPanel,
    PageWrapper,
    ContentContainer,
    LeftPanelLogo,
    PanelItemText,
    LogoPanelItem
} from "./assets/styles/home_styled.js";
import SemiTrailers from "./components/semitrailer/SemiTrailers";
import Logout from "./components/Logout";
import SemiTrailerEquipmentCreate from "./components/semitrailer/SemiTrailerEquipmentCreate";
import TruckEquipmentCreate from "./components/truck/TruckEquipmentCreate";
import Users from "./components/user/Users";
import {GoogleMap} from "@react-google-maps/api";
import MapGen from "./components/MapGen";
import Navbar from "./components/Navbar";
import ActiveReceivment from "./components/receivment/ActiveReceivment";
import CreateLocation from "./components/CreateLocation";
import ChatDashboard from "./components/chat/ChatDashboard";
import {AuthProvider} from "./auth/Auth_provider";
import Footer from "./components/footer/Footer";


function App(){
    return (
        <StrictMode>
            <AuthProvider>
                <Navbar/>
                <PageContainer>
                    <LeftPanelComponent/>
                    <ContentContainer>
                        <Routes>
                            <Route path="/" element={<HomeGuest/>}/>
                            <Route path="/navbar" element={<Navbar/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/logout" element={<Logout/>}/>
                            <Route path="/user" element={<User/>}/>
                            <Route path="/users" element={<Users/>}/>
                            <Route path="/semitrailer-create" element={<SemiTrailerForm/>}/>
                            <Route path="/truck-create" element={<TruckCreate/>}/>
                            <Route path="/truck/:pk" element={<Truck/>}/>
                            <Route path="/trucks" element={<Trucks/>}/>
                            <Route path="/trucks/:pk" element={<Trucks/>}/>
                            <Route path="/semitrailer-create" element={<SemiTrailer/>}/>
                            <Route path="/semitrailer/:pk" element={<SemiTrailer/>}/>
                            <Route path="/active-receivment/" element={<ActiveReceivment/>}/>
                            <Route path="/create-location/" element={<CreateLocation/>}/>
                            <Route path="/receivments/" element={<ReceivmentsList/>}/>
                            <Route path="/receivments/:pageNumber" element={<ReceivmentsList/>}/>
                            <Route path="/receivment-create/" element={<ReceivmentFromCreate/>}/>
                            <Route path="/receivment-detail/:pk" element={<ReceivmentsDetail/>}/>
                            <Route path="/home-guest" element={<HomeGuest/>}/>
                            <Route path="/semi-trailers" element={<SemiTrailers/>}/>
                            <Route path="/semi-trailers/:pk" element={<SemiTrailers/>}/>
                            <Route path="/truck-equipment-create" element={<TruckEquipmentCreate/>}/>
                            <Route path="/semi-trailers-equipment-create" element={<SemiTrailerEquipmentCreate/>}/>
                            <Route path="/maps" element={<MapGen/>}/>
                            <Route path="/chat" element={<ChatDashboard/>}/>
                        </Routes>
                    </ContentContainer>
                </PageContainer>
                <Footer/>
            </AuthProvider>
        </StrictMode>
    )
}

export default App;