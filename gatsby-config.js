'use strict'

module.exports = {
  siteMetadata: {
    title: 'Bryan Lim',
    description: 'Personal Website for Bryan Lim',
    keywords: 'gatsbyjs, gatsby, javascript, sample, something',
    siteUrl: 'bryanlim.me',
    author: {
      name: 'Bryan Lim',
      url: 'bryanlim.me',
      email: 'bryanjlim@outlook.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
