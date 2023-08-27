import React from "react";
import {
    InformPostContainer,
    InformPostContentContainer,
    MainTextTitle, PostStory,
    TextTitle
} from "../assets/styles/home_guest_styled";
import {MachineContainer} from "../assets/styles/mechine_create_styled";
import {AddressContainer, InputField, LabelFields} from "../assets/styles/user_display";
import {LoginButton} from "../assets/styles/login_styled";
import {useState, useEffect} from "react";
import client from "../utils/Sender";
import {access_token} from "../utils/Sender";

function SemiTrailerEquipmentCreate(){

    const [semiTrailer, setSemiTrailer] = useState('');
    const [belts, setBelts] = useState('');
    const [corners, setCorners] = useState('');
    const [aluminiumStick, setAluminiumStick] = useState('');
    const [wideStick, setWideStick] = useState('');
    const [ladder, setLadder] = useState(true);
    const [roofStick, setRoofStick] = useState(true);
    const [dimensionBoard, setDimensionBoard] = useState(true);
    const [status, setStatus] = useState('Wolny');

    const submitForm = (e) =>{
        e.preventDefault();
        client.
            post('/api/semitrailereqipment-create/',{

        },
        )
    }

    const handleSelectOption = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        switch (name){
            case 'ladder':
                setLadder(value);
                break;
            case 'roof-stick':
                setRoofStick(value);
                break;
            case 'dimension-board':
                setDimensionBoard(value);
                break;
        }
    }

    return (
        <div>
            <InformPostContainer>
                <InformPostContentContainer>
                    <TextTitle>NAURA</TextTitle>
                    <MainTextTitle>Create Truck Equipment</MainTextTitle>
                    <PostStory>
                        Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.
                    </PostStory>
                </InformPostContentContainer>
            </InformPostContainer>
            <MachineContainer onSubmit={submitForm} encType="multipart/form-data">
                <AddressContainer>
                    <LabelFields>Belts: </LabelFields>
                    <InputField name="betls" type="number" onChange={(e) => setBelts(e.target.value)} />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>Corners: </LabelFields>
                    <InputField name="betls" type="number" onChange={(e) => setCorners(e.target.value)} />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>Aluminium Stick: </LabelFields>
                    <InputField name="betls" type="number" onChange={(e) => setAluminiumStick(e.target.value)} />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>Wide Stcik: </LabelFields>
                    <InputField name="betls" type="number" onChange={(e) => setWideStick(e.target.value)} />
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>Ladder: </LabelFields>
                    <select name="ladder" id="ladder" onChange={handleSelectOption}>
                        <option value={true}>Obecne</option>
                        <option value={false}>Brak</option>
                    </select>
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>RoofStick: </LabelFields>
                    <select name="roof-stick" id="roof-stick" onChange={handleSelectOption}>
                        <option value={true}>Obecne</option>
                        <option value={false}>Brak</option>
                    </select>
                </AddressContainer>
                <AddressContainer>
                    <LabelFields>Dimension Board: </LabelFields>
                    <select name="dimension-board" id="dimension-board" onChange={handleSelectOption}>
                        <option value={true}>Obecne</option>
                        <option value={false}>Brak</option>
                    </select>
                </AddressContainer>
                <LoginButton type="submit">Create</LoginButton>
            </MachineContainer>
        </div>
    )
}

export default SemiTrailerEquipmentCreate;