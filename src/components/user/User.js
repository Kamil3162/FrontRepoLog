import axios from "axios";

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import client from "../../utils/Sender";
import {access_token} from "../../utils/Sender";
import {
    AddressContainer,
    DeleteAccountText, InputField, LabelFields, PersonalDataContainer,
    SettingDetailContainer,
    SettingDetails,
    SettingElementsContainer, SettingLeftPanelItem,
    SettingsContainer,
    SettingsLeftPanel, SettingsNavTitle,
    SettingTitle, UpdateButton
} from "../../assets/styles/user_display";
import {
    CreateButtonPostContainer,
    InformPostContainer,
    InformPostContentContainer,
    MainTextTitle,
    PostStory, PostStoryButtonContainer, TextPostContainer,
    TextTitle
} from "../../assets/styles/home_guest_styled";
function User() {
    // convert json stringify data to json format data
    const user_data = JSON.parse(localStorage.getItem('user'));
    const refresh_token = localStorage.getItem('refresh');

    const [firstName, setFirstName] = useState(user_data.first_name || '');
    const [lastName, setLastName] = useState(user_data.last_name || '');
    const [email, setEmail] = useState(user_data.email || '');
    const [password, setPassword] = useState('');
    const [houseNumber, setHouseNumber] = useState(user_data.house_number || '');
    const [apartmentNumber, setApartmentNumber] = useState(user_data.apartment_number || '');
    const [city, setCity] = useState(user_data.city || '');
    const [street, setStreet] = useState(user_data.street || '');
    const [zipCode, setZipCode] = useState(user_data.zip_code || '');
    const [phoneNumber, setPhoneNumber] = useState(user_data.phone_number || '');

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Handle update user");

        client
            .post('/api/detail-user/',
            {
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
            },
            {
                headers:{
                    Authorization: `Bearer ${access_token}`
            },
        })
            .then(response =>{
                console.log(response);
            })
            .catch(error =>{
                console.log(error)
            });
    }


    const handleDelete = (e) => {
        e.preventDefault();

        client.delete('/api/delete-account/',{
            refresh_token: refresh_token
        },{
            headers: {
                Authorization: `Bearer ${access_token}`
            },
        }).then(response =>{
            console.log(response);
            alert('Your account has been successfully deleted.');
            localStorage.clear();
            window.location.replace('/login');
        }).catch(error => {
            console.log(error);
        });
    }


    return (
        <SettingsContainer>
            <InformPostContainer>
                <InformPostContentContainer>
                    <TextPostContainer>
                        <MainTextTitle>Select your best car, manage user and facilities in your company using complex management system</MainTextTitle>
                        <PostStoryButtonContainer>
                            <PostStory>
                                Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.
                                Discover the power of real-time control as our app offers seamless GPS tracking, allowing you to monitor your vehicle's location at all times, ensuring its safety and security.
                            </PostStory>
                        </PostStoryButtonContainer>
                    </TextPostContainer>
                </InformPostContentContainer>
            </InformPostContainer>
            <SettingTitle>Account Settings</SettingTitle>
            <SettingElementsContainer>
                <SettingsLeftPanel>
                    <SettingLeftPanelItem>My Profile</SettingLeftPanelItem>
                    <SettingLeftPanelItem>Teams</SettingLeftPanelItem>
                    <SettingLeftPanelItem>Notifications</SettingLeftPanelItem>
                    <DeleteAccountText onClick={handleDelete}>Delete Account</DeleteAccountText>
                </SettingsLeftPanel>
                <SettingDetails>
                    <SettingsNavTitle>Profile Detail</SettingsNavTitle>
                    <SettingDetailContainer>

                            <AddressContainer>
                                <LabelFields>Email Address</LabelFields>
                                <InputField
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </AddressContainer>
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
                                <LabelFields>Street</LabelFields>
                                <InputField
                                    type="text"
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                />
                                <br/>
                            </AddressContainer>
                            <AddressContainer>
                                <LabelFields>City</LabelFields>
                                <InputField
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                <br/>
                            </AddressContainer>
                            <AddressContainer>
                                <LabelFields>Aparment</LabelFields>
                                <InputField
                                    type="text"
                                    value={apartmentNumber}
                                    onChange={(e) => setApartmentNumber(e.target.value)}
                                />
                                <br/>
                            </AddressContainer>

                            <AddressContainer>
                                <LabelFields>HopuseNum</LabelFields>
                                <InputField
                                    type="text"
                                    value={houseNumber}
                                    onChange={(e) => setHouseNumber(e.target.value)}
                                />
                                <br/>
                            </AddressContainer>

                            <AddressContainer>
                                <LabelFields>Zip code</LabelFields>
                                <InputField
                                    type="text"
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                />
                            </AddressContainer>
                        <PersonalDataContainer>
                            <AddressContainer>
                                <LabelFields>Phone:</LabelFields>
                                <InputField
                                    type="number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <br/>
                            </AddressContainer>
                        </PersonalDataContainer>
                            <PersonalDataContainer>
                                <AddressContainer>
                                    <LabelFields>Password</LabelFields>
                                    <InputField
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </AddressContainer>
                                <UpdateButton onClick={handleUpdate}>Update</UpdateButton>
                            </PersonalDataContainer>
                    </SettingDetailContainer>
                </SettingDetails>
            </SettingElementsContainer>
        </SettingsContainer>
    );
}

export default User;
