import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Deals from '../components/Deals'
import Recommended from '../components/Recommended'
import Delivery from '../components/Delivery'
import Categories from '../components/Categories'
import Footer from '../components/Footer'

export default function Home (props) {
  return (
    <div className="container">
      <Navbar history={props.history} />
      <Header/>
      <Deals/>
      <Delivery/>
      <Recommended/>
      <Categories/>
      <Footer/>
    </div>
  )
}
