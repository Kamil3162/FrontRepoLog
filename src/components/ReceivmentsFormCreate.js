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
import icon1 from "../assets/icons/truck-img.jpg"
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
import Truck from "./Truck";
import {SemiTrailerViewContainerFun, TruckViewContainerFun} from "../utils/FunctionComponents.js";

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
        setTruckId(key);
        setChoseTruck(key);
    };

    const handlePickSemiTrailer = (event, key) =>{
        setSemiTrailerId(key);
        setChoseSemiTrailer(key);
    };

    const approveChoice = () => {

        console.log(user_data.id);

        client.post('/api/receivment-create/',{
            truck : truckId,
            semi_trailer: semitrailerId,
            destination_user: user_data.id
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
                <MainTextTitle>Receivments Create</MainTextTitle>
                <PostStory>
                    This panel is reponsible for creating receivment bu turck driver.
                </PostStory>
            </ReceivmentInfoContainer>
            <ChoiceContainer>
                <SemiTrailerChoice>
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
                            <SemiTrailerViewContainerFun
                                items={semitrailers}
                                selectedItem={choseSemiTrailer}
                                onSelect={handlePickSemiTrailer}
                            />
                        </>
                    )}
                </SemiTrailerChoice>
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
                            <TruckViewContainerFun
                                items={trucks}
                                selectedItem={choseTruck}
                                onSelect={handlePickTruck}/>
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
            <ChoiceContainer>
                <TruckChoice>
                    fds
                </TruckChoice>
                <TruckChoice>
                    fds
                </TruckChoice>
            </ChoiceContainer>
        </ReceivmentContainer>
    )
}

export default ReceivmentFromCreate;