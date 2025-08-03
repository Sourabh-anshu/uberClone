import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelopen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const vehiclePanelOpenRef = useRef(null);
  const [confirmRidePanel,setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null);
  const [vehicleFound,setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);
  const [waitingForDriver,setWaitingForDriver] = useState(false);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

  }

  useGSAP(function () {
    if (panelopen) {
      gsap.to(panelRef.current, {
        height: '75%',
        opacity: '1'
      })
      gsap.to(panelCloseRef.current, {
        opacity: '1',
      })
    }
    else {
      gsap.to(panelRef.current, {
        height: '0%',
        opacity: '0'
      })
      gsap.to(panelCloseRef.current, {
        opacity: '0',
      })
    }
  }, [panelopen])

  useGSAP(function () {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelOpenRef.current, {
        transform: 'translateY(0)',
      })

    }
    else {
      gsap.to(vehiclePanelOpenRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehiclePanelOpen])

  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)',
      })

    }
    else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmRidePanel])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)',
      })

    }
    else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehicleFound])

  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)',
      })

    }
    else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [waitingForDriver])

  return (

    <div className='h-screen relative overflow-hidden'>
      <img className='absolute w-30 pt-5 pl-5' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />

      <div onClick={() => { setVehiclePanelOpen(false) }} className='w-screen h-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-screen flex flex-col justify-end top-0 absolute w-full '>
        <div className='h-[25%] p-5 bg-white relative'>
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className='absolute opacity-0 top-6 right-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>
            <div className="line absolute h-15 w-1 top-[42.5%] bg-gray-700 rounded-full left-10"></div>
            <input
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type="text"
              placeholder='Add a pick-up location'
              value={pickup}
              onChange={(val) => {
                setPickup(val.target.value)
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
            />
            <input
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' type="text"
              placeholder='Enter your destination'
              value={destination}
              onChange={(v) => {
                setDestination(v.target.value)
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
            />
          </form>
        </div>

        <div ref={panelRef} className='h-0 bg-white'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
      </div>
      <div ref={vehiclePanelOpenRef} className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-5 py-5'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} />
      </div>
      <div ref={confirmRidePanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-5 py-5'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-5 py-5'>
        <LookingForDriver />
      </div>
      <div ref={waitingForDriverRef} className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-5 py-5'>
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>

  )
}

export default home