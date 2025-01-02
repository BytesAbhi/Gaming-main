import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="conditons_section">
        <div className="terms_condition">
          <a href="/terms-and-conditions" target="_blank">Terms and Conditions</a>
          <a href="/responsible-gaming" target="_blank">Responsible Gaming</a>
        </div>
        <div className="support">
          <p>24 X 7 Support</p>
          <div className="visibilty_hidden"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="secure_container">
         <div className="inside_secure_container">
         <img src="https://wver.sprintstaticdata.com/v3/static/front/img/ssl.png" alt="secure.png" />
          <div>
            <b>100% SAFE</b>
            <p>Protected connection and encrypted data.</p>
          </div>
         </div>
         <div className="three_icons">
          <img src="https://versionobj.ecoassetsservice.com/v24/static/front/img/18plus.png" alt="18plus_png" />
          <a href="https://www.gamcare.org.uk/" target="_blank"><img src="https://versionobj.ecoassetsservice.com/v24/static/front/img/gamecare.png" alt="Gamecare_png" /></a>
          <a href="https://www.gamblingtherapy.org/" target="_blank"><img src="https://versionobj.ecoassetsservice.com/v24/static/front/img/gt.png" alt="gt_png" /></a>
         </div>
        </div>
      </div>
      <p className="copyright">© Copyright 2024. All Rights Reserved. Powered by SAFFRONEXCH.</p>
    </div>
  );
};

export default Footer;
