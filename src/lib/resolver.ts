import { CreateApollo } from './CreateApollo'
import { Graphql } from './Graphql'

const getMe = async () => {
  const { data, loading } = await CreateApollo().query({
    query: Graphql.ME,
    fetchPolicy: "no-cache"
  })

  return { data: data.me, loading }
}

export const resolver = {
  getMe
}