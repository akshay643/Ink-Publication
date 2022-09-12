import React from 'react'

import './Contact.css'
import { FacebookButton, FacebookCount } from 'react-social'

function Contact() {
  let url = 'https://github.com'

  return (
    <div className="contact-form text-center p-5">
      <h1 className="heading-1">
        Contact <span className="heading-2">us</span>{' '}
      </h1>
      <div className="fs-2">
        <i class="fa-sharp fa-solid fa-location-dot"></i>{' '}
      </div>
      <h4>JMD Megapolis, Gurugram, Harayana</h4>
      <div className="fs-2 mt-3">
        <i class="fa-sharp fa-solid fa-envelope"></i>
      </div>
      <h4>submission@inkpubs.com</h4>
      <div className="social m-auto w-50 mt-3  ">
        <div className="fs-2">
          <i className="fa-brands fa-facebook"></i>{' '}
        </div>
        <div className="fs-2">
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div className="fs-2">
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  )
}

export default Contact
