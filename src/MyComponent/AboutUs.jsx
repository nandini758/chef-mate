import './AboutUs.css'
import {useNavigate } from 'react-router-dom';
function AboutUs(){
    const navigate = useNavigate();
    function BackToHomeBtn(){
        navigate('/');
    }
    return(
        <div>
            <div className="aboutUs-container">
             <div className="container-AboutUs">
             <img className='about-img' src="aboutUs-page.png" alt="" />
             </div>
             <div className="buttonContainer">
             <button className='backToHome1' onClick={BackToHomeBtn}>Back to Home</button>
             </div>
             <div className="heading">About Us :-</div>
             <div className="about-chefmate">
                <p>ChefMate stands out as an enticing culinary companion, offering a delightful array of recipes from Indian, Chinese, British, and Thai cuisines. It not only provides step-by-step instructions for each dish but also offers detailed insights into the necessary ingredients. With ChefMate at your fingertips, cooking becomes a seamless and enjoyable experience, empowering users to effortlessly create a wide variety of delectable dishes.</p>
             </div>
            </div>
        </div>
    )
}

export default AboutUs;