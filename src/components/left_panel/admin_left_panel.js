import React from "react";
import {LeftPanel, LeftPanelItem, LogoPanelItem, PanelItemText} from "../../assets/styles/home_styled";
import icon11 from "../../assets/icons/arrow-back-8.png";
import {Link} from "react-router-dom";
import icon1 from "../../assets/icons/dashboard.png";
import giving from "../../assets/icons/giving.png";
import icon8 from "../../assets/icons/contract.png";
import icon9 from "../../assets/icons/cargo-truck.png";
import transfer from "../../assets/icons/transfers.png";
import icon5 from "../../assets/icons/trailer.png";
import icon6 from "../../assets/icons/user.png";
import icon3 from "../../assets/icons/settings.png";
import icon7 from "../../assets/icons/conversation.png";
import icon10 from "../../assets/icons/group.png";
import icon4 from "../../assets/icons/logout.png";


function AdminPanel({navigate}){
    return (
        <LeftPanel>
            {/*<LeftPanelLogo>*/}
            {/*    KD*/}
            {/*</LeftPanelLogo>*/}
            <LeftPanelItem onClick={() => { navigate(-1)}}>
                <LogoPanelItem src={icon11}/>
                <PanelItemText>Back
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem as={Link} to="/home-guest">
                <LogoPanelItem src={icon1}/>
                <PanelItemText>DashBoard
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
            <LeftPanelItem as={Link} to="/trucks">
                <LogoPanelItem src={icon9}/>
                <PanelItemText>Truck
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem as={Link} to="/receivments/">
                <LogoPanelItem src={transfer}/>
                <PanelItemText>Receivments
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem as={Link} to="/semi-trailers">
                <LogoPanelItem src={icon5}/>
                <PanelItemText>Semi trailers
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem as={Link} to="/user">
                <LogoPanelItem src={icon6}/>
                <PanelItemText>User Panel
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem>
                <LogoPanelItem src={icon3}/>
                <PanelItemText>Settings
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem as={Link} to="/chat">
                <LogoPanelItem src={icon7}/>
                <PanelItemText>Chats
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem as={Link} to="/users">
                <LogoPanelItem src={icon10}/>
                <PanelItemText>Users
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

export default AdminPanel;