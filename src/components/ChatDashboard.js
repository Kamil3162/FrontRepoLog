import React from "react";
import client from "../utils/Sender";
import {useEffect, useState} from "react";
import user from "./User";
import {access_token} from "../utils/Sender";
function ChatDashboard(){

    const [ws, setWs] = useState(null);
    const user_data = JSON.parse(localStorage.getItem('user')).id;


    useEffect(() =>{
        // const websocket = new WebSocket(`ws://127.0.0.1:8000/ws/users/?userId=${user_data}/`);
        const websocket = new WebSocket(`ws://127.0.0.1:8000/ws/users/${user_data}/`);
        websocket.onerror = (event) => {
            // Handle WebSocket errors
            console.error("WebSocket error observed:", event);
        };

        websocket.onopen = function(event) {
            console.log('Connection established');
        };

        websocket.onmessage = function(event) {
            const data = JSON.parse(event.data);
            console.log('Message from server:', data);
            console.log(data);

            // Handle connection established message
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

        websocket.onclose = function(event) {
            console.log('WebSocket closed:', event);
        };

    }, []);

    return (
        <div>

        </div>
    )
}

export default ChatDashboard;