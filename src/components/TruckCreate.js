import React, { useState } from 'react';
import axios from "axios";
import {Form} from "react-router-dom";
import {type} from "@testing-library/user-event/dist/type";
import client from "../utils/Sender";
import {
    InformPostContainer,
    InformPostContentContainer,
    MainTextTitle,
    PostStory,
    TextTitle
} from "../layouts/home_guest_styled";
import {MachineContainer} from "../layouts/mechine_create_styled";
import {AddressContainer, InputField, LabelFields} from "../layouts/user_display";
import {LoginButton} from "../layouts/login_styled";
const YourComponent = () => {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [power, setPower] = useState(300);
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [drivenLength, setDrivenLength] = useState(0);
    const [productionDate, setProductionDate] = useState('');
    const [available, setAvailable] = useState('Wolny');
    const [image, setImage] = useState('');

    const access_token = localStorage.getItem('access');

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('brand', brand);
        formData.append('model', model);
        formData.append('power', power);
        formData.append('registration_number', registrationNumber);
        formData.append('driven_length', drivenLength);
        formData.append('production_date', productionDate);
        formData.append('available', available);
        if (image) {
            formData.append('photo', image, image.name);
        }

        client.post('/api/trucks/', formData, {
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <InformPostContainer>
                <InformPostContentContainer>
                    <TextTitle>NAURA</TextTitle>
                    <MainTextTitle>Create Truck</MainTextTitle>
                    <PostStory>
                        Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.
                        Discover the power of real-time control as our app offers seamless GPS tracking, allowing you to monitor your vehicle's location at all times, ensuring its safety and security.
                    </PostStory>
                </InformPostContentContainer>
            </InformPostContainer>
            <MachineContainer  onSubmit={handleSubmit} encType="multipart/form-data">
                <AddressContainer>
                    <LabelFields>Brand:</LabelFields>
                    <InputField
                        type="text"
                        name="brand"
                        value={brand} onChange={(e) => setBrand(e.target.value)} />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>Model:</LabelFields>
                    <InputField
                        type="text"
                        name="model"
                        value={model} onChange={(e) => setModel(e.target.value)} />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>Power:</LabelFields>

                    <InputField
                        type="number"
                        name="power"
                        value={power} onChange={(e) => setPower(parseInt(e.target.value))} />
                </AddressContainer>

                <AddressContainer>
                    <LabelFields>Registration Number:</LabelFields>

                    <InputField
                        type="text"
                        name="registration_number"
                        value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} />
                </AddressContainer>

                <AddressContainer>
                    <LabelFields>Driven Length:</LabelFields>

                    <InputField
                        type="number"
                        name="driven_length"
                        value={drivenLength} onChange={(e) => setDrivenLength(parseInt(e.target.value))} />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>Production Date:</LabelFields>

                    <InputField
                        type="date"
                        name="production_date"
                        value={productionDate} onChange={(e) => setProductionDate(e.target.value)} />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>Available:</LabelFields>
                    <select name="available" value={available} onChange={(e) => setAvailable(e.target.value)}>
                        <option value="Wolny">Wolny</option>
                        <option value="Zajęty">Zajęty</option>
                    </select>
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>File</LabelFields>
                    <InputField type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
                    <AddressContainer>
                </AddressContainer>
                </AddressContainer>
                <LoginButton type="submit">Create</LoginButton>
            </MachineContainer>
        </div>
    );
};

export default YourComponent;
