import React from "react";
import { Link } from 'react-router-dom';
import { useQuery, useReactiveVar } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';


const Orders = () => {
    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
    }

    return(
        <>
            {user.order}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
    }

export default Orders;
