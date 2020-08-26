import { InMemoryCache, ApolloClient } from "@apollo/client";

export function CreateApollo(){
  const token = localStorage.getItem('token')

  const client = new ApolloClient({
    uri: "example.com" + token,
    cache: new InMemoryCache()
  })
  
  return client;
}