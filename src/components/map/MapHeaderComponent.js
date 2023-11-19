import React from "react";
import {HeaderInfoContainer, InfoHeader, MapInfoContainer, MapInputField} from "../../assets/styles/map_styled";


function MapHeaderComponent({defaultCenter,destinationAddress,duration,distance}){
    return (
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
    )
}

export default MapHeaderComponent;