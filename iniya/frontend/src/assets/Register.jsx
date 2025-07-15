import { useState } from "react";
import axios from 'axios';

export default function Register(){
const handleChange = (e) => setForm({...form,
    [e.target.name]: e.target.value})
const handleSubmit = async (e) =>{ e.preventDefault(); 
    try{
        const res= await axios.post ()
        alert(res.data.msg);}
        catch(err){
            alert(err.response.data.msg)
        }

    const[form,setForm] =useState({usename:'',email:'',password:''});
}
return(
   <form onSubmit={handleSubmit}>
    <input name="username" 
    type = "text"
            onChange={handleChange}
            placeholder="usename" 
            required
            />
             <br/>
             <input name="email"
              type = "email"
            onChange={handleChange}
            placeholder="email" 
            required
            />
              <br/>
            <input name="password"
             type = "password"
            onChange={handleChange}
            placeholder="password"
             required
             />
              <br/>
            <button type ="submit">Register</button>
            </form>

    )
}