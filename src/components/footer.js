import React from 'react'
import styled from 'styled-components'


export default function Footer() {

    return (
        <div>
            <Foot>
                <p>&copy; Divine Design 2021</p>
            </Foot>
        </div>
    )
}

const Foot = styled.footer `
    background: forestgreen;
    color: white;
    text-align: center;
    padding: 3%;
`