import React from 'react'

const VehiclePanel = ({setVehiclePanel , setConfirmRidePanel}) => {
  return (

    <>
        <h5 onClick={()=>setVehiclePanel(false)} className=' w-[93%] absolute top-0 p-1 text-center'>
        <i className="ri-arrow-down-wide-line text-3xl text-gray-300 py-10"></i>
        </h5>

        <h2 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h2>
        <div onClick={()=>setConfirmRidePanel(true)} className='flex p-3 mb-2 w-full items-center justify-center active:border border-black rounded-xl'>
        <img className='h-15' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png' />
        <div className=' ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i> 4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs'>Affordable, compact rides</p>
        </div>
        <h2 className='font-medium text-lg ml-auto'>₹193.20</h2>
        </div>

        <div onClick={()=>setConfirmRidePanel(true)} className='flex p-3 mb-2 w-full items-center justify-center active:border border-black rounded-xl'>
        <img className='h-15' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png' /> 
        <div className=' ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i> 1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs'>Affordable, motorcycle rides</p>
        </div>
        <h2 className='font-medium text-lg ml-auto'>₹65</h2>
        </div>

        <div onClick={()=>setConfirmRidePanel(true)} className='flex p-3 mb-2 w-full items-center justify-center active:border border-black rounded-xl'>
        <img className='h-15' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png' /> 
        <div className=' ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i> 3</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs'>Affordable, auto rides</p>
        </div>
        <h2 className='font-medium text-lg ml-auto'>₹118.69</h2>
        </div>

    </>
  )
}

export default VehiclePanel