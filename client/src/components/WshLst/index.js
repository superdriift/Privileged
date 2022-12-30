import React, { useState } from 'react';
import Auth from "../../utils/auth";
import auth from "../../utils/auth";

const Wshlst = () => {
    if (Auth.loggedIn()) {
        return (
            <>
                <h1 style={{ textAlign: "center" }}> Username's Wishlist</h1>
            </>
        )
    }
    else {
        return(
        <>
                <h1> Log in to see your wishlist! </h1>
        </>
        )
    }
}


export default Wshlst