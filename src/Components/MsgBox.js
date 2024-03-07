import React from 'react'

function MsgBox({ text }) {
    let styleMsg = {
        color:'rgb(130,71,255)',
        backgroundColor:'white',
        padding:'4px',
        width:'auto',
        border:'1px solid gray',
        display: 'inline-block',
        fontSize:'14px',
        textTransform:'uppercase',
        // height:'20px',
        textAlign:'center',
        borderRadius:'5px',
  
    }
  return (
    <div>
      
        <h4 style={styleMsg}>{text}</h4>
     
    </div>
  )
}

export default MsgBox
