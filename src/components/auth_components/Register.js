import axios from "axios";
import React, { useState } from 'react';
import {
    LoginButton,
    LoginDisplay, LoginDisplayPhoto, LoginDisplayPhotoContainer,
    LoginEntry,
    LoginForm,
    LoginInput,
    LoginLabel, LoginPageContainer,
    LoginPart
} from "../../assets/styles/login_styled";
import cargophoto from "../../assets/icons/truck-login.jpg";
import client from "../../utils/Sender";
import {AlertComponent} from "../../utils/FunctionComponents";

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

    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [infoRegister, setInfoRegister] = useState("");
    const [infoRegisterTitle, setInfoRegisterTitle] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
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
        .then(response =>{
            setInfoRegister("Pomyslnie zalozono konto");
            setInfoRegisterTitle("Sukces");
            setIsAlertVisible(true);

        })
        .catch(error =>{
            setInfoRegister("Cos poszlo nie tak sprobuj jeszcze raz");
            setInfoRegisterTitle("Blad");
            setIsAlertVisible(true);

        })
    }


    return (
        <div>
            <LoginPageContainer>
                <LoginPart>
                    <LoginEntry>Register</LoginEntry>
                    <LoginForm onSubmit={handleSubmit}>
                        <LoginInput
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                            required
                        />
                        <br/>
                        <LoginInput
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                            required
                        />
                        <br/>

                        <LoginInput
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                        <br/>

                        <LoginInput
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                        <br/>

                        <LoginInput
                            type="text"
                            name="houseNumber"
                            value={houseNumber}
                            onChange={(e) => setHouseNumber(e.target.value)}
                            placeholder="House Number"
                            required
                        />
                        <br/>

                        <LoginInput
                            type="text"
                            name="apartmentNumber"
                            value={apartmentNumber}
                            onChange={(e) => setApartmentNumber(e.target.value)}
                            placeholder="Apartment Number"
                        />
                        <br/>

                        <LoginInput
                            type="text"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="City"
                            required
                        />
                        <br/>

                        <LoginInput
                            type="text"
                            name="street"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            placeholder="Street"
                            required
                        />
                        <br/>

                        <LoginInput
                            type="text"
                            name="zipCode"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            placeholder="Zip Code"
                            required
                        />
                        <br/>

                        <LoginInput
                            type="tel"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Phone Number"
                            required
                        />

                        <LoginButton type="submit">Register</LoginButton>
                    </LoginForm>

                </LoginPart>
                <LoginDisplay>
                    <LoginDisplayPhotoContainer>
                        <LoginDisplayPhoto src={cargophoto}/>
                    </LoginDisplayPhotoContainer>
                </LoginDisplay>
            </LoginPageContainer>
        </div>
    )
}

export default Register;