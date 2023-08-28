import React from "react";
import {
    CreateButtonPostContainer,
    InformPostContainer,
    InformPostContentContainer,
    MainTextTitle, PostStory, TextPostContainer,
    TextTitle
} from "../assets/styles/home_guest_styled";
import {MachineContainer} from "../assets/styles/mechine_create_styled";
import {AddressContainer, InputField, LabelFields} from "../assets/styles/user_display";
import {LoginButton} from "../assets/styles/login_styled";
import {useState, useEffect} from "react";
import client from "../utils/Sender";
import {access_token} from "../utils/Sender";
import {InfoCreateMachineContainer, SelectContainer, SelectOption} from "../assets/styles/truck_styled";

function TruckEquipmentCreate(){

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
    // truck = models.ForeignKey(Truck,
    //     on_delete=models.CASCADE,
    //     blank=False)
    // chest = models.BooleanField(default=True, blank=False)
    // chains = models.BooleanField(default=True, blank=False)
    // jack_hitch = models.BooleanField(default=True, blank=False)
    // planetar_key = models.BooleanField(default=True, blank=False)
    // manometer = models.BooleanField(default=True, blank=False)
    // tire_pumping_wire = models.BooleanField(default=True, blank=False)
    // complete_status = models.BooleanField(default=True)
    // photo = models.ImageField(upload_to='media/', blank=True)

    return (
        <div>
            <InformPostContainer>
                <InformPostContentContainer>
                    <TextPostContainer>
                        <TextTitle>NAURA</TextTitle>
                        <MainTextTitle>Create Truck Equipment</MainTextTitle>
                        <PostStory>
                            Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.
                        </PostStory>
                    </TextPostContainer>
                    <CreateButtonPostContainer>
                        fdfdsfdsfds
                    </CreateButtonPostContainer>
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

export default TruckEquipmentCreate;