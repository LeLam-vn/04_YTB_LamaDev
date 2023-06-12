import React, {useState} from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import Announcement from "../components/Announcement.jsx";
import Products from "../components/Products.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";
import {useLocation} from "react-router-dom";

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
    const location = useLocation();
    // console.log('location:-FE-ProductList.jsx-37: ', location.pathname.split('/')[2])
    const cat = location.pathname.split('/')[2]

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('newest');
    const handleFilters = (event) => {
        const value = event.target.value;
        setFilters({
            ...filters,
            [event.target.name]: value
        })
        console.log('filter:-FE-ProductList.jsx-48:', filters)
        // console.log('valueFilter:-FE-ProductList.jsx-44: ', value)
    }
    console.log('filter:-FE-ProductList.jsx-51:', filters)
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter products:
                    </FilterText>
                    <Select name='color' onChange={handleFilters}>
                        {/*<Option disabled>Color</Option>*/}
                        <Option value="DEFAULT" disabled>Color is:</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <Option value="DEFAULT" disabled>Size by:</Option>
                        {/*<Option disabled selected>Size</Option>*/}
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
                    <Select onChange={event => setSort(event.target.value)}>
                        <Option value="DEFAULT" disabled>Sort by</Option>
                        <Option value='newest'> Newest </Option>
                        <Option value='asc'>Price (ASC)</Option>
                        <Option value='desc'>Price (DESC)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
export default ProductList