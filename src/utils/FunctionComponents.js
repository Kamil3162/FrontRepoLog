import {
    ButtonPick,
    RowMachineContainer,
    RowMachineRecord,
    TruckViewContainer
} from "../assets/styles/receivment_create_styled";
import {StyleAvailable, StyleAvailableFalse} from "../assets/styles/truck_list_styled";
import React, {useState} from "react";
import {
    AlertButton,
    AlertContainer,
    AlertInformation,
    AlertRotationContainer,
    AlertTitle
} from "../assets/styles/alert_styled";
import {Link, useNavigate} from "react-router-dom";
import client from "./Sender";

export const SemiTrailerViewContainerFun = ({items, selectedItem, onSelect}) => {
    return (
        <TruckViewContainer>
            {items.map(semitrailer => (
                <RowMachineContainer key={semitrailer.id}>
                    <RowMachineRecord>
                        {semitrailer.brand}
                    </RowMachineRecord>
                    <RowMachineRecord>
                        {semitrailer.model}
                    </RowMachineRecord>
                    <RowMachineRecord>
                        {semitrailer.production_year}
                    </RowMachineRecord>
                    <RowMachineRecord>
                        {semitrailer.semi_note === 'Wolny' ? (
                            <StyleAvailable className="style-text">✔</StyleAvailable>
                        ) : (
                            <StyleAvailableFalse className="style-text">X</StyleAvailableFalse>
                        )}
                    </RowMachineRecord>
                    <RowMachineRecord>
                        {semitrailer.registration_number}
                    </RowMachineRecord>
                    <RowMachineRecord>
                        <ButtonPick
                            onClick={(e) => onSelect(e, semitrailer.id)}
                            style={{
                                backgroundColor: selectedItem === semitrailer.id ? 'green' : 'red'
                            }}
                        >
                            Pick
                        </ButtonPick>
                    </RowMachineRecord>
                </RowMachineContainer>
            ))}
        </TruckViewContainer>
    )
}
export const TruckViewContainerFun = ({items, selectedItem, onSelect}) =>{
    return (
        <TruckViewContainer>
            {items.map((truck, index) => (
                <RowMachineContainer key={truck.id}>
                    <RowMachineRecord>{truck.brand}</RowMachineRecord>
                    <RowMachineRecord>{truck.model}</RowMachineRecord>
                    <RowMachineRecord>{truck.production_date}</RowMachineRecord>
                    <RowMachineRecord>
                        {truck.available === "Wolny" ? (
                            <StyleAvailable className="style-text">✔</StyleAvailable>
                        ) : (
                            <StyleAvailableFalse className="style-text">X</StyleAvailableFalse>
                        )}
                    </RowMachineRecord>
                    <RowMachineRecord>{truck.registration_number}</RowMachineRecord>
                    <RowMachineRecord>
                        <ButtonPick onClick={
                            (e) => onSelect(e, truck.id)
                        }
                                    style={{
                                        backgroundColor: selectedItem === truck.id ? "green" : 'red'
                                    }}
                        >
                            Pick
                        </ButtonPick>
                    </RowMachineRecord>
                </RowMachineContainer>
            ))}
        </TruckViewContainer>
        )
}

export const AlertComponent = ({title, information, buttonText, redirectUrl = "#"}) =>{
    const [visibleState, setVisibleState] = useState(true);
    const navigate = useNavigate();
    const handleClose = (e) =>{
        e.preventDefault();
        if (redirectUrl !== "#"){
            navigate(redirectUrl);
        }
        setVisibleState(false);
    }
    return (
         visibleState && (
             <AlertContainer>
                 <AlertTitle>{title}</AlertTitle>
                 <AlertInformation>{information}</AlertInformation>
                 <AlertRotationContainer></AlertRotationContainer>
                 <AlertButton
                     as={Link}
                     to={redirectUrl}
                     onClick={handleClose}>{buttonText}</AlertButton>
             </AlertContainer>
        )
    )
}