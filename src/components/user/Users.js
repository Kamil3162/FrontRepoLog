import React from "react";
import {useState, useEffect} from "react";
import client from "../../utils/Sender";
import {access_token} from "../../utils/Sender";
import {
    MainUsersContentContainer,
    SeachUserField,
    UserContainer, UserListElement,
    UserNameUsername, UserPhoto,
    UserPhotoContainer,
    UsersContainer, UserSearchContainer,
    UsersListContainer
} from "../../assets/styles/users_display";
import user_icon from "../../assets/icons/user_icon.png";
import {
    CreateButtonPostContainer,
    MainTextTitle, MainTextTitleFontChange,
    PostStory,
    PostStoryButtonContainer, TextPostContainer,
    TextTitle
} from "../../assets/styles/home_guest_styled";
import {ButtonLink} from "../../assets/styles/link_buttons";
import {Link} from "react-router-dom";
import {
    AddressContainer,
    InputField,
    LabelFields, PersonalDataContainer,
    SettingDetailContainer, SettingDetails,
    SettingsNavTitle, UpdateButton
} from "../../assets/styles/user_display";
import {handleUpdateUser} from "../../utils/Sender";
import user from "./User";

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
    const [pickedUserId, setPickedUserId] = useState(null);
    const [displayUsers, setDisplayUsers] = useState([]);


    console.log(users);

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Handle update user");

        console.log(`/api/user/${pickedUserId}`);
        const userData = {
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
        }
        handleUpdateUser(userData, access_token, pickedUserId);
    }

    const pickUser = (event) =>{
        setPickedUser(event);
        setFirstName(event.first_name);
        setLastName(event.last_name);
        setEmail(event.email);
        setPhoneNumber(event.phone_number);
        setPickedUserId(event.pk);
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

    const filterUsers = (e) =>{
        const searchText = e.target.value.toLowerCase();
        const filteredUsers = users.filter(user =>
            user.first_name.toLowerCase().includes(searchText)
        );
        setDisplayUsers(filteredUsers);
    }

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
                <SeachUserField
                    placeholder="Imie Nazwisko"
                    onChange={(e) => filterUsers(e)}
                />
            </UserSearchContainer>
            <MainUsersContentContainer>
                <UsersListContainer>
                    {
                        displayUsers && displayUsers.length > 0 ? (
                            displayUsers.map((user, index) => (
                                <UserListElement key={index} onClick={() => pickUser(user)}>
                                    <UserPhotoContainer>
                                        <UserPhoto src={user_icon}/>
                                    </UserPhotoContainer>
                                    <UserNameUsername>
                                        {user.first_name} {user.last_name}
                                    </UserNameUsername>
                                </UserListElement>
                            ))
                        ) : (
                            users.map((user, index) => (
                                <UserListElement key={index} onClick={() => pickUser(user)}>
                                    <UserPhotoContainer>
                                        <UserPhoto src={user_icon}/>
                                    </UserPhotoContainer>
                                    <UserNameUsername>
                                        {user.first_name} {user.last_name}
                                    </UserNameUsername>
                                </UserListElement>
                            ))
                        )
                    }
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
                                            placeholder="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <br/>
                                    </AddressContainer>
                                </PersonalDataContainer>
                                <UpdateButton onClick={(e) => handleUpdate(e)}>Update</UpdateButton>
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