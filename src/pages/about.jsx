import React, { Fragment } from 'react'
import { Link } from 'gatsby'

const About = () => (
  <Fragment>
    <h1>About Me</h1>
    <p>This is my personal website/blog.</p>
    <Link to='/'>&larr; Back to Home</Link>
  </Fragment>
)

export default About
