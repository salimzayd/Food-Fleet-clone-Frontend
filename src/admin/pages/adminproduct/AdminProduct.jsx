import React, { useEffect, useState } from 'react'
import { Button,Card,Row,Col,Navbar } from 'react-bootstrap'
import axios from 'axios';
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'
import AdminInstance from '../../../axiosinterceptors/Adminaxiosinterceptor';

const AdminProduct = () => {

    const [dish,setDish] = useState([])
    const navigate = useNavigate()


    const handleDelete = async (_id) =>{
      try{
        const confirm = window.confirm("do you really want to delete this dish")
        if(confirm){
          const response = await AdminInstance.delete(`/dishes/${_id}`,{
          "Content-Type":"multipart/form-data"})
        if(response.status === 200){
          const updatedDish = dish.filter((item) => item._id !== _id);
          setDish(updatedDish)
          
          toast.success("successfully deleted dish")
        }else{
          console.log("failed to delete dish");
          toast.error("failed to delete dish");
        }
      }}catch(error){
        console.error("error deleting dish",error);
      }
    }

    useEffect(() => {
      const fetchdish = async () =>{
        try{
          const response = await AdminInstance.get('/dishes',)
          setDish(response.data.data)
          console.log(response.data.data);
        }catch(error){
          console.log("error fetching dishes:",error);
        }
      }
      fetchdish()
    },[])
  return (
    <div>
    <Row className='justify-content-center m-4'>
      {dish?.length > 0 ? (
        dish.map((item) =>(
          <Col key={item._id} xs={12} sm={6} md={4} lg={3} xl={3} className='mb-4' >
            <Card style={{width:"17rem"}}>
              <Card.Img style={{width:"17rem", height:"13rem"}} variant='top' src={item.image} alt='loading..' ></Card.Img>
              <Card.Body className='text-center'>
                <Card.Title className='mt-2'>{item.title}</Card.Title>
                <Card.Text>
                  <h2>₹{item.price} -/</h2>
                  <h4 className='text-danger '>{item.category}</h4>
                </Card.Text>
                <Button className='bg-primary ' variant='danger' onClick={()=>navigate(`/adminviewproduct/${item._id}`)} >
                  View Dish
                </Button>
                <div className='icons'>
                <MdDelete  style={{fontSize:"30px",color:"red", marginTop:"8 px"}} onClick={() => handleDelete(item._id)}/>
                <BiEditAlt style={{fontSize:"30px",  cursor:"pointer"}} onClick={() => navigate(`/admineditproduct/${item._id}`)}/>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
      ):(<p> no dishes found</p>)}
    </Row>
    </div>
  )
}

export default AdminProduct