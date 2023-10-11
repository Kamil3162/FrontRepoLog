import axios from "axios";
import React, {useEffect, useState} from "react";
import {access_token} from "../utils/Sender.js";
import client from "../utils/Sender.js";
import {
    InformPostContainer,
    InformPostContentContainer,
    MainTextTitle, PostStory,
    TextTitle
} from "../assets/styles/home_guest_styled";
import {
    HeaderName,
    HeaderTablesName,
    RowListContainer, RowListElements, StyleAvailable, StyleAvailableFalse, StyleText,
    TruckList, TruckListContainer,
    TruckListTitle
} from "../assets/styles/truck_list_styled";
import {Link} from "react-router-dom";


function ReceivmentsList(){
    const [receivments, setReceivments] = useState([]);

    useEffect(() => {
        client.get('/api/receivments/',{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(response =>{
                console.log(response.data);
                let data = response.data;
                setReceivments(data);
                console.log(receivments);

            })
            .catch(error =>{
                console.log(error);
            })
    },[]);
    
    return (
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
            <TruckListTitle>Receivments</TruckListTitle>
            <HeaderTablesName>
                <HeaderName>SEMI TRAILER</HeaderName>
                <HeaderName>TRUCK</HeaderName>
                <HeaderName>SENDER</HeaderName>
                <HeaderName>RECEIVER USER</HeaderName>
                <HeaderName>STATUS</HeaderName>
            </HeaderTablesName>
            <TruckList>
                {receivments.map((receivment, index) => (
                    <RowListContainer as={Link} to={`/receivment-detail/${receivment.id}`}>
                        <RowListElements>
                            <StyleText className="style-text">{receivment.semitrailer_registration_numer}</StyleText>
                        </RowListElements>
                        <RowListElements>
                            <StyleText className="style-text">{receivment.truck_registration_number}</StyleText>
                        </RowListElements>
                        <RowListElements>
                            <StyleText className="style-text">{receivment.source_user_name} {receivment.source_user_surname}</StyleText>
                        </RowListElements>
                        <RowListElements>
                            <StyleText className="style-text">{receivment.destination_user_name} {receivment.destination_user_surname}</StyleText>
                        </RowListElements>
                        {
                            receivment.status === true ? (
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
                ))}
            </TruckList>
        </TruckListContainer>
    )
}

export default ReceivmentsList;