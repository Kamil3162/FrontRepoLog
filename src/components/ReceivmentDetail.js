import React from "react";
import {useState, useEffect} from "react";
import client from "../utils/Sender";
import {access_token} from "../utils/Sender";
import {useParams, UseParams} from 'react-router-dom';
import {AlertTitle, AlertContainer, AlertInformation, AlertRotationContainer, AlertButton} from "../assets/styles/alert_styled";
import {AlertComponent} from "../utils/FunctionComponents";

function ReceivmentDetail(){
    // get all this kind of data
    const [sourceUserData, setSourceUserData] = useState('');
    const [destinationUserData, setDestinationUserData] = useState('');
    const [truckRegistrationNumber, setTruckRegistrationNumber] = useState('');
    const [semitrailerRegistrationNumer, setSemiTrailerRegistrationNumber] = useState('');
    const { pk } = useParams();

    useEffect(() => {
        client.get(
            `/api/receivments/${pk}/`
        ).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    })


    return (
        <AlertComponent
            title="esa"
            information="information"
            buttonText="buttonText"
        />
    )
}

export default ReceivmentDetail;
