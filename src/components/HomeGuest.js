import axios from "axios";
import {
    ContentContainerHome,
    HomeContainer,
    HomeLoginBtn,
    HomeNavbar,
    InfoButton,
    InformPostContainer,
    InformPostContentContainer,
    InformPostPhoto, MainTextTitle, PostStory, TextTitle,
} from "../layouts/home_guest_styled.js";
import icon6 from "../layouts/icons/truck-img.jpg";


function HomeGuest(){

    return (
        <HomeContainer>
            <HomeNavbar>

                <HomeLoginBtn>
                    Login
                </HomeLoginBtn>
                <HomeLoginBtn>
                    Create Account
                </HomeLoginBtn>

            </HomeNavbar>
            <ContentContainerHome>
                <InformPostContainer>
                    <InformPostContentContainer>
                        <TextTitle>NAURA</TextTitle>
                        <MainTextTitle>Select your best car, manage user and facilities in your company using complex management system</MainTextTitle>
                        <PostStory>
                            Welcome to the future of car management! Say goodbye to worries and inefficiencies with our cutting-edge car management app designed to make your driving experience a breeze.
                            Discover the power of real-time control as our app offers seamless GPS tracking, allowing you to monitor your vehicle's location at all times, ensuring its safety and security.
                        </PostStory>
                    </InformPostContentContainer>
                    <InformPostPhoto src={icon6}/>
                </InformPostContainer>

                <InformPostContainer>
                    <InformPostContentContainer>
                        Post Entire
                    </InformPostContentContainer>
                    <InformPostPhoto/>
                </InformPostContainer>
            </ContentContainerHome>
        </HomeContainer>
    )
}
export default HomeGuest;