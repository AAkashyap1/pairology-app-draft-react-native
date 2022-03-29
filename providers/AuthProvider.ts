import React, { useContext, useState, useEffect } from 'react';
const AuthContext = React.createContext({})

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children } : { children: JSX.Element }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  
  function signUp() {

  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signout,
    signup
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}