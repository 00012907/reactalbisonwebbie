import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import pic1 from "../assets/pic5.jpg";
import pic2 from "../assets/coding.png";
import pic3 from "../assets/pic3.jpg";
import "../App.css";


function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <div className="col-1">
          <h1>Nimaga yana <span>grand kurslar?</span></h1>
          <p>Kechagina ochilgan dasturchilar maktabimiz bitiruvchilari hozirda nafaqat bizda balki boshqa xalqaro IT kompaniyalarda ham o'z o'rnini egallashmoqda. Hozirda ushbu xalqaro kompaniyalar o'z ishonchlarini bildirib, yanada ko'proq dasturchilarni yetkazib berishda hamkorlarimizga aylanishdi</p>
          <div className="buttons">
            <Link to="/"><button>Register</button></Link>
            <Link to="/"><button>Barcha kurslar</button></Link>
          </div>
        </div>
        <div className="col-2">
          <img src={pic2} alt='img'/>
        </div>
      </div>
    </div>
  );
}

export default Home;
