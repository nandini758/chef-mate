import { useState } from 'react';
import './Login.css'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import {  signInWithEmailAndPassword} from 'firebase/auth'

function Login({history}){
    const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async () => {
        
       
      try {

        const user=await signInWithEmailAndPassword(auth, email, password);
        if(user)
        { 
            navigate('/Home')
        }
        else
        {
            navigate('/Login')
        }
      } 
      catch (err)
      {
        alert(err.message)
      }
    };
    return(
        <div className="containers">
           
            <div className="header">
              <div className="text">Login</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
               <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="input">
               <input type="Password" placeholder='Password'value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="forget">Forget Password? Click here!</div>
              < button className="submit-container" onClick={handleLogin}>
                <div className="submit">Login</div>
              </button>
            </div>
        </div>
    )
}

export default Login;