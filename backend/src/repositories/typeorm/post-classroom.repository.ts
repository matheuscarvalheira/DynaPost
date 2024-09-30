import { PostClassroom } from '@/entities/post-classroom.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { EntityManager, Repository } from 'typeorm'
import { IPostClassroomRepository } from '../post-classroom.repository.interface'
import {
  IPostClassroom,
  IPostClassroomReturn,
} from '@/entities/models/post-classroom.interface'
import { Post } from '@/entities/post.entity'
import { ClassroomTeacher } from '@/entities/classroom-teacher.entity'
import { Teacher } from '@/entities/teacher.entity'

export class PostClassroomRepository implements IPostClassroomRepository {
  private repository: Repository<PostClassroom>
  private postRepository: Repository<Post>
  private classroomTeacherRepository: Repository<ClassroomTeacher>
  private teacherRepository: Repository<Teacher>

  constructor(transactionManager?: EntityManager) {
    if (transactionManager) {
      this.repository = transactionManager.getRepository(PostClassroom)
      this.postRepository = transactionManager.getRepository(Post)
    } else {
      this.repository = appDataSource.getRepository(PostClassroom)
      this.postRepository = appDataSource.getRepository(Post)
      this.classroomTeacherRepository =
        appDataSource.getRepository(ClassroomTeacher)
      this.teacherRepository = appDataSource.getRepository(Teacher)
    }
  }

  async create(postClassroom: IPostClassroom): Promise<IPostClassroom> {
    return this.repository.save(postClassroom)
  }

  async findPostsByClassroom(
    id: string,
  ): Promise<(IPostClassroomReturn | null)[]> {
    const posts = await this.repository.find({ where: { classroom_id: id } })
    const classroomTeacher = await this.classroomTeacherRepository.findOne({
      where: { classroom_id: id },
    })
    const teacher = await this.teacherRepository.find({
      where: { id: classroomTeacher?.teacher_id },
    })

    const postIds = posts.map((post) => post.post_id)

    const postData = await Promise.all(
      postIds.map(async (id) => this.postRepository.findOne({ where: { id } })),
    )

    return postData.map((post) => ({
      ...post,
      teacher_name: teacher[0].name || 'Desconhecido(a)',
    }))
  }
}
