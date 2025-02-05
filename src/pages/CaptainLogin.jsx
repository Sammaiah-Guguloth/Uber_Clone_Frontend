import React, { useState , useContext  } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {CaptainDataContext} from '../context/CaptainContext';
import axios from 'axios';


const CaptainLogin = () => {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const navigate = useNavigate();

  const {captain , setCaptain} = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email : email,
      password : password,
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login` , captainData);

      if(response.status === 201) {
        console.log("respone : " , response);
        const data = response.data;
        localStorage.setItem("token" , data.token);
        setCaptain(data.captain);
        navigate("/captain-home")
      }
    }
    catch(error) {
      console.log("Error while logging in captain : " , error);
    }

    setEmail("");
    setPassword("");
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>

      <div>
        <img className='w-20 mb-3' alt='Uber' src='https://www.svgrepo.com/show/505031/uber-driver.svg'/>

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
        <p className='text-center'>Join a fleet ? <Link to="/captain-signup"  className='text-blue-600'>Register as a Captain</Link></p>

      </div>

      <div>

        <Link to={"/login"}
           className='bg-[#d5622d] flex items-center justify-center text-white mb-5 font-semibold rounded px-4 py-2  w-full text-lg '
        >Sign in as User</Link>

      </div>
      
    </div>
  )
}

export default CaptainLogin