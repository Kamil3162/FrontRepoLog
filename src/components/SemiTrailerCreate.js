import React from 'react';
import axios from "axios";

const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})
class SemiTrailerForm extends React.Component {

    constructor() {
        super();
        this.state = {
            brand: '',
            model: '',
            production_year: '',
            registration_number: '',
            semi_note: true,
            image: null
        };
    }
    handleInputChange = (e) => {
        const name = e.target.name;
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        if (e.target.type === 'image'){
            value = e.target.files[0];
        }

        this.setState({ [name]: value });
    };

    submitForm = (e) => {
        e.preventDefault();
        alert('Form submitted: ' + JSON.stringify(this.state));
        // You can send the data to the server here.
    };

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div>
                    <label>Brand: </label>
                    <input name="brand" type="text" onChange={this.handleInputChange} />
                </div>
                <div>
                    <label>Model: </label>
                    <input name="model" type="text" onChange={this.handleInputChange} />
                </div>
                <div>
                    <label>Production Year: </label>
                    <input name="production_year" type="date" onChange={this.handleInputChange} />
                </div>
                <div>
                    <label>Registration Number: </label>
                    <input name="registration_number" type="text" onChange={this.handleInputChange} />
                </div>
                <div>
                    <label>Semi Note: </label>
                    <input name="semi_note" type="checkbox" onChange={this.handleInputChange} />
                </div>
                <div>
                    <label>
                        Image:
                        <input type="file" name="image" onChange={this.handleInputChange} />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default SemiTrailerForm;