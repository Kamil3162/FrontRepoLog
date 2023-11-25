import React from "react";
import {useState, useEffect} from "react";
import client from "../../utils/Sender";
import {access_token} from "../../utils/Sender";
import {useParams, UseParams} from 'react-router-dom';
import {AlertTitle, AlertContainer, AlertInformation, AlertRotationContainer, AlertButton} from "../../assets/styles/alert_styled";
import {AlertComponent} from "../../utils/FunctionComponents";
import {SemiTrailerComponent} from "../../utils/FunctionComponents";
import {TruckComponent} from "../../utils/FunctionComponents";
import Truck from "../truck/Truck";
import {DetailReceivmentContainer, DetailRowReceivment} from "../../assets/styles/receivment_detail_styled";
import {UserComponent} from "../../utils/FunctionComponents";
import MapGen, { MapComponent } from "../MapGen";
import {
    InformPostContainer,
    InformPostContentContainer,
    MainTextTitle,
    PostStory,
    TextTitle
} from "../../assets/styles/home_guest_styled";

function ReceivmentDetail(){
    // get all this kind of data

    const [data, setData] = useState(null);

    let [locationData, setLocationData] = useState({
        source_address: null,
        destination : null
    });

    const { pk } = useParams();
    useEffect(() => {
        const updatedLocationData = { ...locationData };
        client.get(
            `/api/receivments/${pk}/`,{
                headers:{
                    Authorization: `Bearer ${access_token}`
                }
            }
        ).then(response => {
            setData(response.data);
            console.log(response.data.semi_trailer);
            const destination = `${response.data.destination.city} ${response.data.destination.street} ${response.data.destination.apartment_number}`;
            const source_address = "Jarosław PWSTE";

            setLocationData({destination, source_address: source_address });
        }).catch(error => {
            console.log("blad");
        })
    }, []);


    return (
        <DetailReceivmentContainer>
            <InformPostContainer>
                <InformPostContentContainer>
                    <TextTitle>NAURA</TextTitle>
                    <MainTextTitle>Select your best car, manage user and facilities in your company using complex management system</MainTextTitle>
                    <PostStory>
                        Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.
                        Discover the power of real-time control as our app offers seamless GPS tracking, allowing you to monitor your vehicle's location at all times, ensuring its safety and security.
                    </PostStory>
                </InformPostContentContainer>
            </InformPostContainer>

            { data &&
                <>
                    <DetailRowReceivment style={{marginBottom: "0px"}}>
                        <MapGen
                            props={locationData}
                        />
                    </DetailRowReceivment>
                    <DetailRowReceivment>

                        <div style={{ width : '50%'}}>
                            <TruckComponent
                                props={data.truck}
                            />
                        </div>
                        <InformPostContentContainer>
                            <MainTextTitle>Truck Detail</MainTextTitle>
                            <PostStory>
                                Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.
                                Discover the power of real-time control as our app offers seamless GPS tracking, allowing you to monitor your vehicle's location at all times, ensuring its safety and security.
                            </PostStory>
                        </InformPostContentContainer>
                    </DetailRowReceivment>
                    <DetailRowReceivment style={{marginBottom: "0px"}}>
                        <div style={{ width: '40%'}}>
                            <SemiTrailerComponent
                                props={data.semi_trailer}
                            />
                        </div>
                        <InformPostContentContainer>
                            <MainTextTitle>Semitailer Detail</MainTextTitle>
                            <PostStory>
                                Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.
                                Discover the power of real-time control as our app offers seamless GPS tracking, allowing you to monitor your vehicle's location at all times, ensuring its safety and security.
                            </PostStory>
                        </InformPostContentContainer>
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
                    {/*    <UserComponent*/}
                    {/*            props={data.destination_user}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</DetailRowReceivment>*/}
                </>
                }

        </DetailReceivmentContainer>
    )
}

export default ReceivmentDetail;
