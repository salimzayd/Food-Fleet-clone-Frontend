import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Button,Card} from 'react-bootstrap'
import "./AdminSingleProduct.css"
import 'aos/dist/aos.css';
import Aos from 'aos';

const AdminSingleProduct = () => {

    useEffect(() =>{
        Aos.init()
    })

    const { id } = useParams()
    const [dish,setDish] = useState([]);


    useEffect(() =>{
        const fetchdish = async () =>{
            try{
                const admintoken = localStorage.getItem('adminToken');
                const tokenWithBearer = `Bearer ${admintoken}`
                const response = await axios.get(`http://localhost:5000/api/admin/dishes/${id}`,{
                    headers:{Authorization:tokenWithBearer}
                });

                setDish(response.data.data)
                console.log(response.data.data,"esrtdyuitrdy");
            }catch(err){
                console.log("error fetching dish",err);
            }
        };

        if(id){
            fetchdish();
        }
    },[id])
    console.log(dish,"fghjk");
  return (
    <>
            <div className='main-container'></div>
            <div style={{ display:"flex", justifyContent:"center", alignItems:"center", width:"450px", marginLeft:"550px"}}>
                {dish &&(
                    <Card style={{marginTop:"25px", backgroundColor:"transparent", boxShadow:"10px 10px 9px black" ,height:"39rem"}}  data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                        <Card.Img
                        className='mx-auto'
                        style={{width:"28rem",height:"17rem", borderRadius:"25px"}}
                        variant='top'
                        src={dish.image} />

                        <Card.Body className='text-center'>

                            <Card.Title style={{color:"black"}}>{dish.title}</Card.Title>
                            <h3 style={{color:"gold"}}>₹{dish.price} -/</h3>
                            <h3 style={{color:"black"}}>{dish.category}</h3>
                            Description:<h2 style={{color:"black"}}>{dish.description}</h2>

                        </Card.Body>
                    </Card>

                )}
            
            </div>
        </>    
        
        
      
  )
}

export default AdminSingleProduct