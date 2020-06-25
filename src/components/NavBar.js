import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom'
import styled from "styled-components";
// import { ProductConsumer } from "../context";
import logo from "../data/logo.svg";

export default function NavBar() {
    return (
      <NavWrapper>
        <div className="nav-center">
          <FaBars className="nav-icon"/>
          <li><Link to=""><img src={logo} alt="company logo"/></Link></li>
          <div className="nav-cart">
              <li><Link to="/cart"><FaCartPlus className="nav-icon"/></Link></li>
          </div>
        </div>
      </NavWrapper>
    );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 95%;
  padding: 1rem 2.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;