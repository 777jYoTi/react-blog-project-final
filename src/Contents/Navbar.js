import React ,{useState} from "react";
import { Link } from "react-router-dom";
// import {CgMenu} from "react-icons/cg"
import {CgMenu} from "react-icons/cg"

const Navbar = () => {
   

  const [isNavExpanded, setIsNavExpanded] = useState(false)


  return (
    
      <div className="nav-box">
        <div className='head'><span className='the'>The</span><span className='siren'>Siren</span> </div>
        <div >
          
          <div  >
            <div class="bg-light p-4">
              <center  className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        } >
                <ul  type="none">
                  <li><Link to='/' className='list'>Home</Link></li>
                  <li><Link to='/bollywood' className='list'>Bollywood</Link></li>
                  <li><Link to='/technology' className='list'>Technology</Link></li>
                  <li><Link to='/hollywood' className='list'>Hollywood</Link></li>
                  <li><Link to='/fitness' className='list'>Fitness</Link></li>
                  <li><Link to='/food' className='list'>Food</Link></li>
                </ul>
              </center>
            </div>
          </div>
          <button id="toggler" type='button'onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }} >
           
          <CgMenu/> 
          </button>
        </div>

        
        <hr className='navhr' />
        {/* bollywood stories*/}
      </div>
      );
};


export default Navbar;
