import React from "react";
import {useState, useEffect} from "react";
import client from "../utils/Sender";
import {access_token} from "../utils/Sender";
import {useParams, UseParams} from 'react-router-dom';
import {AlertTitle, AlertContainer, AlertInformation, AlertRotationContainer, AlertButton} from "../assets/styles/alert_styled";
import {AlertComponent} from "../utils/FunctionComponents";
import {SemiTrailerComponent} from "../utils/FunctionComponents";

function ReceivmentDetail(){
    // get all this kind of data
    const [data, setData] = useState([]);
    const [sourceUserData, setSourceUserData] = useState('');
    const [destinationUserData, setDestinationUserData] = useState('');
    const [truckRegistrationNumber, setTruckRegistrationNumber] = useState('');
    const [semitrailerRegistrationNumer, setSemiTrailerRegistrationNumber] = useState('');

    const { pk } = useParams();
    console.log(pk);
    useEffect(() => {
        client.get(
            `/api/receivments/${pk}/`,{
                headers:{
                    Authorization: `Bearer ${access_token}`
                }
            }
        ).then(response => {
            console.log(response);
            setData(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    console.log(data.semi_trailer);

    return (
        <div>
            <SemiTrailerComponent
                props={data.semi_trailer}
            />
        </div>
    )
}

export default ReceivmentDetail;
