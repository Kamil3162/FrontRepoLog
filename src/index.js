import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/User";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Register/>}/>
                <Route path="/user" element={<User/>}/>
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
);

reportWebVitals();
/*
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "tndtoe@example.com",
  "password": "mysecretpassword",
  "house_number": "123",
  "apartment_number": "4B",
  "city": "New York",
  "street": "Main Street",
  "phone_number": 198345679,
   "zip_code": "32-202"
}
 */