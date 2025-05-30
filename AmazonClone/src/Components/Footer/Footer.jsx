// import React from "react";
import "../Footer/Footer.css";
import amazonLogoFooter from "../../assets/amazonLogo.png";

const Footer = () => {
  return (
    <div className="amazon_footer_outer_wrapper">
      <div className="amazon_footer_wrapper">
        <div className="amazon_footer_divs amazon_div">
          <div className="heading">
            <b>Get to Know Us</b>
          </div>
          <div className="footer_text">About Amazon</div>
          <div className="footer_text">Careers</div>
          <div className="footer_text">Press Releases</div>
          <div className="footer_text">Amazon Science</div>
        </div>
        <div className="amazon_footer_divs amazon_div">
          <div className="heading">
            <b>Connect with us</b>
          </div>
          <div className="footer_text">Facebook</div>
          <div className="footer_text">Twitter</div>
          <div className="footer_text">Instagram</div>
        </div>
        <div className="amazon_footer_divs amazon_div">
          <div className="heading">
            <b>Make money with us</b>
          </div>
          <div className="footer_text">Sell on Amazon</div>
          <div className="footer_text">Sell under Amazon Accelerator</div>
          <div className="footer_text">Protect and Build Your Brand</div>
          <div className="footer_text">Amazon Global Selling</div>
          <div className="footer_text">Supply to Amazon</div>
          <div className="footer_text">Become An Affiliate</div>
          <div className="footer_text">Fulfilment by Amazon</div>
          <div className="footer_text">Advertise Your Products</div>
          <div className="footer_text">Amazon Pay on Merchants</div>
        </div>
        <div className="amazon_footer_divs amazon_div">
          <div className="heading">
            <b>Let Us Help You</b>
          </div>
          <div className="footer_text">Your Account</div>
          <div className="footer_text">Returns Centre</div>
          <div className="footer_text">100% Purchase Protection</div>
          <div className="footer_text">Amazon App</div>
          <div className="footer_text">Help</div>
        </div>
      </div>
      <center>
        <div className="amazon_footer_logo">
          <img src={amazonLogoFooter} alt="" />
        </div>
      </center>
    </div>
  );
};

export default Footer;
