import React from "react";
import {
    HeaderName,
    HeaderTablesName, RowListContainer, RowListElements, StyleAvailable, StyleAvailableFalse, StyleText,
    TruckList,
    TruckListContainer,
    TruckListTitle
} from "../layouts/truck_list_styled";

function SemiTrailers(){

    return(
        <TruckListContainer>
            <TruckListTitle>Semi Trailers </TruckListTitle>
            <HeaderTablesName>
                <HeaderName>BRAND</HeaderName>
                <HeaderName>MODEL</HeaderName>
                <HeaderName>SEMI NOTE</HeaderName>
                <HeaderName>PRODUCTION DATE</HeaderName>
                <HeaderName>REGISTRATION NUMBER</HeaderName>
                <HeaderName>AVAILABLE</HeaderName>
            </HeaderTablesName>
            <TruckList>
                <RowListContainer>
                    <RowListElements><StyleText className="style-text">test</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">test</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">3213</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">2023-08-09</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">fgFfdfs</StyleText></RowListElements>
                    <RowListElements><StyleAvailable className="style-text">✔</StyleAvailable></RowListElements>
                </RowListContainer>
                <RowListContainer>
                    <RowListElements><StyleText className="style-text">test</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">test</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">3213</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">2023-08-09</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">fgFfdfs</StyleText></RowListElements>
                    <RowListElements><StyleAvailableFalse className="style-text">X</StyleAvailableFalse></RowListElements>
                </RowListContainer>
                <RowListContainer>
                    <RowListElements><StyleText className="style-text">test</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">test</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">3213</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">2023-08-09</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">fgFfdfs</StyleText></RowListElements>
                    <RowListElements><StyleAvailable className="style-text">✔</StyleAvailable></RowListElements>
                </RowListContainer>
                <RowListContainer>
                    <RowListElements><StyleText className="style-text">test</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">test</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">3213</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">2023-08-09</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">fgFfdfs</StyleText></RowListElements>
                    <RowListElements><StyleAvailableFalse className="style-text">X</StyleAvailableFalse></RowListElements>
                </RowListContainer>
                <RowListContainer>
                    <RowListElements><StyleText className="style-text">test</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">test</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">3213</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">2023-08-09</StyleText></RowListElements>
                    <RowListElements><StyleText className="style-text">fgFfdfs</StyleText></RowListElements>
                    <RowListElements><StyleAvailableFalse className="style-text">X</StyleAvailableFalse></RowListElements>
                </RowListContainer>

            </TruckList>
        </TruckListContainer>
    )
}

export default SemiTrailers;