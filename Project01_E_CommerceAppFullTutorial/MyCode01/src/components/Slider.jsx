import React from 'react'
import styled from "styled-components";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@mui/icons-material";

const Container = styled.div`
  background-color: #c8c025;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=>props.direction === 'left' && '10px'};
  right: ${props=>props.direction ==='right' &&'10px'};
  margin: auto;
  cursor: pointer;
`;

const Wrapper = styled.div`
  background-color: aquamarine;
  height: 100%;
`;

const Slide = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  background-color: aliceblue;
`;
const Image = styled.img`
height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  background-color: blanchedalmond;
`;
const Title = styled.h1`
  
`;

const Desc = styled.p`
  
`;

const Button = styled.button`
  
`;


const Slider = () => {
    return (
        <Container>
            <Arrow direction='left'>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image
                            src='https://i.ibb.co/dp4xs4c/20190525-030950484-i-OS-2.jpg'
                        />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>

            </Wrapper>
            <Arrow direction='right'>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}
export default Slider