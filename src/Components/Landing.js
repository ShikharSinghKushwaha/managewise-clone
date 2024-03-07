import React from 'react'
import MsgBox from './MsgBox';
import './Landing.css'
import heroimage from './Images/t9qCSNfZSNdBCMSiohCGNEIl4 (2).jpg'
function Landing() {
  return (
    <div>
        <section>
        <div className="landing_container">
            <div className="children_container">
        <MsgBox text={'👋 Welcome to Manage Wise'}/>
        <div className='landing_text'>
        <h1 >Empower Your Business with <b className='highlight'>Strategic</b> Insights </h1>
        <h3 className='paragraph'>Powerful management platform designed to streamline your business <br />Landing.operations, boost productivity, and drive success</h3>

        <div className='btn-container'>
            <a href="#"><button className="get-started purple">Get Started</button></a>
            <a href="#"><button className="get-started white">Watch Demo</button></a>

        </div>
        </div>
        <div className='image-container'>
            <img src={heroimage} />
        </div>
        </div>
        </div>
        </section>
    </div>
  )
}

export default Landing
