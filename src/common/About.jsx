import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import  "./About.css"

const About = () => {
  return (
    <>
      <div className='about-section' style={{background:"grey",width:"100%",height:"600px"}}>
       <div className='contents'>
       <h1 style={{display:"flex",justifyContent:"center"}}> ABOUT US </h1>
        <p>setrydtutiotydfuiodtyfugitrstdfygiuotydfuio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eius 
            dolorum officia, quam accusantium sequi! Nihil, ex tenetur consectetur ratione rem earum obcaecati facilis modi 
            dolore aliquid temporibus magni molestiae iste ducimus nesciunt illo voluptas veritatis voluptatum 
            exercitationem labore quis officiis commodi omnis tempora? Nulla accusantium sapiente perferendis ut ab! 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam error suscipit sapiente dicta iste voluptatem. 
            Neque perferendis ab eligendi?</p>

            <button> READ MORE </button>
       </div>

       <div className='img1'>
        <h3>img1</h3>
       </div>

       <div className='img2'>
        <h3>image 2</h3>
       </div>

       <div className='img3'>
        <h3>image3</h3>
       </div>


      </div>

    </>
  )
}

export default About