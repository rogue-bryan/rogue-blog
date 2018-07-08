import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ posts }) => {
    if (posts) {
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
