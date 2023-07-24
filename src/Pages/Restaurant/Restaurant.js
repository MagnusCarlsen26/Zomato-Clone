import './Restaurant.css'
import React from 'react';
import { useLocation } from 'react-router-dom';

const Restaurant = (props) => {
    const location = useLocation();
    const restaurantData = location.state && location.state.restaurantData;
    return (
        <>
            <div>
            <h1>{restaurantData.name}</h1>
            {/* Display other information using restaurantData */}
            </div>
        </>
    )
} 
export default Restaurant