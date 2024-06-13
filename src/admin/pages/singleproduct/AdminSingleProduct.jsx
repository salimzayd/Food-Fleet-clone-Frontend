import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import "./AdminSingleProduct.css";
import 'aos/dist/aos.css';
import Aos from 'aos';
import AdminInstance from '../../../axiosinterceptors/Adminaxiosinterceptor';

const AdminSingleProduct = () => {

    useEffect(() =>{
        Aos.init()
    }, [])

    const { id } = useParams();
    const [dish, setDish] = useState([]);

    useEffect(() => {
        const fetchdish = async () => {
            try {
                const response = await AdminInstance.get(`/api/admin/dishes/${id}`);
                setDish(response.data.data);
            } catch (err) {
                console.log("error fetching dish", err);
            }
        };

        if (id) {
            fetchdish();
        }
    }, [id]);

    return (
        <>
            <div className='main-container'></div>
            <div className='product-card-container'>
                {dish && (
                    <Card className='product-card' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <Card.Img
                            className='mx-auto'
                            variant='top'
                            src={dish.image} />

                        <Card.Body className='text-center'>
                            <Card.Title>{dish.title}</Card.Title>
                            <h3 style={{ color: "gold" }}>₹{dish.price} -/</h3>
                            <h3>{dish.category}</h3>
                            <div>Description:<h2>{dish.description}</h2></div>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </>
    );
}

export default AdminSingleProduct;
