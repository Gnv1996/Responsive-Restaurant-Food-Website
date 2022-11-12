import React from 'react';
import './Functionals.css';
import {Link} from 'react-router-dom';
import log1 from './images/logo1.png';
import log2 from './images/logo2.png';
import log3 from './images/logo3.png';
import log4 from './images/logo4.png';

function Footer() {
  return (
    <div className='containers'>
        <div className='footer'>
            <div className='footer-list'>
                <ul>
                    <li><strong>Products</strong></li>
                    <hr/>
                    <li>Stocks</li>
                    <li>Futures & OPtions</li>
                    <li>Mutual Funds</li>
                    <li>Us Stocks</li>

                </ul>

            </div>

            <div className='footer-list'>
                <ul>
                    <li><strong>Groww</strong></li>
                    <hr/>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Blogs</li>
                    <li>Media & Press</li>
                    <li>Amc Mutuals Funds</li>
                    <li>Careers</li>
                    <li>Help & Support</li>

                </ul>

            </div>

            <div className='footer-list'>
                <ul>
                    <li><strong>Quicks Links</strong></li>
                    <hr/>
                    <li>Calculators</li>
                    <li>Glossary</li>
                    <li>Open Demat Account</li>
                    <li>Grow Digest</li>
                    <li>Download Forms</li>
                    <li>Grows Academy</li>
                    <li>Sitemap</li>

                </ul>

            </div>

            <div className='footer-list'>
                <ul>
                    <li><strong>Menu</strong></li>
                    <hr/>
                  <li><Link to='/home'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/service'>Service</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
                </ul>


            </div>

           
               
            <div className='footer-list'><img src={log1}  alt='load page please wait' style={{height:80, width:80}}/></div>
            <div className='footer-list'><img src={log2}  alt='load page please wait'style={{height:80, width:80}} /></div>
            <div className='footer-list'><img src={log3}  alt='load page please wait'style={{height:80, width:80}} /></div>
            <div className='footer-list'><img src={log4}  alt='load page please wait'style={{height:80, width:80}} /></div>




            

        </div>


       
        <h3 className='tt' >@copyright by Gautam Web Developer</h3>
    </div>
  )
}

export default Footer;
