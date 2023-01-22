import React from 'react';
import { Link } from "react-router-dom";
import picc1 from "../assets/pickie1.png"
import picc2 from "../assets/pickie3.png"
import picc3 from "../assets/pickie4.png"
import "../styles/ustunliklar.css";


function Ustunliklar(){
    return(
        <div className='ustunliklar'>
                <h1>WHY US?</h1>
                <div className='ustunContainer'>
                    <div className='col-1'>
                        <img src={picc1}/>
                    </div>
                    <div className='col-2'>
                        <p>Kechagina ochilgan dasturchilar maktabimiz bitiruvchilari hozirda nafaqat bizda balki boshqa xalqaro IT kompaniyalarda ham o'z o'rnini egallashmoqda. Hozirda ushbu xalqaro kompaniyalar o'z ishonchlarini bildirib, yanada ko'proq dasturchilarni yetkazib berishda hamkorlarimizga aylanishdi</p>
                    </div>
                </div>
                <div className='ustunContainer middle'>
                    <div className='col-2'>
                        <p>Kechagina ochilgan dasturchilar maktabimiz bitiruvchilari hozirda nafaqat bizda balki boshqa xalqaro IT kompaniyalarda ham o'z o'rnini egallashmoqda. Hozirda ushbu xalqaro kompaniyalar o'z ishonchlarini bildirib, yanada ko'proq dasturchilarni yetkazib berishda hamkorlarimizga aylanishdi</p>
                    </div>
                    <div className='col-1'>
                        <img src={picc2}/>
                    </div>
                </div>
                <div className='ustunContainer'>
                    <div className='col-1'>
                        <img src={picc3}/>
                    </div>
                    <div className='col-2'>
                        <p>Kechagina ochilgan dasturchilar maktabimiz bitiruvchilari hozirda nafaqat bizda balki boshqa xalqaro IT kompaniyalarda ham o'z o'rnini egallashmoqda. Hozirda ushbu xalqaro kompaniyalar o'z ishonchlarini bildirib, yanada ko'proq dasturchilarni yetkazib berishda hamkorlarimizga aylanishdi</p>
                    </div>
                </div>
        </div>
    );
}


export default Ustunliklar;