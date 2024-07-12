import { makeFindPostUseCase } from "@/use-cases/post/factory/make-find-post-use-case";
import { Request, Response } from "express";
import { z } from "zod";

export async function findPost(request: Request, response: Response) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  });

  const { id } = registerParamsSchema.parse(request.params);

  const findPostUseCase = makeFindPostUseCase();

  const post = await findPostUseCase.handler(id);

  return response.status(200).json(post);
}
