import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/react-hooks';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const token = localStorage.getItem('token')

const client = new ApolloClient({
  uri: "example.com" + token,
  cache: new InMemoryCache()
})

function App(){
  return(
    <>
      <ApolloProvider client={client as any}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ApolloProvider>
    </>
  )
}


ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
