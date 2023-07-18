import axios from "axios";
import React, { useEffect, useState} from "react";
import Navbar from "./Navbar";
const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})
function User(){
    const access_token = localStorage.getItem('access');
    const [data, setData] = useState([]);

    useEffect(() => {
        client.get("/api/detail-user/", {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(response => {
                console.log(response);
                // Assuming the API response contains the data in a 'results' property
                setData(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Navbar>
            </Navbar>
            <p>Hi nice to meet you ${data} </p>
        </div>
    )
}

export default User;