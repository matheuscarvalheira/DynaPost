import { IPostClassroom } from '@/entities/models/post-classroom.interface'
import { IPost } from '@/entities/models/post.interface'

export interface IPostClassroomRepository {
  create(postTeacher: IPostClassroom): Promise<IPostClassroom>
  findPostsByClassroom(id: string): Promise<(IPost | null)[]>
}
