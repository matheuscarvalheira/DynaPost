import { IPostClassroom } from '@/entities/models/post-classroom.interface'

export interface IPostClassroomRepository {
  create(postTeacher: IPostClassroom): Promise<IPostClassroom>
}
