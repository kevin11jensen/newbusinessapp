import React from 'react';
import styled from 'styled-components';
// import { device } from './device'



export default function Services() {
    return (
    <div>
      <ServicesSection id = 'services'>
        <h2>Services</h2>

        <p>Static One Page Site - includes: navigation, hero, about, contact info, footer
        </p>
        
        <p>Functional One Page Site - includes: all of the above plus 1 functional component
        </p>

        <p>Functional Multi-Page Site -
        all of the above plus multiple components and/or pages
        </p>
          
        
        <p>All sites include SSL Certificate, SEO optimization, and hosting. We offer solutions to business's problems. Contact us to discuss your specific business needs.</p>
      </ServicesSection>
    </div>
    
  );
}

const ServicesSection = styled.div `
  margin-bottom: 3%;
  border-bottom: 3px dashed black;
  h2 {
    font-size: 3.2rem;
    text-align: center;
  }

  p { 
    margin: 3% 1%;
    
  }

`


