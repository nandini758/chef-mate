import React from 'react';
import { Link } from 'react-router-dom';
import './MainHome.css';
import TrendingSlider from './TrendingSlider'
import MainHomeTrending from './MainHomeTrending';
function MainHome() {
  return (
    <div className="main-container">
      <div className="inner-container">
        <Link to='/SignUp' className='Link' >
          <button className='btn1'>SignUp</button>
        </Link>
        <Link to='/Login' className='Link' >
          <button className='btn2'>Login</button>
        </Link>
        <Link to='/AboutUs' className='Link' >
          <div className='btn3'>About Us</div>
        </Link>
        <Link to='/ContactUs' className='Link' >
          <div className='btn4'>Contact Us</div>
        </Link>
        <div className="image-container">
          <img id='chef-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZAbMz8QA9Hh925XJn6hynUQeVbA8YKPOEiwHkWsAjpw&s' alt="Chef Logo" />
        </div>
        <div className="slider-overlay "style={{marginTop:'0.8rem'}}>
          <MainHomeTrending/>
        </div>
      </div>
    </div>
  );
}

export default MainHome;
