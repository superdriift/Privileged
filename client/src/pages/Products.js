import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Products = () => {
    return (
        <>
            <CategoryMenu />
            <ProductList />
            {/* <Cart /> */}
        </>
    )
}
export default Products;
