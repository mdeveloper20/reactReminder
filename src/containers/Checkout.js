import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {ordersList} from '../atoms/atoms'

import {
  useRecoilValue
} from 'recoil'

export default function Checkout (props) {
  const orders = useRecoilValue(ordersList)

  return (
    <div className="container">
      <Navbar history={props.history}/>
      <Header/>
      <div className='row my-5'>
        <div className='col-12 col-lg-6'>
          <h1 className='mt-5'>Your order:</h1>

          <table className='table table-striped mt-2'>
            <thead className='thead-light'>
              <tr><th>Code</th><th>Item</th><th>Price</th></tr>
            </thead>
            <tbody>
              {orders.map(order=><tr><td>{order.code}</td><td>{order.name}</td><td>${order.price}</td></tr>)}
              
              

            </tbody>
            <tfoot>
              <tr><td>*</td><td>total</td><td>${orders.reduce((old,current)=>old+current.price,0)}</td></tr>

            </tfoot>
          </table>
        </div>
        <div className='col-12 col-lg-6'>
          <h1 className='mt-5'>Checkout:</h1>

          <div className='form-group mt-3'>
            <label htmlFor='cardHolder'>Card holder:</label>
            <input className='form-control mt-2' value='' placeholder='type your full name...' id='cardHolder' />
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='cardNumber'>Card number:</label>
            <input className='form-control mt-2' value='' placeholder='type card number...' id='cardNumber' />
          </div>
          <div className='row mt-3'>
            <div className='form-group col-3'>
              <label htmlFor='cardExpireMonth'>Expiration Date:</label>
              <input className='form-control mt-2' value='' placeholder='month' id='cardExpireMonth' />
            </div>
            <div className='form-group col-3'>
              <label htmlFor='cardExpireMonth'></label>

              <input className='form-control mt-2' value='' placeholder='year' id='cardExpireMonth' />
            </div>
            <div className='form-group col-2'>
              <label htmlFor='cardcvc'>CVC:</label>
              <input className='form-control mt-2' value='' placeholder='cvc' id='cardcvc' />
            </div>
          </div>

          <input type='button' className='btn-primary col-12 mt-3 py-2' value='PAY SECURELY'/>

        </div>
      </div>

      <Footer/>
    </div>
  )
}
