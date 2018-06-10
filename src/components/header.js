import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/notre-projet">Notre projet</Link>
      <Link to="/qui-sommes-nous">Qui sommes nous</Link>
      <Link to="/parrainer-une-famille">Parrainger une famille</Link>
    </nav>
  </header>
)

export default Header
