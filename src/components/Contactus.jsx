import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import '../components/Contactus.css'


const Contactus = () => {
  return (

    <div className='main-cntct'>
      <h2 className='head'>Contact Us On:</h2>
    <ul>
      <li className='item'>
      <a href='#'>
      <IoLogoInstagram className='icon' style={{color:"black",height:"2.5rem",width:"2.5rem"}}/>

      </a>
      </li>

      <li className='item'>
    <a href='#'>
    <FaWhatsapp className='icon' style={{color:"black",height:"2.5rem",width:"2.5rem"}}/>

    </a>
      </li>

      <li className='item'>
        <a href='#'>
        <FaXTwitter className='icon' style={{color:"grey",height:"2.5rem",width:"2.5rem"}}/>

        </a>
      </li>
    </ul>
    <div className='text_area'>
      <div className='fdflt'>
      <h3><span style={{ color: "orange" }}>FOOD</span> <span style={{ color: "skyblue" }}>FLEET</span></h3>
      <h2 className='caption'>Culinary convenience at your fingertips! Experience the epitome of gastronomic delight with our seamless food delivery app. From delectable dishes to doorstep satisfaction, indulge in a culinary journey like never before.</h2>
      </div>
    </div>
    </div>
     )
}

export default Contactus