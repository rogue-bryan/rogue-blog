
import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ posts }) => (
  <div>
    <h3>It's blog time.</h3>
    <br />
    All Posts:
    {!posts ? 
      <p>no posts</p> : 
      <ul>
      {posts.map(post => (
        <li key={post.slug}>
          <Link to={post.date ? `/blog/${post.date}/${post.slug}/` : `/blog/${post.slug}/`}>{post.title}</Link>
        </li>
      ))}
      </ul>
    }
    
  </div>
))
