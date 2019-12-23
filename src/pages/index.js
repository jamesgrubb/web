import React from "react"
import theme from '../../theme'
import {ThemeProvider} from 'styled-components'
import Layout from '../../componemts/Layout'
import GlobalStyles from "../../GlobalStyles"
import Test from '../../componemts/Tests';
// import {graphql} from 'gatsby'

export default () => {
    
    return(
   <ThemeProvider theme={theme}>
   <>
   <GlobalStyles/>
    <Layout>
      
    <Test />
    </Layout>
</>
</ThemeProvider>
)}

// export const query = graphql`
// query PageQuery {
//     allSanityPost {
//       edges {
//         node {
//           id
//         }
//       }
//     }
//   }
// `
