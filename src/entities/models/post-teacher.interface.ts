import { IPost } from './post.interface'
import { ITeacher } from './teacher.interface'

export interface IPostTeacher {
  post_id: IPost['id']
  teacher_id: ITeacher['id']
}
