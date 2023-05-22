import React, {useState} from 'react'
import styled from "styled-components";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@mui/icons-material";
import {sliderItems} from "../data.js";

const Container = styled.div`
  //background-color: #c8c025;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ff1414;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 50%;
  z-index: 2;
`;

const Wrapper = styled.div`
  background-color: aquamarine;
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${props => props.index * -100}vw);

`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  //background-color: brown;
  background-color: #${props => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  //padding: 50px;
  height: 100%;
  //width: 100%;
  display: flex;
  align-items: center;
  //background-color: #c3af2e;
`;
const Image = styled.img`
  //height: 80%;
  width: 100%;
  background-color: blue;
  display: inline-block;

`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  //background-color: blanchedalmond;
`;
const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    console.log('slideIndex:', slideIndex)
    const count = sliderItems.length - 1
    console.log(count)
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : count)
            console.log('left:', slideIndex)
        } else {
            setSlideIndex(slideIndex < count ? slideIndex + 1 : 0)
            console.log('right:', slideIndex)
        }
    }
    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick('left')}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper index={slideIndex}>
                {sliderItems.map(item => (
                    <Slide
                        key={item.id}
                        bg={item.bg}
                    >
                        <ImgContainer>
                            <Image
                                src={item.img}
                            />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.Desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}

            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick('right')}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}
export default Slider