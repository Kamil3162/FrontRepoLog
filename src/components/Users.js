import React from "react";
import {useState, useEffect} from "react";
import client from "../utils/Sender";
import {access_token} from "../utils/Sender";
import {
    UserContainer, UserListElement,
    UserNameUsername, UserPhoto,
    UserPhotoContainer,
    UsersContainer,
    UsersListContainer
} from "../assets/styles/users_display";
import user_icon from "../assets/user_icon.png";

function Users(){
    const [users, setUsers] = useState([]);
    const [activeReceivment, setActiveReceivment] = useState('');


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
            <UsersListContainer>
                {users.map(user => (
                    <UserListElement>
                        <UserPhotoContainer>
                            <UserPhoto src={user_icon}/>
                        </UserPhotoContainer>
                        <UserNameUsername>
                            {user.first_name} {user.last_name}
                        </UserNameUsername>
                    </UserListElement>
                ))}
                <UserListElement>
                    <UserPhotoContainer>
                        <UserPhoto src={user_icon}/>
                    </UserPhotoContainer>
                    <UserNameUsername>
                        Esa Esa
                    </UserNameUsername>
                </UserListElement>
                <UserListElement>
                    <UserPhotoContainer>
                        <UserPhoto src={user_icon}/>
                    </UserPhotoContainer>
                    <UserNameUsername>
                        Esa Esa
                    </UserNameUsername>
                </UserListElement>
                <UserListElement>
                    <UserPhotoContainer>
                        <UserPhoto src={user_icon}/>
                    </UserPhotoContainer>
                    <UserNameUsername>
                        Esa Esa
                    </UserNameUsername>
                </UserListElement>
                <UserListElement>
                    <UserPhotoContainer>
                        <UserPhoto src={user_icon}/>
                    </UserPhotoContainer>
                    <UserNameUsername>
                        Esa Esa
                    </UserNameUsername>
                </UserListElement>
                <UserListElement>
                    <UserPhotoContainer>
                        <UserPhoto src={user_icon}/>
                    </UserPhotoContainer>
                    <UserNameUsername>
                        Esa Esa
                    </UserNameUsername>
                </UserListElement>
                <UserListElement>
                    <UserPhotoContainer>
                        <UserPhoto src={user_icon}/>
                    </UserPhotoContainer>
                    <UserNameUsername>
                        Esa Esa
                    </UserNameUsername>
                </UserListElement>
                <UserListElement>
                    <UserPhotoContainer>
                        <UserPhoto src={user_icon}/>
                    </UserPhotoContainer>
                    <UserNameUsername>
                        Esa Esa
                    </UserNameUsername>
                </UserListElement>
                <UserListElement>
                    <UserPhotoContainer>
                        <UserPhoto src={user_icon}/>
                    </UserPhotoContainer>
                    <UserNameUsername>
                        Esa Esa
                    </UserNameUsername>
                </UserListElement>
                <UserListElement>
                    <UserPhotoContainer>
                        <UserPhoto src={user_icon}/>
                    </UserPhotoContainer>
                    <UserNameUsername>
                        Esa Esa
                    </UserNameUsername>
                </UserListElement>
                <UserListElement>
                    <UserPhotoContainer>
                        <UserPhoto src={user_icon}/>
                    </UserPhotoContainer>
                    <UserNameUsername>
                        Esa Esa
                    </UserNameUsername>
                </UserListElement>

            </UsersListContainer>
            <UserContainer>
                fds
            </UserContainer>
        </UsersContainer>
    )
}

export default Users;