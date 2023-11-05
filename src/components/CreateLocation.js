import React, { useState } from 'react';
import client, {access_token} from "../utils/Sender";
const CreateLocation = () => {
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [apartmentNumber, setApartmentNumber] = useState('');
    const [geoAddress, setGeoAddress] = useState('');
    const [finalDate, setFinalDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        client.post('/api/create-location/',{
            city: city,
            street: street,
            apartment_number: apartmentNumber,
            geo_address: geoAddress,
            final_date: finalDate
        }, {
            headers: {
                Authorization: `Bearer ${access_token}`
            },
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    maxLength={30}
                />
            </div>
            <div>
                <label htmlFor="street">Street:</label>
                <input
                    type="text"
                    id="street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    maxLength={40}
                />
            </div>
            <div>
                <label htmlFor="apartmentNumber">Apartment Number:</label>
                <input
                    type="text"
                    id="apartmentNumber"
                    value={apartmentNumber}
                    onChange={(e) => setApartmentNumber(e.target.value)}
                    maxLength={6}
                />
            </div>
            <div>
                <label htmlFor="geoAddress">Geo Address:</label>
                <input
                    type="text"
                    id="geoAddress"
                    value={geoAddress}
                    onChange={(e) => setGeoAddress(e.target.value)}
                    maxLength={30}
                />
            </div>
            <div>
                <label htmlFor="finalDate">Final Date:</label>
                <input
                    type="date"
                    id="finalDate"
                    value={finalDate}
                    onChange={(e) => setFinalDate(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateLocation;
