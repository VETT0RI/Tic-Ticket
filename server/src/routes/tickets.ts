import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function ticketsRoutes(app: FastifyInstance) {
  app.get('/tickets', async () => {
    const tickets = await prisma.ticket.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })

    return tickets.map((ticket) => {
      return {
        id: ticket.id,
        title: ticket.title,
        category: ticket.category,
      }
    })
  })

  app.get('/tickets/:id', async (request) => {
    // const { id } = request.params

    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const ticket = await prisma.ticket.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return ticket
  })

  app.post('/tickets', async (request) => {
    const bodySchema = z.object({
      title: z.string(),
      content: z.string(),
      category: z.string(),
      departament: z.string(),
    })

    const { title, content, category, departament } = bodySchema.parse(
      request.body,
    )

    const ticket = await prisma.ticket.create({
      data: {
        title,
        content,
        category,
        departament,
        userId: '6884f5c0-78e3-48cc-bf34-c478b2b63f02',
      },
    })

    return ticket
  })

  app.put('/tickets/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      title: z.string(),
      content: z.string(),
      category: z.string(),
      departament: z.string(),
    })

    const { title, content, category, departament } = bodySchema.parse(
      request.body,
    )

    const ticket = await prisma.ticket.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        category,
        departament,
      },
    })

    return ticket
  })

  app.delete('/tickets/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    await prisma.ticket.delete({
      where: {
        id,
      },
    })
  })
}
