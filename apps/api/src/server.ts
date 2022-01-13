import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import {ApolloServerPluginDrainHttpServer} from 'apollo-server-core'
import {createServer} from 'http'

import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'

import {schema} from './schema'
import {CocktailsDbApi} from './datasources/cocktailsdb-api'
import type {GraphQLSchema} from 'graphql'

const PORT = process.env.PORT || 4000

async function startApolloServer(schema: GraphQLSchema) {
  const app = express()

  app.use(cors())
  app.use(helmet())
  app.use(compression())

  const httpServer = createServer(app)
  const server = new ApolloServer({
    schema,
    dataSources: () => {
      return {
        cocktailsDbApi: new CocktailsDbApi(),
      }
    },
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
  })
  await server.start()
  server.applyMiddleware({app})
  await new Promise<void>((resolve) => httpServer.listen({port: PORT}, resolve))
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
}

startApolloServer(schema)
