import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* .col*4 means 4 div back to back */}
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            earum odit distinctio unde qui iure! Consequatur voluptas esse at,
            praesentium quae velit quo fugit suscipit autem dolore aliquam est
            nam!
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
                4M/106, Sushila Sadan, Bhootnath Road, near T.V Road, Kankarbagh, Patna, Bihar, 800026
            </div>
          </div>

          <div className="c-item">
            <FaMobileAlt />
            <div className="text">
                Phone: 0471 272 0261
            </div>
          </div>

          <div className="c-item">
            <FaEnvelope />
            <div className="text">
                Email: store@techzone.com
            </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theaters</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
            <div className="title">Pages</div>
            <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                TechZone 2023 CREATED BY PREMIUM E-COMMERCE SOLUTIONS Pvt-Ltd. 
            </div>
            <img src={Payment} alt="Payment" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
