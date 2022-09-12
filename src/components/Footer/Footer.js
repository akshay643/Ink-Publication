import React from 'react'

import './Footer.css'
function Footer() {
  return (
    <div className="footer  ">
      <div className="row container">
        <div className="col">
          <ul>
            <li>Conference</li>
            <li>Collection</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Search</li>
            <li>LookBook</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Policy</li>
            <li>Refund</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Support</li>
            <li>Terms of use</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
