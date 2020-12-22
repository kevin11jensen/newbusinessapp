import React from 'react';
import styled from 'styled-components';
import mthood from '../images/mthood.jpg';
import stjohns from '../images/stjohnsbridge.jpg';
import vertical from '../images/portlandVertical.jpg';


export default function Hero() {
    return (
        <HeroContainer>
            
            <img src = {vertical} alt = 'portland vertical sign'/>
            <img src = {stjohns} alt = 'st johns bridge'/>
            <img src = {mthood} alt = 'mt hood'/>

        </HeroContainer>
    )
}

const HeroContainer = styled.div  `

    display: flex;
    justify-content: space-between;

    img {
        width: 33%;
        

    }
`