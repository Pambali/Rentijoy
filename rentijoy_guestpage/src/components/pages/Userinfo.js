import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signlog.css"
import image from './image/userpro.png';
import Navbar from "../Navbar";


function Userinfo(){
    
 let navigate=useNavigate();
let userdetail = localStorage.getItem('user_mail')
   userdetail = JSON.parse(userdetail)
   console.log(userdetail)
   const defaulT={message:"Sucessful Logout",
                 users:{userId:"-",
                        userName:"-",
                        userEmail:"-",
                        userPhone:0,
                        userPassword:"-",
                        Logged:false,
                        createdAt:"-",
                        updatedAt:"-"
                }}
   let logged=localStorage.getItem('log')
   logged==='true'?logged=true:logged=false;

   function onLogout(){  
    localStorage.setItem('log',false)
    localStorage.setItem('user_mail',JSON.stringify(defaulT))
       alert("Logout Succesfully");
           navigate("/")
    }

    
    return(
        <><Navbar/>
        <div className="totaluserinfo">
        <div className="userinfo">
           
               <div className="userprofile">   
              <h2>User Profile</h2>
              <img className="image" src={image} alt=" "></img>
               </div>
             <div  className="userdetail">
                 
                  <p><label>UserId  : </label><span className="userchild1">{userdetail.users.userId}</span></p>
                  <p><label>UserName : </label><span className="userchild2">{userdetail.users.userName}</span></p>
                  <p><label>UserEmail : </label><span className="userchild3">{userdetail.users.userEmail}</span></p>
                  <p><label>Phone Number : </label><span className="userchild4">{userdetail.users.userPhone}</span></p><br/>
            
             <button className="btn1" onClick={onLogout}>LOGOUT</button>
             </div>
             
               
         </div>
         <h3>Are you Permanately delete your account?<Link to="/delete">Remove</Link>
               </h3>
               </div>
         </>
    )
}
 
  export default Userinfo;


