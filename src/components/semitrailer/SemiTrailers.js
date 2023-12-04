import React, {useEffect, useState} from "react";
import {
    HeaderName,
    HeaderTablesName, RowListContainer, RowListElements, StyleAvailable, StyleAvailableFalse, StyleText,
    TruckList,
    TruckListContainer,
    TruckListTitle
} from "../../assets/styles/truck_list_styled";
import {Link, useParams} from "react-router-dom";
import {
    CreateButtonPostContainer,
    InformPostContainer,
    InformPostContentContainer,
    MainTextTitle,
    PostStory, PostStoryButtonContainer, TextPostContainer,
    TextTitle
} from "../../assets/styles/home_guest_styled";
import {logOutHook} from "../../hooks/receivment_hooks";
import {access_token} from "../../utils/Sender";
import client from "../../utils/Sender";
import {ButtonLink} from "../../assets/styles/link_buttons";
import {PaginationContainer} from "../../assets/styles/pagination_styled";
import {useNavigate} from "react-router-dom";

function SemiTrailers(){
    const [semitrailers, setSemiTrailers] = useState([]);
    const { pk } = useParams();
    const actualPageNumber = pk && !isNaN(pk) ? Number(pk) : 1;
    const [nextPage, setNextPage] = useState(null);
    const [previusPage, setPreviousPage] = useState(null);
    const navigate = useNavigate();

    useEffect(() =>{
        client.get(`/api/semitrailers/?page=${actualPageNumber}`,{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        }).then(response =>{
            setSemiTrailers(response.data.results);
            const next = response.data.next ? response.data.next.split('?page=')[1] : "";
            const previous = response.data.previous ? response.data.previous.split('?page=')[1] : "";
            setNextPage(next);
            setPreviousPage(previous);
        }).catch((error) =>{
            logOutHook(error, navigate);
            console.log(error);
        })
    }, [actualPageNumber]);

    return(
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
                                <ButtonLink as={Link} to="/semitrailer-create">
                                    Create Semitrailer
                                </ButtonLink>
                            </CreateButtonPostContainer>
                        </PostStoryButtonContainer>
                    </TextPostContainer>
                </InformPostContentContainer>
            </InformPostContainer>
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
                {semitrailers.map((semitrailer, index) => (
                    <Link to={`/semitrailer/${semitrailer.id}`} key={semitrailer.id} style={{ textDecoration: 'none', color:"black" }}>

                        <RowListContainer>
                            <RowListElements>
                                <StyleText className="style-text">{semitrailer.brand}</StyleText>
                            </RowListElements>
                            <RowListElements>
                                <StyleText className="style-text">{semitrailer.model}</StyleText>
                            </RowListElements>
                            {
                                semitrailer.semi_note === true ? (
                                    <RowListElements>
                                        <StyleAvailable className="style-text">✔</StyleAvailable>
                                    </RowListElements>

                                ) : (
                                    <RowListElements>
                                        <StyleAvailableFalse className="style-text">X</StyleAvailableFalse>
                                    </RowListElements>

                                )
                            }
                            <RowListElements>
                                <StyleText className="style-text">{semitrailer.production_year}</StyleText>
                            </RowListElements>
                            <RowListElements><StyleText className="style-text">{semitrailer.registration_number}</StyleText>
                            </RowListElements>
                            {
                                semitrailer.available === "Wolny" ? (
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
                <ButtonLink as={Link} to={`/semi-trailers/${previusPage}`} style={{
                    width: '200px',
                    height: '50px'
                }}>
                    Previous
                </ButtonLink>
                <ButtonLink as={Link} to={`/semi-trailers/${nextPage}`} style={{
                    width: '200px',
                    height: '50px'
                }}>
                    Next
                </ButtonLink>
            </PaginationContainer>
        </TruckListContainer>
    )
}

export default SemiTrailers;