import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const MapContainer = () => {
    const mapStyles = {
        height: "100vh",
        width: "100%"};

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }

    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    return (
        <LoadScript
            googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            />
        </LoadScript>
    )
}

export default MapContainer;