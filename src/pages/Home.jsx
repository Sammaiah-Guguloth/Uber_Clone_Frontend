import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {

  const [pickup , setPickup] = useState("");
  const [destination , setDestination] = useState("");
  const [panelOpen , setPanelOpen] = useState(false);
  const [vehiclePanel , setVehiclePanel] = useState(false);
  const [confirmRidePanel , setConfirmRidePanel] = useState(false);
  const [vehicleFound , setVehicleFound] = useState(false);
  const [waitingForDriver , setWaitingForDriver] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  useGSAP(() => {
    if(panelOpen) {
      gsap.to(panelRef.current , {
        height : '70%',
        padding : 24,
      })
      gsap.to(panelCloseRef.current , {
        opacity : 1,
      })
    }else {
      gsap.to(panelRef.current , {
        height : '0%',
        padding : 0,
      })
      gsap.to(panelCloseRef.current , {
        opacity : 0,
      })
    }
  } , [panelOpen]);

  useGSAP(() => {
    if(vehiclePanel) {
      gsap.to(vehiclePanelRef.current , {
        transform : "translateY(0)",
      })
    }
    else {
      gsap.to(vehiclePanelRef.current , {
        transform : "translateY(100%)",
      })
    }
  } , [vehiclePanel]);

  useGSAP(() => {
    if(confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current , {
        transform : "translateY(0)",
      })
    }
    else {
      gsap.to(confirmRidePanelRef.current , {
        transform : "translateY(100%)",
      })
    }
  } , [confirmRidePanel]);

  useGSAP(() => {
    if(vehicleFound) {
      gsap.to(vehicleFoundRef.current , {
        transform : "translateY(0)",
      })
    }
    else {
      gsap.to(vehicleFoundRef.current , {
        transform : "translateY(100%)",
      })
    }
  } , [vehicleFound]);

  useGSAP(() => {
    if(waitingForDriver) {
      gsap.to(waitingForDriverRef.current , {
        transform : "translateY(0)",
      })
    }
    else {
      gsap.to(waitingForDriverRef.current , {
        transform : "translateY(100%)",
      })
    }
  } , [waitingForDriver]);

  const submitHandler = async (e) => {
    e.preventDefault();
  }


  return (
    <div className='h-screen relative overflow-hidden'>

      {/* Uber logo on top */}
      <img className='w-16 absolute left-5 top-5' alt='Uber' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'/>

      {/* background map */}
      <div className='h-screen w-screen'>
        {/* for tempo use */}
        <img className='w-full h-full object-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' />
      </div>
      
      {/* Ride input form , to  */}
      <div className='h-screen absolute top-0 w-full flex flex-col justify-end'>
        {/* Initial form */}
        <div className='bg-white  h-[30%] p-5 w-full relative text-2xl '>
          <h5 ref={panelCloseRef} onClick={
            () => setPanelOpen(false)
          }>
            <i className="ri-arrow-down-wide-line absolute right-6 top-6 "></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={submitHandler} className='relative'>
            <div className='line absolute h-16 w-1 top-[30%] left-6 bg-gray-800 rounded-full'></div>

            <input 
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
              type='text' 
              placeholder='Add a pick up location' 
            />
            <input 
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' 
              type='text' 
              placeholder='Enter you destination' />
         
          </form>

        </div>
        
        {/* Locations panel */}
        <div ref={panelRef} className='bg-white h-0 '>
            <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>

      </div>
      
      {/* Opens when user selects a location : vehicle panel */}
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>          
        <VehiclePanel setVehiclePanel = {setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel} />
      </div>
      
      {/* Opens when user selects the vehicle : Confirm Ride panel*/}
      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>          
        <ConfirmRide  setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      {/* Looking for a Driver */}
      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-10'>          
        <LookingForDriver setVehicleFound = {setVehicleFound} />
      </div>
        
      {/* Waiting for a Driver */}
      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-10'>          
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>

    </div>
  )
}

export default Home