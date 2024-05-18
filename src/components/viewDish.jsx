import React, { useEffect, useState,useReducer } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';


const initialqnty = 1;
const reducer = (state,action) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
           if(state > 1){
            return state - 1
           }
        default :
        return state         
    }
}

const ViewDish = () => {

    useEffect(() =>{
        AOS.init()
    })

    const {id} = useParams();
    const[dish,setDish] = useState(null);

    useEffect(() =>{
        const fetchdish = async () =>{
            try{

               const usertoken = localStorage.getItem('token')
               const tokenWithBearer = `Bearer ${usertoken}`
               const response = await axios.get(`http://localhost:5000/api/users/dishes/${id}`,{
                headers:{Authorization:tokenWithBearer}
               }) 

               setDish(response.data.data)
               console.log(response.data.data);
            }catch(error){
                console.error("error fetching data" , error);
            }
        }
        fetchdish()
    },[id])

   

    
        const [count,dispatch] = useReducer(reducer,initialqnty)
    
  return (
<>
<div style={{height:"680px", backgroundColor:"#040D12"}} >
    
        <div className='col-20' style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
                {dish &&(
                    <Card className='' data-aos = "flip-right" style={{marginTop:"15px", backgroundColor:"#282A3A", borderRadius:"25px",boxShadow:"5px 6px 10px red"}} >
                        <Card.Img
                        className='mx-auto'
                        style={{width:"25rem",height:"15rem", borderRadius:"25px"}}
                        variant='top'
                        src={dish.image} />

                        <Card.Body className='text-center'>

                            <Card.Title style={{color:"white"}}>{dish.title}</Card.Title>
                            <h3 style={{color:"gold"}}>₹{dish.price * count}-/</h3>
                            <h3 style={{color:"white"}}>{dish.category}</h3>
                            <h3 style={{color:"#8DECB4"}}>quantity:{count}</h3>
                            <div>
                            <button onClick={() => dispatch('increment')} style={{width:"50px", height:"30px", borderRadius:"10px", color:"black", backgroundColor:"#FFFF80", border:"0px", marginRight:"15px", fontSize:"larger"}}>
                                 + </button>
                            <button onClick={() => dispatch('decrement')} style={{width:"50px", height:"30px", borderRadius:"10px", color:"black", backgroundColor:"#C40C0C", border:"0px", fontSize:"larger"}}> - </button>
                            </div>
                            
                            <div style={{backgroundColor:"#282A3A", width:"350px", height:"180px", color:"white"}}>
                                Description:<h4>{dish.description}</h4>

                                {/* <Button className='bg-primary' style={{marginRight:"10px"}}>Add to cart</Button> */}
                            <Button className='bg-success'>Buy Now</Button>
                            </div>

                           

                        </Card.Body>
                    </Card>
                    

                )}
            
            </div>
        
    
</div>
</>
  )
}

export default ViewDish;