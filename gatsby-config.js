module.exports = {
  siteMetadata: {
    title: `Gatsby Workshop | FEM`,
    description: 'A site built based on the Frontend Masters Introduction to Gatsby tutorial.',
    author: `bqanderson`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.jsx'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
  ],
}
