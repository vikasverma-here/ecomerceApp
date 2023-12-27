import React from 'react'
import Hero from '../../conponent/hero/hero'
import Catagories from '../../conponent/catagories/catagories'
import './home.scss'
import Product from '../../conponent/product/product'
// import Hero from '../../conponent/hero/Hero'
// import Hero from '../../conponent/hero/Hero';
function Home() {
  return (
    <div className='home'>
      <Hero/>
  <section className="collection container">
    <div className="info">
      <h2 className="heading">Shop By Catagories</h2>
      <p className="subheading">
        shop from the best, our file and tv posters collection 
      </p>
    </div>
    <div className="content">
    <Catagories/>
    <Catagories/>
    <Catagories/>
   
      
    </div>
  </section>
  <section className="collection container">
    <div className="info">
      <h2 className="heading">Our Top Pics</h2>
      <p className="subheading">
        All New Design Same Old Details
      </p>
    </div>
    <div className="content">
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    {/* <Product/> */}
   
   
      
    </div>
  </section>
  
 
    </div>
  )
}

export default Home