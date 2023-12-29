import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { BsCart2 } from "react-icons/bs";
import Cart from "../cart/cart";
function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="container nav-conatiner">
          <nav className="nav">
            <div className="nav-left">
              <ul className="link-group">
                <li className="hover-link">
                  <Link className="link" to="/products?catagory = comic">
                    {" "}
                    comics
                  </Link>
                </li>
                <li className="hover-link">
                  <Link className="link" to="/products?catagory = shows">
                    {" "}
                    tv shows
                  </Link>
                </li>
                <li className="hover-link">
                  <Link className="link" to="/products?catagory = sports">
                    {" "}
                    sports
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-center">
              <Link className="banner" to="/">
                {" "}
                Posterz
              </Link>
            </div>
            <div className="nav-right">
              <div className="nav-cart hover-link">
                <BsCart2 className="icon" />
                <span className="cart-count center">99+</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <Cart />
    </>
  );
}

export default NavBar;
