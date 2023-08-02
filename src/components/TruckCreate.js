import React, { useState } from 'react';
import axios from "axios";

const client = axios.create({
    baseURL:'http://127.0.0.1:8000'
})
const YourComponent = () => {
    const [state, setState] = useState({
        brand: '',
        model: '',
        power: 300,
        registration_number: '',
        driven_length: 0,
        production_date: '',
        available: 'Wolny',
    });

    const access_token = localStorage.getItem('access');

    const handleInputChange = (e) => {
        const name = e.target.name;     // return name of our input component
        const value = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value;   // return value from input
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        client
            .post(
                '/api/truck-create/',
                {
                    brand: state.brand,
                    model: state.model,
                    power: state.power,
                    registration_number: state.registration_number,
                    driven_length: state.driven_length,
                    production_date: state.production_date,
                    available: state.available,
                },
                {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                }
            ).then(response =>{
            console.log(response);
        }).catch(error =>{
            console.log(error);
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Brand:
                <input type="text" name="brand" value={state.brand} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Model:
                <input type="text" name="model" value={state.model} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Power:
                <input type="number" name="power" value={state.power} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Registration Number:
                <input type="text" name="registration_number" value={state.registration_number} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Driven Length:
                <input type="number" name="driven_length" value={state.driven_length} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Production Date:
                <input type="date" name="production_date" value={state.production_date} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Available:
                <select name="available" value={state.available} onChange={handleInputChange}>
                    <option value="Wolny">Wolny</option>
                    <option value="Zajęty">Zajęty</option>
                </select>
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default YourComponent;
