import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import jbrn from '../images/jbrn.jpeg'
import jhprn from '../images/jhprn.jpeg'
import jfdrn from '../images/jfdrn.jpeg'
import jmrn from '../images/jmrn.jpeg'
import jddc from '../images/jddc.jpeg'
import jbsn from '../images/jbsn.jpeg'
import jsr from '../images/jsr.jpeg'
import jdsrn from '../images/jdsrn.jpeg'
import jorn from '../images/jorn.jpeg'
import jtrn from '../images/jtrn.jpeg'
import jwrn from '../images/jwrn.jpeg'
import jgrn from '../images/jgrn.jpeg'
import jfwsp from '../images/jfwsp.jpeg'
import jmrhp from '../images/jmrhp.jpeg'
import jtr from '../images/jtr.jpeg'
import jfwspi from '../images/jfwspi.jpeg'
import jdp from '../images/jdp.jpeg'
import jdr from '../images/jdr.jpeg'
import jkfri from '../images/jkfri.jpeg'
import jkfpi from '../images/jkfpi.jpeg'
import jkfr from '../images/jkfr.jpeg'
import jcp from '../images/jcp.jpeg'
import j2pdrn from '../images/j2pdrn.jpeg'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import { Link } from "react-router-dom";
import { pluralize } from "../utils/helpers"
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
// import spinner from '../../assets/spinner.gif';



function Home() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  state.products.length ? (filterProducts().map(product =>
    console.log(product.name, product.image)
  )
  )
    : (
      console.log('its bad')
    )


  return (
    <div className='home'>
      <br />
      <h1 style={{ fontSize: "40pt", fontWeight: 480, fontFamily: "Inknut Antiqua", textAlign: "center" }}> Privileged Pieces </h1>
      {/* <br /> */}
      <Container style={{ borderRadius: "10px", textAlign: "center" }}>
        <br />
        <br />
        {/* <br /> */}
        <Row >
          <Carousel pause="hover" fade={true} variant='dark' indicators={false}>
            {/* {state.products.length ? (filterProducts().forEach(product => */}
            <Carousel.Item>
              <img
                style={{ borderRadius: "5pt" }}
                src={jbrn}
                alt=''
              />
              <Carousel.Caption>
                <h3> Jade Bear Rope Necklace </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                style={{ borderRadius: "5pt" }}
                src={jhprn}
                alt=''
              />
              <Carousel.Caption>
                <h3> Jade Hog / Pig Rope Necklace </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                style={{ borderRadius: "5pt" }}
                src={jfdrn}
                alt=''
              />
              <Carousel.Caption>
                <h3> Jade Foo Dog Rope Necklace </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                style={{ borderRadius: "5pt" }}
                src={jmrn}
                alt=''
              />
              <Carousel.Caption>
                <h3> Jade Mermaid Rope Necklace </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={jddc}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade Dragon Decorative Comb </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={j2pdrn}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade 2 Piece Dragon Rope Necklace Set </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={jbsn}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade Barrel Silver Necklace </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={jsr}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade Skull Ring </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={jdr}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade Dragon Ring </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={jdsrn}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade Dragon Sword Rope Necklace </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={jorn}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade Octopus Rope Necklace </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={jtrn}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade Tiger Rope Necklace </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={jwrn}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade Wasp Rope Necklace </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={jgrn}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade Goose Rope Necklace </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={jfwsp}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade Foot with Spider Pendant </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={jtr}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade Turtle Ring </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={jfwspi}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade Foot with Spider Pendant II </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={jdp}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade Dragon Pendant </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={jkfri}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade Koi Fish Ring II </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={jkfpi}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade Koi Fish Pendant II </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={jkfr}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade Koi Fish Ring </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ borderRadius: "5pt" }}
              src={jcp}
              alt=''
            />
            <Carousel.Caption>
              <h3> Jade Cicada Pendant </h3>
            </Carousel.Caption>
          </Carousel.Item>

          </Carousel>
          
        </Row>
        <br />          
        <br/>
        <br/>
        <Button size="lg" className="m-auto" href="/products" style={{ width: "18rem", display: "flex", justifyContent: "center", fontFamily: "Inknut Antiqua" }} variant="outline-success" > Shop Products </Button>
        <br />
        <br/>
        <br/>
        <br/>
      </Container>
    </div>
  );
}

export default Home;
