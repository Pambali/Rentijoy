import React from 'react';
import "./signlog.css";
import axios from 'axios';
import { useNavigate } from 'react-router';
import Navbar from '../Navbar';

 function Forgotpassword(){
   
     let navigate=useNavigate();
    function handleSubmit(e){
        e.preventDefault();  
       const user_mail=document.getElementById("user_mail");
       const password=document.getElementById("password");
       const confirmpassword=document.getElementById("confirmpassword");
       
       onEmpty(user_mail)
       onEmpty(password);
       onEmpty(confirmpassword);
    if((password.value!=="" ||confirmpassword.value!=="")&&(password.value===confirmpassword.value))
        {axios.post("http://localhost:4000/user/forgotPassword",{
            userEmail:document.getElementById("user_mail").value,
            userPassword:document.getElementById("password").value
        })
        .then(resp=>{
            alert(resp.data.message);
            if(resp.data.message==="Password changed successfully "){
            console.log("data Stored",resp.data)
            document.getElementById("user_mail").value="";
            document.getElementById("password").value="";
            document.getElementById("confirmpassword").value="";
            navigate('/login');
            }
        })
        .catch(function(err){
            console.log(err);
        })
    }else{
        
            confirmpassword.nextElementSibling.innerHTML="Password mismatch"
          
    }
      
    }
    function onchange(p){
        document.getElementById(p.target.id).nextElementSibling.innerHTML=""
       }
    
    function onEmpty(p){
        if(p.value===""){
          p.nextElementSibling.innerHTML="This field is required";
        }
       }
  
     function cancle(){
        alert("cancel")
        navigate("/login")
      }
      

         return(
             <>
              <Navbar/>
             <div className="forgot">
                 <h2>Forgot password</h2>
                 <form onSubmit={handleSubmit}>
                 <div className="forgot_password">
                 <div className="formElements">
                  User Email 
                 <input type="email" name="user_mail" id="user_mail" required pattern='^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' onChange={onchange}></input>
                 <span style={{color:"#f00"}} ></span>
                 </div><br/>
                 <div className="formElements">  
                  Enter New Password 
                 <input type="password" name="password" id="password" required pattern="[A-Z]{1,}[a-z]{5,}[0-9]{2,}" onChange={onchange}></input>
                 <span style={{color:"#f00"}} ></span>
                 </div><br />
                 <div className="formElements">
                  Confirm password 
                  <input type="password" name="confirmpassword" id="confirmpassword" onChange={onchange}></input>
                  <span style={{color:"#f00"}} ></span>
                  </div><br/>
                 <div> 
                 <button className="btn1"  onClick={()=> navigate("/login")} type="submit">submit</button>
                 <button className="btn1" onClick={cancle}>Cancel</button>
                 </div>
                 </div>
                 </form>
             </div>
             </>
         )
 }
  
 export default Forgotpassword;    