import './SignUp.css'
import { auth } from '../Firebase'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function SignUp({history}){
  const navigate=useNavigate();

  const[firstName, setFirstName]= useState('')
  const[lastName, setLastName]= useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignUp = async () => {
    try {
      
      const user=await createUserWithEmailAndPassword(auth, email, password);
      if(user)
      {
        
        navigate('/Login')
      }
      else{
        navigate('/SignUp')
      }
      // Redirect to login page or any other page
      
    } catch (error) {
     alert("error")
    }
    
  };
    return(
        <div className="containers">
            <div className="header">
              <div className="text">SignUp</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
               <input type="text" placeholder='First Name'value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="input">
               <input type="text" placeholder='Last Name'value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className="input">
               <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="input">
               <input type="Password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="forget">Already SignUp? <Link to={'/Login'}>Login</Link></div>
              < button className="submit-container">
                <div className="submit" onClick={handleSignUp}>SignUp</div>
              </button>
            </div>
        </div>
    )
}

export default SignUp;