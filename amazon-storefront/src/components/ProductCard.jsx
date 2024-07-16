import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ff0000;
  padding: 1rem;
  margin: 1rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const ProductImage = styled.img`
  max-width: 200px;
  max-height: 200px;
  object-fit: contain;
  display: block;
  margin: 0 auto; /* Center the image */
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <h2>{product.name}</h2>
      <ProductImage src={product.image} alt={product.name} />
      <a href={product.link} target='_blank' rel='noopener noreferrer'>View on Amazon</a>
    </Card>
  );
};

export default ProductCard;
