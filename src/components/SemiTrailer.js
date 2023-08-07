import React,{ useState, useEffect }from "react";
import client from "../utils/Sender";
import {access_token} from "../utils/Sender";
import {useParams} from "react-router-dom";
function SemiTrailer(){
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [production_data, setProduction_data] = useState("");
    const [registration_number, setRegistration_number] = useState("");
    const [aviable, setAviable] = useState("");
    const [semi_note, setSemiNote] = useState("");
    const [photo, setPhoto] = useState("");

    const { pk } = useParams();

    useEffect(() =>{
        client.get(`/api/semitrailers/${pk}/`,{
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }).then(response => {
            let received_data = response.data;
            console.log(received_data);
            setBrand(received_data.brand);
            setModel(received_data.model);
            setProduction_data(received_data.production_year);
            setRegistration_number(received_data.registration_number);
            setAviable(received_data.available);
            setSemiNote(received_data.semi_note);
            setPhoto(received_data.photo);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <div>
            <div>
                <h1>SemiTrailer Details</h1>
                <p>Brand: {brand}</p>
                <p>Model: {model}</p>
                <p>Production Data: {production_data}</p>
                <p>Registration Number: {registration_number}</p>
                <p>Available: {aviable}</p>
                <p>Seminote: {semi_note && <p>Obecny!</p>}</p>
                {/* Display the photo if available */}
                {photo && <img src={photo} alt="SemiTrailer" />}
            </div>
        </div>
    );
}
export default SemiTrailer;