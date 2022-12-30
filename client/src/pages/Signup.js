import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
    <Container fluid style={{ padding: "20px" }}> 
      <Link style={{ color: "black", textDecoration: "none", fontFamily:"Proxima Nova" }} to="/login">← Login</Link>
      <br/>
      <br/>
      <h1 style={{ textAlign:"center", fontSize:"36pt", fontFamily:"Inknut Antiqua" }}> Signup </h1>
      <br/>
      <div style={{ display:"flex", justifyContent:"center" }}>
      <form  onSubmit={handleFormSubmit}>
      <div className="flex-row space-between my-2">
          <label htmlFor="firstName" style={{ fontSize:"17pt", fontFamily: "Proxima Nova" }}>First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName" style={{ fontSize:"17pt", fontFamily: "Proxima Nova" }}>Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email" style={{ fontSize:"17pt", fontFamily: "Proxima Nova" }}>Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd" style={{ fontSize:"17pt", fontFamily: "Proxima Nova" }}>Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-center">
          {/* <button type="submit">Submit</button> */}
          <Button size="lg" type="submit" style={{ fontFamily: "Inknut Antiqua" }} variant="outline-success">Signup</Button>{' '}
        </div>
      </form>
      </div>
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
      </>
  );
}

export default Signup;
