import React, { Component } from 'react';

class TruckForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            model: '',
            power: 300,
            registration_number: '',
            driven_length: 0,
            production_date: '',
            available: 'Wolny',
        };
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, e.g., send data to the server
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Brand:
                    <input type="text"
                           name="brand"
                           value={this.state.brand}
                           onChange={this.handleInputChange}
                           required />
                </label>
                <br/>

                <label>Model:
                    <input
                        type="text"
                        name="model"
                        value={this.state.model}
                        onChange={this.handleInputChange}
                        required />
                </label>
                <br/>
                <label>Power:
                    <input
                        type="number"
                        name="power"
                        value={this.state.power}
                        onChange={this.handleInputChange} required min="300" max="999" /></label>
                <br/>

                <label>Registration Number:
                    <input type="text"
                           name="registration_number"
                           value={this.state.registration_number}
                           onChange={this.handleInputChange}
                           required /></label>
                <br/>

                <label>Driven Length:
                    <input type="number"
                           name="driven_length"
                           value={this.state.driven_length}
                           onChange={this.handleInputChange}
                           required /></label>
                <br/>
                <label>Production Date:
                    <input type="date"
                           name="production_date"
                           value={this.state.production_date}
                           onChange={this.handleInputChange}
                           required /></label>
                <br/>
                <label>
                    Available:
                    <select name="available" value={this.state.available} onChange={this.handleInputChange} required>
                        <option value="Wolny">Wolny</option>
                        <option value="Zajety">Zajęty</option>
                        <option value="Awaria">Awaria</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default TruckForm;
