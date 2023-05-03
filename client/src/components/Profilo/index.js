import React from "react"
import Container from "react-bootstrap/Container"
import { Link } from 'react-router-dom';
// import Orders from '../components/Orders'
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

const Profilo = () => {
    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
    }

    return (
        <>
            {user ? (
                <>
                    <Container fluid>
                        <h3>
                            Name: {user.firstName} {user.lastName}
                        </h3>
                        <h3> 
                            Email: {user.email} 
                        </h3>

                        </Container>
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
            ) : null}
                    </>
                    )
}


                    export default Profilo;