import React from 'react'
import basket from '../assets/basket.svg'
import {ordersList} from '../atoms/atoms'
import {
  useRecoilValue
} from 'recoil'

export default function Navbar (props) {
  

  const orders = useRecoilValue(ordersList)
  const onClickCart= ()=>{
    props.history.push({
      pathname:'/checkout'
    })
  }
  const onClickHome= ()=>{
    props.history.push({
      pathname:'/'
    })
  }
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a onClick={onClickHome} className="nav-link active" aria-current="page" href="#">Home</a>
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
          <button onClick={onClickCart} className='btn rounded bg-success text-white ml-2' >
            <img src={basket} alt='basket'/>
            {orders.length>0 && <span className='orders-count'>{orders.length}</span>}
          </button>
        </div>
      </div>
    </nav>
  )
}
