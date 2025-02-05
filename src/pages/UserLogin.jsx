import React, { useState } from 'react'
import {  Link , useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'


const UserLogin = () => {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const navigate = useNavigate();
  const {user , setUser} = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const loginData = {
      email:email,
      password: password,
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login` , loginData);

      if(response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token" , data.token);
        navigate("/home");
      }
    }
    catch(error) {
      console.log("Error while logging  the user : " , error);
    }
    
    setEmail("");
    setPassword("");
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>

      <div>
        <img className='w-16 mb-10' alt='Uber' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'/>

        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>

          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required 
            type='email' 
            placeholder='email@example.com' 
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

          <input  
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required 
            type='password' 
            placeholder='password' 
          />

          <button type='submit'
            className='bg-[#111] text-white mb-4 font-semibold rounded px-4 py-2  w-full text-lg '
          >Login</button>

        </form>
        <p className='text-center'>New here ? <Link to="/signup"  className='text-blue-600'>Create new Account</Link></p>

      </div>

      <div>

        <Link to={"/captain-login"}
           className='bg-[#10b461] flex items-center justify-center text-white mb-5 font-semibold rounded px-4 py-2  w-full text-lg '
        >Sign in as Captain</Link>

      </div>
      
    </div>
  )
}

export default UserLogin