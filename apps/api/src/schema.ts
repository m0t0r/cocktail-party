import {makeExecutableSchema} from '@graphql-tools/schema'
import {UsersTypeDefs} from './users/schema'
import {UsersResolvers} from './users/resolvers'

export const schema = makeExecutableSchema({
  typeDefs: [UsersTypeDefs],
  resolvers: [UsersResolvers],
})
