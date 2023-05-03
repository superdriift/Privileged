import React from "react";
import ProductList from "../components/ProductList";
import Catbar from "../components/Catbar";
import Cart from "../components/Cart";
import Container from "react-bootstrap/esm/Container";

const Products = () => {
    return (
        <>
            <div fluid className="m-auto" style={{background:"##fffff8" }}>
                <ProductList />
            </div>
            {/* <Cart /> */}
        </>
    )
}
export default Products;
