import { IClassroom } from "@/entities/models/classroom.interface";

export interface IClassroomRepository {
  findAll(page: number, limit: number): Promise<IClassroom[]>;
  findById(id: string): Promise<IClassroom | null>;
  create(Classroom: IClassroom): Promise<IClassroom>;
  update(Classroom: IClassroom): Promise<IClassroom>;
  delete(id: string): Promise<void>;
}
