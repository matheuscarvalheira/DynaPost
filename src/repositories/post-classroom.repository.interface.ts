import { IPostClassroom } from '@/entities/models/postClassroom.interface'

export interface IPostClassroomRepository {
  create(postTeacher: IPostClassroom): Promise<IPostClassroom>
}
