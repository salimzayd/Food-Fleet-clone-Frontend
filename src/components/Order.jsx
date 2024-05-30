import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Order.css'; // Import the CSS file here
import userInstance from './axiosinterceptors/UserAxiosInterceptor';

function Order() {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                
                const response = await userInstance.get(`/order/${id}`, );
                setOrder(response.data.data);
                console.log(response.data.data, "Order data fetched successfully.");
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchOrderDetails();
    }, [id]);

    return (
        <div className='order-container'>
            <div className='order-header'>
                <h1>Order Details</h1>
            </div>
            {order && (
                <>
                    <div className='order-details'>
                        <p><strong>User:</strong> {order.usermodel.name}</p>
                        <p><strong>Dish:</strong> {order.products.title}</p>
                        <p><strong>Date:</strong> {order.date}</p>
                        <p><strong>Total Amount:</strong> ₹ {order.total_amount} -/</p>
                    </div>

                    <div className='billing-model'>
                        <h2>Billing Information</h2>
                        <p><strong>Total Amount:</strong> ₹ {order.total_amount} -/</p>
                        <p><strong>Discount 5%:</strong> ₹ {order.total_amount * 5 / 100}-/</p>
                        <p><strong>Amount To Pay:</strong> ₹ {order.total_amount - order.total_amount * 5 / 100} -/</p>
                    </div>
                    <div className='confirmation-text'>
                        {/* <h2>Order Confirmed</h2> */}
                        <h2>Your Order is Confirmed. Thank You for Choosing Us!</h2>
                    </div>
                    
                        <button className='btn-back' onClick={() => navigate('/dishes')}>Go To Dishes</button>
                    
                </>
            )}
        </div>
    );
}

export default Order;
