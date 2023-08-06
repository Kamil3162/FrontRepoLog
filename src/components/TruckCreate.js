import React, { useState } from 'react';
import axios from "axios";
import {Form} from "react-router-dom";
import {type} from "@testing-library/user-event/dist/type";

const client = axios.create({
    baseURL:'http://127.0.0.1:8000'
})
const YourComponent = () => {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [power, setPower] = useState(300);
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [drivenLength, setDrivenLength] = useState(0);
    const [productionDate, setProductionDate] = useState('');
    const [available, setAvailable] = useState('Wolny');
    const [image, setImage] = useState('');

    const access_token = localStorage.getItem('access');

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('brand', brand);
        formData.append('model', model);
        formData.append('power', power);
        formData.append('registration_number', registrationNumber);
        formData.append('driven_length', drivenLength);
        formData.append('production_date', productionDate);
        formData.append('available', available);
        if (image) {
            formData.append('photo', image, image.name);
        }

        client.post('/api/trucks/', formData, {
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <label>
                Brand:
                <input type="text" name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
            </label>
            <br />
            <label>
                Model:
                <input type="text" name="model" value={model} onChange={(e) => setModel(e.target.value)} />
            </label>
            <br />
            <label>
                Power:
                <input type="number" name="power" value={power} onChange={(e) => setPower(parseInt(e.target.value))} />
            </label>
            <br />
            <label>
                Registration Number:
                <input type="text" name="registration_number" value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} />
            </label>
            <br />
            <label>
                Driven Length:
                <input type="number" name="driven_length" value={drivenLength} onChange={(e) => setDrivenLength(parseInt(e.target.value))} />
            </label>
            <br />
            <label>
                Production Date:
                <input type="date" name="production_date" value={productionDate} onChange={(e) => setProductionDate(e.target.value)} />
            </label>
            <br />
            <label>
                Available:
                <select name="available" value={available} onChange={(e) => setAvailable(e.target.value)}>
                    <option value="Wolny">Wolny</option>
                    <option value="Zajęty">Zajęty</option>
                </select>
            </label>
            <br />
            <label>
                Image:
                <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default YourComponent;
