import client from "./Sender";
import {useEffect} from "react";

/*
    headers should look like this
    headers : {
        Auth : token
    }

 */

export const submitForm = ({endPoint, data, headers}) =>{
    client.post(endPoint, data, headers).then().catch();
}

export const getData = ({endPoint, headers}) =>{
    client.get(endPoint, headers);
}