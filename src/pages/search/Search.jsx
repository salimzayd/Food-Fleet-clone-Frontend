import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./Search.css"
import { Button } from 'react-bootstrap';
import userInstance from '../../axiosinterceptors/UserAxiosInterceptor';

const Search = () => {
    const location = useLocation();
    const [dishToShow, setDishToShow] = useState(null);
    const [error, setError] = useState(null);
    const [search,setSearch] = useState('')

    const searcheddish = dishToShow.filter(dishes => dishes.title.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        const fetchDish = async () => {
            try {
                const token = localStorage.getItem('token')
                const headers = token ? {Authorization: `Bearer ${token}`} : {};
                const searchParams = new URLSearchParams(location.search);
                const titlequery = searchParams.get('title');

                const response = await userInstance.get(`/search?title=${titlequery}`,{headers});
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
            {searcheddish && (
                <div className='result-box'>
                    <h2 style={{marginRight:"60px"}}>Search Result:</h2>
                    <div className='result-cntnt'>
                        <p>Title: {searcheddish.title}</p>
                        <p>Price: {searcheddish.price}</p>
                        <p>Category: {searcheddish.category}</p>
                        <img src={searcheddish.image} alt={searcheddish.title} />
                        <Button style={{marginLeft:"5px"}} className='bg-success'>Buy Now</Button>
                        
                    </div>

                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default Search;
