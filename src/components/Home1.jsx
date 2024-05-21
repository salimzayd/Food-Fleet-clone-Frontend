import React from 'react'
import "./Home1.css"
import { Button } from 'react-bootstrap'
import newbike from "../components/assets/images/newbike.png"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Contactus from './Contactus'
import Payment from './Payment'


const Home1 = () => {

 const nav = useNavigate()
 
  return (
    <>
        <div class="container">
  <div class="blur-background"></div>
    <div class="content">
    <h1 style={{fontFamily:"Raleway"}}>A complete food zone</h1>
    <h3 style={{fontFamily:"Lato"}}> "From <span style={{color:"red", background:"black"}}>cravings</span> to doorstep in a snap! <br />Indulge in a world of
                flavors with our hassle-free <span style={{color:"gold", background:"black"}}>food</span> delivery app.<br /> Satisfaction
                guaranteed, every bite, every time."</h3>
  </div>
<div className='last'>
<h2 style={{marginLeft:"30px"}}>if you wish to order from  our website !! please <span style={{color:"royalblue"  }}>register</span></h2>
  <Button className=' btn bg-success' style={{marginLeft:"30px"}}  onClick={() => nav('/register')}>REGISTER</Button>
  <img src={newbike} style={{height:"250px", width:"250px", marginLeft:"150px"}}></img>

</div>
</div>  
    {/* <Contactus /> */}
    {/* <Payment /> */}
  
    </>
  )
}

export default Home1;