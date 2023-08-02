import {LeftPanel, LeftPanelItem, LeftPanelLogo, LogoPanelItem, PanelItemText} from "../layouts/home_styled";
import icon1 from "../layouts/icons/dashboard.png";
import icon9 from "../layouts/icons/cargo-truck.png";
import icon3 from "../layouts/icons/settings.png";
import icon4 from "../layouts/icons/logout.png";
import icon5 from "../layouts/icons/trailer.png";
import icon6 from "../layouts/icons/user.png";
import icon7 from "../layouts/icons/conversation.png";
import icon8 from "../layouts/icons/contract.png";
import {Link} from "react-router-dom";

function LeftPanelComponent(){
    return (
        <LeftPanel>
            <LeftPanelLogo>
                KamilDev
            </LeftPanelLogo>
            <LeftPanelItem>
                <LogoPanelItem src={icon1}/>
                <PanelItemText>
                    Dashboard
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem>
                <LogoPanelItem src={icon9}/>
                <PanelItemText>
                    Truck
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem>
                <LogoPanelItem src={icon3}/>
                <PanelItemText>
                    Settings
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem>
                <LogoPanelItem src={icon4}/>
                <PanelItemText>
                    Logout
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem>
                <LogoPanelItem src={icon5}/>
                <PanelItemText>
                    SemiTruck
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem as={Link} to="/user">
                <LogoPanelItem src={icon6}/>
                <PanelItemText>
                    User
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem>
                <LogoPanelItem src={icon7}/>
                <PanelItemText>
                    Converstaion
                </PanelItemText>
            </LeftPanelItem>
            <LeftPanelItem>
                <LogoPanelItem src={icon8}/>
                <PanelItemText>
                    Receivment
                </PanelItemText>
            </LeftPanelItem>
        </LeftPanel>
    )
}

export default LeftPanelComponent;