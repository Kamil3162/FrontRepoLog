import React, {useEffect, useState} from "react";
import client, {access_token} from "../../utils/Sender";
import {user_data} from "../../utils/Sender";
import {
    HomeContainer,
    InformPostContainer,
    InformPostContentContainer,
    MainTextTitle, PostStory, TextPostContainer,
    TextTitle
} from "../../assets/styles/home_guest_styled";
import {
    ActiveReceivmentContainer,
    DetailReceivmentContainer,
    DetailRowReceivment
} from "../../assets/styles/receivment_detail_styled";
import MapGen from "../MapGen";
import {SemiTrailerComponent, TruckComponent} from "../../utils/FunctionComponents";
import {useNavigate} from "react-router-dom";
import {logOutHook} from "../../hooks/receivment_hooks";

function ActiveReceivment(){
    const [currentLocation, setCurrentLocation] = useState('');
    const [destinationLocation, setDestinationLocation] = useState('');
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    let [locationData, setLocationData] = useState({
        source_address: null,
        destination : null
    });


    useEffect(() => {
        const updatedLocationData = { ...locationData };
        client.get(
            `/api/active-receivment/`,{
                headers:{
                    Authorization: `Bearer ${access_token}`
                }
            }
        ).then(response => {

            const destination = `${response.data.destination.city} ${response.data.destination.street} ${response.data.destination.apartment_number}`;
            const source_address = "Jarosław PWSTE";
            setData(response.data);
            setLocationData({destination, source_address: source_address });

        }).catch(error => {
            console.log("error");
            logOutHook(error, navigate);
        })
    }, []);

    // generowanie ostatniej lokalizacji

    return (
        <ActiveReceivmentContainer>
            <DetailReceivmentContainer>
                <InformPostContainer>
                    <InformPostContentContainer>
                        <TextPostContainer>
                            <TextTitle>Active User Panel</TextTitle>
                            <MainTextTitle>Update your current location</MainTextTitle>
                            <PostStory>
                                Hi update your current location to help and boost flow of information
                            </PostStory>
                        </TextPostContainer>
                    </InformPostContentContainer>
                </InformPostContainer>
                { data &&
                    <>
                        <DetailRowReceivment style={{marginBottom: "0px"}}>
                            <MapGen
                                props={locationData}
                            />
                        </DetailRowReceivment>
                        {/*<DetailRowReceivment>*/}
                        {/*    <div style={{ width: '40%'}}>*/}
                        {/*        Manager*/}
                        {/*        <UserComponent*/}
                        {/*            props={data.source_user}*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*    <div style={{ width: '50%'}}>*/}
                        {/*        Driver*/}
                        {/*        <UserComponent*/}
                        {/*            props={data.destination_user}*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</DetailRowReceivment>*/}
                    </>
                }
            </DetailReceivmentContainer>
        </ActiveReceivmentContainer>
    )
}

export default ActiveReceivment;