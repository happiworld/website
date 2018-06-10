import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer';

import './index.css'

const Layout = ({ children, siteTitle }) => (
  <main
    style={{
      margin: '0 auto',
      maxWidth: '960px',
      padding: '0px 1.0875rem 1.45rem'
    }}
  >
    <Helmet
      title={siteTitle}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={siteTitle} />
    <div>
      {children()}
    </div>
    <Footer />
  </main>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
