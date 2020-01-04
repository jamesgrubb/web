import React from "react"
import theme from '../../theme'
import {ThemeProvider} from 'styled-components'
import Layout from '../components/Layout'
import GlobalStyles from "../../GlobalStyles"
import Test from '../components/Tests';
// import {graphql} from 'gatsby'
import MakePDF from '../components/MakePDF'
export default () => {
    

    return(
   <ThemeProvider theme={theme}>
   <>
   <GlobalStyles/>
    <Layout >
      <MakePDF />
    
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
