import { React, useState } from "react";
import Profilo from '../components/Profilo'



const Profile = () => {
    return(
        <>
        <br/>
        <br/>
        <h2 style={{ display: "flex", fontSize: "36pt", fontFamily: "Inknut Antiqua", justifyContent: "center" }}>Profile</h2>
        <br/>
        <br/>
        <Profilo/>
        <br/>
        <br/>
        </>
    )
}

export default Profile;