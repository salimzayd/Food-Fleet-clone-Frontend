import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "./Search.css"
import { Button } from 'react-bootstrap';

const Search = () => {
    const location = useLocation();
    const [dishToShow, setDishToShow] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDish = async () => {
            try {
                const token = localStorage.getItem('token')
                const headers = token ? {Authorization: `Bearer ${token}`} : {};
                const searchParams = new URLSearchParams(location.search);
                const titlequery = searchParams.get('title');

                const response = await axios.get(`http://localhost:5000/api/users/search?title=${titlequery}`,{headers});
                const data = response.data.data;

            
                const foundDish = data.find((item) => item.title.toLowerCase() === titlequery.toLowerCase());
                if (foundDish) {
                    setDishToShow(foundDish);
                } else {
                    setError("Dish not found");
                }
            } catch (error) {
                console.error("Error fetching dishes:", error);
                setError("Error fetching dishes. Please try again later.");
            }
        };
        fetchDish();
    }, [location]);

    return (
        <div>
            {dishToShow && (
                <div className='result-box'>
                    <h2 style={{marginRight:"60px"}}>Search Result:</h2>
                    <div className='result-cntnt'>
                        <p>Title: {dishToShow.title}</p>
                        <p>Price: {dishToShow.price}</p>
                        <p>Category: {dishToShow.category}</p>
                        <img src={dishToShow.image} alt={dishToShow.title} />
                        <Button style={{marginLeft:"5px"}} className='bg-success'>Buy Now</Button>
                        
                    </div>

                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default Search;
