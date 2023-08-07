import axios from "axios";
import {useEffect, useState} from "react";
import {access_token} from "../utils/Sender.js";
import client from "../utils/Sender.js";
import {ReceivmentContainer, ListElements, SemiTrailerList, ListElement} from "../layouts/receivment_create_styled";

function ReceivmentFromCreate(){
    const [showDropdown, setShowDropdown] = useState(false);

    // const [trucks, setTrucks] = useState([]);
    // const [semitrailers, setSemiTrailers] = useState([]);
    //
    // useEffect(() => {
    //     client.get('/api/trucks/',{
    //         headers:{
    //             Authorization: `Bearer ${access_token}`
    //         }
    //     })
    //         .then(response =>{
    //             console.log(response);
    //             let received_trucks = response.data;
    //             setTrucks(received_trucks);
    //
    //         })
    //         .catch(error =>{
    //             console.log(error);
    //         })
    // },[]);
    // useEffect(() => {
    //     client.get('/api/semitrailers/',{
    //         headers:{
    //             Authorization: `Bearer ${access_token}`
    //         }
    //     })
    //         .then(response =>{
    //             console.log(response);
    //             let received_semitrailers = response.data;
    //             setSemiTrailers(received_semitrailers);
    //
    //         })
    //         .catch(error =>{
    //             console.log(error);
    //         })
    // },[])
    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        <ReceivmentContainer>
            <select>
                <option value="fruit">Fruit</option>
                <option value="vegetable">Vegetable</option>
                <option value="meat">Meat</option>
            </select>
        </ReceivmentContainer>
    )
}

export default ReceivmentFromCreate;