import { IPost } from './post.interface'
import { IStudent } from './student.interface'

export interface IPostStudent {
  post_id: IPost['id']
  student_id: IStudent['id']
}
