import { IPostTeacher } from '@/entities/models/post-teacher.interface'

export interface IPostTeacherRepository {
  create(postTeacher: IPostTeacher): Promise<IPostTeacher>
}
