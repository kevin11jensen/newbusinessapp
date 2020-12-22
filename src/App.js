import React from 'react';

import Navigation from './components/nav';
import Hero from './components/hero';

import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';

import Footer from './components/footer'





export default function App() {
  return (
    <div id = 'home'>
    <Navigation />
    <Hero />
    
    <About /> 
    <Services />
    <Contact />
    <Footer />
    </div>
    
  );
}
