import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import "../App.css";


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
      </div>
      <input  class="inputt" type="checkbox" id="check"/>
      <div className="rightSide">
          <Link to="/"> Asosiy </Link>
          <Link to="./ustunliklar.js">Ustunliklar</Link>
          <Link to="./career.js">Career</Link>
          <Link to="./Footer.js">Contact</Link>
      </div>
      <label class="label1" for="check">&#9776;</label>
      <label class="label2" for="check"></label>
    </div>
  );
}

export default Navbar;
