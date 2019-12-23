import React from 'react'
import {graphql, useStaticQuery} from 'gatsby';
import styled from 'styled-components'


const StyledPosts = styled.ul`

`

const StyledPost = styled.article`


`

const Company = styled.h2`
font-size: 0.8rem;

`

const Post = () => {

    const data = useStaticQuery(graphql`
    query MyQuery {
      allSanityPost {
        edges {
          node {
            id
          }
        }
      }
    }
`)
console.log(data)
    return(
        data.nodes.map(node => (
<li key={node.posting._id}>{node.posting.name} {node.from}{node.to}{node.clients[0].name}</li>
        ))
    )
}

export default Post