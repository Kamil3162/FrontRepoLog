
import React, {useEffect, useState} from "react";
import client from "../utils/Sender";
import {ChatWindowComponent, Message} from "../assets/styles/chat_dashboard_styled";
import user from "./User";


/*
    I have to get all active conversations all users when we can start conversation
 */

function ChatWindow({conversation_id, websocketRef, user_id}){

    const [message_send, setMessageSend] = useState('');
    const [messages, setMessages] = useState([]);

    console.log("esa321");
    console.log(conversation_id);
    console.log("esa");
    console.log(messages);

    useEffect(() =>{
        websocketRef.current.send(JSON.stringify({
            type: 'get_messages',
            message: 'Get messeges',
            user: user_id,
            room_id: conversation_id
        }));

        websocketRef.current.onmessage = function(event){
            const data = JSON.parse(event.data);
            console.log(data);

            if (data.type === 'all_messages'){
                setMessages(data.messages);
            }

            if (data.type === 'naura'){
                console.log(data);
            }

            if (data.type === 'group_message' && data.user_id !== null){
                console.log(data);
                console.log("esa esa esa");

                const message_obj = {
                    'content': data.message,
                    'sender': data.user_id
                }
                setMessages(prevMessages => [...prevMessages, message_obj]);
            }

            return () => {
                if (websocketRef.current) {
                    websocketRef.current.close();
                }
            };

        }

    }, [conversation_id, websocketRef, user_id]);

    const sendMessage = () => {
        console.log(websocketRef);
        console.log(user_id);
        console.log(conversation_id);

        if (websocketRef.current && websocketRef.current.readyState === WebSocket.OPEN) {
            websocketRef.current.send(JSON.stringify({
                message: message_send,
                user: user_id,
                room_id: conversation_id
            }));
        } else {
            console.log("WebSocket is not open.");
        }
    };

    return (
        <div>
            <ChatWindowComponent>
                {
                    messages.map((rec_message, index) => (
                        // Render each message. This could be a simple div or a custom component
                        <Message key={index}>
                            {rec_message.content}
                        </Message>
                    ))
                }
            </ChatWindowComponent>
            <div>
                <input type="text"
                       placeholder="Wprowadz tekst"
                       value={message_send}
                       onChange={(e) => setMessageSend(e.target.value)}
                />
                <button onClick={sendMessage}>Button</button>
            </div>
        </div>

    )
}

export default ChatWindow;
