import React from 'react'

import Cards from './Cards'

import './CardContainer.css'

import Img4 from '../images/3.jpeg'
import Img3 from '../images/3.png'
import Img1 from '../images/one.jpeg'
import Img5 from '../images/payment.jpeg'

function CardContainer() {
  return (
    <div className="Card-Container p-5 ">
      <div className="">
        <h1 className="card-container-heading  text-center">
          How to <span className="card-container-heading-2">proceed</span>{' '}
        </h1>
        <div className="d-flex justify-content-end fs-2">
          <i className="fa-solid fa-arrow-right-long ms-auto"></i>
        </div>
        <div className="card-main-container d-flex justify-content-between overflow-scroll">
          <Cards className="ms-2" title="Research Guidance" image={Img1} />
          <Cards className="ms-2" title="Research Publication" image={Img3} />
          <Cards className="ms-2" title="Publication Process" image={Img4} />
          <Cards className="ms-2" title="Payment Process" image={Img5} />
        </div>
      </div>
    </div>
  )
}

export default CardContainer
