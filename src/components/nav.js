import React from 'react';
import styled from 'styled-components';
import { device } from './device'



export default function Navigation() {
    return (
    <Nav>
      <a href = '#home'>
        <h3>Divine Web Design</h3>
      </a>
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
a {

  h3 {
    font-family: 'Peralta', cursive;
    color: forestgreen;
    font-size: 2.4rem;
    @media ${device.tabletL} {
      font-size: 2rem;
    }
    @media ${device.tablet} {
      font-size: 1.6rem;
    }
    @media ${device.mobileL} {
      font-size: 1.2rem;
    }
    @media ${device.mobile} {
      font-size: 1rem;
    }
    &:hover {
      color: lime;
      scale: 1.2;
    }
  }
}

div {
  width: 45%;
  display: flex;
  justify-content: space-around;
  a {
    color: forestgreen;
    font-size: 1.6rem;
    
    @media ${device.tablet} {
      font-size: 1.2rem;
    }
    @media ${device.mobileL} {
      display: none;
    }
    &:hover {
      color: lime;
      scale: 1.2;
      
    }
  }
}
`


