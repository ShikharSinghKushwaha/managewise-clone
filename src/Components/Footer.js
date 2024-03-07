import React from 'react'
import brand from './Images/tgELERqZ0nObn14bTi418qTbg (1).png'
import  './Footer.css'
function Footer() {
  return (
    <div>
      <footer className='footer_container'>
        <div className='footer'>
            <div className='footer_items'>
                <img src={brand} className='logo'/>
                
            </div>
            {/* <div className='footer_link'> */}
                    <ul className='footer-link'>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#faq">Faq</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#testimonial">Testimonial</a></li>

                    </ul>
                {/* </div> */}
        </div>
      </footer>
    </div>
  )
}

export default Footer
