import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s linear;
  }

  a {
    color: ${({ theme }) => theme.link};
    text-decoration: none;
    margin: 0 1rem;
  }

  a:hover {
    text-decoration: underline;
  }
`;
