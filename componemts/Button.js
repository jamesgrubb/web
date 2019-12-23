import styled from 'styled-components'
import React from 'react'
import { color, space, fontSize, compose } from 'styled-system'

const Button = styled.button`
appearance: 'button';
border: 0;
outline: 0;
${compose(color, space, fontSize)}
`

export default Button

Button.defaultProps= {
    px: 1,
    py: 0,
    fontSize: 6
}