import React from 'react';

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
