import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import BlogPost from '../components/BlogPost';
import Hero from '../components/Hero';
import styled from 'styled-components';

const HomePage = styled.div`
  padding: 2rem;
  background: white;

  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    fetch('/data/featuredProducts.json')
      .then(response => response.json())
      .then(data => setFeaturedProducts(data.slice(0, 6))); 
  }, []);
  
  useEffect(() => {
    fetch('/data/blogPosts.json')
      .then(response => response.json())
      .then(data => setFeaturedPosts(data));
  }, []);

  return (
    <HomePage>
      <Hero />
      <section>
        <h2>Featured Products</h2>
        <div>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section>
        <h2>Featured Blog Posts</h2>
        <div>
          {featuredPosts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </section>
    </HomePage>
  );
};

export default Home;
