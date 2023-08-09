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
    TruckDetail, TruckPhoto, TruckInfo, PhotoContainer, ButtonPick, TruckImagePick
} from "../layouts/receivment_create_styled";
import icon1 from "../layouts/icons/truck-img.jpg"
function ReceivmentFromCreate(){
    const [showDropdown, setShowDropdown] = useState(false);

    // const [trucks, setTrucks] = useState([]);
    // const [semitrailers, setSemiTrailers] = useState([]);
    //
    // useEffect(() => {
    //     client.get('/api/trucks/',{
    //         headers:{
    //             Authorization: `Bearer ${access_token}`
    //         }
    //     })
    //         .then(response =>{
    //             console.log(response);
    //             let received_trucks = response.data;
    //             setTrucks(received_trucks);
    //
    //         })
    //         .catch(error =>{
    //             console.log(error);
    //         })
    // },[]);
    // useEffect(() => {
    //     client.get('/api/semitrailers/',{
    //         headers:{
    //             Authorization: `Bearer ${access_token}`
    //         }
    //     })
    //         .then(response =>{
    //             console.log(response);
    //             let received_semitrailers = response.data;
    //             setSemiTrailers(received_semitrailers);
    //
    //         })
    //         .catch(error =>{
    //             console.log(error);
    //         })
    // },[])
    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <ReceivmentContainer>
            <ReceivmentInfoContainer>
                <ReceivmentTitle>Receivment Create Form</ReceivmentTitle>
                <ReceivmentStory>This panel is reponsible for creating receivment bu turck driver.
                    You have to options rent  truck with semi-trailer or only semitrailer if you have your own truck.
                    Also if you will chose truck it will be automatic you will not have a option to chooce you truck but
                    you have a chance to choose your semitrailer
                </ReceivmentStory>
            </ReceivmentInfoContainer>
            {/*<Dropdown>*/}
            {/*    <DropdownButton>Kliknij mnie</DropdownButton>*/}
            {/*    <DropdownContent>*/}
            {/*        <DropdownConElement href="#">Link 1</DropdownConElement>*/}
            {/*        <DropdownConElement href="#">Link 2</DropdownConElement>*/}
            {/*        <DropdownConElement href="#">Link 3</DropdownConElement>*/}
            {/*        <DropdownConElement href="#">Link 4</DropdownConElement>*/}
            {/*    </DropdownContent>*/}
            {/*</Dropdown>*/}
            <ChoiceContainer>
                <TruckChoice>
                    <TruckViewContainer>
                        <TruckDetail>
                            <TruckInfo>
                                Brand:FFDD
                            </TruckInfo>
                            <TruckInfo>
                                Model:FSDASD
                            </TruckInfo>
                            <TruckInfo>
                                Power:321
                            </TruckInfo>
                            <TruckInfo>
                                Driven Length:3213km
                            </TruckInfo>
                            <TruckInfo>
                                Production Date:fdsfds
                            </TruckInfo>
                            <TruckInfo>
                                Registration Number:Ffdfds
                            </TruckInfo>
                            <TruckInfo>
                                Aviable:
                            </TruckInfo>
                        </TruckDetail>
                        <TruckImagePick>
                            <PhotoContainer>
                                <TruckPhoto src={icon1}/>
                            </PhotoContainer>
                            <ButtonPick>Pick</ButtonPick>
                        </TruckImagePick>
                    </TruckViewContainer>
                    <TruckViewContainer>
                        <TruckDetail>
                            <TruckInfo>
                                Brand:FFDD
                            </TruckInfo>
                            <TruckInfo>
                                Model:FSDASD
                            </TruckInfo>
                            <TruckInfo>
                                Power:321
                            </TruckInfo>
                            <TruckInfo>
                                Driven Length:3213km
                            </TruckInfo>
                            <TruckInfo>
                                Production Date:fdsfds
                            </TruckInfo>
                            <TruckInfo>
                                Registration Number:Ffdfds
                            </TruckInfo>
                            <TruckInfo>
                                Aviable:
                            </TruckInfo>
                        </TruckDetail>
                        <TruckImagePick>
                            <PhotoContainer>
                                <TruckPhoto src={icon1}/>
                            </PhotoContainer>
                            <ButtonPick>Pick</ButtonPick>
                        </TruckImagePick>
                    </TruckViewContainer>
                </TruckChoice>
                <TruckChoice>
                    <TruckViewContainer>
                        <TruckDetail>
                            <TruckInfo>
                                Brand:FFDD
                            </TruckInfo>
                            <TruckInfo>
                                Model:FSDASD
                            </TruckInfo>
                            <TruckInfo>
                                Power:321
                            </TruckInfo>
                            <TruckInfo>
                                Driven Length:3213km
                            </TruckInfo>
                            <TruckInfo>
                                Production Date:fdsfds
                            </TruckInfo>
                            <TruckInfo>
                                Registration Number:Ffdfds
                            </TruckInfo>
                            <TruckInfo>
                                Aviable:
                            </TruckInfo>
                        </TruckDetail>
                        <TruckImagePick>
                            <PhotoContainer>
                                <TruckPhoto src={icon1}/>
                            </PhotoContainer>
                            <ButtonPick>Pick</ButtonPick>
                        </TruckImagePick>
                    </TruckViewContainer>
                    <TruckViewContainer>
                        <TruckDetail>
                            <TruckInfo>
                                Brand:FFDD
                            </TruckInfo>
                            <TruckInfo>
                                Model:FSDASD
                            </TruckInfo>
                            <TruckInfo>
                                Power:321
                            </TruckInfo>
                            <TruckInfo>
                                Driven Length:3213km
                            </TruckInfo>
                            <TruckInfo>
                                Production Date:fdsfds
                            </TruckInfo>
                            <TruckInfo>
                                Registration Number:Ffdfds
                            </TruckInfo>
                            <TruckInfo>
                                Aviable:
                            </TruckInfo>
                        </TruckDetail>
                        <TruckImagePick>
                            <PhotoContainer>
                                <TruckPhoto src={icon1}/>
                            </PhotoContainer>
                            <ButtonPick>Pick</ButtonPick>
                        </TruckImagePick>
                    </TruckViewContainer>
                </TruckChoice>
            </ChoiceContainer>
        </ReceivmentContainer>
    )
}

export default ReceivmentFromCreate;