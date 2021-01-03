import { Link } from 'gatsby'
import React, { Fragment } from 'react'

export default () => (
  <Fragment>
    <h1>Home</h1>
    <p>Hello Minnesota!</p>
    <Link to='/about/'>Learn about me &rarr;</Link>
  </Fragment>
)
