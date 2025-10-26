import React from 'react'
import './UserCard.css'
const UserCard = (props) => {
  return (
    <div className='user-card' style={props.style}>
        <p id='user-name'>{props.name}</p>
        <img id='user-image' src={props.image} alt={props.name} />
        <p id='user-description'>Description of {props.desc}</p>
    </div>
)
}

export default UserCard