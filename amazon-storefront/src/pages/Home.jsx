import React from "react";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";

const HomePage = styled.div`
    padding: 2rem;
    background; white;
`;

const Home = () => {
    
    // somewhere to put products for now, 
    // we'll probably need to move this later else will get to big
    const products = [
        // products here
    ];

    return (
        <HomePage>
            <h1>Chinese Hotpot</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </HomePage>
    );
};

export default Home;

