import { gql } from 'apollo-server-express';

export const UsersTypeDefs = gql`
  type Query {
    getAllUsers: [User]!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String
  }
`;
