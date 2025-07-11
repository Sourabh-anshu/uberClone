import React, { useContext,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const captainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { captain, setCaptain } = useContext(CaptainDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e)=>{
      e.preventDefault();
      const captainData = {
        email:email,
        password:password,
      };

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData);

      if(response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }

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
