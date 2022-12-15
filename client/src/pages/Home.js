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
    <Container>
      <Row>
        <br />
        <br />
        <br />
      </Row>
      <Row>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={jbrn}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5 style={{ fontWeight:"heavy" }}> Jade Bear Rope Necklace </h5>
              <p style={{ fontStyle:"italic" }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={jhprn}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={jddc}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row>
        <br />
        <br />
        <br />
      </Row>
      <Row>
        <Col style={{ display:"flex", justifyContent:"center", alignItem:"center" }} > <Button variant="outline-dark" size="lg" href="/products"> View All Products </Button>{' '} </Col>
      </Row>
    </Container>
  );
}

export default Home;
