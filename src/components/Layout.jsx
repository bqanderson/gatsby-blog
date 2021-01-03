import React, { Fragment } from 'react'
import { Global, css } from '@emotion/react'
import Helmet from 'react-helmet'
import Header from './Header'
import useSiteMetadata from '../hooks/useSiteMetadata'

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  
  return (
    <Fragment>
      <Global 
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          /* === More info: https://bit.ly/2PsCnzk === */
          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
                'Segoe UI Symbol';
            font-size: 18px;
            line-height: 1.4;

            /* === Remove margin for the div that Gatsby mounts into === */
            > div {
              margin-top: 0;
            }
          }

          main {
            margin: 2rem auto;
            max-width: 550px;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          a {
            text-decoration: none;
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main>{children}</main>
    </Fragment>
  )
}

export default Layout
