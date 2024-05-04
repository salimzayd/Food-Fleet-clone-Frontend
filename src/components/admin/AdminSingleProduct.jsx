import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Button,Card} from 'react-bootstrap'

const AdminSingleProduct = () => {

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
    <div className='container mt-5 m-3'>
        <div className='row justify-contnet-center align-items-center'>
            <div className='col-md-6'>
                {dish &&(
                    <Card className='w-100'>
                        <Card.Img
                        className='mx-auto'
                        style={{width:"15rem",height:"10rem"}}
                        variant='top'
                        src={dish.image} />

                        <Card.Body className='text-center'>

                            <Card.Title>{dish.title}</Card.Title>
                            <h3 className='text-warning'>Rs {dish.price}</h3>
                            <h3 className='text-danger'>{dish.category}</h3>

                        </Card.Body>
                    </Card>

                )}
            
            </div>
        </div>
        
    </div>
  )
}

export default AdminSingleProduct