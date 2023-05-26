import styled from "styled-components";
import {categories} from "../data.js";
import CategoryItem from "./CategoryItem.jsx";
import React from "react";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
    console.log(categories)
    return (
        <Container>
            {categories.map(item =>
                <CategoryItem item={item} key={item.id}/>
            )}
        </Container>
    )
}
export default Categories