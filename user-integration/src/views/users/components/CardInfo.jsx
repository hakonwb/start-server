import React from 'react'
import userImage from '../../../assets/userImage.svg'

const CardInfo = ({user}) => {
  return (
    <div style={{
        width: '680px',
        height: '320px',
        background: "linear-gradient(240deg, rgba(91,108,232,1) 41%, rgba(164,138,240,1) 71%)",
        boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        padding: '10px',
        margin: '20px',
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }}
    >
        <img src={userImage} width={60} height={60} alt='avatar'/>
        <p style={{fontSize:"25px", color: 'white'}}>Name: {user.name}</p>
        <p style={{fontSize:"25px", color: 'white'}}>Email: {user.email}</p>
        <p style={{fontSize:"25px", color: 'white'}}>Age: {user.age}</p>
    </div>
  )
}

export default CardInfo