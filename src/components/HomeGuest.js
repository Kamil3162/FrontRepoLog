import axios from "axios";
import {
    ContentContainerHome,
    HomeContainer,
    HomeLoginBtn,
    HomeNavbar,
    InfoButton,
    InformPostContainer,
    InformPostContentContainer,
    InformPostPhoto,
    InfoTestService, InfoTestServiceContent,
    InfoTestServiceMain,
    InfoTestServiceTitle,
    MainTextTitle,
    PostStory,
    TextPostContainer,
    TextTitle,
} from "../assets/styles/home_guest_styled.js";
import icon6 from "../assets/icons/cargo-background.png";
import {AlertComponent} from "../utils/FunctionComponents";

function HomeGuest(){
    console.log(localStorage.getItem('user_permission_group'));
    return (
        <HomeContainer>
            <ContentContainerHome>
                <InformPostContainer>
                    <InformPostContentContainer>
                        <TextPostContainer>
                            <MainTextTitle>Select your best car, manage user and facilities in your company using complex management system</MainTextTitle>
                            {/*<PostStory>*/}
                            {/*    Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.*/}
                            {/*    Discover the power of real-time control as our app offers seamless GPS tracking, allowing you to monitor your vehicle's location at all times, ensuring its safety and security.*/}
                            {/*</PostStory>*/}
                        </TextPostContainer>
                    </InformPostContentContainer>
                    <InformPostPhoto src={icon6}/>
                </InformPostContainer>
                <InformPostContainer>
                    <InfoTestService>
                        <InfoTestServiceTitle>Speed</InfoTestServiceTitle>
                        <InfoTestServiceMain>For us this very curcial to perfoerm actions very fast and be the best company in this secotr of industry</InfoTestServiceMain>
                    </InfoTestService>
                    <InfoTestService>
                        <InfoTestServiceTitle>Variaty</InfoTestServiceTitle>
                        <InfoTestServiceMain>For us this very curcial to perfoerm actions very fast and be the best company in this secotr of industry</InfoTestServiceMain>
                    </InfoTestService>
                    <InfoTestService>
                        <InfoTestServiceTitle>Secure</InfoTestServiceTitle>
                        <InfoTestServiceMain>For us this very curcial to perfoerm actions very fast and be the best company in this secotr of industry</InfoTestServiceMain>
                    </InfoTestService>
                </InformPostContainer>
            </ContentContainerHome>
        </HomeContainer>
    )
}
export default HomeGuest;