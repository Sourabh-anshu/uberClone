import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div>
        <div className='w-full bg-cover bg-bottom bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] pt-6 flex justify-between flex-col h-screen bg-red-400'>
            <img className='w-15 ml-6' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
            <div className='bg-white py-5 px-4 pb-7'>
                <h2 className='text-3xl font-bold pl-4'>Get Started with Uber</h2>
                <Link to='/login' className='flex justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default home