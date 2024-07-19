import { MigrationInterface, QueryRunner } from 'typeorm'

export const classroomsData = [
  { id: '67f1f9b4-59f4-41b3-8d60-cf28b6f1071a', name: 'Understanding Node.js' },
  { id: '93ba179e-5bf5-4794-8bea-b631718ec092', name: 'JavaScript Tips' },
  { id: '501a7012-ae26-472c-9f3b-c619977e4157', name: 'Mastering PostgreSQL' },
  { id: 'a833ef72-ee37-43ce-a19b-da757d35a338', name: 'Database Transactions' },
  { id: '270dac54-6b3e-4688-b2f2-1d14c296049e', name: 'Async Programming' },
  { id: '82d6574f-3a77-4a4f-8463-561a9352bc2a', name: 'API Development' },
  {
    id: 'd1b03f51-a96d-447a-8181-a13b76532e8b',
    name: 'Frontend Best Practices',
  },
]

export class Classrooms1721345439928 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('classroom')
      .values(classroomsData)
      .execute()
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    classroomsData.forEach(
      async ({ id }) =>
        await queryRunner.manager
          .createQueryBuilder()
          .delete()
          .from('classroom')
          .where('id = :classroomId', { classroomId: id })
          .execute(),
    )
  }
}
