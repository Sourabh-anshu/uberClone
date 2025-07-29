import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';


const captainSignup = () => {
  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const {captain,setCaptain} = React.useContext(CaptainDataContext)

  const submitHandler = async (e)=>{
    e.preventDefault();
    const captainData = {
      fullname:{
        firstname:firstName,
        lastname:lastName,
      },
      email:email,
      password:password,
      vehicle:{
        vehicleType:vehicleType,
        capacity:vehicleCapacity,
        color:vehicleColor,
        plate:vehiclePlate,
      },
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

    if(response.status === 201){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setVehicleCapacity('');
    setVehicleColor('');
    setVehiclePlate("");
    setVehicleType('');
  };

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
          <h3 className='text-lg font-semibold mb-2'>Vehicle Details</h3>
          <div className='flex flex-wrap gap-3 mb-5'>
            <input 
              type="text" 
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              placeholder='License Plate Number'
              className='bg-[#eeeeee] w-[48%] rounded border px-3 py-2 text-lg placeholder:text-base mb-3'
            />
            <input 
              type="text" 
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              placeholder='Vehicle Color'
              className='bg-[#eeeeee] w-[48%] rounded border px-3 py-2 text-lg placeholder:text-base mb-3'
            />
            <input 
              type="number" 
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              placeholder='Vehicle Capacity'
              className='bg-[#eeeeee] w-[48%] rounded border px-3 py-2 text-lg placeholder:text-base'
            />
            <select 
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
              className='bg-[#eeeeee] w-[48%] rounded border px-3 py-2 text-lg'
            >
              <option value="">Vehicle Type</option>
              <option value="motorcycle">Moto</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <button className='bg-black text-white rounded p-3 font-bold w-full mb-2'>Create Account</button>
        </form>
        <p className='text-lg text-center mb-2'>Already have an account? <Link to='/captain-login' className='text-purple-500 '>Login here</Link></p>
      </div>
      <div>
        <Link to='/signup' className='bg-[#b70bae] flex items-center justify-center text-white rounded p-3 font-bold w-full '>Signup as a user</Link>
      </div>
    </div>
  )
}

export default captainSignup
