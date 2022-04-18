import React, { useContext, useState, useEffect, createContext } from 'react';
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export const AuthContext = createContext<{
  user: number,
  print: () => void,
  /*
  signUp: (email: string, password: string) => Promise<void>,
  signOut: () => Promise<void>,
  */
}>({
  user: 0,
  print: () => null
});

export default function AuthProvider({ children } : { children: JSX.Element }) {
  const user = 5;
  /*
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    picture: '',
    profilePic: '',
  });

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '776680840046-egip45nrgt2b2bgf2cuit1251007rbq9.apps.googleusercontent.com',
    iosClientId: '776680840046-859q9vja4vmal5igt1b4uq6ov272fhei.apps.googleusercontent.com',
    androidClientId: '776680840046-miffvn4rtki0qggfjspno1ilafca2a4s.apps.googleusercontent.com',
    webClientId: '776680840046-471ruj0h34ngh4hgce8lup1cg27guvej.apps.googleusercontent.com'
  });

  async function getUserData(token: string) {
    const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    });
    return await response.json();
  }
  */

  function print() {
    console.log(5);
  }
/*
  async function signIn() {
    console.log("working")
    promptAsync();
    if (accessToken) {
      console.log(accessToken);
      const { email, password } = await getUserData(accessToken);
      console.log(email, password)
    } else {
      console.log("accepted")
    }
    const creds = Realm.Credentials.emailPassword(email, password);
    const newUser = await app.logIn(creds);
    setUser(newUser);
  }

  async function signUp(email: string, password: string) {
    await app.emailPasswordAuth.registerUser({ email, password });
  }

  function signOut() {
    if (user == null) {
      console.warn("Not signed in");
      return;
    }
    (user as any).logOut();
    setUser(null);
  }  

  useEffect(() => {
    if (response?.type === 'success') {
      const authentication = response.authentication;
      if (authentication) {
        setAccessToken(authentication.accessToken);
      }
    }
  }, [response]);


  const value = {
    user: (user as any),
    signIn: print(),
    signUp: (signUp as any),
    signOut: (signOut as any)
  }
  */
  return (
    <AuthContext.Provider value={{user, print}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}