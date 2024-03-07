import React from 'react'
//import  favicon  from './Images/MwRbsJrk7ItYxeL7mKvPzrq3g.png'
import brand from './Images/tgELERqZ0nObn14bTi418qTbg (1).png'


import './Navbar.css'
function Navbar() {
  return (
    <div>
      <header>
        <nav>
            <div className='navbar_container'>
              <div className='link_container'>
              <img src={ brand } alt='Logo' className='logo'/>
       
 
              <ul className='links'>
                <li><a href="#features">Features</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#" className='template_btn'>Buy Template</a></li>
                
              </ul>
              </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
