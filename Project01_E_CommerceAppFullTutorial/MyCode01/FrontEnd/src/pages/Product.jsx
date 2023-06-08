import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import Announcement from "../components/Announcement.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";
import {Add, Remove} from "@mui/icons-material";
import {useLocation} from "react-router-dom";
import {publicRequest} from "../requestMethods.js";
import axios from "axios";
import {colors} from "@mui/material";

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
  padding: 0 50px;
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
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;

`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: #ffffff;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #ededed;
  }
`;
const Product = () => {

    const location = useLocation()
    const id = location.pathname.split('/')[2]
    console.log('id-FE-Product.jsx-108', id)

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(10);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`/products/find/${id}`)
                console.log('res.data.product-FE-Product.jsx-120:', res.data.product)
                setProduct(res.data.product);
            } catch (error) {
                console.log('error--FE-Product.jsx-123:', error)
            }
        }
        getProduct()
    }, [id]);
    console.log('product-FE-Product.jsx-128:', product)
    console.log('product.color-FE-Product.jsx-129:', product.color)

    const handleClickAmount = (type) => {
        // const count = quantity + parseInt(event.target.value)
        // console.log(event.target)
        // setQuantity(count)
        switch (type) {
            case 'dec':
                setQuantity(quantity - 1)
                break;
            case 'inc':
                setQuantity(quantity + 1)
                break;
            default:
                console.log('Looi')
                breal;
        }
    }


    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Img src={product.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color ? product.color.map((co) =>
                                (<FilterColor color={co} key={co}/>)
                            ) : "none"}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                {product.size
                                    ? product.size.map((si) =>
                                        (<FilterSizeOption key={si}>{si}</FilterSizeOption>)
                                    )
                                    : 'none'
                                }
                            </FilterSize>
                        </Filter>

                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=>handleClickAmount('dec')}></Remove>
                            <Amount>
                                {
                                    quantity
                                }
                            </Amount>
                            <Add onClick={()=>handleClickAmount('inc')}></Add>
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