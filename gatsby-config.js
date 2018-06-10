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
        head: false
      }
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
        }`
      }
    }
  ],
}
