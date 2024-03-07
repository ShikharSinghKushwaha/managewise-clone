import React from 'react'
import MsgBox from './MsgBox'
import './Pricing.css'
import './Feature.css'
function Pricing() {
    const priceData = [
        {
            comp:<MsgBox text={'Free'} />,
            price:'$0/month',
            benefit1:'Access to all basic features',
            benefit2:'Reporting and analytics',
            benefit3:'Up to 5 individual users',
            benefit4:'Chat and email support',
            className:true
        },
        {
        comp:<MsgBox text={'STANDARD'} />,
        price:'$25/month',
        benefit1:'Access to all Medium features',
        benefit2:'Reporting and analytics',
        benefit3:'Up to 5 individual users',
        benefit4:'Chat and email support',
        className:false
    },
    {
        comp:<MsgBox text={'BUSINESS'} />,
        price:'$45/month',
        benefit1:'Access to all basic features',
        benefit2:'Reporting and analytics',
        benefit3:'Up to 5 individual users',
        benefit4:'Chat and email support',
        className:true
    },
    ];
  return (
    <div>
      <section>
        <div className='pricing_container'>
            <div className='pricing-header'>
             
        <MsgBox text={'💲 PRICING'}/>
         <h1 >Select your ideal <b className='highlight'>Pricing</b> plan</h1>
         <h3 className='paragraph'>At Manage Wise, we believe in providing you with <br/>pricing plans that adapt to your unique needs.</h3>
        </div>
        <div className='plans_container'>
            <div className='plan free'>
                </div>
        </div>
      
        {/* map through the plans array */}
        {priceData.map((item,index) => (
            <div key={index} className={`more_price ${item.className == true ? 'first':'second'}`}>
             <span className='highlight'>
             {item.comp}
             </span>
             <div className='price'>
             <h1>{item.price}</h1>
</div>
<div >
             <p className='paragraph'><span style={{color:'green'}}>&#10004;</span> {item.benefit1}</p><br/>
             <p className='paragraph'><span style={{color:'green'}}>&#10004;</span> {item.benefit2}</p><br/><p className='paragraph'><span style={{color:'green'}}>&#10004;</span> {item.benefit3}</p><br/>
             <p className='paragraph'><span style={{color:'green'}}>&#10004;</span> {item.benefit4}</p><br/>

      </div>
      <a href="#"><button className={`get-started ${item.className ? 'white': 'purple'}`}>Get Started</button></a>
             </div>
        ))}
        </div>
      </section>
    </div>
  )
}

export default Pricing;
