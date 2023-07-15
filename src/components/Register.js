import axios from "axios";
import React, { useState } from 'react';

<<<<<<< HEAD
const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})
=======
>>>>>>> 12fd0c2 (Add login and logout component)
const Register = () => {
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
    const handleSubmit = (event) =>{
        event.preventDefault();
<<<<<<< HEAD
        client.post('/api/register/token', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            zip_code: zipCode,
            house_number: houseNumber,
            phone_number: phoneNumber,
            apartment_number: apartmentNumber,
            city: city,
            street: street
        })
=======
        axios.post('/api/register', )
>>>>>>> 12fd0c2 (Add login and logout component)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
            />
            <br/>
            <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
            />
            <br/>

            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <br/>

            <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <br/>

            <input
                type="text"
                name="houseNumber"
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
                placeholder="House Number"
                required
            />
            <br/>

            <input
                type="text"
                name="apartmentNumber"
                value={apartmentNumber}
                onChange={(e) => setApartmentNumber(e.target.value)}
                placeholder="Apartment Number"
            />
            <br/>

            <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                required
            />
            <br/>

            <input
                type="text"
                name="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Street"
                required
            />
            <br/>

            <input
                type="text"
                name="zipCode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Zip Code"
                required
            />
            <br/>

            <input
                type="tel"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                required
            />

            <button type="submit">Register</button>
        </form>
    )
}

export default Register;