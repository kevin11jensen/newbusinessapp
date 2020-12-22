import React from 'react';
import styled from 'styled-components';
import { device } from './device'



export default function Navigation() {
    return (
    <Nav>
      <h3>Divine Web Design</h3>
      <div>
        <a href = '#about'>About</a>
        <a href = '#services'>Services</a>
        <a href = '#contact'>Contact</a>
      </div>
    </Nav>
    
  );
}

const Nav = styled.nav `

display: flex;
justify-content: space-around;
align-items: center;
padding: 2%;
h3 {
  font-size: 2.4rem;
  @media ${device.mobileL} {
    font-size: 1.6rem;
  }
  @media ${device.mobile} {
    font-size: 1rem;
  }
}
div {
  width: 45%;
  display: flex;
  justify-content: space-around;
  a {
    font-size: 1.6rem;
    @media ${device.mobileL} {
      display: none;
    }
  }
}
`


