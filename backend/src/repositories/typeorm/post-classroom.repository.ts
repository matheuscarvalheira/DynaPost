import { PostClassroom } from "@/entities/post-classroom.entity";
import { appDataSource } from "@/lib/typeorm/typeorm";
import { EntityManager, Repository } from "typeorm";
import { IPostClassroomRepository } from "../post-classroom.repository.interface";
import {
  IPostClassroom,
  IPostClassroomReturn,
} from "@/entities/models/post-classroom.interface";
import { Post } from "@/entities/post.entity";
import { ClassroomTeacher } from "@/entities/classroom-teacher.entity";
import { Teacher } from "@/entities/teacher.entity";
import { PostTeacher } from "@/entities/post-teacher.entity";

export class PostClassroomRepository implements IPostClassroomRepository {
  private repository: Repository<PostClassroom>;
  private postRepository: Repository<Post>;
  private postTeacher: Repository<PostTeacher>;
  private classroomTeacherRepository: Repository<ClassroomTeacher>;
  private teacherRepository: Repository<Teacher>;

  constructor(transactionManager?: EntityManager) {
    if (transactionManager) {
      this.repository = transactionManager.getRepository(PostClassroom);
      this.postRepository = transactionManager.getRepository(Post);
    } else {
      this.repository = appDataSource.getRepository(PostClassroom);
      this.postRepository = appDataSource.getRepository(Post);
      this.classroomTeacherRepository =
        appDataSource.getRepository(ClassroomTeacher);
      this.teacherRepository = appDataSource.getRepository(Teacher);
      this.postTeacher = appDataSource.getRepository(PostTeacher);
    }
  }

  async create(postClassroom: IPostClassroom): Promise<IPostClassroom> {
    return this.repository.save(postClassroom);
  }

  async findPostsByClassroom(
    id: string
  ): Promise<(IPostClassroomReturn | null)[]> {
    const posts = await this.repository.find({ where: { classroom_id: id } });

    return await Promise.all(posts.map( async post => {
      const postId = post.post_id;
      const postTeacher = await this.postTeacher.findOne({where: {post_id: postId}});
      const teacherId = postTeacher?.teacher_id;
      const fullPost = await this.postRepository.findOne({where: {id: postId}})
      const teacher = await this.teacherRepository.findOne({where: {id: teacherId}})
      return {
        ...fullPost,
        teacher_name: teacher?.name || "Desconhecido(a)"
      }
    }).reverse())
  }
}
