import React from 'react';
import styled from 'styled-components';
import { device } from './device'

export default function Contact() {
    return (
    <div>
      <ContactSection id = 'contact'>
        <h2>Contact Us</h2>

        <div className = 'phone'>
          <i className = "fas fa-phone"></i>
          <p>555-555-5555</p>
        </div>
        <div className = 'email'>
          <a href = 'mailto: newbusiness@gmail.com'>
          <i className="far fa-envelope-open"></i>

          <p>newbusiness@gmail.com</p>
          </a>
        </div>
        <div className = 'social'>
          <a href = 'https://www.instagram.com/'>
          <i  className="fab fa-instagram-square"></i>
          </a>
          <a href = 'https://www.facebook.com/'>
          <i className="fab fa-facebook"></i>
          </a>
          <a href = 'https://twitter.com/'>
          <i className="fab fa-twitter"></i>
          </a>
        </div>
      </ContactSection>
    </div>
    
  );
}

const ContactSection = styled.section `
  padding: 3% 1%;
  color: forestgreen;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-around;
  h2 {
    font-size: 3.2rem;
    text-align: center;
    
  }
  
  .phone {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2%;
    i {
      font-size: 1.6rem;
      margin-right: .5rem;
    }
  }
  .email {
    
    padding: 1%;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: forestgreen;
      i {
        font-size: 1.6rem;
        margin-right: .5rem;
      }
    }
    
  }
  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1% 1%;
    a {
      color: forestgreen;
      i {
        font-size: 3.6rem;
        padding: 3rem;
        @media ${device.mobileL} {
          font-size: 2.4rem;
        }
      }
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