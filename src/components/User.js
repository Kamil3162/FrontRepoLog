import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import client from "../utils/Sender";

function User() {
    const access_token = localStorage.getItem('access');

    const [data, setData] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [apartmentNumber, setApartmentNumber] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    useEffect(() => {
        client.get("/api/detail-user/", {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(response => {
                setData(response.data);
                setFirstName(response.data.first_name);
                setLastName(response.data.last_name);
                setEmail(response.data.email);
                setHouseNumber(response.data.house_number);
                setApartmentNumber(response.data.apartment_number);
                setCity(response.data.city);
                setStreet(response.data.street);
                setZipCode(response.data.zip_code);
                setPhoneNumber(response.data.phone_number);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleUpdate = () => {
        client.post('/api/detail-user/',{
            headers:{
                Authorization: `Bearer ${access_token}`
            },
            first_name:firstName,
            last_name: lastName,
            email: email,
            password: password,
            house_number: houseNumber,
            apartment_number: apartmentNumber,
            city: city,
            street: street,
            phone_number: phoneNumber,
            zip_code: zipCode
        })
            .then(response =>{
                console.log(response);
            })
            .catch(error =>{
                console.log(error)
            });
    }

    return (
        <div>
            {data ? (
                <>
                <div>
                    <h2>User Update Form</h2>
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <br/>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <br/>
                    <label>Email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br/>
                    <label>HopuseNum</label>
                    <input
                        type="text"
                        value={houseNumber}
                        onChange={(e) => setHouseNumber(e.target.value)}
                    />
                    <br/>
                    <label>Aparment</label>
                    <input
                        type="text"
                        value={apartmentNumber}
                        onChange={(e) => setApartmentNumber(e.target.value)}
                    />
                    <br/>
                    <label>City</label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <br/>
                    <label>Street</label>
                    <input
                        type="text"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />
                    <br/>
                    <label>Zip code</label>
                    <input
                        type="text"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                    <br/>
                    <label>Phone:</label>
                    <input
                        type="number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <br/>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Update</button>
                </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default User;
