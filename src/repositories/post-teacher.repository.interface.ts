import { IPostTeacher } from '@/entities/models/postTeacher.interface'

export interface IPostTeacherRepository {
  create(postTeacher: IPostTeacher): Promise<IPostTeacher>
}
