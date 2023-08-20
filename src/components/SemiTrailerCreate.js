import React from 'react';
import axios from "axios";
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
import {useState} from "react";
function SemiTrailerForm(){

    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [power, setPower] = useState('');
    const [productionYear, setProductionYear] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [semiNote, setSemiNote] = useState(true);
    const [image, setImage] = useState(null);

    const handleInputChange = (e) => {
        const name = e.target.name;
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        if (e.target.type === 'image'){
            value = e.target.files[0];
            setImage(value);
        }

        switch (name){
            case 'brand':
                setBrand(value);
                break;
            case 'model':
                setModel(value);
                break;
            case 'production_year':
                setProductionYear(value);
                break;
            case 'registration_number':
                setRegistrationNumber(value);
                break;
            case 'semi_note':
                setSemiNote(value);
                break;
            case 'image':
                setImage(value);
                break;
            default:
                break;
        }
    };

    const submitForm = (e) => {
        e.preventDefault();
        let access_token = localStorage.getItem('access');
        alert('Form submitted: ' + JSON.stringify(this.state));
        client
            .post(
                '/api/semitrailers/',
            {
                brand: brand,
                model: model,
                power: power,
                registration_number: registrationNumber,
                production_year: productionYear,
                semi_note: semiNote,
                photo:image
            },
            {

            headers:{
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'multipart/form-data',

            },
        }
        ).then(response =>{
            console.log(response);
        }).catch(error =>{
            console.log(error);
        })
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
            <MachineContainer onSubmit={submitForm} encType="multipart/form-data">
                <AddressContainer>
                    <LabelFields>Brand: </LabelFields>
                    <InputField name="brand" type="text" onChange={handleInputChange} />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>Model: </LabelFields>
                    <InputField name="model" type="text" onChange={handleInputChange} />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>Production Year: </LabelFields>
                    <InputField name="production_year" type="date" onChange={handleInputChange} />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>Registration Number: </LabelFields>
                    <InputField name="registration_number" type="text" onChange={handleInputChange} />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>Semi Note: </LabelFields>
                    <InputField name="semi_note" type="checkbox" onChange={handleInputChange} />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>
                        Image:
                        <InputField type="file" name="image" onChange={handleInputChange} />
                    </LabelFields>
                </AddressContainer>
                <LoginButton type="submit">Create</LoginButton>
            </MachineContainer>
        </div>
    );
}

export default SemiTrailerForm;