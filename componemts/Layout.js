import styled, {css} from 'styled-components'
import React from 'react'

const grid = css`
display: grid;
grid-template-columns: repeat(7,1fr);
grid-template-rows: repeat(5, 20vh);
height: 100%;
`


const Container = styled.div`
${grid}
`
const Main = styled.main`
grid-column: 4 / -1;
grid-row: 2 / -1;
`

const Header = styled.header`
${grid}
border: 1px solid red;
grid-column: 1 / -1;
grid-row: 1 / -1
`
const Address = styled.ol`
color: ${({theme})=> theme.colors.neutrals[1]}
margin: 0;
padding: 0;
grid-column: 2 / span 2;
grid-row-start: 5;
grid-row-end: -1;

list-style: none;
`
const AddressDetails = styled.li`
font-weight: 700;
`

const Name = styled.h1`
font-family: 'IBM Plex Sans';
color: ${({theme})=> theme.colors.pastels[1]};
font-size: 10vw;
font-weight: 700;
padding: 0;
align-self: end;
white-space: nowrap;
grid-column: 2 / -1;
line-height:1;
grid-row: 2;
margin: 0;
`

const Layout = ({children}) => (
    <Container>
        <Header>
            <Name>James Grubb</Name>
            <Address>
                <AddressDetails>12 Wharton road</AddressDetails>
                <AddressDetails>Bromely</AddressDetails>
                <AddressDetails>Kent</AddressDetails>
                <AddressDetails>BR1 3LF</AddressDetails>
                <AddressDetails>0797453650</AddressDetails>                
            </Address>
        </Header>
        <Main>
       {children}
       </Main>
    </Container>
)

export default Layout;
