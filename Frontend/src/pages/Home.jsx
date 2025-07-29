import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelopen, setPanelopen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

  }

  useGSAP(function () {
    if (panelopen) {
      gsap.to(panelRef.current, {
        height: '75%',
        opacity:'1'
      })
      gsap.to(panelCloseRef.current, {
        opacity:'1',
      })
    }
    else {
      gsap.to(panelRef.current, {
        height: '0%',
        opacity:'0'
      })
      gsap.to(panelCloseRef.current, {
        opacity:'0',
      })
    }
  }, [panelopen])

  return (

    <div className='h-screen relative overflow-hidden'>
      <img className='absolute w-30 pt-5 pl-5' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />

      <div className='w-screen h-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-screen flex flex-col justify-end top-0 absolute w-full '>
        <div className='h-[25%] p-5 bg-white relative'>
          <h5 
            ref={panelCloseRef}
            onClick={()=>{
              setPanelopen(false);
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
                setPanelopen(true);
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
                setPanelopen(true);
              }}
            />
          </form>
        </div>

        <div ref={panelRef} className='h-0 bg-white'>
              <LocationSearchPanel />
        </div>
      </div>
      <div className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-5 pb-5'>
        <h2 className='text-3xl font-semibold my-5'>Choose a vehicles</h2>
        <div className='flex items-center border-2 active:border-black border-gray-200 rounded-xl justify-between p-3 mx-1 mb-5'>
          <img className='h-15' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png" alt="car-icon" />
          
          <div>
            <h4 className='text-xl'>UberGo <span><i className="ri-user-line"></i>4</span></h4>
            <h5>2 mins away</h5>
            <p className='text-gray-500'>Affordable, compact rides</p>
          </div>
          <h2>₹193</h2>
        </div>
        <div className='flex items-center border-2 active:border-black border-gray-200 rounded-xl justify-between p-3 mx-1 mb-5'>
          <img className='h-15' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="car-icon" />
          
          <div>
            <h4 className='text-xl'>Moto <span><i className="ri-user-line"></i>1</span></h4>
            <h5>2 mins away</h5>
            <p className='text-gray-500'>Affordable, compact rides</p>
          </div>
          <h2>₹193</h2>
        </div>
        <div className='flex items-center border-2 active:border-black border-gray-200 rounded-xl justify-between p-3 mx-1 mb-5'>
          <img className='h-15' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="car-icon" />
          
          <div>
            <h4 className='text-xl'>Auto <span><i className="ri-user-line"></i>3</span></h4>
            <h5>2 mins away</h5>
            <p className='text-gray-500'>Affordable, compact rides</p>
          </div>
          <h2>₹193</h2>
        </div>
      </div>
    </div>

  )
}

export default home