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
    const websocketRef = useRef(null);
    const [active_users, setActiveUsers] = useState(null);
    const [notActiveUsers, setNotActiveUsers] = useState(null);
    const [conversationId, setConversationID] = useState('');
    const [startConversationUser, setStartConversationUser] = useState('');

    const [message, setMessage] = useState('');
    const [startConversationFlag, setStartConversationFlag] = useState('');

    const [finalconversations, setfinalconversations] = useState([]);

    const shouldStartConversation = !conversationId && startConversationUser;
    const chatWindowProps = {
        conversation_id: conversationId,
        websocketRef: websocketRef,
        user_id: user_data,
        start_conversation: shouldStartConversation
    };

    useEffect(() =>{
        // const websocket = new WebSocket(`ws://127.0.0.1:8000/ws/users/?userId=${user_data}/`);
        console.log("wywolanie");
        console.log("######################################################");
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
            console.log("esadsadsadsa")
            console.log('Message from server:', data);



            if (data.conversations && data.conversations[0]) {



                setActiveUsers(data.conversations[0].participants);


                const allParticipants = data.conversations.reduce((acc, conversation) => {
                    return acc.concat(conversation.participants);
                }, []);

                // Set the aggregated participants to active users
                setActiveUsers(allParticipants);

                const checkConversationUserData = (conversation ,row) => {
                    return {
                        first_name: conversation.participants[row].user.first_name,
                        last_name: conversation.participants[row].user.last_name
                    }
                }

                const users = data.conversations.map(conversation => {
                    console.log('testowo');
                    console.log(conversation);
                    console.log('testowo');

                    const user_data1 = checkConversationUserData(conversation, 0);
                    const user_data2 = checkConversationUserData(conversation, 1);
                    const user_final = user_data1.first_name === user_data.first_name && user_data1 === user_data.last_name ? user_data1 : user_data2;

                    return {
                        id: conversation.id,
                        user: user_final,
                    };
                });

                setActiveUsers(users);

                console.log('Active users updated');
            }

            if (data.type === 'connection_established') {
                console.log(data.message);
                // Perform actions related to connection establishment
            }

            if (data.type === 'chat_message') {
                console.log(event);
                console.log(data.message);
                // Perform actions related to connection establishment
            }

            // Handle group messages
            if (data.type === 'group_message') {
                console.log(`Message in ${data.room_id} from ${data.username}: ${data.message}`);
                // Update your chat UI with this message
                // You might want to add this message to your chat state
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

    const pickConversation = (user_id) =>{
        setConversationID(user_id);
    }

    const startConversation = (user_id) => {
        setStartConversationUser(user_id);
        setConversationID(null);
    }

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
                        <StyledUserChat key={user.id} onClick={() => startConversation(user.id)}>
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
                                start_conversation={true}
                                user_conversation_start={startConversationUser}
                            />
                    )
                )}
            </ChatMessageContainer>
        </ChatDashboardComponent>
    )
}

export default ChatDashboard;