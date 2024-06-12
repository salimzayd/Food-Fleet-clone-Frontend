import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import AdminInstance from '../../../axiosinterceptors/Adminaxiosinterceptor';
import AdminBar from '../../components/Adminbar';
import { toast } from 'react-toastify';
import "./Adminhome.css";

const Adminhome = () => {
    const [data, setData] = useState('');
    const [count, setCount] = useState(0);
    const [ordercount, setOrdercount] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchcount = async () => {
            try {
                const adminToken = localStorage.getItem('adminToken');
                if (!adminToken) {
                    toast.error("Admin token is not found");
                    return;
                }
                const response = await AdminInstance.get('/users');
                setCount(response.data.datacount);
            } catch (error) {
                console.error(error);
            }
        };
        fetchcount();
    }, []);

    useEffect(() => {
        const ordercount = async () => {
            try {
                const adminToken = localStorage.getItem('adminToken');
                if (!adminToken) {
                    toast.error("Admin token is not found");
                    return;
                }
                const eresponse = await AdminInstance.get('/orders',{headers:{Authorization:`Bearer ${adminToken}`}});
                setOrdercount(eresponse.data.datacount);
            } catch (error) {
                console.error(error);
            }
        };
        ordercount();
    }, []);

    return (
        <div className='adhome d-flex w-100'>
            <AdminBar />
            <div className='d-flex mt-5 flex-wrap justify-content-center'>
                <div>
                    <Card
                        style={{ width: '20rem' }}
                        className='adcard mb-2 m-2'
                        onClick={() => navigate("/adminusers")}>
                        <Card.Header className='cdhead'>Users</Card.Header>
                        <Card.Body>
                            <Card.Title>Users</Card.Title>
                            <Card.Text>
                                <h1>{count}</h1>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: "18rem" }}
                        className='adcard mb-2 m-2'
                        onClick={() => navigate("/adminorder")}>
                        <Card.Header className='cdhead'>Orders</Card.Header>
                        <Card.Body>
                            <Card.Title>ORDERS</Card.Title>
                            <Card.Text>
                                <h1>{ordercount}</h1>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: "18rem" }}
                        className='adcard mb-2 m-2'>
                        <Card.Header className='cdhead'>Delivered</Card.Header>
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
    );
};

export default Adminhome;
