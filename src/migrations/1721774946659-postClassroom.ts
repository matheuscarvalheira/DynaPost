import { MigrationInterface, QueryRunner } from 'typeorm'
import { postsData } from './1721346255409-posts'
import { classroomsData } from './1721345439928-classrooms'

const postClassroomData = [
  { post_id: postsData[0].id, classroom_id: classroomsData[2].id },
  { post_id: postsData[1].id, classroom_id: classroomsData[2].id },
  { post_id: postsData[2].id, classroom_id: classroomsData[2].id },
  { post_id: postsData[3].id, classroom_id: classroomsData[0].id },
  { post_id: postsData[4].id, classroom_id: classroomsData[0].id },
  { post_id: postsData[5].id, classroom_id: classroomsData[0].id },
  { post_id: postsData[6].id, classroom_id: classroomsData[1].id },
  { post_id: postsData[7].id, classroom_id: classroomsData[1].id },
  { post_id: postsData[8].id, classroom_id: classroomsData[1].id },
]

export class PostClassroom1721774946659 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('post_classroom')
      .values(postClassroomData)
      .execute()
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    postClassroomData.forEach(async ({ classroom_id, post_id }) => {
      await queryRunner.manager
        .createQueryBuilder()
        .delete()
        .from('post_classroom')
        .where('classroom_id = :classroomId', { classroomId: classroom_id })
        .andWhere('post_id = :postId', { postId: post_id })
        .execute()
    })
  }
}
