import React from 'react'
import mask from 'assets/mask.jpg'
import modern from 'assets/modern.jpg'
import fashion from 'assets/fashion.jpg'
import cloth2 from 'assets/cloth2.jpg'

function Categories () {
  return (

    <div className="container-fluid p-0 pt-5 categories pb-5">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="item">
            <img src={modern}/>
            <h4 className="text-center font-weight-bold my-2">FALL TREND: MODERN</h4>
            <h5 className="text-center my-2">On everything from modern slides to sleek booties.</h5>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="item">
            <img src={mask}/>
            <h4 className="text-center font-weight-bold my-2">FALL TREND: FACE MASKS</h4>
            <h5 className="text-center my-2">Stay-safe essentials for you.</h5>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-lg-6">
          <div className="item">
            <img src={fashion}/>
            <h4 className="text-center font-weight-bold my-2">FALL TREND: FASHION</h4>
            <h5 className="text-center my-2">On everything from modern slides to sleek booties.</h5>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="item">
            <img src={cloth2}/>
            <h4 className="text-center font-weight-bold my-2">FALL TREND: SHIRTS</h4>
            <h5 className="text-center my-2">Stay-safe essentials for you.</h5>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Categories
