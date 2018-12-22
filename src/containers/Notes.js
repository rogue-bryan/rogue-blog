import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router';

export default withRouteData(({ posts }) => {
    if (posts && posts.length) {
        return (
            <div className="note">
                <h2>Recent Posts</h2>
                <ul>
                {posts.map(post => (
                    <li key={post.slug}>
                        <Link to={`/blog/post/${post.slug}/`}>{post.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
        )
    } else {
        return null
    }
})
