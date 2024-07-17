import { makeCreateClassroomUseCase } from "@/use-cases/classroom/factory/make-create-classroom-use-case";
import { Request, Response } from "express";
import { z } from "zod";

export async function create(request: Request, response: Response) {
  const registerBodySchema = z.object({
    name: z.string(),
  });

  const { name } = registerBodySchema.parse(
    request.body,
  );

  const createClassroomUseCase = makeCreateClassroomUseCase();

  const classroom = await createClassroomUseCase.handler({
    name
  });

  return response.status(201).json(classroom);
}
