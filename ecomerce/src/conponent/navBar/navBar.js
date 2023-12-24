import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.scss'
import { BsCart2 } from "react-icons/bs";
function NavBar() {
  return (
    <div className='navbar'>
      <div className="container nav-conatiner">
        <nav className='nav'>
          <div className="nav-left">
            <ul>
              <li className='hover-link' > <Link to='/products?catagory = comic' > comics</Link></li>
              <li className='hover-link' ><Link to='/products?catagory = comic' > tv shows</Link></li>
              <li className='hover-link' ><Link to='/products?catagory = comic' > sports</Link></li>
            </ul>
          </div>
          <div className="nav-center"> <Link to='/' > Posterz</Link> </div>
          <div className="nav-right"> 
          <div className="nav-cart">
          <BsCart2 className='icon' />
          <span className='cart-count' >9</span>
            </div> </div>
        </nav>
      </div>
    
    </div>
  )
}

export default NavBar