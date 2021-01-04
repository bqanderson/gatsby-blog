import React from 'react'
import Layout from '../components/Layout'
import usePosts from '../hooks/usePosts'
import PostPreview from '../components/PostPreview'
import ReadLink from '../components/ReadLink'

export default () => {
  const posts = usePosts()
  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello Minnesota!</p>
      <ReadLink to='/about/'>Learn about me &rarr;</ReadLink>
      <h2>Read My Blog</h2>
      {posts.map(post => (
        <PostPreview post={post} key={post.slug} />
      ))}
    </Layout>
  )
}
