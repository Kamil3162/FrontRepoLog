import React from "react";
import {useState, useEffect} from "react";
import client from "../utils/Sender";
import {access_token} from "../utils/Sender";
import {useParams, UseParams} from 'react-router-dom';
import {AlertTitle, AlertContainer, AlertInformation, AlertRotationContainer, AlertButton} from "../assets/styles/alert_styled";
import {AlertComponent} from "../utils/FunctionComponents";
import {SemiTrailerComponent} from "../utils/FunctionComponents";
import {TruckComponent} from "../utils/FunctionComponents";
import Truck from "./Truck";
import {DetailRowReceivment} from "../assets/styles/receivment_detail_styled";

function ReceivmentDetail(){
    // get all this kind of data
    const [data, setData] = useState(null);

    const { pk } = useParams();

    useEffect(() => {
        client.get(
            `/api/receivments/${pk}/`,{
                headers:{
                    Authorization: `Bearer ${access_token}`
                }
            }
        ).then(response => {
            setData(response.data);
        }).catch(error => {
            console.log("blad");
        })
    }, []);


    return (
        <div>
            { data &&
                <>
                    <DetailRowReceivment>
                        <SemiTrailerComponent
                            props={data.semi_trailer}
                        />
                        <TruckComponent
                            props={data.truck}
                        />
                    </DetailRowReceivment>
                    <DetailRowReceivment>
                        <SemiTrailerComponent
                            props={data.semi_trailer}
                        />
                        <TruckComponent
                            props={data.truck}
                        />
                    </DetailRowReceivment>
                </>
                }

        </div>
    )
}

export default ReceivmentDetail;
