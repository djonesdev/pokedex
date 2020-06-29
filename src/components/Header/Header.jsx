import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const LinkContainer = styled.div`
  background: #FF0000;
  text-align: center; 
  border-radius: 5px; 
  margin: 5px;
  padding: 10px; 
`

const StyledNavLink = styled(NavLink)`
  margin: 10%;
  color: black;
  :hover {
    color: white;
    text-decoration: none;
  }
`


function Header() {
  return (
    <LinkContainer>
      <StyledNavLink exact activeClassName="active" to="/">Home</StyledNavLink>
      <StyledNavLink activeClassName="active" to="/favourites">Favourites</StyledNavLink>
      <StyledNavLink activeClassName="active" to="/compare">Compare</StyledNavLink>
    </LinkContainer>
  );
}

export default Header;