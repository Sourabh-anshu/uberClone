import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { userDataContext } from '../context/UserContext'

const userSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigate = useNavigate();
  const {user, setUser} = useContext(userDataContext);

  const submitHandler = async (e)=>{
    e.preventDefault();
    const newUser = {
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      email:email,
      password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

    if(response.status === 201) {
      const data = response.data;

      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }
  return (
    <div className='p-6 flex flex-col h-screen justify-between'>
      <div>
        <img className='w-15 mb-5' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
        <form action="" onSubmit={(e)=>{submitHandler(e)}} >
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
            onChange={(val)=>{
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
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            placeholder='**********'
            className='bg-[#eeeeee] border rounded w-full px-3 py-2 text-lg placeholder:text-base mb-5'
          />
          <button className='bg-black text-white rounded p-3 font-bold w-full mb-2'>Create Account</button>
        </form>
        <p className='text-lg text-center mb-2'>Already have an account? <Link to='/login' className='text-blue-500 '>Login here</Link></p>
      </div>
      <div>
        <Link to='/captain-signup' className='bg-[#25b70b] flex items-center justify-center text-white rounded p-3 font-bold w-full '>Signup as captain</Link>
      </div>
    </div>
  )
}

export default userSignup
