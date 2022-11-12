import React from 'react';
import './Functionals.css';
import {Link} from 'react-router-dom';


function Headers() {
  return (
    <div className='containers'>
        <div className='header'>
            <div className='navbar'>
                <ul>
                  <li><Link to='/home'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/service'>Service</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
                </ul>
              
                
             

            </div>


        </div>
        
      
    </div>
  )
}
export default Headers;
