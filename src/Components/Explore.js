import React from 'react'
import './Explore.css'
import MsgBox from './MsgBox'
import connect from'./Images/sQd7MkwgkdQRRQ1a99k5Z1zLfA (2).png'

function Explore() {
    const exploreText = [
        {
            head:'Cross-Platform Compatibility',
            para:'Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.'
        },
        {
            head:'Stay Informed with Essential Notifications',
            para:'Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.'
        },
        {
            head:'Secure Data Encryption at all times',
            para:'Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.'
        }
    ];
  return (
    <div>
       <section aria-label='explore-section' className='explore'>
        <div className='explore_container '>
        <MsgBox text={'🤩 AND MORE...'}/>
        <h1>Explore an array of features that elevate your <b className='highlight'> Productivity</b> to new heights</h1>
        <h3 className='paragraph'>Discover the tools that will revolutionize the way you <br />manage and optimize your operations</h3>
        <div className='explore-text-container'>
        {exploreText.map((item,index) => (
        <div key={index} className="explore-info">
            <h2>{item.head}</h2>
            <p className='paragraph'>{item.para}</p>
        </div>
        ))}
        </div>
        </div>
        <div className='integrations'>
            <MsgBox text={'🛠 INTEGRATIONS'} />
            <h1>Enable<b className='highlight'> integration</b> with other popular tools and platforms</h1>
            <h3 className='paragraph'>Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.</h3>
            <img className="connect" alt="Connect Pic" src={connect} />
        </div>
        </section>

    </div>
  )
}

export default Explore
