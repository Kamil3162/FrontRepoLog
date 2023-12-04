import React, {useEffect, useState} from "react";
import {
    UserListElement,
    UserNameUsername,
    UserPhoto,
    UserPhotoContainer,
    UsersListContainer
} from "../../assets/styles/users_display";
import user_icon from "../../assets/icons/user_icon.png";
import client, {access_token} from "../../utils/Sender";
import {logOutHook} from "../../hooks/receivment_hooks";

function ListUsers({pickUser, navigate}){

    const [users, setUsers] = useState([]);
    const [displayUsers, setDisplayUsers] = useState([]);

    useEffect(() =>{
        console.log("all users display");

        client.get('api/all-users/',{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        }).then(response =>{
            console.log(response.data);
            setUsers(response.data);
        }).catch(error =>{
            console.log(error);
            logOutHook(error, navigate);
        })
        console.log("esa wyswietlanie");
    }, []);
    return (
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
    )
}

export default ListUsers;