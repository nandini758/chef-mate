
import { Link } from 'react-router-dom';
import TrendingSlider from './TrendingSlider';
import './MainHome.css'
import Footer from './Footer';
function MainHome(){
    return(
     
      <div className="main-container">
        <div className="inner-container">
            <Link to='/SignUp' className='Link' >
            <button className='btn1'>SignUp</button>
            </Link>
            <Link to='/Login' className='Link' >
            <button className='btn2'>Login</button>
            </Link>
            <div className="image-container">
            <img id='chef-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZAbMz8QA9Hh925XJn6hynUQeVbA8YKPOEiwHkWsAjpw&s'/>
            </div>
            <div className="slider-overlay">
            <TrendingSlider />
            </div>
           
        </div>
      </div>

    )
}

export default MainHome;