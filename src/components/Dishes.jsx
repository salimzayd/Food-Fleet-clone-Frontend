import React from "react";
import {Button,Card,Col,Navbar,Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DishPrdcts from "../components/DishPrdcts"
import { BsSearch } from "react-icons/bs";



const Dishes = () =>{
    const navigate = useNavigate()
     return(
        <div>
           <div className='d-flex mx-8 mt-3 ' style={{justifyContent:"center"}}>    
             <form class="form-inline "  >

            <input class="form-control mr-sm-10 bg-white"  style={{width:"20rem"}}  type="search" placeholder="Search here" aria-label="Search"/>
            </form>
        </div>

            <Row className="justify-content-center m-4">
            {DishPrdcts.map((item) => (
                <Col key={item.id} xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4">
                    <Card style={{width:"17rem"}}>
                        <Card.Img style={{width:"17rem",height:"13rem"}} variant="top" src={item.img} alt="Loading.." />
                        <Card.Body className="text-center">
                            <Card.Title className="mt-2">{item.title}</Card.Title>
                            <Card.Text>
                                <h2> RS {item.price}</h2>
                                <h4 className="text-danger">{item.category}</h4>
                                <h3>{item.reviews}</h3>
                            </Card.Text>
                            <Button className="bg-primary" variant="danger">
                                View Dish
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>

        </div>
     )
}

export default Dishes