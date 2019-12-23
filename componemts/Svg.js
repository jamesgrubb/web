import React from 'react'
import styled from 'styled-components'


const LetterJ = styled.svg.attrs({
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 50 100'
})`
width: 20vw;
fill: red;
z-index: 2
`

export const J = () => (
    <LetterJ>
        <circle cx="0" cy="0" r="100" />
    </LetterJ>
)

export default J