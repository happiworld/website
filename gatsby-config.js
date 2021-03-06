const pkg = require('./package.json')

const {
  GRAPHCMS_ENDPOINT,
  GRAPHCMS_TOKEN,
  TRACKING_ID
} = require('./config.server')


module.exports = {
  siteMetadata: {
    title: 'Happi',
    description: pkg.description,
    keywords: pkg.keywords.join(', ')
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          favicons: true,
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          firefox: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
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
            details
            photo {
              handle
              url
            }
          }
          allStaffs {
            id
            nom
            role
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
