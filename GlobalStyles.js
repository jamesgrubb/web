import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

@import url('http://fonts.googleapis.com/css?family=IBM+PLEX+SANS:400,700&display=swap');
html,body{
    margin:0;
    padding:0;
    height: 100%;
    background: ${({theme}) => theme.colors.background};
    font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
}
#___gatsby,#gatsby-focus-wrapper{
    height: 100%
}
`

export default GlobalStyles