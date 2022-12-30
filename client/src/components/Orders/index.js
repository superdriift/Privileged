import React from "react";
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import { QUERY_USER } from '../utils/queries';


const Orders = () => {
    return(
        <>
            <h4 style={{ display: "flex", justifyContent: "center", fontSize: "28pt", fontStyle: "italic", fontFamily: "Inknut Antiqua" }} > Active Orders </h4>
            <br />
            <h4 style={{ display: "flex", justifyContent: "center", fontSize: "28pt", fontStyle: "italic", fontFamily: "Inknut Antiqua" }} > Completed Orders </h4>
            <br />
        </>
    )
    }

export default Orders;
