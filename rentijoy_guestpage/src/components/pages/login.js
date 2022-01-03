import React from 'react';
import axios from 'axios';
import image from './image/image.jpeg';
import './signlog.css';
import {useNavigate,Link} from "react-router-dom";
import Navbar from '../Navbar';


function Login(){
  let navigate=useNavigate();
  function handleSubmit(){   
    
    
    axios.post("http://localhost:4000/user/getUser",
    {
      userEmail:document.getElementById("user_mail").value,
      userPassword:document.getElementById("password").value
    })
    .then(resp=>  
      {alert(resp.data.message);
       console.log(resp.data);

       if(resp.data.message==="Sucessful Login"){
        localStorage.setItem('log',true)
         localStorage.setItem('user_mail',JSON.stringify(resp.data))
          document.getElementById("user_mail").value="";
          document.getElementById("password").value="";
          navigate("/")
        }
    })
        
    .catch(function (err){
      console.log("check Login error",err)
    })
  }
function cancle(){
  alert("cancel")
  navigate("/")
}

    return (
<><Navbar/>
      <div className="Loginhole">
      <div className="Login">

                      <img src={image} alt=" "></img>
                      <div>
                      <h2>Login </h2>
                      Create account?
                      <Link id="link" to="/sign-up">Signup</Link>
                      </div>
                      <div>
                        User_mail :
                       <input type="email" name="user_mail" id="user_mail" ></input>
                       </div><br />
                       <div>
                        Password :
                       <input type="password" name="password" id="password"></input>
                       </div><br/>
                       <div className="forgot_password">
                       <Link id="link" to="/forgot_password">Forgot Password?</Link>
                       </div>
                       <div className="button1">
                       <button className="btn1" onClick={handleSubmit} >Submit</button>
                       <button className="btn1" onClick={cancle}>Cancel</button>
                       </div>
      </div>
      </div>
      
      </>
    );
  }


export default Login;
