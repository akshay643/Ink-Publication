import React from 'react'

import './Cards.css'

function Cards(props) {
  return (
    <div className="card-container">
      <div className="cards">
        <img className="card-image" src={props.image} alt="..." />
      </div>
      <h3 className="text-center card-title">{props.title}</h3>
    </div>
  )
}

export default Cards
