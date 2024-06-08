import React from 'react'

const PrevDescription = ({description}) => {

  return (
    <div style={{boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    backgroundColor:"white",
    width: '700px',
    height: '600px',
    display: 'flex',
    justifyContent: 'left',
    alignItems:"baseline",
    margin: '20px',
    borderRadius: '10px'
    }}>
    <div style={{fontSize:"20px"}}>
      <ul>
        {description?.map((des,idx) => (
            <li key={idx}>{des.prescription}</li>
        ))}
      </ul>
        
    </div>
    <p>.</p>
    </div>
  )
}

export default PrevDescription;