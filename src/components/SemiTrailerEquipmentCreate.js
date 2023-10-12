import React from "react";
import {
    CreateButtonPostContainer,
    InformPostContainer,
    InformPostContentContainer,
    MainTextTitle, PostStory, PostStoryButtonContainer, TextPostContainer,
    TextTitle
} from "../assets/styles/home_guest_styled";
import {MachineContainer} from "../assets/styles/mechine_create_styled";
import {AddressContainer, InputField, LabelFields} from "../assets/styles/user_display";
import {LoginButton} from "../assets/styles/login_styled";
import {useState, useEffect} from "react";
import client from "../utils/Sender";
import {access_token} from "../utils/Sender";
import {InfoCreateMachineContainer, SelectContainer, SelectOption} from "../assets/styles/truck_styled";
import {useLocation} from "react-router-dom";

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

    let location = useLocation();
    let id = location.state.id;

    const submitForm = (e) =>{
        e.preventDefault();
        client.
            post('/api/semitrailereqipment-create/',{
                semi_trailer : id,
                belts : belts,
                corners: corners,
                aluminium_stick : aluminiumStick,
                wide_stick: wideStick,
                ladder: ladder,
                roof_stick: roofStick,
                dimenstion_board: dimensionBoard,
                status: status
        },
            {
            headers: {
                Authorization: `Bearer ${access_token}`
            },
        }).then(response => {
            console.log("pomyslnie dodano equipment");
            alert("SUckes");
        }).catch(error => {
            console.log(error);
        })
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
                    <TextPostContainer>
                        <TextTitle>NAURA</TextTitle>
                        <MainTextTitle>Create Semitailer Equipment</MainTextTitle>
                        <PostStoryButtonContainer>
                            <PostStory>
                                Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.
                            </PostStory>
                            <CreateButtonPostContainer>
                                fdfdsfdsfds
                            </CreateButtonPostContainer>
                        </PostStoryButtonContainer>
                    </TextPostContainer>
                </InformPostContentContainer>
            </InformPostContainer>
            <MachineContainer onSubmit={submitForm} encType="multipart/form-data">
                <InfoCreateMachineContainer>
                    <LabelFields>Belts: </LabelFields>
                    <InputField name="betls" type="number" onChange={(e) => setBelts(Number(e.target.value))} />
                </InfoCreateMachineContainer>
                <InfoCreateMachineContainer>
                    <LabelFields>Corners: </LabelFields>
                    <InputField name="betls" type="number" onChange={(e) => setCorners(Number(e.target.value))} />
                </InfoCreateMachineContainer>
                <InfoCreateMachineContainer>
                    <LabelFields>Aluminium Stick: </LabelFields>
                    <InputField name="betls" type="number" onChange={(e) => setAluminiumStick(Number(e.target.value))} />
                </InfoCreateMachineContainer>
                <InfoCreateMachineContainer>
                    <LabelFields>Wide Stcik: </LabelFields>
                    <InputField name="betls" type="number" onChange={(e) => setWideStick(Number(e.target.value))} />
                </InfoCreateMachineContainer>
                <InfoCreateMachineContainer>
                    <LabelFields>Ladder: </LabelFields>
                    <SelectContainer name="ladder" id="ladder" onChange={handleSelectOption}>
                        <SelectOption value={true}>Obecne</SelectOption>
                        <SelectOption value={false}>Brak</SelectOption>
                    </SelectContainer>
                </InfoCreateMachineContainer>
                <InfoCreateMachineContainer>
                    <LabelFields>RoofStick: </LabelFields>
                    <SelectContainer name="roof-stick" id="roof-stick" onChange={handleSelectOption}>
                        <SelectOption value={true}>Obecne</SelectOption>
                        <SelectOption value={false}>Brak</SelectOption>
                    </SelectContainer>
                </InfoCreateMachineContainer>
                <InfoCreateMachineContainer>
                    <LabelFields>Dimension Board: </LabelFields>
                    <SelectContainer name="dimension-board" id="dimension-board" onChange={handleSelectOption}>
                        <SelectOption value={true}>Obecne</SelectOption>
                        <SelectOption value={false}>Brak</SelectOption>
                    </SelectContainer>
                </InfoCreateMachineContainer>
                <LoginButton type="submit">Create</LoginButton>
            </MachineContainer>
        </div>
    )
}

export default SemiTrailerEquipmentCreate;