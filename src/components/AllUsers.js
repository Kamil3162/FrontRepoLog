import axios from "axios";
import React, { useEffect, useState } from "react";


const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});

function AllUsers(){
    const [data, setData] = useState([]);

    return (
        <div>

        </div>
    );
}