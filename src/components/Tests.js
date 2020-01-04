import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Badge from "./Badge"
const Test = () => (

  <StaticQuery
  query={graphql`
  query Posting {
    allSanityPost {
      nodes {
        posting {
          name
        }
        role {
          role
        }
      }
    }
  }
  
`}
    
    render={data => (
      <div>
        
        {data.allSanityPost.nodes.map(node => {
          function role(){
            if(node.role.role === "Acting Head Of Art"){
              return "HA"
            }else if(node.role.role === "Head Of Art"){
              return "HA"
            }
          }
          return (
            <>
            <p>{node.posting.name}</p>
        <Badge role={role()} />
        </>)
        })}        
        
      </div>
    )}
  />

)
  
    


export default Test