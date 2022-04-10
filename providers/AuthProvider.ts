import React, { useContext, useState, useEffect, createContext } from 'react';
import app from '../Realm';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children } : { children: JSX.Element }) {
  const [user, setUser] = useState({});
  const idToken = getGoo
  
  async function login(email: string, password: string) {
    const creds = Realm.Credentials.emailPassword(email, password);
    const newUser = await app.logIn(creds);
    setUser(newUser);
  }

  async function signUp(email: string, password: string) {
    await app.emailPasswordAuth.registerUser({ email, password });
  }

  function signOut() {
    if (user == null) {
      console.warn("Not logged in, can't log out!");
      return;
    }
    user.logOut();
    setUser({});
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    user,
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