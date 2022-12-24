import React from 'react'
import './Footer.css'
import Github from '../../images/github.png'
import Instagram from '../../images/instagram.png'
import LinkedIn from '../../images/linkedin.png'
import Logo from '../../images/logo.png'
const Footer = () => {
  return (
    <>
    <div className="footer-container">
        <hr />
        <div className="footer">
                <div className="social-media">
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={LinkedIn} alt="" />
            </div>
            <div className="logo-f">
                <img src={Logo} alt='' />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer