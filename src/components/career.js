import React from 'react'
import { Link } from "react-router-dom";
import "../styles/career.css"

function Career(){
    return(
    <div className='career'>
        <div className='container'>
            <div className='card'>
                <h1>FrontEnd</h1>
                <ul className='links'>
                    <li>&#9730; HTML</li>
                    <li>&#9730; CSS</li>
                    <li>&#9730;JavaScript</li>
                    <li>&#9730; React.js</li>
                    <li>&#9730; Next.js</li>
                    <li>&#9730; Git</li>
                </ul>
            </div>
            <div className='card'>
                <h1>BackEnd</h1>
                <ul className='links'>
                    <li>&#9730; HTML</li>
                    <li>&#9730; CSS</li>
                    <li>&#9730;JavaScript</li>
                    <li>&#9730; React.js</li>
                    <li>&#9730; Next.js</li>
                    <li>&#9730; Git</li>
                </ul>
            </div>
            <div className='card last'>
                <h1>Internships</h1>
                <ul className='links'>
                    <li>&#9730; HTML</li>
                    <li>&#9730; CSS</li>
                    <li>&#9730;JavaScript</li>
                    <li>&#9730; React.js</li>
                    <li>&#9730; Next.js</li>
                    <li>&#9730; Git</li>
                </ul>
            </div>
        </div>
            <button>Ro`yxatdan o`tish</button>
    </div>
    )
}

export default Career;