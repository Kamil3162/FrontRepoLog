import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});

function User() {
    const access_token = localStorage.getItem('access');
    const [data, setData] = useState(null);

    useEffect(() => {
        client.get("/api/detail-user/", {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    console.log(data);

    return (
        <div>
            <Navbar></Navbar>
            {data ? (
                <>
                    <p>Hi nice to meet you {data.first_name} </p>
                    <ul>
                        <li>Apartment Number: {data.apartment_number}</li>
                        <li>City: {data.city}</li>
                        <li>Email: {data.email}</li>
                        <li>First Name: {data.first_name}</li>
                        {/* Add more fields as needed */}
                    </ul>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default User;
