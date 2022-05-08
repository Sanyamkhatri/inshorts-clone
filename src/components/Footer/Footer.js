import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <span className="name">
          inshorts clone made by
          <a href="/">Sanyam</a>
        </span>
        <hr style={{ width: "90%" }} />
        <div className="icon-container">
            <a href="/">
            <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="/">
            <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="/">
            <i class="fa-brands fa-linkedin"></i>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
