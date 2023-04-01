import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import AuthenticateUser from './loginUtility';
function Login(){
    return(
        <div id="LoginMain">
        <div id="LoginPage">
        <span className='twitterLogo'><i className="fa-brands fa-twitter icon" ></i></span>
         <h1 className='Loginheading'>  Login To Twitter</h1>

         <form id="LoginForm" onSubmit={(e)=>{AuthenticateUser(e)}}>
            <input type='text' className='LoginInput' placeholder="Username"  name="LoginUser" />
            
            <input type='password' className='LoginPassword' placeholder="Password" name="LoginPassword" />
            
             <button type="submit" className='LoginButton'>Login</button>
            
            <div>
      <p>Don't have an account?<Link to="/">Sign In</Link></p> 
            </div>
         </form>
        </div>
        </div>
    )
}

export default Login;