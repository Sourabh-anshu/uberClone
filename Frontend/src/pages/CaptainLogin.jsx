import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const captainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setcaptainData] = useState({});
  
    const submitHandler = (e)=>{
      e.preventDefault();
      setcaptainData({
        email:email,
        password:password,
      });
      console.log(captainData);
      setEmail('');
      setPassword('');
      
    }
  return (
    <div className='p-6 flex flex-col h-screen justify-between'>
      <div>
        <img className='w-15' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        <form action="" onSubmit={(e) => { submitHandler(e) }} >
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
            className='bg-[#eeeeee] border rounded w-full px-3 py-2 text-lg placeholder:text-base mb-6'
          />
          <button className='bg-black text-white rounded p-3 font-bold w-full mb-2'>Login</button>
        </form>
        <p className='text-lg text-center mb-1'>New here? <Link to='/captain-signup' className='text-purple-500 '>Join in as a Captain</Link></p>
      </div>
      <div>
        <Link to='/login' className='bg-[#b70bae] flex items-center justify-center text-white rounded p-3 font-bold w-full '>Login as a user</Link>
      </div>
    </div>
  )
}

export default captainLogin
