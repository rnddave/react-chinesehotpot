import React from 'react';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';

const ProductsPage = styled.div`
  padding: 2rem;
  background: white;
`;

const Products = () => {
  const products = [
    // Currently on home page, but this makes no sense.
    // makes more sense to add product details here
  ];

  return (
    <ProductsPage>
      <h1>Our Products</h1>
      <div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </ProductsPage>
  );
};

export default Products;
