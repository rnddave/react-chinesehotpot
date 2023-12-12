import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  color: rgb(217, 28, 28);
`;


export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  height: 53pt;
  width: 300pt;
  @media (max-width: 500px) {
    height: 50pt;
    width: 150pt;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: rgb(217, 28, 28);
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: rgb(217, 28, 28);
`;


