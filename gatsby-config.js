require('dotenv').config()
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins:[
    {resolve: `gatsby-source-sanity`,
    options: {
      projectId: process.env.SANITY_ID,
      dataset: 'production',
      watchMode: true,
      overlayDrafts: true,
      token: process.env.SANITY_TOKEN

    }  
  }
  ]
}
