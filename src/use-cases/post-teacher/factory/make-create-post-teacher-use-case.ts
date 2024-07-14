import { PostTeacherRepository } from '@/repositories/typeorm/post-teacher.repository'
import { CreatePostTeacherUseCase } from '../create-post-teacher'

export function makeCreatePostTeacherUseCase() {
  const postTeacherRepository = new PostTeacherRepository()
  const createPostTeacherUseCase = new CreatePostTeacherUseCase(
    postTeacherRepository,
  )
  return createPostTeacherUseCase
}
