import React from 'react';
import styled from 'styled-components';


export default function About() {
    return (
    <div>
      <AboutSection id = 'about'>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </AboutSection>
    </div>
    
  );
}

const AboutSection = styled.section `
  margin: 3% 0;
  border-bottom: 3px dashed black;
  h2 {
    font-size: 3.2rem;
    text-align: center;
    color: forestgreen;
  }
  p {
    margin: 0 6%;
    padding-bottom: 1%;
  }

`

