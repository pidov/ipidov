/* @flow */
import React from 'react'
import classes from './BlogPosts.scss'

// FlowType annotations
type Props = {
  posts: array
}

export const BlogPosts = (props: Props) => (
  <section>
    <h1> Blog </h1>
    {props.posts.map(post =>
      <article key={post.title}>
        <h1>
          <a href="#">{post.title}</a>
        </h1>
        <p>{post.body}</p>
      </article>
    )}
  </section>
)

BlogPosts.propTypes = {
  posts: React.PropTypes.array.isRequired
}

export default BlogPosts
