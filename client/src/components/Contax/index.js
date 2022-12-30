import { React, useEffect } from "react";
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"



const Contax = () => {
    return (
        <Container style={{ display:"flex", justifyContent:"center", textAlign:"center"}}>
            <Form style={{ width:"70%" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontSize:"17pt", fontWeight:"425", fontFamily:"Inknut Antiqua" }}> Name </Form.Label>
                    <Form.Control type="input" placeholder="Name" />
                    {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ fontSize:"17pt", fontWeight:"425", fontFamily:"Inknut Antiqua" }}> E-Mail Address </Form.Label>
                    <Form.Control type="email" placeholder="E-mail"  />
                    <Form.Text className="text-muted"> So we know where to send our response! </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ fontSize:"17pt", fontWeight:"425", fontFamily:"Inknut Antiqua" }}> Subject </Form.Label>
                    <Form.Control type="input" placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ fontSize:"17pt", fontWeight:"425", fontFamily:"Inknut Antiqua" }}> Message </Form.Label>
                    <Form.Control as="textarea" placeholder="Content" rows={3} />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
                <br />
                <Button size='lg' variant="outline-success" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Contax;