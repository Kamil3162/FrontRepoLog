import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {access_token} from "../utils/Sender";
import client from "../utils/Sender";

function TruckDisplay(){
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [power, setPower] = useState("");
    const [registration_number, setRegistration_number] = useState("");
    const [driven_lenght, setDriven_lenght] = useState("");
    const [production_data, setProduction_data] = useState("");
    const [aviable, setAviable] = useState("");
    const [photo, setPhoto] = useState("");

    const { pk } = useParams();
    const access_token = localStorage.getItem('access');
    /*
        ✔
        X✔
     */
    useEffect(() =>{
        client.get(`/api/trucks/${pk}/`,{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(response =>{
                let data = response.data
                setBrand(data.brand)
                setModel(data.model)
                setPower(data.power)
                setRegistration_number(data.registration_number)
                setDriven_lenght(data.driven_length)
                setProduction_data(data.production_data)
                setAviable(data.aviable)
                setPhoto(data.photo);
            })
            .catch(error =>{
                console.log(error);
            })
    }, []);

    const handleSubmit = (e) =>{
        e.preventDefault();

        client.post(`/api/trucks/${pk}/`,{
            headers:{
                Authorization: `Bearer ${access_token}`
            },
            data:{
                brand:brand,
                model:model,
                power:power,
                registration_number:registration_number,
                production_data:production_data,
                driven_lenght:driven_lenght,
                aviable:aviable
            }
        })

    }
    return (
        <div>
            <label>
                Brand:
                <input type="text" value={brand} />
            </label>
            <br/>
            <label>
                Model:
                <input type="text" value={model} />
            </label>
            <br/>
            <label>
                Power:
                <input type="text" value={power} />
            </label>
            <br/>
            <label>
                Driven Length:
                <input type="text" value={driven_lenght} />
            </label>
            <br/>
            <label>
                Production Date:
                <input type="text" value={production_data} />
            </label>
            <br/>
            <label>
                Registration Number:
                <input type="text" value={registration_number} />
            </label>
            <br/>
            <label>
                Aviable:
                <input type="text" value={aviable} />
            </label>
            {photo && <img src={photo} alt="SemiTrailer" />}
        </div>
    )
}

export default TruckDisplay;