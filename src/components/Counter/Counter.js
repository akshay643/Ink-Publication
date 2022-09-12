import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import './Counter.css'

function Counter() {
  return (
    <div className="counter-container p-5 text-center">
      <h1 className="counter-heading">
        {' '}
        Our publication <span className="counter-heading-2">Served</span>{' '}
      </h1>

      <div className=" d-block d-lg-flex justify-content-around align-items-center ">
        <div className="d-flex flex-column justify-content-around align-items-center mt-5 ">
          <CountUp start={0} end={100} enableScrollSpy={true}>
            {({ countUpRef }) => (
              <div>
                <span className="count" ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <h1 className="count-heading">Countries</h1>
        </div>
        <div className="d-flex flex-column justify-content-around align-items-center mt-5 ">
          <CountUp start={0} end={10000} enableScrollSpy={true}>
            {({ countUpRef }) => (
              <div>
                <span className=" count" ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <h1 className="count-heading">Customers</h1>
        </div>
      </div>
    </div>
  )
}

export default Counter
