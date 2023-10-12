import {
    ButtonPick,
    RowMachineContainer,
    RowMachineRecord,
    TruckViewContainer
} from "../assets/styles/receivment_create_styled";
import {MachinePhotoInput, StyleAvailable, StyleAvailableFalse} from "../assets/styles/truck_list_styled";
import React, {useEffect, useState} from "react";
import {
    AlertButton,
    AlertContainer,
    AlertInformation,
    AlertRotationContainer,
    AlertTitle
} from "../assets/styles/alert_styled";
import {Link, useNavigate, useParams} from "react-router-dom";
import client, {access_token, countSessionTime} from "./Sender";
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

    const pk = props.id;
    const [brand, setBrand] = useState(props.brand);
    const [model, setModel] = useState(props.model);
    const [production_data, setProduction_data] = useState(props.production_data);
    const [registration_number, setRegistration_number] = useState(props.registration_number);
    const [aviable, setAviable] = useState(props.aviable);
    const [semi_note, setSemiNote] = useState(props.semi_note);
    const [photo, setPhoto] = useState("");

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

export const TruckComponent = ({props}) => {

    const pk = props.id;
    const [brand, setBrand] = useState(props.brand);
    const [model, setModel] = useState(props.model);
    const [power, setPower] = useState(props.power);
    const [registration_number, setRegistration_number] = useState(props.registration_number);
    const [driven_lenght, setDriven_lenght] = useState(props.driven_lenght);
    const [production_data, setProduction_data] = useState(props.production_data);
    const [aviable, setAviable] = useState(props.aviable);
    const [photo, setPhoto] = useState(props.photo);


    const access_token = localStorage.getItem('access');
    console.log("generowanie truck");
    countSessionTime();
    /*
        ✔
        X✔
     */
    useEffect(() =>{
        client.get(`/api/trucks/${pk}/`,{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(response =>{
                console.log(response);
                let data = response.data
                setBrand(data.brand)
                setModel(data.model)
                setPower(data.power)
                setRegistration_number(data.registration_number)
                setDriven_lenght(data.driven_length)
                setProduction_data(data.production_date)
                setAviable(data.aviable)
                setPhoto(data.photo);
            })
            .catch(error =>{
                console.log(error);
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        client
            .post(`/api/trucks/${pk}/`, {
                    brand: brand,
                    model: model,
                    power: power,
                    registration_number: registration_number,
                    production_data: production_data,
                    driven_lenght: driven_lenght,
                    aviable: aviable,
                    photo: photo
                },
                {
                    headers: {
                        Authorization:
                            `Bearer ${access_token}`,
                        'Content-Type': 'multipart/form-data'
                    },

                })
    }
    const handlePhotoChange = (e) => {
        const selectedPhoto = e.target.files[0];
        if (selectedPhoto) {
            setPhoto(URL.createObjectURL(selectedPhoto));
        }
    };

    return (
        <MachineDetailContainer>
            <HeaderContainer>
                <MachineHeaderName>
                    Truck Detail
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
                        <LabelFields>Power:</LabelFields>
                        <InputField
                            type="text"
                            value={power}
                            onChange={(e) => setPower(e.target.value)}
                        />
                    </MachineDetailRow>
                    <MachineDetailRow>
                        <LabelFields>Driven Length:</LabelFields>
                        <InputField
                            type="text"
                            value={driven_lenght}
                            onChange={(e) => setDriven_lenght(e.target.value)}
                        />
                    </MachineDetailRow>
                    <MachineDetailRow>
                        <LabelFields>Production Date:</LabelFields>
                        <InputField
                            type="date"
                            value={production_data}
                            onChange={(e) => setProduction_data(e.target.value)}
                        />
                    </MachineDetailRow>
                    <MachineDetailRow>
                        <LabelFields>Registration Number:</LabelFields>
                        <InputField
                            type="text"
                            value={registration_number}
                            onChange={(e) => setRegistration_number(e.target.value)}
                        />
                    </MachineDetailRow>
                    <UpdateButton onClick={handleSubmit}>Update</UpdateButton>

                </MachineInformation>
                <MachinePhotoContainer>
                    <MachinePhoto src={photo} />
                    <MachinePhotoInput
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}

                    />
                </MachinePhotoContainer>
            </MachineDetail>

        </MachineDetailContainer>
    )
}


export const TruckEquipmentDetailComponent = ({props}) =>{

};


export const SemiTrailerEquipmentDetailComponent = ({props}) =>{

};
