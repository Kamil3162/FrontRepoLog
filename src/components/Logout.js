import React from "react";

function Logout(){
    localStorage.clear();

    window.location.href = '/login'; // Replace with your login route
}
export default Logout;
