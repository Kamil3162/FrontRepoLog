import React, { useState, useRef, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
import {
    HeaderInfoContainer,
    InfoHeader,
    MapContainer,
    MapInfoContainer,
    MapInputField
} from "../assets/styles/map_styled";
import {LoginButton} from "../assets/styles/login_styled";

const mapStyles = { height: "100vh", width: "100%" };
const defaultCenter = { lat: 52.229879338318824, lng: 21.01311935222952 };
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const styles = require("../assets/map_styles/GoogleMapsStyles.json");

function MapComponent() {
    const [directions, setDirections] = useState(null);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');

    const calculateRoute = () =>{

    }
    return (
        <MapContainer>
            <MapInfoContainer>
                <HeaderInfoContainer>
                    <InfoHeader>Time</InfoHeader>
                    <InfoHeader>Distance</InfoHeader>
                </HeaderInfoContainer>
                <div>
                    <MapInputField value={duration}/>
                    <MapInputField value={distance}/>
                    <LoginButton type="submit">Calculate</LoginButton>
                </div>
            </MapInfoContainer>
            <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap
                    onLoad={() =>{
                        const directionsService = new window.google.maps.DirectionsService();
                        directionsService.route(
                            {
                                origin: defaultCenter,
                                destination: { lat: 50.01642397881435, lng: 22.678127467056516 }, // This is another point for demonstration
                                travelMode: window.google.maps.TravelMode.DRIVING,
                            },
                            (result, status) => {
                                if (status === window.google.maps.DirectionsStatus.OK) {
                                    setDirections(result);
                                    setDistance(result.routes[0].legs[0].distance.text);
                                    setDuration(result.routes[0].legs[0].duration.text);
                                } else {
                                    console.error(`Error fetching directions ${result}`);
                                }
                            }
                        );
                    }}
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}
                    options={{
                        disableDefaultUI: true,
                        draggable: true,
                        keyboardShortcuts: false,
                        scaleControl: true,
                        scrollwheel: true,
                        styles: styles
                    }}
                >
                    {directions && <DirectionsRenderer
                        directions={directions}
                        polylineOptions={{ strokeColor: "red" }}
                    />}
                </GoogleMap>
            </LoadScript>
        </MapContainer>
    );
}

export default MapComponent;
