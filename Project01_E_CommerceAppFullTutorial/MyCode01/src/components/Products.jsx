import React from 'react'
import {polularProducts} from "../data.js";
import SingleProduct from "./SingleProduct.jsx";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = () => {
    return (
        <Container>
            {polularProducts.map(product =>
                <SingleProduct siproduct={product} key={product.id}/>
            )}
        </Container>
    )
}
export default Products