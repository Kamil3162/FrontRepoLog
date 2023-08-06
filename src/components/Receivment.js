import axios from "axios";
import {useEffect, useState} from "react";
import {access_token} from "../utils/Sender.js";
import client from "../utils/Sender.js";


function Receivment(){
    const [trucks, setTrucks] = useState([]);
    const [semitrailers, setSemiTrailers] = useState([]);

    useEffect(() => {
        client.get('/api/trucks/',{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(response =>{
                console.log(response);
                let received_trucks = response.data;
                setTrucks(received_trucks);

            })
            .catch(error =>{
                console.log(error);
            })
    },[]);
    useEffect(() => {
        client.get('/api/semitrailers/',{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(response =>{
                console.log(response);
                let received_semitrailers = response.data;
                setTrucks(received_semitrailers);

            })
            .catch(error =>{
                console.log(error);
            })
    },[])


}

export default Receivment;