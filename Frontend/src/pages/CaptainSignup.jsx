import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const captainSignup = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setcaptainData] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault();
    setcaptainData({
      fullName:{
        firstName:firstName,
        lastName:lastName,
      },
      email:email,
      password:password,
    });
    console.log(captainData);
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');

  }
  return (
    <div className='p-6 flex flex-col h-screen justify-between'>
      <div>
        <img className='w-15' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        <form action="" onSubmit={(e) => { submitHandler(e) }} >
        <h3 className='text-lg font-semibold mb-2'>what's your Name</h3>
          <div className='flex gap-1.5 overflow-x-hidden mb-5'>
            <input 
              type="text" 
              required
              value={firstName}
              onChange={(val)=>{
                setFirstName(val.target.value)
              }}
              placeholder='First Name'
              className='bg-[#eeeeee] rounded border w-1/2 px-3 py-2 text-lg placeholder:text-base' 
            />
            <input 
              type="text" 
              required
              value={lastName}
              onChange={(val)=>{
                setLastName(val.target.value)
              }}
              placeholder='Last Name'
              className='bg-[#eeeeee] rounded border px-3 w-1/2 py-2 text-lg placeholder:text-base' 
            />
          </div>
          <h3 className='text-lg font-semibold mb-2'>what's your email</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(val) => {
              setEmail(val.target.value)
            }}
            placeholder='email@example.com'
            className='bg-[#eeeeee] rounded border px-3 py-2 w-full text-lg placeholder:text-base mb-5'
          />
          <h3 className='text-lg font-semibold mb-2'>password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            placeholder='**********'
            className='bg-[#eeeeee] border rounded w-full px-3 py-2 text-lg placeholder:text-base mb-5'
          />
          <button className='bg-black text-white rounded p-3 font-bold w-full mb-2'>Signup Now</button>
        </form>
        <p className='text-lg text-center mb-2'>Already have an account? <Link to='/captain-login' className='text-purple-500 '>Login as a captain</Link></p>
      </div>
      <div>
        <Link to='/signup' className='bg-[#b70bae] flex items-center justify-center text-white rounded p-3 font-bold w-full '>Signup as a user</Link>
      </div>
    </div>
  )
}

export default captainSignup
