import React from 'react'

const LookingForDriver = ({setVehicleFound}) => {
  return (
    
    <div>
        
        {/* close button */}
        <h5 onClick={()=>setVehicleFound(false)} className=' w-[93%] absolute top-0 p-1 text-center'>
            <i className="ri-arrow-down-wide-line text-3xl text-gray-300 py-10"></i>
        </h5>

        {/* heading */}
        <h2 className='text-2xl font-semibold mb-5'>Looking for a Driver</h2>

        {/* ride confirm details */}
        <div className='flex  gap-2 flex-col justify-between items-center'>

            <img className='h-30' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png' />

            <div className='w-full mt-5'>
                {/* current address */}
                <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                    <i className='text-lg ri-map-pin-user-fill'></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                    </div>
                </div>

                {/* to address */}
                <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                    <i className='text-lg ri-map-pin-2-fill'></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
                    </div>
                </div>

                {/* price */}
                <div className='flex items-center gap-5 p-3'>
                    <i className='text-lg ri-currency-line'></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹193.20</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash cash</p>
                    </div>
                </div>

            </div>

        </div>

    </div>

  )
}

export default LookingForDriver