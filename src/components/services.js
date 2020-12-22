import React from 'react';
import styled from 'styled-components';


export default function Services() {
    return (
    <div>
      <ServicesSection id = 'services'>
        <h2>Services</h2>
        <ol>
          <li>Static One Page Site - includes: navigation, hero, about, contact info, footer</li>
          <li>Functional One Page Site - includes: all of the above plus 1 functional component</li>
          <li>Functional Multi-Page Site -
            all of the above plus multiple components and/or pages
          </li>
          
        </ol>
        <p>All sites include SSL Certificate, SEO optimization, and hosting. We offer solutions to businesses problems. Contact us to discuss your specific business needs.</p>
      </ServicesSection>
    </div>
    
  );
}

const ServicesSection = styled.div `


`