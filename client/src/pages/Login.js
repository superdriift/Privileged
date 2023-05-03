import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
        <Link style={{ color: "black", textDecoration: "none", fontFamily: "Proxima Nova" }} to="/signup">← Signup</Link>
        <br />
        <br />
        <h1 style={{ textAlign: "center", fontSize:"36pt", fontFamily: "Inknut Antiqua" }}> Welcome Back! </h1>

        <br />
        <h2 style={{ textAlign:"center", fontSize:"28pt", fontFamily:"Inknut Antiqua" }}>Login</h2>
        <br/>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form onSubmit={handleFormSubmit}>
            <div className="flex-row space-between my-2">
              <label htmlFor="email" style={{ fontSize:"17pt", fontFamily: "Proxima Nova" }} >Email address:</label>
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
            {error ? (
              <div>
                <p className="error-text">The provided credentials are incorrect</p>
              </div>
            ) : null}
            <div className="flex-row flex-center">
              {/* <button type="submit">Submit</button> */}
              <Button  size='lg' type="submit" variant="outline-success" style={{ fontFamily: "Inknut Antiqua" }}>Login</Button>{' '}
            </div>
          </form>
        </div>

      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Login;
