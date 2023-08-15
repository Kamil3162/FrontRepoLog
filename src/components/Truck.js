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

import icon6 from "../layouts/icons/truck-img.jpg";

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

    const handleSubmit = (e) =>{
        e.preventDefault();

        client.post(`/api/trucks/${pk}/`,{
            headers:{
                Authorization: `Bearer ${access_token}`
            },
            data:{
                brand:brand,
                model:model,
                power:power,
                registration_number:registration_number,
                production_data:production_data,
                driven_lenght:driven_lenght,
                aviable:aviable
            }
        })

    }
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
                        <MachineLabel>Brand:</MachineLabel>
                        <MachineDetailInformation
                            type="text"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </MachineDetailRow>
                    <MachineDetailRow>
                        <MachineLabel>Power:</MachineLabel>
                        <MachineDetailInformation
                            type="text"
                            value={power}
                            onChange={(e) => setPower(e.target.value)}
                        />
                    </MachineDetailRow>
                    <MachineDetailRow>
                        <MachineLabel>Driven Length:</MachineLabel>
                        <MachineDetailInformation
                            type="text"
                            value={driven_lenght}
                            onChange={(e) => setDriven_lenght(e.target.value)}
                        />
                    </MachineDetailRow>
                    <MachineDetailRow>
                        <MachineLabel>Production Date:</MachineLabel>
                        <MachineDetailInformation
                            type="date"
                            value={production_data}
                            onChange={(e) => setProduction_data(e.target.value)}
                        />
                    </MachineDetailRow>
                    <MachineDetailRow>
                        <MachineLabel>Registration Number:</MachineLabel>
                        <MachineDetailInformation
                            type="text"
                            value={registration_number}
                            onChange={(e) => setRegistration_number(e.target.value)}
                        />
                    </MachineDetailRow>
                </MachineInformation>
                <MachinePhoto img={icon6} />
            </MachineDetail>
        </MachineDetailContainer>
    )
}

export default TruckDisplay;