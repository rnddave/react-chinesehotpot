import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = styled.nav`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: inherit;
`;

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <Navbar>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <ThemeToggle onClick={toggleTheme}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </ThemeToggle>
    </Navbar>
  );
};

export default Header;
