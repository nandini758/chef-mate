
import { Link } from 'react-router-dom';
import './MainHome.css'
function MainHome(){
    return(
        
          <div className="container">
            <img id='chef-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZAbMz8QA9Hh925XJn6hynUQeVbA8YKPOEiwHkWsAjpw&s'/>
            <Link to='/SignUp' className='Link' >
            <button className='btn1'>SignUp</button>
            </Link>
            <Link to='/Login' className='Link'>
            <button className='btn2'>Login</button>
            </Link>
            <img src="/photo-chefmate.jpg" alt="" />
            
          </div>

    )
}

export default MainHome;