import React, { useState } from 'react';
import { resolver } from '../lib/resolver';

type AuthProps ={
  isAuthenticated: boolean;
  authenticate: Function;
  signout: Function;
}

export const AuthContext = React.createContext({} as AuthProps);

const isValidToken = async () => {
  const { data, loading }: any = await resolver.getMe;
  if(data == null){
    localStorage.removeItem('token');
    return false;
  }else{
    return true;
  }
}

const AuthProvider = (props: any) => {
  const [isAuthenticated, makeAuthenticated] = useState(false);

  async function getVerify(){
    const isValid = await isValidToken();
    makeAuthenticated(isValid)
  }

  getVerify();

  async function authenticate({token}, cb){
    const isValid = await isValidToken();
    makeAuthenticated(isValid);
    setTimeout(cb, 100)
  }

  function signout(cb){
    makeAuthenticated(false);
    localStorage.removeItem('token')
    setTimeout(cb, 100)
  }

  return(
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        signout
      }}
    >
      <>
        {
          props.children
        }
      </>
    </AuthContext.Provider>
  )
}

export default AuthProvider;