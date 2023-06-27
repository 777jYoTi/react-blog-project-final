import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import './Food.css';
import { useNavigate } from 'react-router-dom';

const FoodFullView = () => {
    const data = useLocation().state.data;
    const navigate = useNavigate()
    return (
        <>
        <Navbar/>
        <div className='full-view'>
            <center>
            <span className='title-full-view'>{data.title}</span><br/>
            <img src={ data.img} alt="empty" className='food-full-view-img'/>
            <p className='full-view-para'>{data.description}</p>
            <button onClick={()=>{navigate("/food")}}>Back</button>
            </center>
        </div>
        </>
    )
}

export default FoodFullView