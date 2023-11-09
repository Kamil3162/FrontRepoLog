import {LeftPanel, LeftPanelItem, LeftPanelLogo, LogoPanelItem, PanelItemText} from "../assets/styles/home_styled";
import icon1 from "../assets/icons/dashboard.png";
import icon9 from "../assets/icons/cargo-truck.png";
import icon3 from "../assets/icons/settings.png";
import icon4 from "../assets/icons/logout.png";
import icon5 from "../assets/icons/trailer.png";
import icon6 from "../assets/icons/user.png";
import icon7 from "../assets/icons/conversation.png";
import icon8 from "../assets/icons/contract.png";
import icon10 from "../assets/icons/group.png";
import icon11 from "../assets/icons/arrow-back-8.png";
import icon_login from "../assets/icons/login.png";
import register from "../assets/icons/register.png"
import transfer from "../assets/icons/transfers.png";
import giving from "../assets/icons/giving.png";
import {Link} from "react-router-dom";
import {user_permission_group} from "../utils/Sender";
import login from "./Login";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

function LeftPanelComponent(){
    const [userPermissionGroup, setUserPermissionGroup] = useState(undefined);
    const navigate = useNavigate();

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
                <LeftPanelItem onClick={() => { navigate(-1)}}>
                    <LogoPanelItem src={icon11}/>
                    <PanelItemText>
                    </PanelItemText>
                </LeftPanelItem>
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
                <LeftPanelItem as={Link} to="/receivments/">
                    <LogoPanelItem src={transfer}/>
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
                <LeftPanelItem as={Link} to="/users">
                    <LogoPanelItem src={icon10}/>
                    <PanelItemText>
                    </PanelItemText>
                </LeftPanelItem>
                <LeftPanelItem as={Link} to="/logout">
                    <LogoPanelItem src={icon4}/>
                    <PanelItemText>
                    </PanelItemText>
                </LeftPanelItem>
                <LeftPanelItem as={Link} to="/active-receivment/">
                    <LogoPanelItem src={giving}/>
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