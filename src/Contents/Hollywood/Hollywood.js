import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import './Hollywood.css';

const HollywoodView = () => {
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
            <p>{data.date}</p>
            <button onClick={()=>{navigate("/hollywood")}}>Back</button>
            </center>
            
        </div>
        </>
    )
}

export default HollywoodView