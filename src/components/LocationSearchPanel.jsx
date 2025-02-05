import React from 'react'

const  LocationSearchPanel = ({ setVehiclePanel , setPanelOpen}) => {

    const locations = [
        "24B , Near Kapoor's cafe , Shreyians Coding School , Bhopal",
        "24B , Near Kapoor's cafe , Shreyians Coding School , Bhopal",
        "24B , Near Kapoor's cafe , Shreyians Coding School , Bhopal",
        "24B , Near Kapoor's cafe , Shreyians Coding School , Bhopal",
    ]

  return (
    <div>
        {/* this is just a sample data */}
        {
            locations.map((el , idx) => {
                return (
                    <div onClick={() => {
                        setVehiclePanel(true);
                        setPanelOpen(false);
                    }}
                         key={idx} className='flex gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl items-center justify-start'>
                        <h2 className='bg-[#eee] h-8 w-12 rounded-full flex items-center justify-center'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{el}</h4>
                    </div>
                )
            })
        }

    </div>
  )
}

export default LocationSearchPanel