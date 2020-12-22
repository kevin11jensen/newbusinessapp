import React from 'react';
import styled from 'styled-components';
import Navigation from './components/nav';
import Hero from './components/hero';

import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';





export default function App() {
  return (
    <div>
    <Navigation />
    <Hero />
    
    <About /> 
    <Services />
    <Contact />

    </div>
    
  );
}

const MainContainer = styled.div `
  font-size: 5rem;
  color: red;
  border-bottom: 5px dotted black;
  font-family: 'Langar', cursive;
`