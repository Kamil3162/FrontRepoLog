import React from "react";
import {LeftPanel, LeftPanelItem, LeftPanelLogo, LogoPanelItem, PanelItemText} from "../../assets/styles/home_styled";
import {Link} from "react-router-dom";
import icon_login from "../../assets/icons/login.png";
import register from "../../assets/icons/register.png";


function LoginPanel(){
    return (
    <LeftPanel>
        <LeftPanelLogo>
            KD
        </LeftPanelLogo>
        <LeftPanelItem as={Link} to="/login">
            <LogoPanelItem src={icon_login}/>
            <PanelItemText>Login
            </PanelItemText>
        </LeftPanelItem>
        <LeftPanelItem as={Link} to="/register">
            <LogoPanelItem src={register}/>
            <PanelItemText>Register
            </PanelItemText>
        </LeftPanelItem>
    </LeftPanel>
    )
}

export default LoginPanel;