import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 onClick={() => { props.setVehiclePanelOpen(false) }} className='p-3 w-[90%] absolute text-center top-0 pt-1'><i className="text-2xl ri-arrow-down-wide-line"></i></h5>
        <h2 className='text-3xl font-semibold my-5'>Choose a vehicles</h2>
        <div onClick={()=> {props.setConfirmRidePanel(true), props.setVehiclePanelOpen(false) }} className='flex items-center border-2 active:border-black border-gray-200 rounded-xl justify-between p-3 mx-1 mb-5'>
          <img className='h-15' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png" alt="car-icon" />

          <div>
            <h4 className='text-xl'>UberGo <span><i className="ri-user-line"></i>4</span></h4>
            <h5>2 mins away</h5>
            <p className='text-gray-500'>Affordable, compact rides</p>
          </div>
          <h2>₹193</h2>
        </div>
        <div onClick={()=> {props.setConfirmRidePanel(true), props.setVehiclePanelOpen(false)  }} className='flex items-center border-2 active:border-black border-gray-200 rounded-xl justify-between p-3 mx-1 mb-5'>
          <img className='h-15' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="car-icon" />

          <div>
            <h4 className='text-xl'>Moto <span><i className="ri-user-line"></i>1</span></h4>
            <h5>2 mins away</h5>
            <p className='text-gray-500'>Affordable, compact rides</p>
          </div>
          <h2>₹193</h2>
        </div>
        <div onClick={()=> {props.setConfirmRidePanel(true), props.setVehiclePanelOpen(false)  }} className='flex items-center border-2 active:border-black border-gray-200 rounded-xl justify-between p-3 mx-1 mb-5'>
          <img className='h-15' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="car-icon" />

          <div>
            <h4 className='text-xl'>Auto <span><i className="ri-user-line"></i>3</span></h4>
            <h5>2 mins away</h5>
            <p className='text-gray-500'>Affordable, compact rides</p>
          </div>
          <h2>₹193</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
