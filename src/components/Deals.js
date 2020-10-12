import React from 'react'
import jeans1 from 'assets/jeans1.jpg'
import jeans2 from 'assets/jeans2.jpg'
import jeans3 from 'assets/jeans3.jpg'
import {ordersList} from '../atoms/atoms'
import {
  useRecoilState,
} from 'recoil'
import { toast } from 'react-toastify';

function Deals () {

  const [orders,setOrders] = useRecoilState(ordersList)
  const onAddItem=(code,name,price)=>{
    setOrders([...orders,{code,name,price}])
    notify(name)
  }
  const notify = (name) => toast(`Item ${name} added to your cart`);


  return (

    <div className="container bg-light top-deals pb-5">
      <div className="row">
        <h1 className='text-center col-12 my-5'>OUR TOP DEALS</h1>
        <div className="col-12 col-lg-4 p-0">
          <div className="card shadow-sm p-2 item">
            <img src={jeans1}/>
            <h4 className="text-center my-2">First Jeans</h4>
            <h5 className="text-center my-2">$112</h5>
            <button onClick={()=>onAddItem(10001,'jeans-1',112)} className='btn-secondary'>Add to cart</button>
          </div>
        </div>
        <div className="col-12 col-lg-4  p-0">
          <div className="card shadow-sm p-2  item">
            <img src={jeans2}/>
            <h4 className="text-center my-2">Second Jeans</h4>
            <h5 className="text-center my-2">$215</h5>
            <button onClick={()=>onAddItem(10002,'jeans-2',215)} className='btn-secondary'>Add to cart</button>
          </div>
        </div>
        <div className="col-12 col-lg-4 p-0">
          <div className="card shadow-sm p-2  item">
            <img src={jeans3}/>
            <h4 className="text-center my-2">Third Jeans</h4>
            <h5 className="text-center my-2">$82</h5>
            <button  onClick={()=>onAddItem(10003,'jeans-3',82)} className='btn-secondary'>Add to cart</button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Deals
