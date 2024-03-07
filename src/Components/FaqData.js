import React from 'react'
import Faq from './Faq'
// import './Faq.css'
function FaqData() {
    const faqQuestion = [
        {
           question:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?',
           answer:'Ltempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            question:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?',
            answer:'Ltempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'
         },
         {
            question:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?',
            answer:'Ltempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
         },
         {
            question:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed?',
            answer:'Ltempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoeniam, quis nostrud.'
         },
         {
            question:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?',
            answer:'Ltempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'
         },
    ];
  return (
    <div>
        <Faq  questions={faqQuestion} />
    </div>
  )
}

export default FaqData
