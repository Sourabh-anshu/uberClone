import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userDataContext } from '../context/UserContext';
import axios from 'axios';

const userLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setuserData] = useState({});

  const {user, setUser} = useContext(userDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e)=>{
    e.preventDefault();
    const userData = {
      email:email,
      password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

    if(response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token);
      navigate('/home');
    }

    setEmail('');
    setPassword('');
    
  }
  return (
    <div className='p-6 flex flex-col h-screen justify-between'>
      <div>
        <img className='w-15 mb-5' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
        <form action="" onSubmit={(e)=>{submitHandler(e)}} >
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
            className='bg-[#eeeeee] border rounded w-full px-3 py-2 text-lg placeholder:text-base mb-6'
          />
          <button className='bg-black text-white rounded p-3 font-bold w-full mb-2'>Login</button>
        </form>
        <p className='text-lg text-center mb-1'>New here? <Link to='/signup' className='text-blue-500 '>Create an Account</Link></p>
      </div>
      <div>
        <Link to='/captain-login' className='bg-[#25b70b] flex items-center justify-center text-white rounded p-3 font-bold w-full '>Login as captain</Link>
      </div>
    </div>
  )
}

export default userLogin
