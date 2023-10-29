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
import {AlertComponent} from "../utils/FunctionComponents.js";
import SemiTrailerEquipmentCreate from "./SemiTrailerEquipmentCreate";
import TruckEquipmentCreate from "./TruckEquipmentCreate";

function ReceivmentFromCreate(){
    const [truck, setTruck] = useState(true);
    const [semitrailerId, setSemiTrailerId] = useState('');
    const [truckId, setTruckId] = useState('');
    const [trucks, setTrucks] = useState([]);
    const [semitrailers, setSemiTrailers] = useState([]);
    const [choseSemiTrailer, setChoseSemiTrailer] = useState(null);
    const [choseTruck, setChoseTruck] = useState(null);
    const [approve, setApprove] = useState(false);
    const [error, setError] = useState(false);

    // code responsible for steps - choose equipment to truck etc
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);

    const handlePickTruck = (event, key) =>{
        console.log(event, key);
        setTruckId(key);
        setChoseTruck(key);
    };

    const handlePickSemiTrailer = (event, key) =>{
        setSemiTrailerId(key);
        setChoseSemiTrailer(key);
    };

    const approveChoice = () => {

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
            setStep1(false);
            setStep2(true);
        }).catch(error => {
            setError(true);
            setStep1(false);
        })
    };

    const handleTryAgain = () =>{
        setError(false);
        setChoseTruck(null);
        setChoseSemiTrailer(null);
        setStep1(true);
    }

    useEffect(() => {
        client.get('/api/trucks/',{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(response =>{
                console.log(response);
                let received_trucks = response.data.results;
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
                let received_semitrailers = response.data.results;
                setSemiTrailers(received_semitrailers);
            })
            .catch(error =>{
                console.log(error);
            })
    },[])

    const DivMainContent = () => (
        <div>
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
                {!approve && (
                    <>
                        <SemiTrailerChoice>
                            <MainTextTitle>SemiTrailers</MainTextTitle>
                            <HeaderTablesName>
                                <HeaderName>AVIABLE</HeaderName>
                                <HeaderName>REGISTRATION NUMBER</HeaderName>
                            </HeaderTablesName>
                            <SemiTrailerViewContainerFun
                                items={semitrailers}
                                selectedItem={choseSemiTrailer}
                                onSelect={handlePickSemiTrailer}
                            />
                        </SemiTrailerChoice>
                    </>
                )}
                <TruckChoice>
                    {!approve && (
                        <>
                            <MainTextTitle>Trucks</MainTextTitle>
                            <HeaderTablesName>
                                <HeaderName>AVIABLE</HeaderName>
                                <HeaderName>REGISTRATION NUMBER</HeaderName>
                            </HeaderTablesName>
                            <TruckViewContainerFun
                                items={trucks}
                                selectedItem={choseTruck}
                                onSelect={handlePickTruck}/>

                        </>
                    )}

                </TruckChoice>

            </ChoiceContainer>
            <ChoiceContainer>
                <UpdateButton
                    onClick={approveChoice}
                    style={{
                        display : approve ? "none": "normal",
                    }}
                >
                    Approve</UpdateButton>
            </ChoiceContainer>
        </div>
    )

    return (
        <div>
            {
                error && (
                    <div>
                        <AlertComponent
                            title="Error"
                            information="Something is bad with creation"
                            buttonText="Try again"
                            buttonClickFunction={handleTryAgain}
                        />
                    </div>
                )
            }
            { step1 &&
                (
                    <DivMainContent/>
                )
            }
            { step2 && (
                <ChoiceContainer>
                    <SemiTrailerEquipmentCreate/>
                    <TruckEquipmentCreate/>
                </ChoiceContainer>
            ) }
        </div>
    )
}

export default ReceivmentFromCreate;