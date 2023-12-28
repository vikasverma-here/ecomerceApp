import React from 'react'
import dummy from "../../assets/dummy.jpg"
import './productDetails.scss'
function Productdetails() {
  return (
    <div className='productDetails'>
      <div className="contianer">
        <div className="product-layout">
          <div className="product-img center ">
            <img src={dummy} alt="" />
          </div>
          <div className="product-info">
            <h1 className="heading">
              this is the title ,Wall Poster
            </h1>
            <h3 className="prize">$455</h3>
            <p className="discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, aperiam accusantium exercitationem doloremque qui fuga unde mollitia architecto id reiciendis commodi fugiat praesentium omnis soluta! Quasi inventore voluptas possimus laborum.</p>
            <div className="cart-option">
              <div className="quantity-selector">
                <span className='btn-increment btn' >+</span>
                <span className='quantitiy ' >9</span>

                <span className='btn-decriment btn' >-</span>


              </div>
              <button className='btn-primary add-to-cart' >Add to cart</button>
            </div>
            <div className="return-policy">
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, in.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor velit tempore blanditiis, molestias dolores veniam?</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Productdetails