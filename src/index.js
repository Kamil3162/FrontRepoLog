import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import { BrowserRouter } from 'react-router-dom'
import Layout from "./components/Layout";

render(
    <BrowserRouter>
        <Layout>
            <App/>
        </Layout>
    </BrowserRouter>,
    document.getElementById('root')
)
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