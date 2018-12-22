
import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router';

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
          <Link to={`/blog/post/${post.slug}/`}>{post.title}</Link>
        </li>
      ))}
      </ul>
    }
    
  </div>
))
