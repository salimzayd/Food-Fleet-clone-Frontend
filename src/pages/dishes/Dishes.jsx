import React, { useEffect, useState } from "react";
import {Button,Card,Col,Row} from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';
import userInstance from '../../axiosinterceptors/UserAxiosInterceptor';




const Dishes = () =>{
    

    useEffect(() =>{
        AOS.init()
    })
    const navigate  = useNavigate()

    const [dishes,setDishes] = useState([])
    // const [btn,setBtn] =  useState(true);
    const [search,setSearch] = useState('')

    const searchedDish = dishes.filter(dishes => dishes.title.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        const fetchDishes = async () => {
            try{
            
                const response = await userInstance.get('/dishes')
                setDishes(response.data.data)
                console.log(response.data.data);
            }
            catch(error){
                console.log("Error fetching dishes: ",error);
            }
        }
        fetchDishes()
    },[])

    const handleSearch =
     (e) => {
        setSearch(e.target.value)
    }

     return(
        <div>
           <div className='d-flex mx-8 mt-3 ' style={{justifyContent:"center"}}>    
           
                <input
                    type="text"
                    placeholder="Search here"
                    value={search.title}
                    onChange={handleSearch}
                    style={{width:"350px", height:"38px",padding:"10px" }}
                />
        </div>

            <Row className="justify-content-center m-4">
            { searchedDish.length > 0 ? (
            searchedDish.map((item) => (
                <Col key={item._id} xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4">
                    <Card style={{width:"17rem", marginTop:"15px", backgroundColor:"silver"}} data-aos="flip-up">
                        <Card.Img style={{width:"17rem",height:"13rem"}} variant="top" src={item.image} alt="Loading.." />
                        <Card.Body className="text-center">
                            <Card.Title className="mt-2">{item.title}</Card.Title>
                            <Card.Text>
                                <h2> ₹ {item.price}/-</h2>
                                <h4 className="text-danger">{item.category}</h4>
                            </Card.Text>
                            <Button className="bg-primary" variant="danger" onClick={() => navigate(`/singledish/${item._id}`)}>
                                View Dish
                            </Button>
                            
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