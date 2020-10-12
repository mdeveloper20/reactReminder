import React from 'react'
import bracelet from 'assets/bracelet.jpg'
import ring from 'assets/ring.jpg'
import shoes from 'assets/shoes.jpg'
import tie from 'assets/tie.jpg'
import watch from 'assets/watch.jpg'
import tshirt from 'assets/tshirt.jpg'
import {ordersList} from '../atoms/atoms'
import { toast } from 'react-toastify';

import {
  useRecoilState,
} from 'recoil'

function Recommended () {

  const [orders,setOrders] = useRecoilState(ordersList)
  const onAddItem=(code,name,price)=>{
    setOrders([...orders,{code,name,price}])
    notify(name)
  }
  const notify = (name) => toast(`Item ${name} added to your cart`);


  return (

    <div className="container bg-dark top-deals">
      <div className="row">
        <h1 className='text-center col-12 my-5 text-white'>RECOMMENDED FOR YOU</h1>
        <div className="col-12 col-lg-2 p-0">
          <div className="card shadow-sm p-2 item">
            <img src={bracelet}/>
            <h4 className="text-center my-2">First Jeans</h4>
            <h5 className="text-center my-2">$12</h5>
            <button onClick={()=>onAddItem(10010,'item-1',112)} className='btn-secondary'>Add to cart</button>
          </div>
        </div>
        <div className="col-12 col-lg-2  p-0">
          <div className="card shadow-sm p-2  item">
            <img src={ring}/>
            <h4 className="text-center my-2">Second Jeans</h4>
            <h5 className="text-center my-2">$215</h5>
            <button onClick={()=>onAddItem(10011,'item-2',215)} className='btn-secondary'>Add to cart</button>
          </div>
        </div>
        <div className="col-12 col-lg-2 p-0">
          <div className="card shadow-sm p-2  item">
            <img src={shoes}/>
            <h4 className="text-center my-2">Third Jeans</h4>
            <h5 className="text-center my-2">$82</h5>
            <button onClick={()=>onAddItem(10012,'item-3',82)} className='btn-secondary'>Add to cart</button>
          </div>
        </div>
        <div className="col-12 col-lg-2 p-0">
          <div className="card shadow-sm p-2  item">
            <img src={tie}/>
            <h4 className="text-center my-2">Third Jeans</h4>
            <h5 className="text-center my-2">$811</h5>
            <button onClick={()=>onAddItem(10013,'item-4',811)} className='btn-secondary'>Add to cart</button>
          </div>
        </div>
        <div className="col-12 col-lg-2 p-0">
          <div className="card shadow-sm p-2  item">
            <img src={watch}/>
            <h4 className="text-center my-2">Third Jeans</h4>
            <h5 className="text-center my-2">$820</h5>
            <button onClick={()=>onAddItem(10014,'item-5',820)} className='btn-secondary'>Add to cart</button>
          </div>
        </div>
        <div className="col-12 col-lg-2 p-0">
          <div className="card shadow-sm p-2  item">
            <img src={tshirt}/>
            <h4 className="text-center my-2">Third Jeans</h4>
            <h5 className="text-center my-2">$42</h5>
            <button onClick={()=>onAddItem(10015,'item-6',42)} className='btn-secondary'>Add to cart</button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Recommended
