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
import client, {access_token} from "../utils/Sender";
import MapHeaderComponent from "../components/map/MapHeaderComponent";
import {AlertComponent} from "../utils/FunctionComponents";
import {headers} from "../utils/Sender";
import axios from "axios";

const mapStyles = { width: "100%", borderRadius: "15px" };
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const styles = require("../assets/map_styles/GoogleMapsStyles.json");

function MapComponent({props, updateLocation=true}) {

    console.log("###################################");

    let defaultCenter = props.source_address;
    const destinationAddress = props.destination;

    const [directions, setDirections] = useState(null);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const [location, setLocation] = useState('');

    const [waypoints, setWaypoints] = useState([]);
    const [isGoogleMapLoaded, setIsGoogleMapLoaded] = useState(false);

    const [data, setData] = useState([]);

    const geocodeWaypointName = async (name) => {
        /*
            Function responsible for return Lat Lng for passed address name as an argument
            url - global google maps url for make a call to googleAPI
         */
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(name)}&key=${apiKey}`;

        try {
            const response = await axios.get(url);
            const results = response.data.results;

            if (results.length > 0) {
                const location = results[0].geometry.location;
                return location; // Returns an object with lat and lng properties
            } else {
                throw new Error('No results found');
            }
        } catch (error) {
            console.error('Geocoding error:', error);
            throw error; // Rethrowing the error is important for error handling in your component
        }
    };

    const handleInputChange = (e) => {
        setLocation(e.target.value);
    }

    useEffect(() => {
        client.get('/api/location-history/', { headers })
            .then(async (response) => {
                const waypointNames = response.data; // Assuming this is an array of names
                const geocodedWaypoints = await Promise.all(waypointNames.map(async (name) => {
                    return geocodeWaypointName(name.location);
                }));
                setWaypoints(geocodedWaypoints); // Update state with geocoded waypoints
                console.log(waypoints);
            })
            .catch(error => {
                console.error('Error fetching location history:', error);
            });
    }, []); // Empty dependency array if this effect should run once on mount

    useEffect(() => {

        console.log(destinationAddress);
        console.log(defaultCenter);

        if (defaultCenter && destinationAddress && waypoints.length > 0) {
            console.log("################################### - test");

            const directionsService = new window.google.maps.DirectionsService();
            console.log(directionsService);

            const waypts = waypoints.length > 0
                ? waypoints.filter(point => point).map(point => ({
                    location: new window.google.maps.LatLng(point.lat, point.lng),
                    stopover: true
                }))
                : [];

            const request = {
                origin: defaultCenter,
                destination: destinationAddress,
                waypoints: waypts,
                travelMode: window.google.maps.TravelMode.DRIVING,
                optimizeWaypoints: true,
            };

            directionsService.route(request, (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {

                    let totalDistanceMeters = 0;
                    let totalDurationSeconds = 0;

                    result.routes[0].legs.forEach(leg => {
                        totalDistanceMeters += leg.distance.value; // Distance in meters
                        totalDurationSeconds += leg.duration.value; // Duration in seconds
                    });

                    let minutesDurationTime = Math.round(totalDurationSeconds / 60);
                    let kmDistance = (totalDistanceMeters / 1000).toFixed(2);

                    setDistance(`${kmDistance} km`);
                    setDuration(`${minutesDurationTime} m`);
                    setDirections(result);
                } else {
                    console.error(`Error fetching directions: ${status}`);
                }
            });
        }
    }, [isGoogleMapLoaded, defaultCenter, destinationAddress, waypoints]); // This effect depends on waypoints being set

    const handleUpdateLocation = () => {
        console.log(location);
        client.put(
            '/api/location-history/', {
                location: location
            }, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            }
        ).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error.status);
            client.post('/api/location-history/', {
                location: location
            }, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            }).then(res => {
                console.log(res);
            }).catch(error => {
                console.log('naura');
            })
        })
    }

    return (
        <MapContainer>
            {destinationAddress && destinationAddress.length > 3 ? (
                <>
                    <div>
                        {
                            location ? (
                                <MapHeaderComponent
                                    defaultCenter={location}
                                    destinationAddress={destinationAddress}
                                    duration={duration}
                                    distance={distance}
                                />
                            ) : (
                                <MapHeaderComponent
                                defaultCenter={defaultCenter}
                                destinationAddress={destinationAddress}
                                duration={duration}
                                distance={distance}
                                />
                            )
                        }
                        {updateLocation && (
                            <div>
                                <LoginInput
                                    type="text"
                                    placeholder="Twoja Lokalizacja"
                                    value={location}
                                    onChange={handleInputChange}
                                />
                                <LoginButton onClick={handleUpdateLocation}>Update lokalizacje</LoginButton>
                            </div>
                        )}
                    </div>
                    <LoadScript googleMapsApiKey={apiKey} onLoad={() => setIsGoogleMapLoaded(true)}>
                        <GoogleMap
                            mapContainerStyle={mapStyles}
                            zoom={20}
                            center={defaultCenter} // Adjust as needed
                            options={{
                                disableDefaultUI: true,
                                draggable: true,
                                keyboardShortcuts: false,
                                scaleControl: true,
                                scrollwheel: true,
                                styles: styles // Your custom styles if any
                            }}
                        >
                            {directions && (
                                <DirectionsRenderer
                                    directions={directions}
                                    polylineOptions={{ strokeColor: "red" }}
                                />
                            )}
                            {waypoints.map((point, index) => (
                                <Marker
                                    key={index}
                                    position={{ lat: point.lat, lng: point.lng }}
                                />
                            ))}
                        </GoogleMap>
                    </LoadScript>
                </>
            ) : (
                <div>
                    <AlertComponent
                        title={"Receivment Error"}
                        information={"You havent active receivment"}
                        buttonText={"Close"}
                        redirectUrl={'/receivment-create/'}
                    />
                </div>
            )}
        </MapContainer>
    );
}


export default MapComponent;
