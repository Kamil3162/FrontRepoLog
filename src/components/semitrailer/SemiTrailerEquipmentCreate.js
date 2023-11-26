import React from "react";
import {
    CreateButtonPostContainer,
    InformPostContainer,
    InformPostContentContainer,
    MainTextTitle, PostStory, PostStoryButtonContainer, TextPostContainer,
    TextTitle
} from "../../assets/styles/home_guest_styled";
import {MachineContainer} from "../../assets/styles/mechine_create_styled";
import {AddressContainer, InputField, LabelFields} from "../../assets/styles/user_display";
import {LoginButton} from "../../assets/styles/login_styled";
import {useState, useEffect} from "react";
import client, {headers} from "../../utils/Sender";
import {access_token} from "../../utils/Sender";
import {InfoCreateMachineContainer, SelectContainer, SelectOption} from "../../assets/styles/truck_styled";
import {useLocation} from "react-router-dom";

function SemiTrailerEquipmentCreate({semitrailer_id, setData, setSemiTruckEquipmentExists}){

    const [belts, setBelts] = useState(0);
    const [corners, setCorners] = useState(0);
    const [aluminiumStick, setAluminiumStick] = useState(0);
    const [wideStick, setWideStick] = useState(0);
    const [ladder, setLadder] = useState(true);
    const [roofStick, setRoofStick] = useState(true);
    const [dimensionBoard, setDimensionBoard] = useState(true);
    const [status, setStatus] = useState('Wolny');

    let id = semitrailer_id;

    useEffect(() => {
        client.get(`/api/semitrailereqipment/${id}/`, {headers}
        ).then(response => {
            const data = response.data

            setBelts(data.belts);
            setCorners(data.corners);
            setAluminiumStick(data.aluminium_stick);
            setWideStick(data.wide_stick);
            setLadder(data.ladder);
            setRoofStick(data.roof_stick);
            setDimensionBoard(data.dimenstion_board);
            setStatus(data.status);

            setSemiTruckEquipmentExists(true);
        }).catch(error =>{
            setSemiTruckEquipmentExists(false);
        })
    }, []);

    useEffect(() => {
        console.log("update danych odnosnie semitrailer");
        updateDataToSend();
    }, [belts, corners, aluminiumStick, wideStick, ladder, roofStick, dimensionBoard, status]);

    const updateDataToSend = () => {
        setData({
            semi_trailer : id,
            belts : belts,
            corners: corners,
            aluminium_stick : aluminiumStick,
            wide_stick: wideStick,
            ladder: ladder,
            roof_stick: roofStick,
            dimenstion_board: dimensionBoard,
            status: status
        });
    }

    const submitForm = (e) =>{
        e.preventDefault();
        updateDataToSend();
        // client.
        //     post('/api/semitrailereqipment-create/',{
        //         semi_trailer : id,
        //         belts : belts,
        //         corners: corners,
        //         aluminium_stick : aluminiumStick,
        //         wide_stick: wideStick,
        //         ladder: ladder,
        //         roof_stick: roofStick,
        //         dimenstion_board: dimensionBoard,
        //         status: status
        // },
        //     {
        //     headers: {
        //         Authorization: `Bearer ${access_token}`
        //     },
        // }).then(response => {
        //     console.log("pomyslnie dodano semitrailer equipment");
        //     alert("Sukces");
        // }).catch(error => {
        //     console.log(error);
        // })
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
                        <MainTextTitle>Create Semitailer Equipment</MainTextTitle>
                        <PostStoryButtonContainer>
                            <PostStory>
                                Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.
                            </PostStory>
                        </PostStoryButtonContainer>
                    </TextPostContainer>
                </InformPostContentContainer>
            </InformPostContainer>
            <MachineContainer onSubmit={submitForm} encType="multipart/form-data">
                <InfoCreateMachineContainer>
                    <LabelFields>Belts: </LabelFields>
                    <InputField name="betls"
                                type="number"
                                value={belts}
                                onChange={(e) => setBelts(Number(e.target.value))} />
                </InfoCreateMachineContainer>
                <InfoCreateMachineContainer>
                    <LabelFields>Corners: </LabelFields>
                    <InputField name="corners"
                                type="number"
                                value={corners}
                                onChange={(e) => setCorners(Number(e.target.value))} />
                </InfoCreateMachineContainer>
                <InfoCreateMachineContainer>
                    <LabelFields>Aluminium Stick: </LabelFields>
                    <InputField name="aluminum_stick"
                                type="number"
                                value={aluminiumStick}
                                onChange={(e) => setAluminiumStick(Number(e.target.value))} />
                </InfoCreateMachineContainer>
                <InfoCreateMachineContainer>
                    <LabelFields>Wide Stick: </LabelFields>
                    <InputField name="wide_stick"
                                type="number"
                                value={wideStick}
                                onChange={(e) => setWideStick(Number(e.target.value))} />
                </InfoCreateMachineContainer>
                <InfoCreateMachineContainer>
                    <LabelFields>Ladder: </LabelFields>
                    <SelectContainer
                        name="ladder"
                        id="ladder"
                        value={ladder}
                        onChange={handleSelectOption}>
                        <SelectOption value={true}>Obecne</SelectOption>
                        <SelectOption value={false}>Brak</SelectOption>
                    </SelectContainer>
                </InfoCreateMachineContainer>
                <InfoCreateMachineContainer>
                    <LabelFields>RoofStick: </LabelFields>
                    <SelectContainer
                        name="roof-stick"
                        id="roof-stick"
                        value={roofStick}
                        onChange={handleSelectOption}>
                        <SelectOption value={true}>Obecne</SelectOption>
                        <SelectOption value={false}>Brak</SelectOption>
                    </SelectContainer>
                </InfoCreateMachineContainer>
                <InfoCreateMachineContainer>
                    <LabelFields>Dimension Board: </LabelFields>
                    <SelectContainer
                        name="dimension-board"
                        id="dimension-board"
                        value={dimensionBoard}
                        onChange={handleSelectOption}>
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