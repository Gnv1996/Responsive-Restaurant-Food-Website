import React from 'react';
import ser2 from './images/food.jpg';
import ser1 from './images/order.png';
import ser3 from './images/3.png';
import './Functionals.css';

function Service() {
  return (
    <div className='service'>
      <div className='ser'>
    <div className='ser'>
        <img src={ser2} alt='page loading' style={{height:400, width:500, }}/>
        <h3 className='text-center tk'>Tasty Food</h3>
        <p>Enjoy the lavishly delicious taste of chicken curry at home with this easy-to-follow recipe. Bold spices like ginger, cumin, and curry powder add rich layers of flavor to succulent chicken coated in a creamy tomato-based sauce. Fill your kitchen with the delightful fragrance of a creamy, spicy, and filling curry that the whole family will love.</p>

      </div>

      </div>
      <div className='ser'>
      <img src={ser1} alt='page loading' style={{height:400, width:400}}/>
      <h3 className='text-center tk'>Oder Now</h3>
      <p>Order India's finest North Indian Food from Dana Choga. Get high-quality food with offers. Taste the authentic award-winning legacy of Dana Choga at home. Order online & get offers. Best North Indian Food. Order Now. Special Thali. Authentic Indian Food.</p>

      </div>
      <div className='ser'>
      <img src={ser3} alt='page loading' style={{height:400, width:400}}/>
      <h3 className='text-center tk'>Delivery</h3>
      <p>Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, <strong>Gumla</strong>, Delhi, Gurgaon, Nagpur, Jaipur, Coimbatore, Chandigarh, Ahemdabad, ...
      Get food delivery to your doorstep from thousands of amazing local and national restaurants. Find the meal you crave and order food from ...</p>
        </div>
       
      
    </div>
  )
}
export default Service;


