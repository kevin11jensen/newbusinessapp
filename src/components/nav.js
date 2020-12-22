import React from 'react';
import styled from 'styled-components';


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
div {
  width: 45%;
  display: flex;
  justify-content: space-around;
  
}
`