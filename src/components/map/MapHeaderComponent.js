import React from "react";
import {
    HeaderInfoContainer,
    InfoHeader, InfoHeaderFinalAddress,
    MapFinalAddressField,
    MapInfoContainer,
    MapInputField
} from "../../assets/styles/map_styled";


function MapHeaderComponent({defaultCenter,destinationAddress,duration,distance}){
    return (
        <MapInfoContainer>
            <HeaderInfoContainer>
                <InfoHeader>From</InfoHeader>
                <InfoHeaderFinalAddress>To</InfoHeaderFinalAddress>
                <InfoHeaderFinalAddress>Time</InfoHeaderFinalAddress>
                <InfoHeader>Distance</InfoHeader>
            </HeaderInfoContainer>
            <HeaderInfoContainer>
                <MapInputField value={defaultCenter}/>
                <MapFinalAddressField value={destinationAddress}/>
                <MapInputField value={duration}/>
                <MapInputField value={distance}/>
            </HeaderInfoContainer>
        </MapInfoContainer>
    )
}

export default MapHeaderComponent;