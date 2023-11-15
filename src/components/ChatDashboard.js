import React, {useRef} from "react";
import client from "../utils/Sender";
import {useEffect, useState} from "react";
import user from "./User";
import {access_token} from "../utils/Sender";

import {
    ActiveUserList,
    ChatDashboardComponent, ChatMessageContainer, ChatWindowComponent, ChatWindows,
    styledUser,
    StyledUserChat
} from "../assets/styles/chat_dashboard_styled";
import ChatWindow from "./ChatWindow";

function ChatDashboard(){

    const [ws, setWs] = useState(null);
    const user_data = JSON.parse(localStorage.getItem('user')).id;
    const [active_users, setActiveUsers] = useState(null);
    const websocketRef = useRef(null);
    const [message, setMessage] = useState('');
    const current_user_id = JSON.parse(localStorage.getItem('user')).id;
    const [conversationId, setConversationID] = useState('');

    useEffect(() =>{
        // const websocket = new WebSocket(`ws://127.0.0.1:8000/ws/users/?userId=${user_data}/`);
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
            console.log('Message from server:', data);

            if (data.conversations && data.conversations[0]) {
                setActiveUsers(data.conversations[0].participants);

                console.log(data.conversations[0].participants);
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

    const sendMessage = () => {
        if (websocketRef.current && websocketRef.current.readyState === WebSocket.OPEN) {
            websocketRef.current.send(JSON.stringify({
                message: message,
                user: user_data,
                room_id: 1
            }));
        } else {
            console.log("WebSocket is not open.");
        }
    };

    const pickConversation = (user_id) =>{
        setConversationID(user_id);
        console.log(user_id);
    }


    return (
        <ChatDashboardComponent>
            <div>
                <ActiveUserList>
                    <h2>Active Users</h2>
                    {active_users && active_users.map((data, index) => (
                        <StyledUserChat key={data.user.id} onClick={() => pickConversation(data.user.id)}>
                            {data.user.first_name} {data.user.last_name} {data.active}
                        </StyledUserChat>
                    ))}
                </ActiveUserList>
            </div>
            <ChatMessageContainer>
                { conversationId && (
                    <ChatWindow
                        conversation_id={conversationId}
                        websocketRef={websocketRef}
                        user_id={user_data}
                    />
                )}
            </ChatMessageContainer>
        </ChatDashboardComponent>
    )
}

export default ChatDashboard;