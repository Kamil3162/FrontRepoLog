import {LeftPanel, LeftPanelItem, LeftPanelLogo, LogoPanelItem, PanelItemText} from "../../assets/styles/home_styled";
import icon1 from "../../assets/icons/dashboard.png";
import icon9 from "../../assets/icons/cargo-truck.png";
import icon3 from "../../assets/icons/settings.png";
import icon4 from "../../assets/icons/logout.png";
import icon5 from "../../assets/icons/trailer.png";
import icon6 from "../../assets/icons/user.png";
import icon7 from "../../assets/icons/conversation.png";
import icon8 from "../../assets/icons/contract.png";
import icon10 from "../../assets/icons/group.png";
import icon11 from "../../assets/icons/arrow-back-8.png";
import icon_login from "../../assets/icons/login.png";
import register from "../../assets/icons/register.png"
import transfer from "../../assets/icons/transfers.png";
import giving from "../../assets/icons/giving.png";
import {Link} from "react-router-dom";
import {user_permission_group} from "../../utils/Sender";
import login from "../auth_components/Login";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import DriverPanel from "./driver_left_panel.js";
import LoginPanel from "./login_left_panel.js";
import AdminPanel from "./admin_left_panel.js";
import {useContext} from "react";
import {AuthContext} from "../../auth/Auth_provider";

function LeftPanelComponent(){
    // const [userPermissionGroup, setUserPermissionGroup] = useState(localStorage.getItem('user_permission_group'));
    const [userPermissionGroup, setUserPermissionGroup] = useState(localStorage.getItem('permission_group'));

    const {a1} = useContext(AuthContext);
    const leftPanelToogled = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        const handleStorageUpdate = () => {
            setUserPermissionGroup(localStorage.getItem('user_permission_group'));
        };

        window.addEventListener('storageUpdate', handleStorageUpdate);

        return () => {
            window.removeEventListener('storageUpdate', handleStorageUpdate);
        };
    }, []);

    return (
        userPermissionGroup === 'Admin' || userPermissionGroup === 'Manager' ? (
                <AdminPanel
                    navigate={navigate}
                />
            ) : (
            userPermissionGroup === null ? (
                    <LoginPanel/>
                ):(
                    <DriverPanel/>
                )
            )
    )
}
export default LeftPanelComponent;