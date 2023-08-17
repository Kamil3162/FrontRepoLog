import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {access_token} from "../utils/Sender";
import client from "../utils/Sender";

import {
    MachineDetailContainer,
    MachineHeaderName,
    HeaderContainer,
    MachineDetail,
    MachinePhoto,
    MachineInformation,
    MachineLabel,
    MachineDetailInformation,
    MachineDetailRow,
    MachinePhotoContainer
} from "../layouts/machine_detail_styled";

import {
    InformPostContainer,
    InformPostContentContainer,
    InformPostPhoto,
    MainTextTitle,
    PostStory,
    TextTitle
} from "../layouts/home_guest_styled";
import {AddressContainer, LabelFields, InputField, UpdateButton} from "../layouts/user_display";
import icon6 from "../layouts/icons/truck-img.jpg";
import {MachinePhotoInput} from "../layouts/truck_list_styled";

function TruckDisplay(){

    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [power, setPower] = useState("");
    const [registration_number, setRegistration_number] = useState("");
    const [driven_lenght, setDriven_lenght] = useState("");
    const [production_data, setProduction_data] = useState("");
    const [aviable, setAviable] = useState("");
    const [photo, setPhoto] = useState("");

    const { pk } = useParams();
    const access_token = localStorage.getItem('access');
    /*
        ✔
        X✔
     */
    useEffect(() =>{
        client.get(`/api/trucks/${pk}/`,{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(response =>{
                console.log(response);
                let data = response.data
                setBrand(data.brand)
                setModel(data.model)
                setPower(data.power)
                setRegistration_number(data.registration_number)
                setDriven_lenght(data.driven_length)
                setProduction_data(data.production_date)
                setAviable(data.aviable)
                setPhoto(data.photo);
            })
            .catch(error =>{
                console.log(error);
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        client
            .post(`/api/trucks/${pk}/`, {
                    brand: brand,
                    model: model,
                    power: power,
                    registration_number: registration_number,
                    production_data: production_data,
                    driven_lenght: driven_lenght,
                    aviable: aviable,
                    photo: photo
                },
                {
                    headers: {
                        Authorization:
                            `Bearer ${access_token}`,
                        'Content-Type': 'multipart/form-data'
                    },

                })
    }
    const handlePhotoChange = (e) => {
        const selectedPhoto = e.target.files[0];
        if (selectedPhoto) {
            setPhoto(URL.createObjectURL(selectedPhoto));
        }
    };

    return (
        <MachineDetailContainer>
            <InformPostContainer>
                <InformPostContentContainer>
                    <TextTitle>NAURA</TextTitle>
                    <MainTextTitle>Select your best car, manage user and facilities in your company using complex management system</MainTextTitle>
                    <PostStory>
                        Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.
                        Discover the power of real-time control as our app offers seamless GPS tracking, allowing you to monitor your vehicle's location at all times, ensuring its safety and security.
                    </PostStory>
                </InformPostContentContainer>
            </InformPostContainer>
            <HeaderContainer>
                <MachineHeaderName>
                    Truck Detail
                </MachineHeaderName>
            </HeaderContainer>
            <MachineDetail>
                <MachineInformation>
                    <MachineDetailRow>
                        <LabelFields>Brand:</LabelFields>
                        <InputField
                            type="text"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </MachineDetailRow>
                    <MachineDetailRow>
                        <LabelFields>Power:</LabelFields>
                        <InputField
                            type="text"
                            value={power}
                            onChange={(e) => setPower(e.target.value)}
                        />
                    </MachineDetailRow>
                    <MachineDetailRow>
                        <LabelFields>Driven Length:</LabelFields>
                        <InputField
                            type="text"
                            value={driven_lenght}
                            onChange={(e) => setDriven_lenght(e.target.value)}
                        />
                    </MachineDetailRow>
                    <MachineDetailRow>
                        <LabelFields>Production Date:</LabelFields>
                        <InputField
                            type="date"
                            value={production_data}
                            onChange={(e) => setProduction_data(e.target.value)}
                        />
                    </MachineDetailRow>
                    <MachineDetailRow>
                        <LabelFields>Registration Number:</LabelFields>
                        <InputField
                            type="text"
                            value={registration_number}
                            onChange={(e) => setRegistration_number(e.target.value)}
                        />
                    </MachineDetailRow>
                    <UpdateButton onClick={handleSubmit}>Update</UpdateButton>

                </MachineInformation>
                <MachinePhotoContainer>
                    <MachinePhoto src={photo} />
                    <MachinePhotoInput
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}

                    />
                </MachinePhotoContainer>
            </MachineDetail>

        </MachineDetailContainer>
    )
}


export default TruckDisplay;