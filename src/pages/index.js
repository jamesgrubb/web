import React from "react"
import theme from '../../theme'
import {ThemeProvider} from 'styled-components'
import Layout from '../components/Layout'
import GlobalStyles from "../../GlobalStyles"
import Test from '../components/Tests';
// import {graphql} from 'gatsby'
import MakePDF from '../components/MakePDF'
export default () => {
    
const makePdf = (e) => {
  e.preventDefault();
  
  
  const pageToScreenshot = "http://localhost:8000"
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ pageToScreenshot: pageToScreenshot })
};
fetch("/.netlify/functions/take-screenshot", options)
.then((res) => res.json())
.then((res) => {
    
    if (!res.pdf) return ;

    // const img = document.createElement('img');
    // img.src = bufferToImageUrl(res.buffer.data);
    // document.getElementById('result').innerHTML = img.outerHTML;
})
.catch((err) => {
    console.log(err)
});
}
    return(
   <ThemeProvider theme={theme}>
   <>
   <GlobalStyles/>
   <button handleClick={makePdf}>makePDF</button>
    <Layout >
      
    
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
