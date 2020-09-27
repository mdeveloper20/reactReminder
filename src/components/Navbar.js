import React from 'react'
import basket from '../assets/basket.svg'

export default function Navbar (props) {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sales</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control mr-2" type="search" placeholder="Type something..." aria-label="Search" />
            <button className="btn btn-secondary" type="submit">Search</button>
          </form>
          <button className='btn rounded bg-success text-white ml-2' >
            <img style={{ fill: 'red' }} src={basket} alt='basket'/>
          </button>
        </div>
      </div>
    </nav>
  )
}
