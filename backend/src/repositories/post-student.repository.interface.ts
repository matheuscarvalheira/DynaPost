import { IPostStudent } from '@/entities/models/post-student.interface'

export interface IPostStudentRepository {
  create(postStudent: IPostStudent): Promise<IPostStudent>
}
