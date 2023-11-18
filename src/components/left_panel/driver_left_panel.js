import React from "react";
import {LeftPanel, LeftPanelItem, LeftPanelLogo, LogoPanelItem, PanelItemText} from "../../assets/styles/home_styled";
import {Link} from "react-router-dom";
import icon1 from "../../assets/icons/dashboard.png";
import giving from "../../assets/icons/giving.png";
import icon8 from "../../assets/icons/contract.png";
import icon6 from "../../assets/icons/user.png";
import icon7 from "../../assets/icons/conversation.png";
import icon4 from "../../assets/icons/logout.png";


function DriverPanel(){
    return (
        <LeftPanel>
            <LeftPanelLogo>
                KD
            </LeftPanelLogo>
            <LeftPanelItem as={Link} to="/home-guest">
                <LogoPanelItem src={icon1}/>
                <PanelItemText>Home
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem as={Link} to="/active-receivment/">
                <LogoPanelItem src={giving}/>
                <PanelItemText>Active Receivment
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem as={Link} to="/receivment-create/">
                <LogoPanelItem src={icon8}/>
                <PanelItemText>Create Receivment
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem as={Link} to="/user">
                <LogoPanelItem src={icon6}/>
                <PanelItemText>User Panel
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem as={Link} to="/chat">
                <LogoPanelItem src={icon7}/>
                <PanelItemText>Chats
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem as={Link} to="/logout">
                <LogoPanelItem src={icon4}/>
                <PanelItemText>Logout
                </PanelItemText>
            </LeftPanelItem>
        </LeftPanel>
    )
}

export default DriverPanel;