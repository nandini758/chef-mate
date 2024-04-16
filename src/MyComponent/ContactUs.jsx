import { useState } from 'react';
import './ContactUs.css';
import {useNavigate } from 'react-router-dom';

function ContactUs(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        subject: '',
        message: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/');
    };
    function BackToHomeBtn(){
        navigate('/');
    }
  return (
    <div className="mainContainers">
      <div className="container-contactUs">
        <img className='contact-img' src="ContactUs.jpg" alt="" />
        <div className="buttonContainer">
          <button className='backToHome1' onClick={BackToHomeBtn}>Back to Home</button>
        </div>
        <div className='contactUs-inner-container'>
            <div className="contactUs-heading">
            <div className="head">Contact Us</div>
            <div className="under-line"></div>
            </div>
            <form action="" onSubmit={handleSubmit} >
            <div className="contact-inputs">
              <div className="contact-input">
               <input type="text" 
                placeholder='First Name'
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}/>
              </div>
              <div className="contact-input">
               <input type="email"
                placeholder='Email'
                name="email"
                value={formData.email}
                onChange={handleChange} />
              </div>
              <div className="contact-input">
               <input type="text" placeholder='Subject'
               name="subject"
               value={formData.subject}
               onChange={handleChange} />
              </div>
              <div className="textArea">
               <textarea type="text" placeholder='Massage'
               name="message"
               value={formData.message}
               onChange={handleChange}></textarea>
              </div>
                <button className="contact-submit" >Submit</button>
             
            </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
