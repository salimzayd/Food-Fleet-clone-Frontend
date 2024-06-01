import React, { useEffect } from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Contactus.css"
import Aos from 'aos';


const Contactus = () => {

  useEffect(()=>{
    Aos.init()
  })
  const contactdetails = [
    {
    id:1,
    icon:<CiLocationOn  style={{width:"200px", height:"50px"}}/>,
    head:"Our Location :",
    details:"SoHo 94 Broadway st new york,NY 1001"

  },
  {
    id:2,
    icon:<FaPhoneAlt  style={{width:"200px", height:"40px"}}/>,
    head:"Our Phonenumber :",
    details:"+1 78456123564"

  },
  {
    id:3,
    icon:<MdEmail  style={{width:"200px", height:"50px"}}/>,
    head:"Our Email :",
    details:"FoodFleet301@gmail.com"

  }
]
  return (

    <div className='main-cntct'>
      <h2 className='head'>Contact Us On:</h2>
    <ul className='ul-cn'>
      <li className='item' data-aos="fade-down" data-aos-duration="1000">
      <a href='#'>
      <IoLogoInstagram className='icon' style={{color:"black",height:"2.5rem",width:"2.5rem"}}/>

      </a>
      </li>

      <li className='item'  data-aos="fade-down" data-aos-duration="1500">
    <a href='#'>
    <FaWhatsapp className='icon' style={{color:"black",height:"2.5rem",width:"2.5rem"}}/>

    </a>
      </li>

      <li className='item'  data-aos="fade-down" data-aos-duration="2000">
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

    <div className='main-cn'>
            {contactdetails.map((item) =>(
            <>
            <div className='cardsee'>
              
              <p style={{display:"flex", justifyContent:"center", color:"skyblue"}}>{item.icon}</p> 
            
            <p className='cr-contents'>
                <h2>{item.head}</h2>
                <h4>{item.details}</h4>

            </p>
              
            </div>
              
            </>
        
        
          
            ))}
    </div>
</div>
  

    
     )
}

export default Contactus