import React from "react";
import {
    TruckList,
    TruckListContainer,
    TruckListTitle,
    MachineContainer,
    MachineInfo,
    MachineInfoContainer,
    MachineLabel,
    MachineInput,
    MachinePhotoBtn,
    BtnExplore,
    MachinePhoto,
    HeaderTablesName,
    HeaderName,
    RowListContainer,
    RowListElements,
    StyleText,
    StyleAvailable,
    StyleAvailableFalse
} from "../../assets/styles/truck_list_styled";
import {Link, useNavigate, useParams} from "react-router-dom";
import {
    CreateButtonPostContainer,
    InformPostContainer,
    InformPostContentContainer,
    MainTextTitle,
    PostStory, PostStoryButtonContainer, TextPostContainer,
    TextTitle
} from "../../assets/styles/home_guest_styled";
import client from "../../utils/Sender";
import {access_token} from "../../utils/Sender";
import {useEffect, useState} from "react";
import {
    ButtonPick,
    RowMachineContainer,
    RowMachineRecord}
from "../../assets/styles/receivment_create_styled";
import {ButtonLink} from "../../assets/styles/link_buttons";
import {AlertComponent} from "../../utils/FunctionComponents";
import {PaginationContainer} from "../../assets/styles/pagination_styled";
import {logOutHook} from "../../hooks/receivment_hooks";

function Trucks(){

    const [trucks, setTrucks] = useState([]);
    const [isUnauthorizedError, setIsUnauthorizedError] = useState(true);
    const [nextPage, setNextPage] = useState(null);
    const [previusPage, setPreviousPage] = useState(null);
    const { pk } = useParams()
    const actualPageNumber = pk && !isNaN(pk) ? Number(pk) : 1;
    const navigate = useNavigate();

    const actual_page = pk ? pk : 1;
    useEffect(() =>{
        client.get(`/api/trucks/?page=${actualPageNumber}`,{
            headers:{
                Authorization: `Bearer ${access_token}`

            }
        }).then(response =>{
            setTrucks(response.data.results);
            const next = response.data.next ? response.data.next.split('?page=')[1] : "";
            const previous = response.data.previous === null ||
            response.data.previous.split('?page=')[1] === null ? "": response.data.previous.split('?page=')[1];
            setPreviousPage(previous);
            setNextPage(next);
        }).catch(error =>{
            console.log("Blad");
            setIsUnauthorizedError(false);
            logOutHook(error, navigate);
            console.log(error);
        })
    }, [actualPageNumber]);

    return(
        <div>
            {
                isUnauthorizedError ? (
                    <TruckListContainer>
                        <InformPostContainer>
                            <InformPostContentContainer>
                                <TextPostContainer>
                                    <MainTextTitle>Select your best car, manage user and facilities in your company using complex management system</MainTextTitle>
                                    <PostStoryButtonContainer>
                                        <PostStory>
                                            Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.
                                            Discover the power of real-time control as our app offers seamless GPS tracking, allowing you to monitor your vehicle's location at all times, ensuring its safety and security.
                                        </PostStory>
                                        <CreateButtonPostContainer>
                                            <ButtonLink as={Link} to="/truck-create">
                                                Truck Create
                                            </ButtonLink>
                                        </CreateButtonPostContainer>
                                    </PostStoryButtonContainer>
                                </TextPostContainer>
                            </InformPostContentContainer>
                        </InformPostContainer>
                        <TruckListTitle>Trucks </TruckListTitle>
                        <HeaderTablesName>
                            <HeaderName>BRAND</HeaderName>
                            <HeaderName>MODEL</HeaderName>
                            <HeaderName>POWER</HeaderName>
                            <HeaderName>DRIVEN LENGTH</HeaderName>
                            <HeaderName>PRODUCTION DATE</HeaderName>
                            <HeaderName>REGISTRATION NUMBER</HeaderName>
                            <HeaderName>AVAILABLE</HeaderName>
                        </HeaderTablesName>
                        <TruckList>
                            {trucks.map((truck, index) => (
                                <Link to={`/truck/${truck.id}`} key={truck.id} style={{ textDecoration: 'none', color:"black" }}>
                                    <RowListContainer>
                                        <RowListElements>
                                            <StyleText className="style-text">{truck.brand}</StyleText>
                                        </RowListElements>
                                        <RowListElements>
                                            <StyleText className="style-text">{truck.model}</StyleText>
                                        </RowListElements>
                                        <RowListElements><StyleText className="style-text">{truck.power}
                                        </StyleText></RowListElements>
                                        <RowListElements>
                                            <StyleText className="style-text">{truck.driven_length}km</StyleText>
                                        </RowListElements>
                                        <RowListElements>
                                            <StyleText className="style-text">{truck.production_date}</StyleText>
                                        </RowListElements>
                                        <RowListElements>
                                            <StyleText className="style-text">{truck.registration_number}</StyleText>
                                        </RowListElements>
                                        {
                                            truck.available === "Wolny" ? (
                                                <RowListElements>
                                                    <StyleAvailable className="style-text">✔</StyleAvailable>
                                                </RowListElements>
                                            ) : (
                                                <RowListElements>
                                                    <StyleAvailableFalse className="style-text">X</StyleAvailableFalse>
                                                </RowListElements>
                                            )
                                        }
                                    </RowListContainer>
                                </Link>
                            ))}
                        </TruckList>
                        <PaginationContainer>
                            <ButtonLink as={Link} to={`/trucks/${previusPage}`} style={{
                                width: '200px',
                                height: '50px'
                            }}>
                                Previous
                            </ButtonLink>
                            <ButtonLink as={Link} to={`/trucks/${nextPage}`} style={{
                                width: '200px',
                                height: '50px'
                            }}>
                                Next
                            </ButtonLink>
                        </PaginationContainer>
                    </TruckListContainer>
                ) : (
                    <AlertComponent
                        title="Error"
                        information="You havent access to perform this action"
                        buttonText="Login"
                        redirectUrl="/login"
                    />
                )
            }
        </div>

    )
}
export default Trucks;
