import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import "../App.css";


function Footer() {
  return (
    <div className="footer">
      
      <div className="footer-links">
        <ul>
          <h3>Contact</h3>
          <p>Do you have any questions?</p>
          <p>+99890 123 45 67</p>
        </ul>
        <ul>
          <h3>Address</h3>
          <p>Tashkent, Labzak Street, Amity University</p>
        </ul>
        <ul>
          <h3>Language</h3>
          <p>Uzbek</p>
          <p>Russian</p>
          <p>English</p>
        </ul>
      </div>
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p> &copy; albison.uz</p>
    </div>
  );
}

export default Footer;
