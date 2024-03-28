import React from 'react'
import "./Home.css"
import { Container,Button } from 'react-bootstrap'
import newbike from "../components/Assets/newbike.png"

const Home = () => {
  return (
    <>

<h1 className='hd'>Food Fleet.</h1>
        <h4>A complete food delivery website</h4>
        <img src={newbike} style={{height:"250px", width:"250px", marginLeft:"20px"}}></img>
    <div className='items'>

    <div className='hm-qt'>
        <h3>
        "Food is symbolic of love when words are inadequate." 
        <br /> - Alan D. Wolfelt
        </h3>
    </div>

    <div className='hm-nm' style={{height:"500px", width:"600px", background:"grey"}}> 

    <h2>
            FOOD FLEET 
        </h2>

        
    </div>

    </div>
    </>
  )
}

export default Home