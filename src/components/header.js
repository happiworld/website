import React from 'react'
import Link from 'gatsby-link'

import HappiLogo from '../assets/images/happi-logo.png'

const Header = ({ siteTitle }) => (
  <header className="site-header" role="banner">
    <div className="container logo-wrap">
      <div className="row pt-5">
        <div className="col-12 text-center">
          <a className="absolute-toggle d-block d-md-none" data-toggle="collapse" href="#navbarMenu" role="button" aria-expanded="false" aria-controls="navbarMenu"><span className="burger-lines"></span></a>
          <h1 className="site-logo">
            <Link to="/">
              <img alt={siteTitle} src={HappiLogo} />
            </Link>
          </h1>
          
        </div>
      </div>
    </div>
    {/* projet-phase-1
    projet-phase-2 */}
    <nav className="navbar navbar-expand-md  navbar-light bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link exact to="/" className="nav-link" activeClassName="active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/notre-projet" className="nav-link" activeClassName="active">Notre projet</Link>
            </li>
            <li className="nav-item">
              <Link to="/qui-sommes-nous" className="nav-link" activeClassName="active">Qui sommes nous</Link>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <Link to="/parrainer-une-famille" className="primary-btn" activeClassName="active">Parrainer une famille</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
