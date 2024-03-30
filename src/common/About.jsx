import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import  "./About.css"

const About = () => {
  return (
    <>
      <div className='about-section' style={{background:"whitesmoke",width:"100%",height:"600px"}}>
       <div className='contents'>
       <h1 style={{display:"flex",justifyContent:"center", fontFamily:'roboto'}}> ABOUT US </h1>
        <p style={{fontSize:"19px"}}>In today's fast-paced world, convenience is key, and nothing embodies that more than a reliable food delivery app.
           With just a few taps on your smartphone, you can unlock a world of culinary possibilities,
           bringing the flavors of your favorite restaurants right to your doorstep.
           <br />
           From speedy delivery to customizable orders and seamless payment options, 
           these apps offer a delightful dining experience tailored to your every need. </p>

            <button> READ MORE </button>
       </div>

       <div className='img1'>
  
       </div>

       <div className='img2'>
        
       </div>

       <div className='img3'>
       
       </div>


      </div>

    </>
  )
}

export default About