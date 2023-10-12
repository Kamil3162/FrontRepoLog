import React, {useState} from "react";
import {
    CreateButtonPostContainer,
    InformPostContainer,
    InformPostContentContainer, MainTextTitle, PostStory, PostStoryButtonContainer,
    TextPostContainer,
    TextTitle
} from "../assets/styles/home_guest_styled";
import {MachineContainer} from "../assets/styles/mechine_create_styled";
import {InfoCreateMachineContainer, SelectContainer, SelectOption} from "../assets/styles/truck_styled";
import {LabelFields} from "../assets/styles/user_display";
import {LoginButton} from "../assets/styles/login_styled";
import client, {access_token} from "../utils/Sender";
import {useLocation} from "react-router-dom";
function TruckEquipmentDetail(){

    const [chest, setChest] = useState(true);
    const [chains, setChains] = useState(true);
    const [jackHitch, setJackHitch] = useState(true);
    const [planetarKey, setPlanetarKey] = useState(true);
    const [manometer, setManometer] = useState(true);
    const [tirePumpingWire, setTirePumpingWire] = useState(true);
    const [photo, setPhoto] = useState(null); // For image upload, you might need additional logic


    const submitForm = (e) =>{
        e.preventDefault();
        client.
        post('/truck-equipment-create',{

            },
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
    }
    const handleSelectOption = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        switch (name) {
            case 'chest':
                setChest(value);
                break;
            case 'chains':
                setChains(value);
                break;
            case 'jack_hitch':
                setJackHitch(value);
                break;
            case 'planetar_key':
                setPlanetarKey(value);
                break;
            case 'manometer':
                setManometer(value);
                break;
            case 'tire_pumping_wire':
                setTirePumpingWire(value);
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <InformPostContainer>
                <InformPostContentContainer>
                    <TextPostContainer>
                        <TextTitle>NAURA</TextTitle>
                        <MainTextTitle>Create Truck Equipment</MainTextTitle>
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
                    <LabelFields>Chest: </LabelFields>
                    <SelectContainer name="chest" id="chest" onChange={handleSelectOption}>
                        <SelectOption value={true}>Obecne</SelectOption>
                        <SelectOption value={false}>Brak</SelectOption>
                    </SelectContainer>
                </InfoCreateMachineContainer>
                <InfoCreateMachineContainer>
                    <LabelFields>Chains: </LabelFields>
                    <SelectContainer name="chains" id="chains" onChange={handleSelectOption}>
                        <SelectOption value={true}>Obecne</SelectOption>
                        <SelectOption value={false}>Brak</SelectOption>
                    </SelectContainer>
                </InfoCreateMachineContainer>
                <InfoCreateMachineContainer>
                    <LabelFields>Jack Hitch: </LabelFields>
                    <SelectContainer name="jack_hitch" id="jack_hitch" onChange={handleSelectOption}>
                        <SelectOption value={true}>Obecne</SelectOption>
                        <SelectOption value={false}>Brak</SelectOption>
                    </SelectContainer>
                </InfoCreateMachineContainer>
                <InfoCreateMachineContainer>
                    <LabelFields>Planetar key: </LabelFields>
                    <SelectContainer name="planetar_key" id="planetar_key" onChange={handleSelectOption}>
                        <SelectOption value={true}>Obecne</SelectOption>
                        <SelectOption value={false}>Brak</SelectOption>
                    </SelectContainer>
                </InfoCreateMachineContainer>
                <InfoCreateMachineContainer>
                    <LabelFields>Manometer: </LabelFields>
                    <SelectContainer name="manometer" id="manometer" onChange={handleSelectOption}>
                        <SelectOption value={true}>Obecne</SelectOption>
                        <SelectOption value={false}>Brak</SelectOption>
                    </SelectContainer>
                </InfoCreateMachineContainer>
                <InfoCreateMachineContainer>
                    <LabelFields>Tire Pumping Wire: </LabelFields>
                    <SelectContainer name="tire_pumping_wire" id="tire_pumping_wire" onChange={handleSelectOption}>
                        <SelectOption value={true}>Obecne</SelectOption>
                        <SelectOption value={false}>Brak</SelectOption>
                    </SelectContainer>
                </InfoCreateMachineContainer>
                <LoginButton type="submit">Create</LoginButton>
            </MachineContainer>
        </div>
    )
}

export default TruckEquipmentDetail;