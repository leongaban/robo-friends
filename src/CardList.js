import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  return (
    <div>
      {robots && robots.length > 0 ? (
        robots.map(({ id, name, email }, i) => <Card key={i} id={id} name={name} email={email} />)
      ) : (
        <p>No robots found.</p>
      )}
    </div>
  )
}

export default CardList
