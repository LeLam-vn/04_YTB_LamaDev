import React from 'react'
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from "@mui/icons-material";
import {Badge} from "@mui/material";
import {mobile} from "../responsive.js";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: '50px'
  })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    padding: "10px 0px"
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none"
  })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({
    width: "50%"
  })}
`;

const Center = styled.div`
  flex: 1;
  cursor: pointer;

`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({
    fontSize: "24px"
  })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    flex: '2',
    justifyContent: "center"
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: "12px",
    marginLeft: "10px"
  })}
`;

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    console.log('quantity-BE-Navbar.jsx-88:', quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search'></Input>
                        <Search style={{color: 'gray', fontsize: '16px'}}></Search>
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to='/'>
                        <Logo>LAMA.</Logo>
                    </Link>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <Link to='/cart'>
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined color="action"/>
                            </Badge>
                        </MenuItem>
                    </Link>

                </Right>
            </Wrapper>
        </Container>
    )
}
export default Navbar