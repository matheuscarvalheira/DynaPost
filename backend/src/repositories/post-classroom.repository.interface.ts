import {
  IPostClassroom,
  IPostClassroomReturn,
} from '@/entities/models/post-classroom.interface'

export interface IPostClassroomRepository {
  create(postTeacher: IPostClassroom): Promise<IPostClassroom>
  findPostsByClassroom(id: string): Promise<(IPostClassroomReturn | null)[]>
}
