import { IClassroomRepository } from "@/repositories/classroom.repository.interface";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";

export class FindClassroomUseCase {
  constructor(private classroomRepository: IClassroomRepository) {}

  async handler(id: string) {
    const classroom = await this.classroomRepository.findById(id);

    if (!classroom) throw new ResourceNotFoundError();

    return classroom;
  }
}
