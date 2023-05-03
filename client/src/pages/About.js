import AbtStatement from "../components/AbtStatement";
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"



const About = () => {
    return (
        <Container fluid>
     <br />
      <br />
      <h2 style={{ display: "flex", fontSize: "36pt", fontFamily: "Inknut Antiqua", justifyContent: "center" }}>About Us</h2>
      <br />
      <br />          
      <AbtStatement />
      <br/>
      <br/>
      <Col style={{ display: "flex", justifyContent: "center", alignItem: "center" }} > <Button variant="outline-success" size="lg" href="/products" style={{ textDecoration: "none", }}> View Products </Button>{' '} </Col>
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

        </Container>
    )
}

export default About;