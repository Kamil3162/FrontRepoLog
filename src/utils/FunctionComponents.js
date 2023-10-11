import {
    ButtonPick,
    RowMachineContainer,
    RowMachineRecord,
    TruckViewContainer
} from "../assets/styles/receivment_create_styled";
import {MachinePhotoInput, StyleAvailable, StyleAvailableFalse} from "../assets/styles/truck_list_styled";
import React, {useState} from "react";
import {
    AlertButton,
    AlertContainer,
    AlertInformation,
    AlertRotationContainer,
    AlertTitle
} from "../assets/styles/alert_styled";
import {Link, useNavigate, useParams} from "react-router-dom";
import client, {access_token} from "./Sender";
import {
    CreateButtonPostContainer,
    InformPostContainer,
    InformPostContentContainer, MainTextTitle, PostStory, PostStoryButtonContainer,
    TextPostContainer,
    TextTitle
} from "../assets/styles/home_guest_styled";
import {ButtonLink} from "../assets/styles/link_buttons";
import {
    HeaderContainer,
    MachineDetail, MachineDetailContainer, MachineDetailRow,
    MachineHeaderName,
    MachineInformation, MachinePhoto, MachinePhotoContainer
} from "../assets/styles/machine_detail_styled";
import {InputField, LabelFields, UpdateButton} from "../assets/styles/user_display";

export const SemiTrailerViewContainerFun = ({items, selectedItem, onSelect}) => {
    return (
        <TruckViewContainer>
            {items.map(semitrailer => (
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
                        {semitrailer.available === 'Wolny' ? (
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
                            onClick={(e) => onSelect(e, semitrailer.id)}
                            style={{
                                backgroundColor: selectedItem === semitrailer.id ? 'green' : 'red'
                            }}
                        >
                            Pick
                        </ButtonPick>
                    </RowMachineRecord>
                </RowMachineContainer>
            ))}
        </TruckViewContainer>
    )
}
export const TruckViewContainerFun = ({items, selectedItem, onSelect}) =>{
    return (
        <TruckViewContainer>
            {items.map((truck, index) => (
                <RowMachineContainer key={truck.id}>
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
                            (e) => onSelect(e, truck.id)
                        }
                                    style={{
                                        backgroundColor: selectedItem === truck.id ? "green" : 'red'
                                    }}
                        >
                            Pick
                        </ButtonPick>
                    </RowMachineRecord>
                </RowMachineContainer>
            ))}
        </TruckViewContainer>
        )
}

export const AlertComponent = ({title, information, buttonText, redirectUrl = "#", buttonClickFunction}) =>{

    const [visibleState, setVisibleState] = useState(true);
    const navigate = useNavigate();

    const handleClose = (e) =>{
        e.preventDefault();
        if (redirectUrl !== "#"){
            navigate(redirectUrl);
        }
        setVisibleState(false);
        buttonClickFunction();
    }

    return (
         visibleState && (
             <AlertContainer>
                 <AlertTitle>{title}</AlertTitle>
                 <AlertInformation>{information}</AlertInformation>
                 <AlertRotationContainer></AlertRotationContainer>
                 <AlertButton
                     as={Link}
                     to={redirectUrl}
                     onClick={handleClose}>{buttonText}</AlertButton>
             </AlertContainer>
        )
    )
}


export const SemiTrailerComponent = ({props}) => {
    console.log(props);

    const [brand, setBrand] = useState(props.brand);
    const [model, setModel] = useState(props.model);
    const [production_data, setProduction_data] = useState(props.production_data);
    const [registration_number, setRegistration_number] = useState(props.registration_number);
    const [aviable, setAviable] = useState(props.aviable);
    const [semi_note, setSemiNote] = useState(props.semi_note);
    const [photo, setPhoto] = useState("");

    const { pk } = useParams();

    const handleSubmit = (e) =>{
        e.preventDefault();

        client.post(`/api/truck/${pk}`,{
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'multipart/form-data',
            },
            data:{
                brand:brand,
                model: model,
                production_data: production_data,
                registration_number: registration_number,
                aviable: aviable,
                semi_note: semi_note,
                photo: photo
            }
        }).then(response =>{
            console.log(response);
        }).then(error =>{
            console.log(error);
        })
    }
    return (
        <MachineDetailContainer>
            <InformPostContainer>
                <InformPostContentContainer>
                    <TextPostContainer>

                    </TextPostContainer>
                    <TextPostContainer>
                        <TextTitle>NAURA</TextTitle>
                        <MainTextTitle>Select your best car, manage user and facilities in your company using complex management system</MainTextTitle>
                        <PostStoryButtonContainer>
                            <PostStory>
                                Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.
                                Discover the power of real-time control as our app offers seamless GPS tracking, allowing you to monitor your vehicle's location at all times, ensuring its safety and security.
                            </PostStory>
                            <CreateButtonPostContainer>
                                <ButtonLink as={Link} to="/semi-trailers-equipment-create">
                                    Create Semitrailer Equipment
                                </ButtonLink>
                            </CreateButtonPostContainer>
                        </PostStoryButtonContainer>
                    </TextPostContainer>
                </InformPostContentContainer>
            </InformPostContainer>
            <HeaderContainer>
                <MachineHeaderName>
                    Semi Trailer
                </MachineHeaderName>
            </HeaderContainer>
            <MachineDetail>
                <MachineInformation>
                    <MachineDetailRow>
                        <LabelFields>Brand:</LabelFields>
                        <InputField
                            type="text"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </MachineDetailRow>
                    <MachineDetailRow>
                        <LabelFields>Model:</LabelFields>
                        <InputField
                            type="text"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                        />
                    </MachineDetailRow>
                    <MachineDetailRow>
                        <LabelFields>Production Data:</LabelFields>
                        <InputField
                            type="date"
                            value={production_data}
                            onChange={(e) => setProduction_data(e.target.value)}
                        />
                    </MachineDetailRow>
                    <MachineDetailRow>
                        <LabelFields>Registration Number:</LabelFields>
                        <InputField
                            type="date"
                            value={registration_number}
                            onChange={(e) => setRegistration_number(e.target.value)}
                        />
                    </MachineDetailRow>
                    <MachineDetailRow>
                        <LabelFields>Aviable:</LabelFields>
                        <InputField
                            type="text"
                            value={aviable}
                            onChange={(e) => setAviable(e.target.value)}
                        />
                    </MachineDetailRow>
                    <MachineDetailRow>
                        <LabelFields>Semi note:</LabelFields>
                        <InputField
                            type="text"
                            value={semi_note}
                            onChange={(e) => setSemiNote(e.target.value)}
                        />
                    </MachineDetailRow>
                    <UpdateButton>Update</UpdateButton>

                </MachineInformation>
            </MachineDetail>
        </MachineDetailContainer>
    )

}