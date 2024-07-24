import { MigrationInterface, QueryRunner } from 'typeorm'

const mockTeachers = [
  {
    id: '8f1443d2-ac6c-48cb-8cb5-0c667187685d',
    name: 'Professor fulano',
    active: true,
    created_at: new Date(),
    modified_at: new Date(),
  },
  {
    id: '1f69a6f0-33b1-4e4d-992d-bf92f0f3069f',
    name: 'Professora fulana',
    active: true,
    created_at: new Date(),
    modified_at: new Date(),
  },
]

const mockPosts = [
  {
    id: '77b86e3a-9fe5-4ff8-a370-cb91237c850f',
    title: 'Postagem',
    body: 'Corpo do post',
    published: true,
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
  {
    id: 'f6e77be4-12ff-43a9-bcaa-880e19cabfa4',
    title: 'Postagem 2',
    body: 'Corpo do post 2',
    published: true,
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
]

const mockClassrooms = [
  {
    id: 'b1871c08-3bf3-48f7-bc24-49e25cfe1990',
    name: 'Programação 1',
    created_at: new Date(),
    modified_at: new Date(),
  },
  {
    id: '802fbe1e-91a4-4a17-9021-9587df23c01b',
    name: 'Programação 2',
    created_at: new Date(),
    modified_at: new Date(),
  },
]

const mockPostTeacher = [
  { teacher_id: mockTeachers[0].id, post_id: mockPosts[0].id },
  { teacher_id: mockTeachers[1].id, post_id: mockPosts[1].id },
]

const mockPostClassroom = [
  { classroom_id: mockClassrooms[0].id, post_id: mockPosts[0].id },
  { classroom_id: mockClassrooms[1].id, post_id: mockPosts[1].id },
]

export class MockPostWithTeachersAndClassroom1720873181668
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.startTransaction()
    try {
      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into('teacher')
        .values(mockTeachers)
        .execute()

      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into('classroom')
        .values(mockClassrooms)
        .execute()

      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into('post')
        .values(mockPosts)
        .execute()

      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into('post_teacher')
        .values(mockPostTeacher)
        .execute()

      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into('post_classroom')
        .values(mockPostClassroom)
        .execute()

      await queryRunner.commitTransaction()
    } catch (error) {
      console.log(error)
      await queryRunner.rollbackTransaction()
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.startTransaction()
    try {
      await Promise.all(
        mockPostClassroom.map(async (entry) => {
          await queryRunner.manager
            .createQueryBuilder()
            .delete()
            .from('post_classroom')
            .where('post_id =:post_id AND classroom_id = :classroom_id', entry)
            .execute()
        }),
      )

      await Promise.all(
        mockPostTeacher.map(async (entry) => {
          await queryRunner.manager
            .createQueryBuilder()
            .delete()
            .from('post_teacher')
            .where('post_id = :post_id AND teacher_id =:teacher_id', entry)
            .execute()
        }),
      )

      await Promise.all(
        mockPosts.map(async (entry) => {
          await queryRunner.manager
            .createQueryBuilder()
            .delete()
            .from('post')
            .where('id = :id', entry)
            .execute()
        }),
      )

      await Promise.all(
        mockClassrooms.map(async (entry) => {
          await queryRunner.manager
            .createQueryBuilder()
            .delete()
            .from('classroom')
            .where('id = :id', entry)
            .execute()
        }),
      )

      await Promise.all(
        mockTeachers.map(async (entry) => {
          await queryRunner.manager
            .createQueryBuilder()
            .delete()
            .from('teacher')
            .where('id = :id', entry)
            .execute()
        }),
      )

      queryRunner.commitTransaction()
    } catch (error) {
      console.log(error)
      await queryRunner.rollbackTransaction()
    }
  }
}
