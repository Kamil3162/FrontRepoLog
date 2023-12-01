
import React, {useEffect, useState} from "react";
import client from "../../utils/Sender";
import {ChatWindowComponent, Message} from "../../assets/styles/chat_dashboard_styled";
import user from "../user/User";
import {InputField} from "../../assets/styles/user_display";
import {LoginButton} from "../../assets/styles/login_styled";


/*
    I have to get all active conversations all users when we can start conversation
 */

function ChatWindow({
    conversation_id,
    websocketRef,
    user_id,
    start_conversation=false,
    user_conversation_start=null
}){

    console.log("wysylanie naura");

    const [message_send, setMessageSend] = useState('');
    const [messages, setMessages] = useState([]);
    const endOfMessagesRef = React.createRef();

    console.log("Conversation id", conversation_id);
    console.log("websocketRef id", websocketRef);
    console.log("user id", user_id);
    console.log("start_conversation", start_conversation);
    console.log("user_convesation_start", user_conversation_start);

    useEffect(() =>{
        console.log("rendering");

        if (conversation_id){
            websocketRef.current.send(JSON.stringify({
                type: 'get_messages',
                message: 'Get messeges',
                user: user_id,
                room_id: conversation_id
            }));
        }

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
                const message_obj = {
                    'content': data.message,
                    'sender': data.user_id
                }
                console.log(message_obj);
                setMessages(prevMessages => [...prevMessages, message_obj]);
            }

            return () => {
                if (websocketRef.current) {
                    websocketRef.current.close();
                }
            };

        }

    }, [conversation_id]);

    const sendWebSocket = (data) => {
        websocketRef.current.send(data);
    }

    const sendMessage = () => {
        console.log("wysylanie wiadomosci");

        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });

        if (websocketRef.current && websocketRef.current.readyState === WebSocket.OPEN) {
            if (start_conversation === true){
                const data = JSON.stringify({
                    message: message_send,
                    user: user_id,
                    user_to_conversation: user_conversation_start,
                    flaga: 'esa to jest flaga tests'
                    // target_user: user

                });
                sendWebSocket(data);
            }
            else {
                const data = JSON.stringify({
                    message: message_send,
                    user: user_id,
                    room_id: conversation_id
                });

                sendWebSocket(data);
            }

            setMessageSend('');
        } else {
            console.log("WebSocket is not open.");
        }
    };
    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);



    return (
        <div>
            {
                conversation_id ? (
                    <>
                        <ChatWindowComponent>
                            {
                                messages.map((rec_message, index) => (
                                    rec_message.sender == user_id ? (
                                        <Message
                                            key={index}
                                            style={{
                                                marginLeft: 'auto',
                                                marginRight: '0',
                                                backgroundColor: '#175bb4' // Example color for user's messages
                                            }}>
                                            {rec_message.content}
                                        </Message>
                                    ) : (
                                        <Message
                                            key={index}
                                            style={{
                                                marginRight: 'auto',
                                                marginLeft: '0',
                                                backgroundColor: '#178fb4' // Example color for others' messages
                                            }}>
                                            {rec_message.content}
                                        </Message>
                                    )
                                ))
                            }
                            <div ref={endOfMessagesRef} />
                        </ChatWindowComponent>
                        <div>
                            <InputField type="text"
                                        placeholder="Wprowadz tekst"
                                        value={message_send}
                                        onChange={(e) => setMessageSend(e.target.value)}
                            />
                            <LoginButton
                                onClick={sendMessage}
                                style={{width:'150px'}}
                            >Send
                            </LoginButton>
                        </div>
                    </>
                ) : (
                    <div>
                        <LoginButton
                            onClick={sendMessage}
                            style={{width:'150px'}}
                        >Start Conversation
                        </LoginButton>

                    </div>
                )
            }

        </div>
    );
}

export default ChatWindow;
