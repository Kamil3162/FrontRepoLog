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
                localStorage.setItem('access', response.data.access);
                localStorage.setItem('refresh', response.data.refresh);
                navigate('/home');
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