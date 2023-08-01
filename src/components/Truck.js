import React, {useState, useEffect} from "react";
import axios from "axios";


const client = axios.create({
    baseURL: 'http://127.0.0.1/3000'
});

function TruckDisplay(){
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [power, setPower] = useState("");
    const [registration_number, setRegistration_number] = useState("");
    const [driven_lenght, setDriven_lenght] = useState("");
    const [production_data, setProduction_data] = useState("");
    const [aviable, setAviable] = useState("");

    useEffect()
    const handleSubmit = (e) =>{
        e.preventDefault();

        client.post(){

        }
    }
}

export default TruckDisplay;