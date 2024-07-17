import { makeFindAllClassroomUseCase } from "@/use-cases/classroom/factory/make-find-all-classroom-use-case";
import { Request, Response } from "express";
import { z } from "zod";

export async function findAllClassrooms(req: Request, res: Response) {
  const registerQuerySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  });

  const { page, limit } = registerQuerySchema.parse(req.query);

  const findAllClassroomsUseCase = makeFindAllClassroomUseCase();

  const classrooms = await findAllClassroomsUseCase.handler(page, limit);

  return res.status(200).json(classrooms);
}
