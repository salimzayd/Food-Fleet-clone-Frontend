import React, { useEffect, useState } from "react";
import {Button,Card,Col,Navbar,Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from "react-toastify";



const Dishes = () =>{
    

    useEffect(() =>{
        AOS.init()
    })
    const navigate  = useNavigate()

    const [dishes,setDishes] = useState([])
    const [btn,setBtn] =  useState(true)



    useEffect(() => {
        const fetchDishes = async () => {
            try{
                const usertoken = localStorage.getItem('token')
                const tokenWithBearer = `Bearer ${usertoken}`
                const response = await axios.get('http://localhost:5000/api/users/dishes',{
                    headers:{Authorization:tokenWithBearer,
                    "Content-Type":"multipart/form-data",}
                })
                setDishes(response.data.data)
                console.log(response.data.data);
            }
            catch(error){
                console.log("Error fetching dishes: ",error);
            }
        }
        fetchDishes()
    },[])

    // const handleaddcart = async () => {
    //     try{

    //         const userid = localStorage.getItem('userId')
    //         const usertoken = localStorage.getItem('token');
    //         const tokenWithBearer = `Bearer ${usertoken}`
    //         const response = await axios.post(`http://localhost:5000/api/users/cart/${userid}`,{headers:
    //         {Authorization:tokenWithBearer}
    //         })
    //         if(response.status === 200){
    //             toast.success("dish added to cart successfully")
    //             setBtn(false)
    //         }

    //     }catch(error){
    //         console.error(error);
    // }
    // }
     return(
        <div>
           <div className='d-flex mx-8 mt-3 ' style={{justifyContent:"center"}}>    
             <form class="form-inline "  >

            <input class="form-control mr-sm-10 bg-white"  style={{width:"20rem"}}  type="search" placeholder="Search here" aria-label="Search"/>
            </form>
        </div>

            <Row className="justify-content-center m-4" style={{backgroundColor:"#040D12"}}>
            { dishes.length > 0 ? (
            dishes.map((item) => (
                <Col key={item._id} xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4">
                    <Card style={{width:"17rem", marginTop:"15px", backgroundColor:"silver"}} data-aos="flip-up">
                        <Card.Img style={{width:"17rem",height:"13rem"}} variant="top" src={item.image} alt="Loading.." />
                        <Card.Body className="text-center">
                            <Card.Title className="mt-2">{item.title}</Card.Title>
                            <Card.Text>
                                <h2> ₹ {item.price}-/</h2>
                                <h4 className="text-danger">{item.category}</h4>
                            </Card.Text>
                            <Button className="bg-primary" variant="danger" onClick={() => navigate(`/singledish/${item._id}`)}>
                                View Dish
                            </Button>
                            
                            {/* {btn ? (
                  <Button className='bg-success' variant='primary' style={{marginLeft:"5px"}} onClick={handleaddcart}>
                    Add to Cart
                  </Button>
                ) : (
                  <Button className='bg-danger' variant='primary' >
                    Go To Cart
                  </Button>
                )} */}
                        </Card.Body>
                    </Card>
                </Col>
            )) ): (<p>No dishes found </p>)
            }
            </Row>

        </div>
     )
}

export default Dishes