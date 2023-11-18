import React,{ useState, useEffect }from "react";
import client from "../utils/Sender";
import {access_token} from "../utils/Sender";
import {Link, useParams} from "react-router-dom";
import {
    HeaderContainer,
    MachineDetail,
    MachineDetailContainer, MachineDetailRow,
    MachineHeaderName, MachineInformation, MachinePhoto, MachinePhotoContainer
} from "../assets/styles/machine_detail_styled";
import {
    CreateButtonPostContainer,
    InformPostContainer,
    InformPostContentContainer,
    MainTextTitle,
    PostStory, PostStoryButtonContainer, TextPostContainer,
    TextTitle
} from "../assets/styles/home_guest_styled";
import {InputField, LabelFields, UpdateButton} from "../assets/styles/user_display";
import {MachinePhotoInput} from "../assets/styles/truck_list_styled";
import {ButtonLink} from "../assets/styles/link_buttons";
import {useNavigate} from "react-router-dom";

function SemiTrailer(){
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [production_data, setProduction_data] = useState("");
    const [registration_number, setRegistration_number] = useState("");
    const [aviable, setAviable] = useState("");
    const [semi_note, setSemiNote] = useState("");
    const [photo, setPhoto] = useState("");

    const { pk } = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        client.get(`/api/semitrailers/${pk}/`,{
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }).then(response => {
            let received_data = response.data;
            console.log(received_data);
            setBrand(received_data.brand);
            setModel(received_data.model);
            setProduction_data(received_data.production_year);
            setRegistration_number(received_data.registration_number);
            setAviable(received_data.available);
            setSemiNote(received_data.semi_note);
            setPhoto(received_data.photo);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    const handlePhotoChange = (e) => {
        const selectedPhoto = e.target.files[0];
        if (selectedPhoto) {
            setPhoto(URL.createObjectURL(selectedPhoto));
        }
        console.log(selectedPhoto);
        console.log(photo);
    };

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

    const handleNavigate = () =>{
        navigate('/semi-trailers-equipment-create',{
            state : {id : pk}
        })
    }

    return (
        <MachineDetailContainer>
            <InformPostContainer>
                <InformPostContentContainer>
                    <TextPostContainer>

                    </TextPostContainer>
                    <TextPostContainer>
                        <MainTextTitle>Select your best car, manage user and facilities in your company using complex management system</MainTextTitle>
                        <PostStoryButtonContainer>
                            <PostStory>
                                Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.
                                Discover the power of real-time control as our app offers seamless GPS tracking, allowing you to monitor your vehicle's location at all times, ensuring its safety and security.
                            </PostStory>
                            <CreateButtonPostContainer>
                                <ButtonLink onClick={handleNavigate}>
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
    );
}
export default SemiTrailer;