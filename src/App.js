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
import ReceivmentFromCreate from "./components/ReceivmentsFormCreate.js";
import ReceivmentsDetail from "./components/ReceivmentDetail";
import Trucks from "./components/Trucks";
import {
    PageContainer,
    LeftPanel,
    PageWrapper,
    ContentContainer,
    LeftPanelLogo,
    PanelItemText,
    LogoPanelItem
} from "./assets/styles/home_styled.js";
import SemiTrailers from "./components/SemiTrailers";
import Logout from "./components/Logout";
import SemiTrailerEquipmentCreate from "./components/SemiTrailerEquipmentCreate";
import TruckEquipmentCreate from "./components/TruckEquipmentCreate";
import Users from "./components/Users";
import {GoogleMap} from "@react-google-maps/api";
import MapGen from "./components/MapGen";
import Navbar from "./components/Navbar";
import ActiveReceivment from "./components/ActiveReceivment";
import CreateLocation from "./components/CreateLocation";



function App(){
    return (
    <PageContainer>
        <LeftPanelComponent/>
        <ContentContainer>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
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
            </Routes>
        </ContentContainer>
    </PageContainer>
    )
}

export default App;