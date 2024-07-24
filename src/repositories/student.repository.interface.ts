import { IStudent } from '@/entities/models/student.interface'

export interface IStudentRepository {
  findAll(page: number, limit: number): Promise<IStudent[]>
  findById(id: string): Promise<IStudent | null>
  create(student: IStudent): Promise<IStudent>
  update(student: IStudent): Promise<IStudent>
  delete(id: string): Promise<void>
}
