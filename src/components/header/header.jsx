import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/aboutme.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Anita Sah</h1>
        <h5 className="text-light">PGDM - IT Analytics & Research, Finance</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="MyPic" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

        
      </div>
    </header>
  )
}

export default Header
