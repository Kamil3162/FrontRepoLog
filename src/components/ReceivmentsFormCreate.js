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
} from "../layouts/receivment_create_styled";
import icon1 from "../layouts/icons/truck-img.jpg"
import {
    HeaderName,
    HeaderTablesName,
    RowListContainer,
    RowListElements,
    StyleAvailable,
    StyleText
} from "../layouts/truck_list_styled";
import {
    InformPostContainer,
    InformPostContentContainer,
    MainTextTitle,
    PostStory,
    TextTitle
} from "../layouts/home_guest_styled";
function ReceivmentFromCreate(){
    const [showDropdown, setShowDropdown] = useState(false);

    const [trucks, setTrucks] = useState([]);
    const [semitrailers, setSemiTrailers] = useState([]);

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
                    SemiTrailers
                    <HeaderTablesName>
                        <HeaderName>BRAND</HeaderName>
                        <HeaderName>MODEL</HeaderName>
                        <HeaderName>POWER</HeaderName>
                        <HeaderName>DRIVEN LENGTH</HeaderName>
                        <HeaderName>PRODUCTION DATE</HeaderName>
                        <HeaderName>REGISTRATION NUMBER</HeaderName>
                    </HeaderTablesName>
                    <TruckViewContainer>
                        {trucks.map((truck, index) => (
                            <RowMachineContainer key={index}>
                                <RowMachineRecord>
                                    {truck.brand}
                                </RowMachineRecord>
                                <RowMachineRecord>
                                    {truck.model}
                                </RowMachineRecord>
                                <RowMachineRecord>
                                    {truck.power}
                                </RowMachineRecord>
                                <RowMachineRecord>
                                    {truck.driven_length}km
                                </RowMachineRecord>
                                <RowMachineRecord>
                                    {truck.production_date}
                                </RowMachineRecord>
                                <RowMachineRecord>
                                    {truck.registration_number}
                                </RowMachineRecord>
                                <RowMachineRecord>
                                    <ButtonPick>Pick</ButtonPick>
                                </RowMachineRecord>
                            </RowMachineContainer>
                        ))}
                    </TruckViewContainer>
                </TruckChoice>
                <TruckChoice>
                    Trucks
                    <HeaderTablesName>
                        <HeaderName>BRAND</HeaderName>
                        <HeaderName>MODEL</HeaderName>
                        <HeaderName>PRODUCTION DATE</HeaderName>
                        <HeaderName>SEMI NOTE</HeaderName>
                        <HeaderName>REGISTRATION NUMBER</HeaderName>
                    </HeaderTablesName>
                    <TruckViewContainer>
                        {semitrailers.map((semitrailer, index) => (
                            <RowMachineContainer key={index}>
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
                                    {semitrailer.semi_note}
                                </RowMachineRecord>
                                <RowMachineRecord>
                                    {semitrailer.registration_number}
                                </RowMachineRecord>
                                <RowMachineRecord>
                                    <ButtonPick>Pick</ButtonPick>
                                </RowMachineRecord>
                            </RowMachineContainer>
                        ))}
                    </TruckViewContainer>
                </TruckChoice>
            </ChoiceContainer>
        </ReceivmentContainer>
    )
}

export default ReceivmentFromCreate;