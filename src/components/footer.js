import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ siteTitle }) => (
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12 footer-social mb-2">
          <a href="#"><span className="fa fa-facebook"></span> Facebook</a>
          <a href="#"><span className="fa fa-instagram"></span> Instagram</a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
