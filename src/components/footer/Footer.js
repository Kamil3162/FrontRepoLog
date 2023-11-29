import React from "react";
import {
    FooterContainer, FooterContentContainer, FooterHeading,
    FooterInformation,
    FooterOpenHours,
    FooterSocialContainer, FooterTextInformation
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
                    <FooterTextInformation>
                        Our company process services for various subjects
                        Our company process services for various subjects
                        Our company process services for various subjects
                        Our company process services for various subjects
                    </FooterTextInformation>
                </FooterInformation>
                <FooterInformation>
                    <FooterHeading>
                        Social Media
                    </FooterHeading>
                    <FooterTextInformation>
                        Our company process services for various subjects
                        Our company process services for various subjects
                        Our company process services for various subjects
                        Our company process services for various subjects
                    </FooterTextInformation>
                </FooterInformation>
                <FooterInformation>
                    <FooterHeading>
                        Opened Hours
                    </FooterHeading>
                    <FooterTextInformation>
                        We are opened from hours:
                    </FooterTextInformation>
                    <FooterTextInformation>
                        Monday to Friday 9am - 4pm
                    </FooterTextInformation>
                </FooterInformation>
            </FooterContentContainer>
        </FooterContainer>
    )
}

export default Footer;