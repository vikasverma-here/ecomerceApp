import React from 'react'
import './hero.scss'
import {useNavigate} from "react-router-dom"
function Hero() {
  const navigate = useNavigate()
  return (
    <div className='Hero' >
        <div className="Hero-content ">
            <h2 className="heading  ">Exclusive Print And Art Work</h2>
            <p className="subheading ">
            Exclusive Art pieces For The Exclusive You 
            </p>
            <button onClick={()=>navigate('/catagory')} className="cta btn-primary">Explore More</button>

            
        </div>
    </div>
  )
}

export default Hero