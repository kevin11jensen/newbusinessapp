import React from 'react';
import styled from 'styled-components';


export default function Contact() {
    return (
    <div>
      <ContactSection id = 'contact'>
        <h2>Contact Us</h2>

        <div className = 'phone'>
          <i class="fas fa-phone"></i>
          <p>555-555-5555</p>
        </div>
        <div className = 'email'>
          <i class="far fa-envelope-open"></i>

          <p>newbusiness@gmail.com</p>
        </div>
        <div className = 'social'>
          <i class="fab fa-instagram-square"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </ContactSection>
    </div>
    
  );
}

const ContactSection = styled.section `
  margin: 3% 1%;
  h2 {
    font-size: 3.2rem;
    text-align: center;
  }
  .phone {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3%;
    i {
      font-size: 1.6rem;
      margin-right: .5rem;
    }
  }
  .email {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3%;
    
    i {
      font-size: 1.6rem;
      margin-right: .5rem;
    }
  }
  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3% 1%;
    i {
      font-size: 2.4rem;
      padding: 3rem;
    }
  }
`

// h1 {
//   font-size: 4.6rem;
// }
// h2 {
//   font-size: 3.2rem;
//   text-align: center;
// }
// h3 {
//   font-size: 2.4rem;
// }