import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li`
  margin: 0 1rem;
`;

const A = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00;
  }
`;

const Navbar: React.FC = () => (
  <Nav>
    <Ul>
      <Li><A to="/">Home</A></Li>
      <Li><A to="/about">About</A></Li>
      <Li><A to="/projects">Projects</A></Li>
      <Li><A to="/contact">Contact</A></Li>
    </Ul>
  </Nav>
);

export default Navbar;
