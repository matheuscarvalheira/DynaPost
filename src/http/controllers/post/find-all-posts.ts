import { Request, Response } from 'express';
import { z } from 'zod';

export async function findAllPosts(req: Request, res: Response){
  const registerQuerySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  })

  const { page, limit } = registerQuerySchema.parse(request.query)

  const findAllPostsUseCase =
}
