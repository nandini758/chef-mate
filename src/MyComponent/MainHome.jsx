import React from 'react';
import { Link } from 'react-router-dom';
import './MainHome.css';

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
        <div className="image-container">
          <img id='chef-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZAbMz8QA9Hh925XJn6hynUQeVbA8YKPOEiwHkWsAjpw&s' alt="Chef Logo" />
        </div>
        <div className="slider-overlay">
          {/* Add your TrendingSlider component here */}
        </div>
      </div>
    </div>
  );
}

export default MainHome;
