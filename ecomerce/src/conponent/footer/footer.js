import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import "./footer.scss"
import creditCardImg from "../../assets/credit-card.jpg"
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="content">
          <div className="footer-left">
            <h3 className="title">Follow Us</h3>
            <ul className="follow">
              <li className="hover-link center" >
                <FaFacebook />
              </li>
              <li className="hover-link center">
                <FaInstagram />
              </li>
              <li className="hover-link center">
                <FaSquareTwitter />
              </li>
              <li className="hover-link center ">
                <MdAttachEmail />
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <h3 className="title">My Company</h3> 
            <ul className="company">
              <li className="hover-link">Contact us </li>
              <li className="hover-link">Privacy Policy</li>
              <li className="hover-link">Return and Exchange Policy</li>
              <li className="hover-link">Shipping Policy</li>
              <li className="hover-link">Terms and Conditions</li>
            </ul>
          </div>
        </div>
        <div className="subfooter">
          <div className="credit-card-img">
            <img src={creditCardImg} alt="" />
          </div>
          <p>Copyright {new Date().getFullYear()} <strong>Posterz.</strong> </p>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
