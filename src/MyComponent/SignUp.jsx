import './SignUp.css'
function SignUp(){
    return(
        <div className="containers">
            <div className="header">
              <div className="text">SignUp</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
               <input type="text" placeholder='First Name'/>
              </div>
              <div className="input">
               <input type="text" placeholder='Last Name'/>
              </div>
              <div className="input">
               <input type="email" placeholder='Email'/>
              </div>
              <div className="input">
               <input type="Password" placeholder='Password'/>
              </div>
              <div className="forget">Forget Password? Click here!</div>
              < button className="submit-container">
                <div className="submit">SignUp</div>
              </button>
            </div>
        </div>
    )
}

export default SignUp;