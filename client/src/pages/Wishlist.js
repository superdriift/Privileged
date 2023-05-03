import React, { useState } from 'react';
import Wshlst from "../components/WshLst";
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';



const Wishlist = () => {
    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
    }

    return (
        <>
            {user ? (
                <>
                    <br />
                    <br />
                    <h2 style={{ display: "flex", fontSize: "36pt", fontFamily: "Inknut Antiqua", justifyContent: "center" }}> {user.firstName}'s Wishlist</h2>
                    <br />
                    <br />
                    <Wshlst />
                    <br />
                    <br />
                </>
            ) : null}
        </>
    )
};

export default Wishlist;