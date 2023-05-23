import React from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import Announcement from "../components/Announcement.jsx";
import Products from "../components/Products.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";

const Container = styled.div`

`;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
 padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option`

`;
const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter products:
                    </FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                        <Option>XXXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sorter products:
                    </FilterText>
                    <Select>
                        {/*<Option disabled selected> by</Option>*/}
                        <Option selected>Newest</Option>
                        <Option>Price (ASC)</Option>
                        <Option>Price (DESC)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
export default ProductList