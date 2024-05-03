import React, { useState } from 'react'
import Adminbar from './Adminbar'
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'


const Adminhome = () => {
    const [data,setData] = useState('')


    const navigate  = useNavigate()
  return (
    <div className='d-flex bg-secondary w-100'>
        <div>
            <Adminbar />
        </div>

        <div className='d-flex mt-5'>
            <div>
                <Card 
                style={{width:'18rem'}}
                className='mb-2 m-2 bg-success'
                onClick={() => navigate("/adminusers")}>
                    <Card.Header>Users</Card.Header>
                    <Card.Body>
                        <Card.Title>Users</Card.Title>
                        <Card.Text>
                            <h1>{}</h1>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div>
                <Card style={{width:"18rem"}}
                className='mb-2 m-2 bg-warning'
                onClick={() => navigate("/vieworder")}>
                    <Card.Header>Orders</Card.Header>
                    <Card.Body>
                        <Card.Title>ORDERS</Card.Title>
                        <Card.Text>
                            <h1>{}</h1>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>


            <div>
                <Card style={{width:"18rem"}}
                className='mb-2 m-2 bg-primary'>
                    <Card.Header>Delivered</Card.Header>
                    <Card.Body>
                        <Card.Title>Delivery</Card.Title>
                        <Card.Text>
                            <h1>{5}</h1>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>
    </div>
  )
}

export default Adminhome