import React from 'react';
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
import {access_token} from "../utils/Sender";
function SemiTrailerForm(){

    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [productionYear, setProductionYear] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [available, setAvailable] = useState('Wolny');
    const [semiNote, setSemiNote] = useState(true);
    const [image, setImage] = useState(null);


    const submitForm = (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('brand', brand);
        formData.append('model', model);
        formData.append('registration_number', registrationNumber);
        formData.append('production_year', productionYear);
        formData.append('semi_note', semiNote);
        formData.append('available', available);
        if (image) {
            formData.append('photo', image, image.name);
        }

        client
            .post(
                '/api/semitrailers/',formData, {
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

    const handleSemiNoteStatus = (event) => {
        const checkbox = event.target;
        if (checkbox.checked === true){
            setSemiNote(true);
        }
        else {
            setSemiNote(false);
        }
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
                    <InputField name="brand" type="text" onChange={(e) => setBrand(e.target.value)} />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>Model: </LabelFields>
                    <InputField name="model" type="text" onChange={(e) => setModel(e.target.value)}  />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>Production Year: </LabelFields>
                    <InputField name="production_year" type="date" onChange={(e) => setProductionYear(e.target.value)} />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>Registration Number: </LabelFields>
                    <InputField name="registration_number" type="text" onChange={(e) => setRegistrationNumber(e.target.value)}  />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>Semi Note: </LabelFields>
                    <InputField name="semi_note" type="checkbox" onChange={handleSemiNoteStatus}  />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>
                        Image:
                        <InputField type="file" name="image" onChange={(e) => setImage(e.target.files[0])}  />
                    </LabelFields>
                </AddressContainer>
                <LoginButton type="submit">Create</LoginButton>
            </MachineContainer>
        </div>
    );
}

export default SemiTrailerForm;