import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  // <header>
  //   <h1>
  //     <Link to="/">{siteTitle}</Link>
  //   </h1>
  //   <nav>
  //     <Link to="/">Home</Link>
  //     <Link to="/notre-projet">Notre projet</Link>
  //     <Link to="/qui-sommes-nous">Qui sommes nous</Link>
  //     <Link to="/parrainer-une-famille">Parrainger une famille</Link>
  //   </nav>
  // </header>
  <header role="banner">
    {/* <div className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-9 social">
            <a href="#"><span className="fa fa-twitter"></span></a>
            <a href="#"><span className="fa fa-facebook"></span></a>
            <a href="#"><span className="fa fa-instagram"></span></a>
            <a href="#"><span className="fa fa-youtube-play"></span></a>
            <a href="#"><span className="fa fa-vimeo"></span></a>
            <a href="#"><span className="fa fa-snapchat"></span></a>
          </div>
        </div>
      </div>
    </div> */}

    <div className="container logo-wrap">
      <div className="row pt-5">
        <div className="col-12 text-center">
          <a className="absolute-toggle d-block d-md-none" data-toggle="collapse" href="#navbarMenu" role="button" aria-expanded="false" aria-controls="navbarMenu"><span className="burger-lines"></span></a>
          <h1 className="site-logo">
            <Link to="/">{siteTitle}</Link>
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
              <Link to="/parrainer-une-famille" className="nav-link" activeClassName="active">Parrainger une famille</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
