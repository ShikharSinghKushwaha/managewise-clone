import React from 'react'
import MsgBox from './MsgBox'
import './Faq.css'
import { useState } from 'react'
function Faq({ questions }) {

  const [ show, setShow] = useState(false);

  function handleShow(index){
   setShow((accor) => (accor === index ? false : index));
  }
  return (
    <div>
       <section id="faq">
         <div className="faq_container">
            <div className="child_question_container">
                <MsgBox text={'🙋‍♀️ FAQ'}/>
                <div className='text'>
                  <h1>Need<br/> <b className='highlight'>Answers?</b></h1>
                  <h3 className='paragraph'>Check out our most commonly asked questions below to<br /> find the information you need.</h3>
                  
                </div>

                <div className='faq_container'>

    <div className="question_container">

      {questions.map ((item,index) => (
          <div key={index} onClick={() => handleShow(index) } style={{color:'white'}} className='question'>

            <span style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>

            <h2>{item.question}</h2>

            <i class="fa-solid fa-plus"></i>
            </span>
           
            {show === index  && <div className='answer'>
               <h2>{item.answer}</h2>
          
              </div>}

          </div>

))}
</div>
         
          </div>
            </div>
         </div>
       </section>
    </div>
  )
}

export default Faq
