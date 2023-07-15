import axios from "axios";
import {useState} from "react";
<<<<<<< HEAD
import {useHistory, useNavigate} from "react-router-dom";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})
function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        client.post("/api/login/token",{
=======
function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post("/api/login",{
>>>>>>> 12fd0c2 (Add login and logout component)
            email,
            password
        })
            .then(response => {
<<<<<<< HEAD
                localStorage.setItem('access', response.data.access);
                localStorage.setItem('refresh', response.data.refresh);
                navigate('/home');
=======
                console.log(response);
>>>>>>> 12fd0c2 (Add login and logout component)
            })
            .catch(error =>{
                console.log(error);
            })
    }
    return (
        <div>
            <h1>Hello world nice to see you</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
                <br/>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                />
                <button type="submit">Zatwierdz</button>
            </form>
        </div>
    )
}
export default Login;