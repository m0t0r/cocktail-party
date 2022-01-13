import { ApolloError } from 'apollo-server-express';

export const UsersResolvers = {
  Query: {
    getAllUsers: async () => {
      return [{ id: 1, firstName: 'John', lastName: 'Doe', email: 'john@doe.com' }];
    },
  },
};
