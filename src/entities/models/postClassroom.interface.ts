import { IClassroom } from './classroom.interface'
import { IPost } from './post.interface'

export interface IPostClassroom {
  post_id: IPost['id']
  classroom_id: IClassroom['id']
}
