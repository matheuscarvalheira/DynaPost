import { MigrationInterface, QueryRunner } from 'typeorm'

export const teacherData = [
  {
    id: 'da80f61e-b2b5-47e3-8254-4705eb07269e',
    name: 'Sarah Miller',
    active: true,
  },
  {
    id: '4ed55662-36c9-4b15-9c99-1579b5ff819c',
    name: 'David Johnson',
    active: true,
  },
  {
    id: '98653aff-55e6-4e2e-8c85-66eb56ccb2aa',
    name: 'Emily Davis',
    active: true,
  },
  {
    id: 'd171b101-56e6-4d54-8835-54496787c7e2',
    name: 'Michael Brown',
    active: true,
  },
  {
    id: '5584acb0-fc10-43f4-b37d-70475123e98a',
    name: 'João Paulo',
    active: true,
  },
]

export class Teachers1721343556020 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('teacher')
      .values(teacherData)
      .execute()
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    teacherData.forEach(
      async ({ id }) =>
        await queryRunner.manager
          .createQueryBuilder()
          .delete()
          .from('teacher')
          .where('id = :teacherId', { teacherId: id })
          .execute(),
    )
  }
}
