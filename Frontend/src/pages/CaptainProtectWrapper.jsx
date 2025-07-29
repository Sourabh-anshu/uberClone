import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainProtectWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token');
    const navigate= useNavigate();
    const {captain,setCaptain} = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if(!token)
          navigate('/captain-login');

      const fetchCaptainProfile = async() =>{
        await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response =>{
        if(response.status === 200){
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      }).catch(e=>{
        console.log(`${e} is coming...`);
        localStorage.removeItem('token');
        navigate('/captain-login');
      });
      }

      fetchCaptainProfile();
    }, [token]);

    if(isLoading){
      return (
        <div>...Loading</div>
      )
    }
  return (
    <>
        {children} 
    </>
  )

}

export default CaptainProtectWrapper