import React from 'react'
import userImg from './Images/S4kVG1FFzSqxr8zOqpvJRfsBad0.png'
import MsgBox from './MsgBox'
import './Cta.css'

function Cta() {
  return (
    <div>
       <section className='cta'>
        <div className='parent-container'>
            <div className='child_container'>
                <MsgBox text={'👋 DONt MISS OUT'} />
                <h1>Unleash your <b className='highlight'>Potential</b> with us</h1>
                <h3 className='paragraph'>Join our community of ambitious individuals and organizations <br/> eager to make a difference.</h3>
      <a href="#"><button className={`get-started purple`}>Try out now</button></a>

          
            <div className='user_container'>
                <img src={userImg} alt="User emojis" className='user-emoji'/>
                </div>
                
        </div>
        </div>

    

       </section>


    </div>
  )
}

export default Cta
