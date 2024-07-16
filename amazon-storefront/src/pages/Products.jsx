import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';

const ProductsPage = styled.div`
  padding: 2rem;
  background: white;

  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => setAllProducts(data));
  }, []);
  

  return (
    <ProductsPage>
      <h1>Our Products</h1>
      <div>
        {allProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </ProductsPage>
  );
};

export default Products;
