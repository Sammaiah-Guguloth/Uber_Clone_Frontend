import React, { useState , useContext } from 'react'
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainSignUp = () => {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  const [vehicleColor , setVehicleColor] = useState("");
  const [vehiclePlate , setVehiclePlate] = useState("");
  const [vehicleCapacity , setVehicleCapacity] = useState(1);
  const [vehicleType , setVehicleType] = useState("");

  const navigate = useNavigate();

  const {captain ,setCaptain} = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullName : {
        firstName : firstName,
        lastName : lastName,
      },
      email : email,
      password : password,
      vehicle : {
        color : vehicleColor,
        plate : vehiclePlate,
        capacity : vehicleCapacity,
        type : vehicleType
      }
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

      console.log("response : " , response);

      if(response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        // console.log("captain : " , captain);
        navigate("/captain-home");
      }
    }
    catch(error) {
      console.log("Error while signing up captain : " , error);;
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity(1);
    setVehicleType("");
  }

  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>

      <div>
        <img className='w-20 mb-1' alt='Uber' src='https://www.svgrepo.com/show/505031/uber-driver.svg'/>

        <form onSubmit={submitHandler}>
          
          <h3 className='text-lg font-medium mb-2 w-full'>What's our Captain's  Name</h3>
          <div className='flex gap-4 mb-4'>
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


          <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>

          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required 
            type='email' 
            placeholder='email@example.com' 
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

          <input  
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required 
            type='password' 
            placeholder='password' 
          />

          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-2'>
            <input 
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              required 
              type='text' 
              placeholder='Vehicle Color' 
            />
            <input 
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              required 
              type='text' 
              placeholder='Vehicle Plate'   
          />

          </div>


          <div className='flex gap-4 mb-5'>
            <input 
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              required 
              type='number' min={1} 
              placeholder='Vehicle Capacity' 
            />
            <select  
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'>
                <option disabled value={""}>Vehicle Type</option>
                <option value={"car"}>Car</option>
                <option value={"motorcycle"}>Motorcycle</option>
                <option value={"auto"}>Auto</option>

            </select>

          </div>
          

          <button type='submit'
            className='bg-[#111] text-white mb-4 font-semibold rounded px-4 py-2  w-full text-lg '
          >Create Captain Account</button>

        </form>
        <p className='text-center'>Already have a ccount ? <Link to="/captain-login "  className='text-blue-600'>Login here</Link></p>

      </div>

      <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
      
    </div>
  )
}

export default CaptainSignUp