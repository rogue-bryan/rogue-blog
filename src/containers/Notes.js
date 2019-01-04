import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ posts }) => {
    if (posts && posts.length) {
        return (
            <div className="note">
                <h3>Recent Posts</h3>
                <ul>
                {posts.map(post => (
                    <li key={post.slug}>
                        <Link to={post.date ? `/blog/${post.date}/${post.slug}/` : `/blog/${post.slug}/`}>{post.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
        )
    } else {
        return null
    }
})
