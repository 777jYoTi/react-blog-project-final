import React from 'react'
import Navbar from './Navbar'
import TechnologyTop from './Technology/TechnologyTop'
import BollywoodTop from './Bollywood/BollywoodTop'
import HollywoodTop from './Hollywood/HollywoodTop'
import FoodTop from './Food/FoodTop'
import FitnessTop from './Fitness/FitnessTop'
import Earth from "../Images/earth.jpg"
import Kace from "../Images/kace.jpg"
const Home = () => {
  
  return (
    <div>
        <Navbar/>
        <div className='flexrow'>
          <div>
          <img className='img1' style={{borderRadius:'10px'}} src={Earth} width='90%' height='400px' alt='404 error'/>
          </div>
          <div className='flexcol'>
          <div>
          <img className='img2' style={{borderRadius:'10px',marginTop:'8px'}} src={Kace} width='90%' height='190px' alt='404 error'/>
          </div>
          <div>
          <img className='img3' style={{borderRadius:'10px',marginTop:'8px'}}  src={Kace}  width='90%' height='190px' alt='404 error'/>
          </div>
          </div>
        
      
        </div>
                 
       <TechnologyTop/>
       <BollywoodTop/>
       <HollywoodTop/>
       <FoodTop/>
       <FitnessTop/>
      </div>
  )
}

export default Home