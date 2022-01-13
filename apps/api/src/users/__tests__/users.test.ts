import {graphql} from 'graphql'
import {makeExecutableSchema} from '@graphql-tools/schema'

import {UsersTypeDefs} from '../schema'
import {UsersResolvers} from '../resolvers'

const schema = makeExecutableSchema({typeDefs: UsersTypeDefs, resolvers: UsersResolvers})

describe('Users Schema', () => {
  test('getAllUsers query', async () => {
    const source = `
      {
        user: getAllUsers {
          firstName
          lastName
        }
      }
    `
    const result = await graphql({schema, source})
    expect(result?.data?.user).toEqual([{firstName: 'John', lastName: 'Doe'}])
  })
})
