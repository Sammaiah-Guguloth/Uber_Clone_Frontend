import React , {useState , useContext} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios';
import {UserDataContext} from '../context/UserContext';

const UserSignUp =  () => {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  
  const {user , setUser} = useContext(UserDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullName : {
        firstName: firstName,
        lastName: lastName,
      },
      email:email,
      password: password,
    }

    try {
      const response =  await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register` , newUser);

      if(response.status == 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token" , data.token)
        navigate("/home")
      }

    }
    catch(error) {
      console.log("Error while registering the user : " , error); 
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>

      <div>
        <img className='w-16 mb-10' alt='Uber' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'/>

        <form onSubmit={submitHandler}>
          
          <h3 className='text-lg font-medium mb-2'>What's your Name</h3>
          <div className='flex gap-4 mb-6'>
            <input 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              required 
              type='text' 
              placeholder='First name' 
            />
            <input 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              required 
              type='text' 
              placeholder='Last name'   
          />

          </div>


          <h3 className='text-lg font-medium mb-2'>What's your email</h3>

          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required 
            type='email' 
            placeholder='email@example.com' 
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

          <input  
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required 
            type='password' 
            placeholder='password' 
          />

          <button type='submit'
            className='bg-[#111] text-white mb-4 font-semibold rounded px-4 py-2  w-full text-lg '
          >Create account</button>

        </form>
        <p className='text-center'>Already have a ccount ? <Link to="/login"  className='text-blue-600'>Login here</Link></p>

      </div>

      <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
      
    </div>
  )
}

export default UserSignUp