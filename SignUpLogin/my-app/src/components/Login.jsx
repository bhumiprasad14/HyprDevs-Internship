import React from 'react';
import './Login.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Login = ({toggle}) => {
  return (
    <section className="login">
      <div className="container">
        <div className="header"><span>Login</span></div>
        <form>
          <div className="input">
            <i className="icons fa-solid fa-user"></i>
            <input type="text" placeholder="Enter your name" required/>

          </div>
          <div className="input">
            <i className=" icons fa-solid fa-lock"></i>
            <input type="password" placeholder="Enter your password" required/>
            
          </div>
          <button type="submit" className='button' >Login</button>
        </form>
        <p>Don't have an account? <button onClick={toggle} className="link-btn">Signup</button></p>
    </div>
    </section>
  )
}
export default Login;
