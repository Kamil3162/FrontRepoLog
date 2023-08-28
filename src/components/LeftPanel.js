import {LeftPanel, LeftPanelItem, LeftPanelLogo, LogoPanelItem, PanelItemText} from "../assets/styles/home_styled";
import icon1 from "../assets/dashboard.png";
import icon9 from "../assets/cargo-truck.png";
import icon3 from "../assets/settings.png";
import icon4 from "../assets/logout.png";
import icon5 from "../assets/trailer.png";
import icon6 from "../assets/user.png";
import icon7 from "../assets/conversation.png";
import icon8 from "../assets/contract.png";
import icon10 from "../assets/group.png";
import icon_login from "../assets/login.png";
import register from "../assets/register.png"
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
                <LeftPanelItem as={Link} to="/truck-equipment-create">
                    <PanelItemText>
                        Truck Trailer
                    </PanelItemText>
                </LeftPanelItem>
                <LeftPanelItem as={Link} to="/semi-trailers-equipment-create">
                    <PanelItemText>
                        Semi tariler eq
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