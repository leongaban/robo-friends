import React from 'react'

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green dib tc br3 pa3 ma2 grow bw2 shadow-5 cursor">
      <h2>RoboFriends</h2>
      <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
