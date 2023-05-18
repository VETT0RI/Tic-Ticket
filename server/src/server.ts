import fastify from 'fastify'
import cors from '@fastify/cors'
import { ticketsRoutes } from './routes/tickets'

const app = fastify()

app.register(cors, {
  origin: true,
})
app.register(ticketsRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🎫 HTTP server running on http://localhost:3333')
  })
