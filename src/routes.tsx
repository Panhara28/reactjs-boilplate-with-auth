import React from 'react';
import AuthProvider, { AuthContext } from "./context/auth";
import { Suspense, useContext, lazy } from "react";
import { Loading } from "./components/Loading";
import { Switch, Route, Redirect } from "react-router-dom";
import { TESTING_SCREEN, LOGIN_SCREEN } from "./settings/constants";
const LoginScreen = lazy(() => import('./screen/Login/LoginScreen'));
const TestingScreen = lazy(() => import('./screen/TestingScreen'));



function PrivateRoute({ children, ...rest }){
  const { isAuthenticated } = useContext(AuthContext);

  return(
    <Route 
      {...rest}
      render={({ location }) => 
        isAuthenticated ? (
          children
        ): (
          <Redirect  
            to={{
              pathname: '/login',
              state: { from: location}
            }}
          />
        )
      }
    />
  )
}

const Routes = () => {
  return(
    <AuthProvider>
      <Suspense fallback={<Loading />}>
        <Switch>
          <PrivateRoute exact={true} path={TESTING_SCREEN}>
            <TestingScreen />
          </PrivateRoute>
          <Route path={LOGIN_SCREEN}>
            <LoginScreen />
          </Route>
        </Switch>
      </Suspense>
    </AuthProvider>
  )
}

export default Routes;