import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid #ff0000;
    padding: 1rem;
    margin: 1rem;
    background: white;
`;

const ProductCard = ({ product }) => {
    return (
        <Card>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <a href={product.link} target='_blank' rel='noopener noreferrer'>View on Amazon</a>
        </Card>
    );
};

export default ProductCard;