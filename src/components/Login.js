import axios from "axios";
import {useState} from "react";
import {useHistory, useNavigate} from "react-router-dom";
import cargophoto from '../layouts/icons/truck-login.jpg';
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
} from '../layouts/login_styled.js';
import client from "../utils/Sender";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        client.post("/api/login/token",{
            email,
            password
        })
            .then(response => {
                // using this i have to use JSON.parse
                localStorage.setItem('access', response.data.access);
                localStorage.setItem('refresh', response.data.refresh);
                localStorage.setItem('user_permissions', JSON.stringify(response.data.permissions));
                localStorage.setItem('permission_group', JSON.parse(response.data.permission_group)[0].fields.name);
                localStorage.setItem('user', JSON.stringify(response.data.user))

                navigate('/home');
                window.location.reload(false);
            })
            .catch(error =>{
                console.log(error);
            })
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