import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    console.log(`token is: ${token}`);


    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        if(response.status === 200){
            localStorage.removeItem('token');
            navigate('/captain-login');
        }
    }).catch(err=>{
        console.log(`Logout failed ${err.message}`);
        
    })
    
  return (
    <div>
      
    </div>
  )
}

export default CaptainLogout