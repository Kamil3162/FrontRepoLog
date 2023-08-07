import axios from "axios";
import {useEffect, useState} from "react";
import {access_token} from "../utils/Sender.js";
import client from "../utils/Sender.js";


function ReceivmentsList(){
    const [receivments, setReceivments] = useState([]);

    useEffect(() => {
        client.get('/api/trucks/',{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(response =>{
                console.log(response);
                let data = response.data;
                setReceivments(data);

            })
            .catch(error =>{
                console.log(error);
            })
    },[]);
    
    return (
        <div>

        </div>
    )
}

export default ReceivmentsList;