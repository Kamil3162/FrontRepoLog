
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

    console.log(messages);
    console.log(conversation_id);
    console.log(user_id);

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
            console.log(messages);

            if (data.type === 'all_messages'){
                setMessages(data.messages);
            }

            else if (data.type === 'new_message' || data.type === 'chat_message') {
                console.log('test');
                console.log(data.messages);
                setMessages(prevMessages => [...prevMessages, data.message]);
                console.log(messages);
            }
        }
    }, [conversation_id]);

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
