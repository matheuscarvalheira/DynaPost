import { MigrationInterface, QueryRunner } from 'typeorm'
import { v4 as uuid } from 'uuid'

export class MockPosts1720871000822 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const mockPosts = []
    for (let i = 1; i <= 20; i++) {
      mockPosts.push({
        id: uuid(),
        title: `Post Title ${i}`,
        body: `This is the body of post ${i}.`,
        published: true,
        createdAt: new Date(),
        modifiedAt: new Date(),
      })
    }

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('post')
      .values(mockPosts)
      .execute()
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from('post')
      .where('title LIKE :titlePattern', { titlePattern: 'Post Title %' })
      .execute()
  }
}
