import React from 'react';
import styled from 'styled-components';
// import { device } from './device'



export default function Services() {
    return (
    <div>
      <ServicesSection id = 'services'>
        <h2>Services</h2>

        <p><span>Static One Page Site</span> - includes: navigation, hero, about, contact info, footer
        </p>
        
        <p><span>Functional One Page Site</span> - includes: all of the above plus 1 functional component
        </p>

        <p><span>Functional Multi-Page Site</span> -
        all of the above plus multiple components and/or pages
        </p>
        <br /> 
        <br />
        <p>All sites include SSL Certificate, SEO optimization, and hosting. We offer solutions to business's problems. Contact us to discuss your specific business needs.</p>
      </ServicesSection>
    </div>
    
  );
}

const ServicesSection = styled.div `
  margin: 3% 0;
  
  h2 {
    font-size: 3.2rem;
    text-align: center;
    color: forestgreen;
  }

  p { 
    margin: 0 6%;
    padding-bottom: 1%;
    span {
      font-weight: 800;
    }
  }

`


