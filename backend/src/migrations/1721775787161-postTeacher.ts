import { MigrationInterface, QueryRunner } from 'typeorm'
import { postsData } from './1721346255409-posts'
import { teacherData } from './1721343556020-teachers'

const postTeacherData = [
  { post_id: postsData[0].id, teacher_id: teacherData[1].id },
  { post_id: postsData[1].id, teacher_id: teacherData[1].id },
  { post_id: postsData[2].id, teacher_id: teacherData[1].id },
  { post_id: postsData[3].id, teacher_id: teacherData[0].id },
  { post_id: postsData[4].id, teacher_id: teacherData[0].id },
  { post_id: postsData[5].id, teacher_id: teacherData[0].id },
  { post_id: postsData[6].id, teacher_id: teacherData[4].id },
  { post_id: postsData[7].id, teacher_id: teacherData[4].id },
  { post_id: postsData[8].id, teacher_id: teacherData[4].id },
]

export class PostTeacher1721775787161 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('post_teacher')
      .values(postTeacherData)
      .execute()
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    postTeacherData.forEach(
      async ({ post_id, teacher_id }) =>
        await queryRunner.manager
          .createQueryBuilder()
          .delete()
          .from('post_teacher')
          .where('post_id = :postId', { postId: post_id })
          .andWhere('teacher_id = :teacherId', { teacherId: teacher_id })
          .execute(),
    )
  }
}
