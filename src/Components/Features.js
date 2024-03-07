import React from 'react'
import MsgBox from './MsgBox'
import './Feature.css'
import first from './Images/qJeaFhSmQ29M1S55GRW5kYb4.png'
import second from './Images/LFrHT3kBfxtMGAZfWkyLvYAKsbg (1).png'
import third from './Images/p65qwfjd0cd0ZHZoNFpsh7XU.png'
import fourth from './Images/FaY6aekE67ytWg6HDfDpy2FaHY (2).png'
function Features() {
    const feature_data = [
        {
            image:first,
            head:'Smart Task Mangement',
            para:'Say goodbye to chaos with our smart task management system'
        },
        {
            image:second,
            head:'Flexible Scheduling',
            para:'Stay productive with our flexible scheduling system'
        },
        {
            image:third,
            head:'Easy Communication',
            para:'Collaborate seamlessly with your team in real-time'
        },

        {
            image:fourth,
            head:'Analytics',
            para:'Gain valuable insights with our advanced analytics feature'
        },
    ];
  return (
    <div>
      <section aria-label='features' id="features">
        <div className="feature_container">
        <div className="feature_header">
           <MsgBox text={'🔥 PREMIER FEATURES'}/>
           <h1>Discover our Product's <b className='highlight'>Capability</b></h1>
           <h3 className='paragraph'>Don't settle for mediocrity - embrace the future of management<br /> with Manage Wise.</h3>
           <div className="mission first_box">
             <div className="start">
                <p>⭐️</p>
             </div>
             <h3>Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.</h3>
           </div>
        </div>
        {feature_data.map((item,index) => (
             <div className="more_feature" key={index}> 
             <div className="image_container">
                <img src={item.image} />
             </div>
             <div className="text_contain">
             <h2>{item.head}</h2><br/>
             <h3 className='paragraph'>{item.para}</h3>
             </div>
           </div>
        ))}
        </div>
      </section>
    </div>
  )
}

export default Features
