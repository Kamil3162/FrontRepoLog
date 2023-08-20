import {LeftPanel, LeftPanelItem, LeftPanelLogo, LogoPanelItem, PanelItemText} from "../layouts/home_styled";
import icon1 from "../layouts/icons/dashboard.png";
import icon9 from "../layouts/icons/cargo-truck.png";
import icon3 from "../layouts/icons/settings.png";
import icon4 from "../layouts/icons/logout.png";
import icon5 from "../layouts/icons/trailer.png";
import icon6 from "../layouts/icons/user.png";
import icon7 from "../layouts/icons/conversation.png";
import icon8 from "../layouts/icons/contract.png";
import icon10 from "../layouts/icons/group.png";
import icon_login from "../layouts/icons/login.png";
import register from "../layouts/icons/register.png"
import {Link} from "react-router-dom";
import {user_permission_group} from "../utils/Sender";
import login from "./Login";
import {useState, useEffect} from "react";

function LeftPanelComponent(){
    const [userPermissionGroup, setUserPermissionGroup] = useState(undefined);

    useEffect(() => {
        const permission = user_permission_group;  // Fetch the value from wherever it's stored
        setUserPermissionGroup(permission);
    }, []);
    return (
        user_permission_group === 'Admin' || user_permission_group === 'Manager' ? (
            <LeftPanel>
                <LeftPanelLogo>
                    KD
                </LeftPanelLogo>
                <LeftPanelItem as={Link} to="/home-guest">
                    <LogoPanelItem src={icon1}/>
                    <PanelItemText>
                    </PanelItemText>
                </LeftPanelItem>
                <LeftPanelItem as={Link} to="/trucks">
                    <LogoPanelItem src={icon9}/>
                    <PanelItemText>
                    </PanelItemText>
                </LeftPanelItem>
                <LeftPanelItem as={Link} to="/receivment-create/">
                    <LogoPanelItem src={icon8}/>
                    <PanelItemText>
                    </PanelItemText>
                </LeftPanelItem>
                <LeftPanelItem as={Link} to="/semi-trailers">
                    <LogoPanelItem src={icon5}/>
                    <PanelItemText>
                    </PanelItemText>
                </LeftPanelItem>
                <LeftPanelItem as={Link} to="/user">
                    <LogoPanelItem src={icon6}/>
                    <PanelItemText>
                    </PanelItemText>
                </LeftPanelItem>
                <LeftPanelItem>
                    <LogoPanelItem src={icon3}/>
                    <PanelItemText>
                    </PanelItemText>
                </LeftPanelItem>
                <LeftPanelItem>
                    <LogoPanelItem src={icon7}/>
                    <PanelItemText>
                    </PanelItemText>
                </LeftPanelItem>
                <LeftPanelItem>
                    <LogoPanelItem src={icon10}/>
                    <PanelItemText>
                    </PanelItemText>
                </LeftPanelItem>
                <LeftPanelItem as={Link} to="/logout">
                    <LogoPanelItem src={icon4}/>
                    <PanelItemText>
                    </PanelItemText>
                </LeftPanelItem>
            </LeftPanel>
            ) : (
                user_permission_group === null ? (
                    <LeftPanel>
                        <LeftPanelLogo>
                            KD
                        </LeftPanelLogo>
                        <LeftPanelItem as={Link} to="/login">
                            <LogoPanelItem src={icon_login}/>
                            <PanelItemText>
                            </PanelItemText>
                        </LeftPanelItem>
                        <LeftPanelItem as={Link} to="/register">
                            <LogoPanelItem src={register}/>
                            <PanelItemText>
                            </PanelItemText>
                        </LeftPanelItem>
                    </LeftPanel>
                    ):(
                    <LeftPanel>
                        <LeftPanelLogo>
                            KD
                        </LeftPanelLogo>
                        <LeftPanelItem as={Link} to="/home-guest">
                            <LogoPanelItem src={icon1}/>
                            <PanelItemText>
                            </PanelItemText>
                        </LeftPanelItem>
                        <LeftPanelItem as={Link} to="/receivment-create/">
                            <LogoPanelItem src={icon8}/>
                            <PanelItemText>
                            </PanelItemText>
                        </LeftPanelItem>
                        <LeftPanelItem as={Link} to="/user">
                            <LogoPanelItem src={icon6}/>
                            <PanelItemText>
                            </PanelItemText>
                        </LeftPanelItem>
                        <LeftPanelItem as={Link} to="/logout">
                            <LogoPanelItem src={icon4}/>
                            <PanelItemText>
                            </PanelItemText>
                        </LeftPanelItem>
                    </LeftPanel>
                    )
            )
    )
}
export default LeftPanelComponent;