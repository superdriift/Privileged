import { React, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import emailjs from '@emailjs/browser';

const Contax = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ytsvfun', 'template_72a5e9q', form.current, 'vN64RlFxpjGlsYFwA')
        .then((result) => {
            alert('Message Sent');
            window.location.reload();
            console.log(result.text);
        }, (error) => {
            alert('Error!');
            console.log(error.text);
        });
    };
  
    return (
        <Container style={{ display:"flex", justifyContent:"center", textAlign:"center"}}>
     <Form style={{ width:"70%" }} ref={form} onSubmit={sendEmail}>
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ fontSize:"17pt", fontWeight:"425", fontFamily:"Inknut Antiqua" }}> Name </Form.Label>
        <Form.Control required={true} as="input" name="user_name" />
        <Form.Label style={{ fontSize:"17pt", fontWeight:"425", fontFamily:"Inknut Antiqua" }}>Email</Form.Label>
        <Form.Control required={true} type="email" name="user_email" />
        <Form.Label  style={{ fontSize:"17pt", fontWeight:"425", fontFamily:"Inknut Antiqua" }}>Message</Form.Label>
        <Form.Control required={true} as="textarea" style={{ minHeight:"100px"}} name="message" />
        <br/>
        <Button style={{ width:"17.5%", height:"3.5rem", fontSize:"17pt", fontWeight:"425", fontFamily:"Inknut Antiqua" }} variant="dark" type="submit" value="Send">
            Send
            </Button>
        </Form.Group>
        <br/>
        <br/>
        <br/>
      </Form>
        </Container>
 
    );
  };


export default Contax;