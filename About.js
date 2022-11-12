import React from 'react';
import './Functionals.css';
import about from './images/about-img.jpg';

function About() {
  return (
    <div className='about'>
      <div className='left'>
        <img src={about} alt='please wait' />


      </div>
      <div className='right'>
        <p>A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.</p>
    <p>Early eating establishments recognizable as restaurants in the modern sense emerged in Song dynasty China during the 11th and 12th centuries. In large cities, such as Kaifeng and Hangzhou, food catering establishments catered to merchants who travelled between cities. Probably growing out of tea houses and taverns which catered to travellers, Kaifeng's restaurants blossomed into an industry that catered to locals as well as people from other regions of China. As travelling merchants were not used to local cuisine of other cities, these establishments were set up to serve dishes familiar to merchants from other parts of China. Such establishments were located in the entertainment districts of major cities, alongside hotels, bars, and brothels. The larger and more opulent of these establishments offered a dining experience that was similar to modern restaurant culture. According to a Chinese manuscript from 1126, patrons of one such establishment were greeted with a selection of pre-plated demonstration dishes which represented food options. Customers had their orders taken by a team of waiters who would then sing their orders to the kitchen and distribute the dishes in the exact order in which they had been orderedS</p>
      
      </div>
      <div className='btn'>Explore More</div>
      
    </div>
  )
}
export default About;