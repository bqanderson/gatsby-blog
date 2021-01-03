import React, { Fragment } from 'react'
import { Global, css } from '@emotion/react'
import Header from './Header'

const Layout = ({ children }) => (
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

        strong {
          color: #222;
        }

        li {
          margin-top: 0.25rem;
        }
      `}
    />
    <Header />
    <main>{children}</main>
  </Fragment>
)

export default Layout
