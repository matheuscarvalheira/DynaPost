import { ClassroomRepository } from "@/repositories/typeorm/classroom.repository";
import { RemoveClassroomUseCase } from "../remove-classroom";

export function makeRemoveClassroomUseCase() {
  const classroomRepository = new ClassroomRepository();
  const deleteClassroomUseCase = new RemoveClassroomUseCase(classroomRepository);

  return deleteClassroomUseCase;
}
