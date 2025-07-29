import React, { createContext, useState } from 'react'

export const userDataContext = createContext()


const UserContext = ({children}) => {

  const [user,setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error,setError] = useState(null);

  const updateUser = (userData) => {
    setUser(userData);
  }

  const value = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    error,
    setError,
    updateUser
  };

  return (
    <div>
        <userDataContext.Provider value={value}>
            {children}
        </userDataContext.Provider>
    </div>
  )
}

export default UserContext
