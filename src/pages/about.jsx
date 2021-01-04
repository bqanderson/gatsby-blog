import React from 'react'
import Layout from '../components/Layout'
import ReadLink from '../components/ReadLink'

const About = () => (
  <Layout>
    <h1>About Me</h1>
    <p>This is my personal website/blog.</p>
    <ReadLink to='/'>&larr; Back to Home</ReadLink>
  </Layout>
)

export default About
