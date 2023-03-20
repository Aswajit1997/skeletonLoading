import React from 'react'

function Card({user}) {
  return (
    <div className='card'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYp5RZozodsEbSs6BMB2zGtl07HqRlPhe7gIR_9I&s" alt="avatar"/>
        <h1>{user.name} {user.last}</h1>
        <h2>{user.email}</h2>
        <h3>{user.address.city}</h3>
      </div>
  )
}

export default Card

