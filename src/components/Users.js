import React from "react";
import {useState, useEffect} from "react";
import client from "../utils/Sender";
import {access_token} from "../utils/Sender";
import {
    MainUsersContentContainer,
    SeachUserField,
    UserContainer, UserListElement,
    UserNameUsername, UserPhoto,
    UserPhotoContainer,
    UsersContainer, UserSearchContainer,
    UsersListContainer
} from "../assets/styles/users_display";
import user_icon from "../assets/user_icon.png";
import {
    CreateButtonPostContainer,
    MainTextTitle, MainTextTitleFontChange,
    PostStory,
    PostStoryButtonContainer, TextPostContainer,
    TextTitle
} from "../assets/styles/home_guest_styled";
import {ButtonLink} from "../assets/styles/link_buttons";
import {Link} from "react-router-dom";
import {
    AddressContainer,
    InputField,
    LabelFields, PersonalDataContainer,
    SettingDetailContainer, SettingDetails,
    SettingsNavTitle, UpdateButton
} from "../assets/styles/user_display";
import handleUpdateUser from "../utils/Sender";

function Users(){
    const [users, setUsers] = useState([]);
    const [pickedUser, setPickedUser] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [apartmentNumber, setApartmentNumber] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Handle update user");

        handleUpdateUser(
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
            access_token
        );
    }

    const pickUser = (event) =>{
        setPickedUser(event);
    };

    const selectUser = () => {

    };

    useEffect(() =>{
        client.get('api/all-users/',{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        }).then(response =>{
            console.log(response.data);
            setUsers(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }, []);

    return (
        <UsersContainer>
            <TextPostContainer>
                <MainTextTitleFontChange>Users</MainTextTitleFontChange>
                <PostStoryButtonContainer>
                    <PostStory>
                        Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.
                        Discover the power of real-time control as our app offers seamless GPS tracking, allowing you to monitor your vehicle's location at all times, ensuring its safety and security.
                    </PostStory>
                    <CreateButtonPostContainer>
                        <ButtonLink as={Link} to="/truck-create">
                            Create User
                        </ButtonLink>
                    </CreateButtonPostContainer>
                </PostStoryButtonContainer>
            </TextPostContainer>
            <UserSearchContainer>
                <SeachUserField placeholder="Imie Nazwisko"/>
            </UserSearchContainer>
            <MainUsersContentContainer>
                <UsersListContainer>
                    {users.map(user => (
                        <UserListElement onClick={() => pickUser(user)}>
                            <UserPhotoContainer>
                                <UserPhoto src={user_icon}/>
                            </UserPhotoContainer>
                            <UserNameUsername>
                                {user.first_name} {user.last_name}
                            </UserNameUsername>
                        </UserListElement>
                    ))}
                </UsersListContainer>
                <UserContainer>
                    {/*<MainTextTitleFontChange>Personal Information</MainTextTitleFontChange>*/}
                    <SettingDetails>
                        <SettingsNavTitle>Profile Detail</SettingsNavTitle>
                        { pickedUser ? (
                            <SettingDetailContainer>
                                <AddressContainer>
                                    <LabelFields>Email Address</LabelFields>
                                    <InputField
                                        type="text"
                                        value={pickedUser.email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </AddressContainer>
                                <AddressContainer>

                                    <LabelFields>Full name</LabelFields>
                                    <InputField
                                        type="text"
                                        value={pickedUser.first_name}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <InputField
                                        type="text"
                                        value={pickedUser.last_name}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </AddressContainer>
                                <AddressContainer>
                                    <LabelFields>Street</LabelFields>
                                    <InputField
                                        type="text"
                                        value={pickedUser.street}
                                        onChange={(e) => setStreet(e.target.value)}
                                    />
                                    <br/>
                                </AddressContainer>
                                <AddressContainer>
                                    <LabelFields>City</LabelFields>
                                    <InputField
                                        type="text"
                                        value={pickedUser.city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                    <br/>
                                </AddressContainer>
                                <AddressContainer>
                                    <LabelFields>Aparment</LabelFields>
                                    <InputField
                                        type="text"
                                        value={pickedUser.apartment_number}
                                        onChange={(e) => setApartmentNumber(e.target.value)}
                                    />
                                    <br/>
                                </AddressContainer>

                                <AddressContainer>
                                    <LabelFields>HopuseNum</LabelFields>
                                    <InputField
                                        type="text"
                                        value={pickedUser.house_number}
                                        onChange={(e) => setHouseNumber(e.target.value)}
                                    />
                                    <br/>
                                </AddressContainer>

                                <AddressContainer>
                                    <LabelFields>Zip code</LabelFields>
                                    <InputField
                                        type="text"
                                        value={pickedUser.zip_code}
                                        onChange={(e) => setZipCode(e.target.value)}
                                    />
                                </AddressContainer>
                                <PersonalDataContainer>
                                    <AddressContainer>
                                        <LabelFields>Phone:</LabelFields>
                                        <InputField
                                            type="number"
                                            value={pickedUser.phone_number}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                        <br/>
                                    </AddressContainer>
                                </PersonalDataContainer>
                                <PersonalDataContainer>
                                    <AddressContainer>
                                        <LabelFields>Password:</LabelFields>
                                        <InputField
                                            type="password"
                                            value=""
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <br/>
                                    </AddressContainer>
                                </PersonalDataContainer>
                                <UpdateButton onClick={() => handleUpdateUser(pickedUser.id)}>Update</UpdateButton>
                            </SettingDetailContainer>
                        ) : (
                            <SettingDetailContainer>
                                <p>
                                    Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.
                                    Discover the power of real-time control as our app offers seamless GPS tracking, allowing you to monitor your vehicle's location at all times, ensuring its safety and security.
                                </p>
                            </SettingDetailContainer>
                            )
                        }
                    </SettingDetails>
                </UserContainer>
            </MainUsersContentContainer>
        </UsersContainer>
    )
}

export default Users;