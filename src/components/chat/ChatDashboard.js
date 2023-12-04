import React, {useRef} from "react";
import client from "../../utils/Sender";
import {useEffect, useState} from "react";
import user from "../user/User";
import {access_token} from "../../utils/Sender";

import {
    ActiveUserList,
    ChatDashboardComponent, ChatMessageContainer, ChatWindowComponent, ChatWindows,
    styledUser,
    StyledUserChat
} from "../../assets/styles/chat_dashboard_styled";
import ChatWindow from "./ChatWindow";
import Footer from "../footer/Footer";

function ChatDashboard(){

    const user_data = JSON.parse(localStorage.getItem('user')).id;
    const official_user_data = JSON.parse(localStorage.getItem('user'));

    const websocketRef = useRef(null);
    const [active_users, setActiveUsers] = useState([]);
    const [notActiveUsers, setNotActiveUsers] = useState([]);
    const [conversationId, setConversationID] = useState('');
    const [startConversationUser, setStartConversationUser] = useState('');

    const shouldStartConversation = !conversationId && startConversationUser;

    const chatWindowProps = {
        conversation_id: conversationId,
        websocketRef: websocketRef,
        user_id: user_data,
        start_conversation: shouldStartConversation
    };

    const [missingUser, setMissingUser] = useState(null);

    const addActiveUser = (newUser) => {
        console.log('utworzono - wywolano naura');
        setActiveUsers([...active_users, newUser]);
    }

    useEffect(() =>{
        // const websocket = new WebSocket(`ws://127.0.0.1:8000/ws/users/?userId=${user_data}/`);
        console.log("Chat Dashboard");
        websocketRef.current = new WebSocket(`ws://127.0.0.1:8000/ws/users/${user_data}/`);
        websocketRef.current.onerror = (event) => {
            // Handle WebSocket errors
            console.error("WebSocket error observed:", event);
        };

        websocketRef.current.onopen = function(event) {
            console.log('Connection established');
        };

        websocketRef.current.onmessage = function(event) {
            const data = JSON.parse(event.data);
            const conversations = data.conversations;
            console.log(conversations);
            console.log(data.users);

            if (data.conversations && data.conversations[0]) {

                setActiveUsers(data.conversations[0].participants);
                const allParticipants = data.conversations.reduce((acc, conversation) => {
                    return acc.concat(conversation.participants);
                }, []);

                // Set the aggregated participants to active users
                setActiveUsers(allParticipants);

                const checkConversationUserData = (conversation, row) => {
                    return {
                        first_name: conversation.participants[row].user.first_name,
                        last_name: conversation.participants[row].user.last_name
                    }
                }
                const users = data.conversations.map(conversation => {

                    const user_data1 = checkConversationUserData(conversation, 0);
                    const user_data2 = checkConversationUserData(conversation, 1);

                    const user_final = user_data1.first_name === official_user_data.first_name && user_data1.last_name === official_user_data.last_name ? user_data2 : user_data1;

                    return {
                        id: conversation.id,
                        user: user_final,
                    };
                });

                setActiveUsers(users);
                setNotActiveUsers(data.users);

                console.log("to jest w if statement");
                console.log(data.users);
                setNotActiveUsers(data.users);
            }


            if (data.type === 'connection_established') {
                console.log(data.message);
                // Perform actions related to connection establishment
            }

            if (data.type === 'chat_message') {
                console.log(event);
                // Perform actions related to connection establishment
            }

            // Handle group messages
            if (data.type === 'group_message') {
                console.log(`Message in ${data.room_id} from ${data.username}: ${data.message}`);
            }

        };

        websocketRef.onclose = function(event) {
            console.log('WebSocket closed:', event);
        };

        return () => {
            // Close the WebSocket when the component unmounts
            if (websocketRef.current) {
                websocketRef.current.close();
            }
        };
    }, []);

    useEffect(() => {
        console.log("Updated notActiveUsers:", notActiveUsers);
    }, [notActiveUsers]);

    const pickConversation = (user_id) =>{
        setConversationID(user_id);
    }

    const startConversation = (user) => {
        setStartConversationUser(user.id);
        setConversationID(null);
        setMissingUser(user);
    }

    const updateMissingUsers = (user_id) => {
        const newAbsentUsers = notActiveUsers.filter((user) => {
            // Assuming 'user' and 'user_object' have an 'id' property to compare
            // Keep the user if their id is not equal to the id of user_objec
            return (user.id !== user_id);
        })
        setNotActiveUsers(newAbsentUsers);
    };

    return (
        <ChatDashboardComponent>
            <div>
                <ActiveUserList>
                    <h2>Active Users</h2>
                    {active_users && active_users.map((data, index) => (
                        <StyledUserChat key={data.id} onClick={() => pickConversation(data.id)}>
                            {data.user.first_name} {data.user.last_name} {data.active}
                        </StyledUserChat>
                    ))}
                </ActiveUserList>
                <ActiveUserList>
                    <h2>Not Active Users</h2>
                    {notActiveUsers && notActiveUsers.map((user, index) => (
                        <StyledUserChat key={user.id} onClick={() => startConversation(user)}>
                            {user.first_name} {user.last_name}
                        </StyledUserChat>
                    ))}
                </ActiveUserList>
            </div>
            <ChatMessageContainer>
                { conversationId ? (
                    <ChatWindow
                        conversation_id={conversationId}
                        websocketRef={websocketRef}
                        user_id={user_data}
                    />
                ): (
                        startConversationUser && (
                            <ChatWindow
                                conversation_id={conversationId}
                                websocketRef={websocketRef}
                                user_id={user_data}
                                user_object={missingUser}
                                start_conversation={true}
                                user_conversation_start={startConversationUser}
                                updateActiveUsers={addActiveUser}
                                updateMissingUsers={updateMissingUsers}
                            />
                    )
                )}
            </ChatMessageContainer>
        </ChatDashboardComponent>
    )
}

export default ChatDashboard;