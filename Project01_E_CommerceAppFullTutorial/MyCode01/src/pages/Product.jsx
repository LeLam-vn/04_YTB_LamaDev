import React from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import Announcement from "../components/Announcement.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";
import {Add, Remove} from "@mui/icons-material";

const Container = styled.div`

`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;


`;
const ImgContainer = styled.div`
  flex: 1;

`;
const Img = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  //background-color: gray;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  //background-color: gray;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 5px;
  background-color: ${props => props.color};
  border-radius: 50%;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option`

`;
const AddContainer = styled.div`
  
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  
`;
const Amount = styled.div`
  
`;
const Button = styled.button`
  
`;
const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Img src='https://i.ibb.co/MPqg6Gx/FB-IMG-1603159752092.jpg'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumsuit</Title>
                    <Desc>Scelerisque eu, aliquet error adipiscing minus atque, atque explicabo eu suscipit vivamus ac
                        omnis quidem hic? Proident saepe! Illo? Perspiciatis? Mauris cupiditate lacus diam neque totam,
                        sodales hendrerit enim deserunt! Excepturi pariatur magni, corporis! </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color='black'/>
                            <FilterColor color='darkblue'/>
                            <FilterColor color='gray'/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                                <FilterSizeOption>XXXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>

                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove></Remove>
                            <Amount>1</Amount>
                            <Add></Add>
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>

        </Container>
    )
}
export default Product