import React from 'react'

const WaitingForDriver = (props) => {
    return (
        <div>
            <h5 onClick={() => { props.setWaitingForDriver(false) }} className='p-3 w-[90%] absolute text-center top-0 pt-1'><i className="text-2xl ri-arrow-down-wide-line"></i></h5>

            <div className='flex items-center justify-between '>
                <img className='h-15' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png" alt="car-icon" />
                <div className=' text-right'>
                    <h2 className='text-lg font-medium'>Driver's Name</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>Vehicle Plate Details</h4>
                    <p className='text-sm text-gray-600'>Vehicle Name</p>
                </div>
            </div>
            <div className='flex gap-2 items-center flex-col justify-between '>

                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <i className="text-lg ri-map-pin-line"></i>
                        <div >
                            <h3 className='text-lg font-medium'>pickup location</h3>
                            <p className='text-sm -mt-1 text-gray-600'>pickup location details</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <i className="text-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>drop location</h3>
                            <p className='text-sm -mt-1 text-gray-600'>drop location details</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 '>
                        <i className="text-lg ri-currency-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹XXX</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaitingForDriver
