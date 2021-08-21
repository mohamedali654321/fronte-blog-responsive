import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const COLORS = {

  primaryDark: "#f2f4ff",
  primaryLight: "#fff",

  
 
};

const MenuLabel = styled.label`
background-color: transparent;
  position: relative;
  top: -1.4rem;
  right: 6rem;
 
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

const NavBackground = styled.div`
  position: fixed;
  top: 2.5rem;
  right: 0rem;
  background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
  );
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked  ? "transparent" : "#8D1CB8")};
  width: 1.7rem;
  height: 3px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;
  z-index: 10000;
  top: -.9rem;
  left: -.3rem;
  
 

  &::before,
  &::after {
    content: "";
    background-color:#8D1CB8 ;
    width: 1.7rem;
    height: 3px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};

    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 10px;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};

  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  width: 100%;
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 300;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1rem 2rem;

  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;





  
`;

function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink className="cool"  onClick={handleClick} to="/">
              Home
            </ItemLink>
          </li>
          <li>
            <ItemLink className="cool"  onClick={handleClick} to="/Products">
            Products
            </ItemLink>
          </li>
          <li>
            <ItemLink className="cool"  onClick={handleClick} to="/Services">
            Services
            </ItemLink>
          </li>
          <li>
            <ItemLink className="cool"  onClick={handleClick} to="/blog">
              Blog
            </ItemLink>
          </li>
          <li>
            <ItemLink className="cool" onClick={handleClick} to="//sys-solutions">
            Sys & Solutions
            </ItemLink>
          </li>
          <li>
            <ItemLink className="cool"  onClick={handleClick} to="/our-partners">
            Our-Parteners
            </ItemLink>
          </li>
          <li>
            <ItemLink className="cool"  onClick={handleClick} to="/our-clients">
            Our-Clients
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
}

export default HamburgerMenu;
