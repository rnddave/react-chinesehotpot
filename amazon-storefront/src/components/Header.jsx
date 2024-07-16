import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
    background: white;
    color: #FF0000;
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    .dark-mode {
        background: #333;
        color: white;
    }
`

const Header = ({ toggleTheme }) => {
    return (
        <Navbar>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/products'>Shop</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <button onClick={toggleTheme}>Toggle Dark Mode</button>
        </Navbar>
    );
};

export default Header;