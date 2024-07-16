import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  padding: 2rem;
  background: #fff;
  border-bottom: 1px solid #FF0000;
  text-align: center;

  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: #FF0000;

  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  color: #333;
  margin-top: 1rem;

  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroTitle>Chinese Hotpot</HeroTitle>
      <HeroDescription>
        We curate Amazon products to help you experience Authentic Chinese Cuisine at home. Checkout our Featured Products below or click on the Shop link in the menu to find more products.
      </HeroDescription>
      <HeroDescription>
        You will also find blog posts where we celebrate Chinese culture, restaurants and takeaways in the UK as well as discussing our own multi-cultural family experiences while travelling in China or living in the UK.
      </HeroDescription>
    </HeroSection>
  );
};

export default Hero;
