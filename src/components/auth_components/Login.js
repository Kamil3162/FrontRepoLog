import axios from "axios";
import {useState} from "react";
import {useHistory, useNavigate} from "react-router-dom";
import cargophoto from '../../assets/icons/truck-login.jpg';
import {
    LoginForm,
    LoginDisplay,
    LoginPageContainer,
    LoginLabel,
    LoginInput,
    LoginButton,
    LoginDisplayPhoto,
    LoginPart,
    LoginEntry, HorizontalLine, LoginDisplayPhotoContainer
} from '../../assets/styles/login_styled.js';
import client from "../../utils/Sender";
import {useContext} from "react";
import {AuthContext} from "../../auth/Auth_provider";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(email, password);

        // client.post("/api/login/token",{
        //     email,
        //     password
        // })
        //     .then(response => {
        //
        //         let today = new Date();
        //         let hour_later = new Date(today);
        //         hour_later.setHours(hour_later.getHours() + 1);
        //
        //         localStorage.setItem('access', response.data.access);
        //         localStorage.setItem('refresh', response.data.refresh);
        //         localStorage.setItem('user_permissions', JSON.stringify(response.data.permissions));
        //         localStorage.setItem('permission_group', JSON.parse(response.data.permission_group)[0].fields.name);
        //         localStorage.setItem('user', JSON.stringify(response.data.user));
        //         localStorage.setItem('start_session_time', today);
        //         localStorage.setItem('final_session_time', hour_later);
        //
        //         window.dispatchEvent(new Event('storageUpdate'));
        //
        //         navigate('/home-guest');
        //         window.location.reload(false);
        //
        //     })
        //     .catch(error =>{
        //         console.log(error);
        //     })
    }
    return (
        <LoginPageContainer>
            <LoginPart>
                <LoginEntry>Log In</LoginEntry>
                <LoginForm onSubmit={handleSubmit}>
                    <LoginLabel>
                        Email
                    </LoginLabel>
                    <LoginInput
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <br/>
                    <LoginLabel>
                        Password
                    </LoginLabel>
                    <LoginInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required

                    />
                    <LoginButton type="submit">Zatwierdz</LoginButton>
                </LoginForm>

            </LoginPart>
            <LoginDisplay>
                <LoginDisplayPhotoContainer>
                    <LoginDisplayPhoto src={cargophoto}/>
                </LoginDisplayPhotoContainer>
            </LoginDisplay>

        </LoginPageContainer>
    )
}
export default Login;