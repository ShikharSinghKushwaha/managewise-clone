import React from 'react'
//import  favicon  from './Images/MwRbsJrk7ItYxeL7mKvPzrq3g.png'
import brand from './Images/tgELERqZ0nObn14bTi418qTbg (1).png'
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';

import  {useState}  from 'react'
import './Navbar.css'

function Navbar() {
  const [ open, setOpen ] = useState(false)
  
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <div>
      <header>
        <nav>
            <div className='navbar_container'>
              <div className='link_container'>
              <img src={ brand } alt='Logo' className='logo'/>
            
              <ul className='links hide_small'>
              
              <li><a href="#features">Features</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#" className='template_btn' style={{color:'black'}}>Buy Template</a></li>
              
            </ul>
            {open && <div className="responsive_container">   
               <ul className='links'>
              
                <li><a href="#features">Features</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#" className='template_btn' style={{color:'black'}}>Buy Template</a></li>
                
              </ul>
              </div>}
              </div>
          </div>

        </nav>
      </header>
      <button id="openBtn" onClick={handleOpen} >{open ? "Close":"Menu"}</button>

    </div>
  )
}

export default Navbar
