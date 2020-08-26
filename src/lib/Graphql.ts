import { gql } from "apollo-boost";

const ME = gql`
  query me {
    me {
      userId
      displayName
      profilePicture
    }
  }
`;

export const Graphql = {
  ME
}
