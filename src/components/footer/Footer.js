import React from "react";
import {
    FooterContainer, FooterContentContainer, FooterHeading,
    FooterInformation,
    FooterOpenHours,
    FooterSocialContainer
} from "../../assets/styles/footer_styled";
import {PostStory} from "../../assets/styles/home_guest_styled";

function Footer() {
    return (
        <FooterContainer>
            <FooterContentContainer>
                <FooterInformation>
                    <FooterHeading>
                        Information
                    </FooterHeading>
                </FooterInformation>
                <FooterInformation>
                    <FooterHeading>
                        Social Media
                    </FooterHeading>
                </FooterInformation>
                <FooterInformation>
                    <FooterHeading>
                        Opened Hours
                    </FooterHeading>
                    <PostStory>
                        This is opened from hdadsaj
                    </PostStory>
                </FooterInformation>
            </FooterContentContainer>
        </FooterContainer>
    )
}

export default Footer;