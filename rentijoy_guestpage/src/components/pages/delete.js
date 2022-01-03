import React from "react";
import Navbar from "../Navbar";
import axios from "axios";
import{useNavigate} from 'react-router-dom'

function Delete(){
  let  navigate=useNavigate();
  let userdetail = localStorage.getItem('user_mail')   ;
  userdetail = JSON.parse(userdetail);
    function handle(e){
       e.preventDefault(); 
       if(document.getElementById("user_mail").value===userdetail.users.userEmail) {   
        // eslint-disable-next-line    
        {axios.post("http://localhost:4000/user/deleteaccount",{
            userEmail:document.getElementById("user_mail").value,  
        })
        .then(resp=>{
            alert(resp.data.message);
            console.log("data Stored",resp.data)
            console.log(document.getElementById("user_mail").value);
            document.getElementById("user_mail").value="";
            if(resp.data.message==="succesfully deleted"){
            onRemove();
            }else{
                navigate("/")
            }
        })
        .catch(function(err){
            console.log(err);
        })
    }}
    else{
        alert('Wrong account. Please login to that account');
    }
    }

       function onRemove(){
        localStorage.setItem('log',false);
        navigate("/")
       }

    
        return(
           <center>
             <Navbar/>
            <div className="total_delete_container">
                 <form onSubmit={handle}>
                 <div className="delete">
                     <h2 className="remove">Remove account</h2>
                 <div>
                  User Email : 
                 <input type="email" name="user_mail" id="user_mail" required pattern='^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' ></input>
                 <span style={{color:"#f00"}} ></span>
                 </div><br />
                 <div>
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