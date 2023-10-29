import React, { useState, useRef, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
import {
    HeaderInfoContainer,
    InfoHeader,
    MapContainer,
    MapInfoContainer,
    MapInputField
} from "../assets/styles/map_styled";
import {LoginButton, LoginInput} from "../assets/styles/login_styled";

const mapStyles = { width: "100%", borderRadius: "15px" };
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const styles = require("../assets/map_styles/GoogleMapsStyles.json");

function MapComponent({props, updateLocation=true}) {
    console.log(props);
    const defaultCenter = props.source_address;
    const destinationAddress = props.destination;
    const [directions, setDirections] = useState(null);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');

    return (
        <MapContainer>
            <div>
                <MapInfoContainer>
                    <HeaderInfoContainer>
                        <InfoHeader>From</InfoHeader>
                        <InfoHeader>To</InfoHeader>
                        <InfoHeader>Time</InfoHeader>
                        <InfoHeader>Distance</InfoHeader>
                    </HeaderInfoContainer>
                    <HeaderInfoContainer>
                        <MapInputField value={defaultCenter}/>
                        <MapInputField value={destinationAddress}/>
                        <MapInputField value={duration}/>
                        <MapInputField value={distance}/>
                    </HeaderInfoContainer>

                </MapInfoContainer>
                {
                    updateLocation && (
                        <div>
                            <LoginInput
                                type="text"
                                placeholder="Twoja Lokalizacja"
                                values={props.source_address}

                            />
                            <LoginButton>Update lokalizacje</LoginButton>
                        </div>
                    )
                }
            </div>
            <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap
                    onLoad={() =>{
                        const directionsService = new window.google.maps.DirectionsService();
                        directionsService.route(
                            {
                                origin: defaultCenter,
                                destination: destinationAddress, // This is another point for demonstration
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
