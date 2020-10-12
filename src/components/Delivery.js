import React from 'react'
import truck from 'assets/truck.svg'
import bag from 'assets/bag.svg'

function Delivery () {
  return (

    <div className="container bg-warning py-3 delivery">
      <div className="row align-items-center ">
        <div className="col-4 text-center ">
          <h2>YOU SHOP. WE REWARD</h2>
          <h2>IT'S THAT SIMPLE.</h2>
        </div>
        <div className="col-4 text-center border-right border-left border-secondary">
          <img className="my-2" src={truck}/>
          <h4>FREE SHIPPING</h4>
          <h4>EVERY DAY</h4>

        </div>
        <div className="col-4 text-center">
          <img className="my-2" src={bag}/>
          <h4>MONTHLY</h4>
          <h4>EXCLUSIVE OFFERS</h4>

        </div>
      </div>

    </div>

  )
}

export default Delivery
