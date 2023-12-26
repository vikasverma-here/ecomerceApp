import React from 'react'
import dummy from "../../assets/dummy.jpg"
import "./product.scss"
function Product() {
  return (
    <div className="product">
      <div className="product-container">
        <div className="product-img">
          <div className="img-contianer">
            <img src={dummy} alt="" />
          </div>
        </div>
        <div className="product-info">
          <p className="title">Delux Wall Hanger 23 23*23 Solid color</p>
          <p className="prize">
            $ 549
          </p>
        </div>
      </div>
    </div>
  )
}

export default Product