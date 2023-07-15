import axios from "axios";
import {useState} from "react";
function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post("/api/login",{
            email,
            password
        })
            .then(response => {
                console.log(response);
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