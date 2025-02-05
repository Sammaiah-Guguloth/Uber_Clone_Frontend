import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-[url(https://images.unsplash.com/photo-1624724126923-e2c021df1311?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 w-full bg-cover bg-center flex flex-col justify-between'>
        <img className='w-16 ml-8' alt='Uber' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'/>
        <div className='bg-white pb-7 px-4 py-4'>
          <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
          <Link to="/login" className='w-full flex items-center justify-center bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>

    </div>
  )
}

export default Start;