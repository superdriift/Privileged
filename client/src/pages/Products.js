import React from "react";
import ProductList from "../components/ProductList";
import Catbar from "../components/Catbar";
import Cart from "../components/Cart";
import Container from "react-bootstrap/esm/Container";

const Products = () => {
    return (
        <>
            <Container fluid className="m-auto">
                <ProductList />
            </Container>

            {/* <Cart /> */}
        </>
    )
}
export default Products;
