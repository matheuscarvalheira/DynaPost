import { makeFindClassroomUseCase } from "@/use-cases/classroom/factory/make-find-classroom-use-case";
import { Request, Response } from "express";
import { z } from "zod";

export async function findClassroom(request: Request, response: Response) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  });

  const { id } = registerParamsSchema.parse(request.params);

  const findClassroomUseCase = makeFindClassroomUseCase();

  const classroom = await findClassroomUseCase.handler(id);

  return response.status(200).json(classroom);
}
