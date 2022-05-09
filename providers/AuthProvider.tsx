import React, { useContext, createContext, useState } from 'react';
import app from '../Realm';
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export const AuthContext = createContext<{
  user: any,
  signIn: (email: string, password: string) => Promise<void>,
  signUp: (email: string, password: string) => Promise<void>,
  signOut: () => void,
}>({
  user: app.currentUser,
  signIn: async (email: string, password: string) => {},
  signUp: async (email: string, password: string) => {},
  signOut: () => {},
});

export default function AuthProvider({ children } : { children: JSX.Element }) {
  const [user, setUser] = useState(app.currentUser);

  async function signIn(email: string, password: string) {
    const creds = Realm.Credentials.emailPassword(email, password);
    const newUser = await app.logIn(creds);
    setUser(newUser);
  };

  async function signUp(email: string, password: string) {
    await app.emailPasswordAuth.registerUser({ email, password });
  };

  function signOut() {
    if (user == null) {
      console.warn("Not logged in, can't log out!");
      return;
    }
    user.logOut();
    setUser(null);
  };

  const value = {
    user,
    signIn, 
    signOut, 
    signUp
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}