import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const Test = () => (

  <StaticQuery
  query={graphql`
  query MyQuery {
    allSanityPost {
      edges {
        node {
          posting {
            name
          }
        }
      }
    }
  }
`}
    
    render={data => (
      <div>
        {data.allSanityPost.edges.map(node => (<p>{node.posting.name}</p>))}        
      </div>
    )}
  />

)
  
    


export default Test