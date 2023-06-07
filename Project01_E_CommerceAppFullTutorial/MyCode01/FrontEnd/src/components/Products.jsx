import React, {useEffect, useState} from 'react'
// import {popularProducts} from "../data.js";
import SingleProduct from "./SingleProduct.jsx";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({cat, filters, sort}) => {
    console.log('cat, filters, sort-FE-Product.jsx-14', cat, filters, sort)
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:5009/api/products?category=${cat}`
                        : 'http://localhost:5009/api/products'
                );
                // console.log('res--FE-Product.jsx-25', res)
                setProducts(res.data.products)
                // console.log('product-FE-Product.jsx-27:', products)
            } catch (error) {
                console.log('Error-FE-Product.jsx-29:', error)
            }
            // console.log('product-FE-Product.jsx-31:', products)
        }
        getProducts()
    }, []);
    console.log('product-FE-Product.jsx-35:', products)

    useEffect(() => {
        // console.log('products-FE-Product.jsx-38:', products)
        // console.log('filters-FE-Product.jsx-39:', filters)
        cat &&
        setFilteredProducts(
            products.filter(item =>
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)
                )
            )
        )
    }, [products, cat, filters]);
    console.log('filteredProducts-FE-Product.jsx-49:', filteredProducts)

    useEffect(() => {
        if ((sort === 'newest')) {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createAt - b.createdAt)
            );
        } else if (sort === 'asc') {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            )
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            )
        }
    }, [sort]);

    return (
        <Container>
            {cat
                ? filteredProducts.map(product => <SingleProduct siproduct={product} key={product._id}/>)
                : products
                    .slice(0, 8)
                    .map(product => <SingleProduct siproduct={product} key={product._id}/>)
            }
        </Container>
    )
}
export default Products