const {
  GRAPHCMS_ENDPOINT,
  GRAPHCMS_TOKEN,
  TRACKING_ID
} = require('./config.server')

module.exports = {
  siteMetadata: {
    title: 'Happi'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: TRACKING_ID,
        head: false
      }
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: GRAPHCMS_ENDPOINT,
        token: GRAPHCMS_TOKEN,
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
