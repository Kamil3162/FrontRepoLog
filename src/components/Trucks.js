import React from "react";
import {
    TruckList,
    TruckListContainer,
    TruckListTitle,
    MachineContainer,
    MachineInfo,
    MachineInfoContainer,
    MachineLabel,
    MachineInput,
    MachinePhotoBtn,
    BtnExplore,
    MachinePhoto,
    HeaderTablesName,
    HeaderName,
    RowListContainer,
    RowListElements,
    StyleText,
    StyleAvailable,
    StyleAvailableFalse
} from "../assets/styles/truck_list_styled";
import {Link} from "react-router-dom";
import {
    InformPostContainer,
    InformPostContentContainer,
    MainTextTitle,
    PostStory,
    TextTitle
} from "../assets/styles/home_guest_styled";
import client from "../utils/Sender";
import {access_token} from "../utils/Sender";
import {useEffect, useState} from "react";
import {
    ButtonPick,
    RowMachineContainer,
    RowMachineRecord}
from "../assets/styles/receivment_create_styled";

function Trucks(){

    const [trucks, setTrucks] = useState([]);

    useEffect(() =>{
        client.get("/api/trucks/",{
            headers:{
                Authorization: `Bearer ${access_token}`

            }
        }).then(response =>{
            console.log(response);
            setTrucks(response.data);
            console.log(trucks);
        })
    }, []);

    return(
        <TruckListContainer>
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
            <TruckListTitle>Trucks </TruckListTitle>
            <HeaderTablesName>
                <HeaderName>BRAND</HeaderName>
                <HeaderName>MODEL</HeaderName>
                <HeaderName>POWER</HeaderName>
                <HeaderName>DRIVEN LENGTH</HeaderName>
                <HeaderName>PRODUCTION DATE</HeaderName>
                <HeaderName>REGISTRATION NUMBER</HeaderName>
                <HeaderName>AVAILABLE</HeaderName>
            </HeaderTablesName>
            <TruckList>
                {trucks.map((truck, index) => (
                    <Link to={`/truck/${truck.id}`} key={truck.id} style={{ textDecoration: 'none', color:"black" }}>
                        <RowListContainer>
                            <RowListElements>
                                <StyleText className="style-text">{truck.brand}</StyleText>
                            </RowListElements>
                            <RowListElements>
                                <StyleText className="style-text">{truck.model}</StyleText>
                            </RowListElements>
                            <RowListElements><StyleText className="style-text">{truck.power}
                            </StyleText></RowListElements>
                            <RowListElements>
                                <StyleText className="style-text">{truck.driven_length}km</StyleText>
                            </RowListElements>
                            <RowListElements>
                                <StyleText className="style-text">{truck.production_date}</StyleText>
                            </RowListElements>
                            <RowListElements>
                                <StyleText className="style-text">{truck.registration_number}</StyleText>
                            </RowListElements>
                            {
                                truck.available === "Wolny" ? (
                                    <RowListElements>
                                        <StyleAvailable className="style-text">✔</StyleAvailable>
                                    </RowListElements>
                                ) : (
                                    <RowListElements>
                                        <StyleAvailableFalse className="style-text">X</StyleAvailableFalse>
                                    </RowListElements>
                                )
                            }
                        </RowListContainer>
                    </Link>
                ))}
            </TruckList>
        </TruckListContainer>
    )
}
export default Trucks;
