import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Order.css'; // Import the CSS file here

function Order() {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const userToken = localStorage.getItem('token');
                const tokenWithBearer = `Bearer ${userToken}`;
                const response = await axios.get(`http://localhost:5000/api/users/order/${id}`, {
                    headers: { Authorization: tokenWithBearer }
                });
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
                        <p><strong>Discount 5%:</strong> ₹ {(order.total_amount * 5 / 100).toFixed(2)} -/</p>
                        <p><strong>Amount To Pay:</strong> ₹ {(order.total_amount - order.total_amount * 5 / 100).toFixed(2)} -/</p>
                    </div>

                    <div className='confirmation-text'>
                        {/* <h2>Order Confirmed</h2> */}
                        <h2>Your Order is Confirmed. Thank You for Choosing Us!</h2>
                    </div>
                </>
            )}
        </div>
    );
}

export default Order;
