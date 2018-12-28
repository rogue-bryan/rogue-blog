
import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ posts }) => (
  <div>
    <h2>It's blog time.</h2>
    <br />
    All Posts:
    {!posts ? 
      <p>no posts</p> : 
      <ul>
      {posts.map(post => (
        <li key={post.slug}>
          <Link to={post.date ? `/blog/post/${post.date}/${post.slug}/` : `/blog/post/${post.slug}/`}>{post.title}</Link>
        </li>
      ))}
      </ul>
    }
    
  </div>
))
