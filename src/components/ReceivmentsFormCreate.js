import axios from "axios";
import React, {useEffect, useState} from "react";
import {access_token} from "../utils/Sender.js";
import client from "../utils/Sender.js";
import {
    ReceivmentContainer,
    ListElements,
    SemiTrailerList,
    ListElement,
    Dropdown,
    DropdownButton,
    DropdownContent,
    DropdownConElement,
    ReceivmentInfoContainer,
    ReceivmentTitle,
    ReceivmentStory,
    ChoiceContainer,
    TruckChoice,
    SemiTrailerChoice,
    SemiTrailerViewContainer,
    TruckViewContainer,
    TruckDetail,
    TruckPhoto,
    TruckInfo,
    PhotoContainer,
    ButtonPick,
    TruckImagePick,
    RowMachineContainer,
    RowMachineRecord
} from "../assets/styles/receivment_create_styled";
import icon1 from "../assets/truck-img.jpg"
import {
    HeaderName,
    HeaderTablesName,
    RowListContainer,
    RowListElements,
    StyleAvailable, StyleAvailableFalse,
    StyleText
} from "../assets/styles/truck_list_styled";
import {
    InformPostContainer,
    InformPostContentContainer,
    MainTextTitle,
    PostStory,
    TextTitle
} from "../assets/styles/home_guest_styled";

import {user_data} from "../utils/Sender.js";
import user from "./User";
import {UpdateButton} from "../assets/styles/user_display";
function ReceivmentFromCreate(){
    const [truck, setTruck] = useState(true);

    const [semitrailerId, setSemiTrailerId] = useState('');
    const [truckId, setTruckId] = useState('');
    const [trucks, setTrucks] = useState([]);
    const [semitrailers, setSemiTrailers] = useState([]);
    const [choseSemiTrailer, setChoseSemiTrailer] = useState(null);
    const [choseTruck, setChoseTruck] = useState(null);
    const [approve, setApprove] = useState(false);

    const handlePickTruck = (event, key) =>{
        setSemiTrailerId(key);
        setChoseSemiTrailer(key);
    };

    const handlePickSemiTrailer = (event, key) =>{
        setTruckId(key);
        setChoseTruck(key);
    };

    const approveChoice = () => {

        console.log(user_data.id);

        client.post('/api/receivment-create/',{
            truck : truckId,
            semi_trailer: semitrailerId,
            sender: user_data.id
        }, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }).then(response => {
            console.log(response);
            setApprove(true);
        }).catch(error => {
            alert("Something is bad with you data");
            console.log(error);
        })
    };

    useEffect(() => {
        client.get('/api/trucks/',{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(response =>{
                console.log(response);
                let received_trucks = response.data;
                setTrucks(received_trucks);
            })
            .catch(error =>{
                console.log(error);
            })
    },[]);

    useEffect(() => {
        client.get('/api/semitrailers/',{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(response =>{
                console.log(response);
                let received_semitrailers = response.data;
                setSemiTrailers(received_semitrailers);
            })
            .catch(error =>{
                console.log(error);
            })
    },[])

    return (
        <ReceivmentContainer>
            <InformPostContainer>
                <InformPostContentContainer>

                </InformPostContentContainer>
            </InformPostContainer>
            <ReceivmentInfoContainer>
                <TextTitle>NAURA</TextTitle>
                <MainTextTitle>Select your best car, manage user and facilities in your company using complex management system</MainTextTitle>
                <PostStory>
                    This panel is reponsible for creating receivment bu turck driver.
                    You have to options rent  truck with semi-trailer or only semitrailer if you have your own truck.
                    Also if you will chose truck it will be automatic you will not have a option to chooce you truck but
                    you have a chance to choose your semitrailer
                </PostStory>
            </ReceivmentInfoContainer>
            <ChoiceContainer>
                <TruckChoice>
                    {!approve && (
                        <>
                            <p>SemiTrailers</p>
                            <HeaderTablesName>
                                <HeaderName>BRAND</HeaderName>
                                    <HeaderName>MODEL</HeaderName>
                                    <HeaderName>PRODUCTION DATE</HeaderName>
                                    <HeaderName>SEMI NOTE</HeaderName>
                                    <HeaderName>REGISTRATION NUMBER</HeaderName>
                            </HeaderTablesName>
                            <TruckViewContainer>
                                {trucks.map((truck, index) => (
                                    <RowMachineContainer key={index}>
                                    <RowMachineRecord>{truck.brand}</RowMachineRecord>
                                    <RowMachineRecord>{truck.model}</RowMachineRecord>
                                    <RowMachineRecord>{truck.production_date}</RowMachineRecord>
                                    <RowMachineRecord>
                                        {truck.available === "Wolny" ? (
                                            <StyleAvailable className="style-text">✔</StyleAvailable>
                                        ) : (
                                            <StyleAvailableFalse className="style-text">X</StyleAvailableFalse>
                                        )}
                                    </RowMachineRecord>
                                    <RowMachineRecord>{truck.registration_number}</RowMachineRecord>
                                    <RowMachineRecord>
                                        <ButtonPick onClick={
                                            (e) => handlePickSemiTrailer(e, truck.id)
                                        }
                                                    style={{
                                                        backgroundColor: choseTruck === truck.id ? "green" : 'red'
                                                    }}
                                        >
                                            Pick
                                        </ButtonPick>
                                    </RowMachineRecord>
                                </RowMachineContainer>
                            ))}
                            </TruckViewContainer>
                        </>
                    )}
                </TruckChoice>
                <TruckChoice>
                    {!approve && (
                        <>
                            <p>Trucks</p>
                            <HeaderTablesName>
                                <HeaderName>BRAND</HeaderName>
                                <HeaderName>MODEL</HeaderName>
                                <HeaderName>PRODUCTION DATE</HeaderName>
                                <HeaderName>SEMI NOTE</HeaderName>
                                <HeaderName>REGISTRATION NUMBER</HeaderName>
                            </HeaderTablesName>
                            <TruckViewContainer>
                                {semitrailers.map(semitrailer => (
                                    <RowMachineContainer key={semitrailer.id}>
                                        <RowMachineRecord>
                                            {semitrailer.brand}
                                        </RowMachineRecord>
                                        <RowMachineRecord>
                                            {semitrailer.model}
                                        </RowMachineRecord>
                                        <RowMachineRecord>
                                            {semitrailer.production_year}
                                        </RowMachineRecord>
                                        <RowMachineRecord>
                                            {semitrailer.semi_note === 'Wolny' ? (
                                                <StyleAvailable className="style-text">✔</StyleAvailable>
                                            ) : (
                                                <StyleAvailableFalse className="style-text">X</StyleAvailableFalse>
                                            )}
                                        </RowMachineRecord>
                                        <RowMachineRecord>
                                            {semitrailer.registration_number}
                                        </RowMachineRecord>
                                        <RowMachineRecord>
                                            <ButtonPick
                                                onClick={(e) => handlePickTruck(e, semitrailer.id)}
                                                style={{
                                                    backgroundColor: choseSemiTrailer === semitrailer.id ? 'green' : 'red'
                                                }}
                                            >
                                                Pick
                                            </ButtonPick>
                                        </RowMachineRecord>
                                    </RowMachineContainer>
                                ))}
                            </TruckViewContainer>
                            <UpdateButton
                                onClick={approveChoice}
                                style={{
                                    display : approve ? "none": "normal",
                                }}
                            >
                                Approve</UpdateButton>
                        </>
                    )}
                </TruckChoice>
            </ChoiceContainer>
        </ReceivmentContainer>
    )
}

export default ReceivmentFromCreate;