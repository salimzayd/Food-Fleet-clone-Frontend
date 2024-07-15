import React, { useEffect, useState, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './viewDish.css';
import { toast } from 'react-toastify';
import { SyncLoader } from 'react-spinners';
import userInstance from '../../axiosinterceptors/UserAxiosInterceptor';

const initialqnty = 1;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            if (state > 1) {
                return state - 1;
            }
            return state;
        default:
            return state;
    }
};

const ViewDish = () => {
    const [loading, setLoading] = useState(false);
    const [review, setReview] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init();
    }, []);

    const { id } = useParams();
    const [dish, setDish] = useState(null);

    useEffect(() => {
        const fetchDish = async () => {
            try {
                const usertoken = localStorage.getItem('token');
                const tokenWithBearer = `Bearer ${usertoken}`;
                if (!usertoken) {
                    toast.error("You are not logged in!");
                    navigate('/login');
                }
                const response = await userInstance.get(`/api/users/dishes/${id}`, {
                    headers: { Authorization: tokenWithBearer }
                });

                setDish(response.data.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }
        fetchDish();
    }, [id, navigate]);

    const [count, dispatch] = useReducer(reducer, initialqnty);
    const totalAmount = dish?.price ?? 0;
    const amountttl = totalAmount * count;

    const handlePayment = async () => {
    setLoading(true);
    try {
        const usertoken = localStorage.getItem('token');
        const name = localStorage.getItem('name');
        const userid = localStorage.getItem('_id');

        if (!usertoken) {
            console.log('Token not found');
            toast.error("User not authenticated");
            setLoading(false);
            return;
        }
        const tokenWithBearer = `Bearer ${usertoken}`;

        // Log token and user details for debugging
        console.log('Token:', usertoken);
        console.log('User ID:', userid);
        
        const orderresponse = await userInstance.post('/api/users/order', {
            userId: userid,
            productIds: id,
            amount: amountttl,
            currency: "INR"
        }, {
            headers: { Authorization: tokenWithBearer }
        });

        console.log('Order Response:', orderresponse);

        const { payment_id, _id: orderId } = orderresponse.data.data;

        const response = await userInstance.post('/api/users/payment', {
            amount: amountttl * 100,
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            payment_id
        }, {
            headers: { Authorization: tokenWithBearer }
        });

        console.log('Payment Response:', response);

        const { data } = response.data;
        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY,
            amount: data.amount,
            currency: data.currency,
            name: "FOODFLEET",
            description: "Test transaction",
            image: dish.image,
            order_id: data.id,
            handler: () => {
                toast.success("Payment successful");
                navigate(`/order/${orderId}`);
            },
            prefill: {
                name: name,
            },
            theme: {
                color: "#3399cc"
            }
        };

        const rzpay = new window.Razorpay(options);
        rzpay.open();
    } catch (error) {
        console.error("Payment failed", error);
        toast.error("Payment failed. Please try again later");
    }
    setLoading(false);
};


    useEffect(() => {
        const fetchReview = async () => {
            try {
                const usertoken = localStorage.getItem('token');
                const tokenWithBearer = `Bearer ${usertoken}`;
                if (!usertoken) {
                    toast.error("You are not logged in!");
                    navigate('/login');
                }
                const reviewresponse = await userInstance.get(`/api/users/review/${id}`, {
                    headers: { Authorization: tokenWithBearer }
                });
                setReview(reviewresponse.data.data);
            } catch (error) {
                console.error("Error fetching reviews", error);
            }
        }
        fetchReview();
    }, [id, navigate]);

    return (
        <>
            <div style={{ height: "680px", backgroundColor: "#FCFFE0" }}>
                <div className='col-20' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {dish && (
                        <Card className='' data-aos="flip-right" style={{ marginTop: "15px", backgroundColor: "#003C43", borderRadius: "25px", boxShadow: "5px 6px 10px #77B0AA" }} >
                            <Card.Img
                                className='mx-auto'
                                style={{ width: "25rem", height: "15rem", borderRadius: "25px" }}
                                variant='top'
                                src={dish.image} />

                            <Card.Body className='text-center'>

                                <Card.Title style={{ color: "white" }}>{dish.title}</Card.Title>
                                <h3 style={{ color: "gold" }}>₹{totalAmount * count}-/</h3>
                                <h3 style={{ color: "white" }}>{dish.category}</h3>
                                <h3 style={{ color: "#8DECB4" }}>quantity:{count}</h3>
                                <div>
                                    <button onClick={() => dispatch('increment')} style={{ width: "70px", height: "40px", borderRadius: "15px", color: "black", backgroundColor: "#A1DD70", border: "0px", marginRight: "15px", fontSize: "larger", position: "relative" }}>
                                        + </button>
                                    <button onClick={() => dispatch('decrement')} style={{ width: "70px", height: "40px", borderRadius: "15px", color: "black", backgroundColor: "#C40C0C", border: "0px", fontSize: "larger" }}> - </button>
                                </div>

                                <div style={{ backgroundColor: "#003C43", width: "350px", height: "180px", color: "white" }}>
                                    Description:<h4>{dish.description}</h4>

                                    <Button className='bg-success' onClick={handlePayment} style={{ width: "200px" }}>
                                        {loading ? (
                                            <SyncLoader color='#68D2E8' loading={loading} style={{ alignItems: "center" }} />
                                        ) : <>Buy Now</>}
                                    </Button>
                                </div>

                            </Card.Body>
                        </Card>

                    )}

                    <div className='review-sec'>
                        <p>Read on to find out what our customers want to say about this dish!</p>
                        <div className='reviews'>
                            {review.map((item, index) => (
                                <div key={index} className='review card'>
                                    <div className='review-hdr'>
                                        <div>{item.user.name}</div>
                                    </div>
                                    <div className='review-details'>
                                        <h3>{item.user.name}</h3>
                                    </div>
                                    <div className='review-body'>
                                        <p>{item.reviewText}</p>
                                    </div>

                                    <div className='review-rating'>
                                        {"★".repeat(item.rating)}
                                        {"☆".repeat(5 - item.rating)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ViewDish;
