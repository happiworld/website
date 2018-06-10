const CONSTANTS = require('./constants')

Object.keys(CONSTANTS).forEach(key => (process.env[key] = CONSTANTS[key]))

module.exports = {
  siteMetadata: {
    title: 'Happi'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-120636712-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        // anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        query: `{
          allFamilleEclairees {
            id
            nom
            village
            photo {
              handle
              url
            }
            texte
            paiement {
              nom
              dateTime
            }
          }
          allProduits {
            id
            nom
            montant
            devise
            description
            photo {
              handle
              url
            }
          }
        }`,
      },
    }
  ],
}
