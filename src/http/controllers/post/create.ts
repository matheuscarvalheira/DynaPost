import { makeCreatePostUseCase } from "@/use-cases/post/factory/make-create-post-use-case";
import { Request, Response } from "express";
import { z } from "zod";

export async function create(request: Request, response: Response) {
  const registerBodySchema = z.object({
    title: z.string(),
    content: z.string(),
    author: z.string(),
    team: z.string(),
  });

  const { title, content, author, team } = registerBodySchema.parse(
    request.body,
  );

  const createPostUseCase = makeCreatePostUseCase();

  const post = await createPostUseCase.handler({
    title,
    content,
    author,
    team,
  });

  return response.status(201).json(post);
}
