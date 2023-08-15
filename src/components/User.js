import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import client from "../utils/Sender";
import {
    AddressContainer,
    DeleteAccountText, InputField, LabelFields, PersonalDataContainer,
    SettingDetailContainer,
    SettingDetails,
    SettingElementsContainer, SettingLeftPanelItem,
    SettingsContainer,
    SettingsLeftPanel, SettingsNavTitle,
    SettingTitle, UpdateButton
} from "../layouts/user_display";
import {
    InformPostContainer,
    InformPostContentContainer,
    MainTextTitle,
    PostStory,
    TextTitle
} from "../layouts/home_guest_styled";

function User() {
    const access_token = localStorage.getItem('access');

    const [data, setData] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [apartmentNumber, setApartmentNumber] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    useEffect(() => {
        client.get("/api/detail-user/", {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(response => {
                setData(response.data);
                setFirstName(response.data.first_name);
                setLastName(response.data.last_name);
                setEmail(response.data.email);
                setHouseNumber(response.data.house_number);
                setApartmentNumber(response.data.apartment_number);
                setCity(response.data.city);
                setStreet(response.data.street);
                setZipCode(response.data.zip_code);
                setPhoneNumber(response.data.phone_number);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleUpdate = () => {
        client.post('/api/detail-user/',{
            headers:{
                Authorization: `Bearer ${access_token}`
            },
            first_name:firstName,
            last_name: lastName,
            email: email,
            password: password,
            house_number: houseNumber,
            apartment_number: apartmentNumber,
            city: city,
            street: street,
            phone_number: phoneNumber,
            zip_code: zipCode
        })
            .then(response =>{
                console.log(response);
            })
            .catch(error =>{
                console.log(error)
            });
    }

    return (
        <SettingsContainer>
            <InformPostContainer>
                <InformPostContentContainer>
                    <TextTitle>NAURA</TextTitle>
                    <MainTextTitle>Select your best car, manage user and facilities in your company using complex management system</MainTextTitle>
                    <PostStory>
                        Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.
                        Discover the power of real-time control as our app offers seamless GPS tracking, allowing you to monitor your vehicle's location at all times, ensuring its safety and security.
                    </PostStory>
                </InformPostContentContainer>
            </InformPostContainer>
            <SettingTitle>Account Settings</SettingTitle>
            <SettingElementsContainer>
                <SettingsLeftPanel>
                    <SettingLeftPanelItem>My Profile</SettingLeftPanelItem>
                    <SettingLeftPanelItem>Teams</SettingLeftPanelItem>
                    <SettingLeftPanelItem>Notifications</SettingLeftPanelItem>
                    <DeleteAccountText>Delete Account</DeleteAccountText>
                </SettingsLeftPanel>
                <SettingDetails>
                    <SettingsNavTitle>Profile Detail</SettingsNavTitle>
                    <SettingDetailContainer>
                    {data ? (
                        <>
                            <PersonalDataContainer>
                                <LabelFields>Email Address</LabelFields>
                                <InputField
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </PersonalDataContainer>
                            <AddressContainer>

                                <LabelFields>Full name</LabelFields>
                                <InputField
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <InputField
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </AddressContainer>

                            <AddressContainer>
                                <LabelFields>HopuseNum</LabelFields>
                                <InputField
                                    type="text"
                                    value={houseNumber}
                                    onChange={(e) => setHouseNumber(e.target.value)}
                                />
                                <br/>
                                <LabelFields>Aparment</LabelFields>
                                <InputField
                                    type="text"
                                    value={apartmentNumber}
                                    onChange={(e) => setApartmentNumber(e.target.value)}
                                />
                                <br/>
                                <LabelFields>City</LabelFields>
                                <InputField
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                <br/>
                                <LabelFields>Street</LabelFields>
                                <InputField
                                    type="text"
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                />
                                <br/>
                                <LabelFields>Zip code</LabelFields>
                                <InputField
                                    type="text"
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                />
                            </AddressContainer>

                        <PersonalDataContainer>

                                <br/>
                                <LabelFields>Phone:</LabelFields>
                                <InputField
                                    type="number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <br/>
                        </PersonalDataContainer>
                            <PersonalDataContainer>
                                <LabelFields>Password</LabelFields>
                                <InputField
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <UpdateButton onClick={handleUpdate}>Update</UpdateButton>
                            </PersonalDataContainer>

                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                    </SettingDetailContainer>
                </SettingDetails>
            </SettingElementsContainer>
        </SettingsContainer>
    );
}

export default User;
