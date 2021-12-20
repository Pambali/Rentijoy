import React from "react";
import Navbar from "../Navbar";
import axios from "axios";
import{useNavigate} from 'react-router-dom'

function Delete(){
  let  navigate=useNavigate();
    function handle(e){
        e.preventDefault();
        console.log("executed")
        
         // eslint-disable-next-line
        {axios.post("http://localhost:4000/user/deleteaccount",{
            userEmail:document.getElementById("user_mail").value,  
        })
        .then(resp=>{
            alert(resp.data.message);
            console.log("data Stored",resp.data)
            console.log(document.getElementById("user_mail").value);
            document.getElementById("user_mail").value="";
            navigate('/sign-up');
            onRemove();
        })
        .catch(function(err){
            console.log(err);
        })
    }
    }

       function onRemove(){
        localStorage.setItem('log',false);
        alert("your account succesfully Removed")
        navigate("/")
       }

    
        return(
           <center>
          
            <div>
                <Navbar/>
                 <form onSubmit={handle}>
                 <div className="delete">
                 <div className="formElements"> 
                  User Email 
                 <input type="email" name="user_mail" id="user_mail" required pattern='^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' ></input>
                 <span style={{color:"#f00"}} ></span>
                 </div><br />
                 <div className="formElements">
                 <button className="btn1"  type="submit">submit</button>
                 <button className="btn1"onClick={()=>navigate("/")}>cancle</button>
                 </div>
                 </div>
                 </form>
            </div>
          
             </center>
        )
    

}
export default Delete;