import axios from "axios";
<<<<<<< HEAD
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

function Home(){
    const access_token = localStorage.getItem('access');
    const refresh_token = localStorage.getItem('refresh');

    useEffect(() =>{
        client.get('/api/home/token',{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        })
            .then(response =>{
                console.log(response.data);
            })
            .catch(error =>{
                console.log(error);
            })
    });

=======

function Home(){
>>>>>>> 12fd0c2 (Add login and logout component)
    return (
        <h1>Hello world nice to see you</h1>
    )
}

export default Home;