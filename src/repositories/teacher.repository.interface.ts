import { ITeacher } from '@/entities/models/teacher.interface'

export interface ITeacherRepository {
  findAll(page: number, limit: number): Promise<ITeacher[]>
  findById(id: string): Promise<ITeacher | null>
  create(teacher: ITeacher): Promise<ITeacher>
  update(teacher: ITeacher): Promise<ITeacher>
  delete(id: string): Promise<void>
}
