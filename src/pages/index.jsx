import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import usePosts from '../hooks/usePosts'
import PostPreview from '../components/PostPreview'

export default () => {
  const posts = usePosts()
  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello Minnesota!</p>
      <Link to='/about/'>Learn about me &rarr;</Link>
      <h2>Read My Blog</h2>
      {posts.map(post => (
        <PostPreview post={post} key={post.slug} />
      ))}
    </Layout>
  )
}
