import { MigrationInterface, QueryRunner } from 'typeorm'

export const studentsData = [
  {
    id: '84554b1a-3ea1-4bfd-9937-93bbccf0c0bd',
    name: 'Jennifer Smith',
    active: true,
  },
  {
    id: '04c154a4-3cda-4d4c-9888-3bf8f3936e17',
    name: 'Matthew Martinez',
    active: false,
  },
  {
    id: 'fb0dfb31-75b1-4f4b-b3af-f2034074948f',
    name: 'Jessica Taylor',
    active: true,
  },
  {
    id: '0eddd523-509c-422e-a241-36528b968fb8',
    name: 'Rafael Souza',
    active: true,
  },
  {
    id: 'eede0c46-34c0-4903-87de-80a973c2f4b0',
    name: 'Juliana Santos',
    active: true,
  },
  {
    id: 'f2c2b494-49b6-4425-81b6-1a3422817b59',
    name: 'Gustavo Pereira',
    active: true,
  },
  {
    id: '1d2bb64f-8f84-47b2-a278-8161be253ad8',
    name: 'Camila Costa',
    active: true,
  },
  {
    id: 'f78caeb8-1704-4b22-b6af-ba99b8603b9f',
    name: 'Pedro Almeida',
    active: true,
  },
  {
    id: '1e6e05ab-ee05-4c6d-addf-9b27d035baa8',
    name: 'Bianca Martins',
    active: true,
  },
  {
    id: '5fcf127f-da40-4cc7-a60b-226072469361',
    name: 'Thiago Ferreira',
    active: true,
  },
  {
    id: '9990ca53-e664-411b-98ea-ab86c044f8e1',
    name: 'Larissa Rodrigues',
    active: true,
  },
]

export class Students1721344741826 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('student')
      .values(studentsData)
      .execute()
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    studentsData.forEach(
      async ({ id }) =>
        await queryRunner.manager
          .createQueryBuilder()
          .delete()
          .from('student')
          .where('id = :studentId', { studentId: id })
          .execute(),
    )
  }
}
