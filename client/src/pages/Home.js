import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import jbrn from '../images/jbrn.jpeg'
import jhprn from '../images/jhprn.jpeg'
import jddc from '../images/jddc.jpeg'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
  return (
    <>
      <br />
      <Container style={{ backgroundColor: "lightgrey", textAlign: "center" }}>
        <br />
        <h1 style={{ fontSize: "40pt", fontWeight: 480, fontFamily: "Inknut Antiqua", textAlign: "center" }}> Privileged Pieces </h1>
        <br />
        <Row >
          <Carousel style={{}} pause="hover" indicators={false} variant="dark">
            <Carousel.Item>
              <img
                // className="d-block w-100"
                src={jbrn}
                alt="First slide"
              />
              <br />
              <br />
              <h3 style={{ fontFamily: "Inknut Antiqua", fontStyle: "italic" }}> Jade Bear Rope Necklace </h3>
              {/* <Carousel.Caption>
              <h5 style={{ fontWeight:"heavy" }}> Jade Bear Rope Necklace </h5>
              <p style={{ fontStyle:"italic" }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                // className="d-block w-100"
                src={jhprn}
                alt="Second slide"
              />
              <br />
              <br />
              <h3 style={{ textAlign: "center", fontFamily: "Inknut Antiqua", fontStyle: "italic" }}> Jade Hog/Pig Rope Necklace </h3>
              {/* <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                // className="d-block w-100"
                src={jddc}
                alt="Third slide"
              />
              <br />
              <br />
              <h3 style={{ textAlign: "center", fontFamily: "Inknut Antiqua", fontStyle: "italic" }}> Jade Dragon Decorative Comb </h3>
              {/* <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <br />
          <br />
        </Row>
        <Row>
          <Col style={{ display: "flex", justifyContent: "center", alignItem: "center" }} > <Button variant="outline-dark" size="lg" href="/products" style={{ textDecoration: "none", }}> View All Products </Button>{' '} </Col>
        </Row>
        <br/>
      </Container>
    </>
  );
}

export default Home;
