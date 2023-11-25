import React from "react";
import client from "../utils/Sender";
import {access_token} from "../utils/Sender";
import {AlertComponent} from "../utils/FunctionComponents";

// inside () we have to pass our data those we want to send
const headers =  {
        Authorization: `Bearer ${access_token}`
    }

export const finishReceivment = ({receivment_pk}) => {

    client.post(
        `/api/receivments/${receivment_pk}/finish_receivment/`, null,
        { headers }
    ).then(response =>{
        console.log("response");
        console.log(response);
        alert("Pomyslnie zakocnzono zlecenie");
        return (
            <AlertComponent
                title={"Close Receivment"}
                information={"You ended a receivment"}
                buttonText={"Close"}
            />
        )
    }).catch(error =>{
        console.log("to jest error");
        console.log(error);
        return <AlertComponent
            title={"Error Close Receivment"}
            information={"Error during end a receivement"}
            buttonText={"Close"}
        />
    })
}

