import { MigrationInterface, QueryRunner } from 'typeorm'
import { teacherData } from './1721343556020-teachers'
import { classroomsData } from './1721345439928-classrooms'

const classroomTeacherData = [
  { teacher_id: teacherData[0].id, classroom_id: classroomsData[0].id },
  { teacher_id: teacherData[1].id, classroom_id: classroomsData[2].id },
  { teacher_id: teacherData[2].id, classroom_id: classroomsData[4].id },
  { teacher_id: teacherData[3].id, classroom_id: classroomsData[5].id },
  { teacher_id: teacherData[4].id, classroom_id: classroomsData[1].id },
]

export class ClassroomTeacher1721687608034 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('classroom_teacher')
      .values(classroomTeacherData)
      .execute()
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    classroomTeacherData.forEach(
      async ({ teacher_id, classroom_id }) =>
        await queryRunner.manager
          .createQueryBuilder()
          .delete()
          .from('classroom_teacher')
          .where('teacher_id = :teacherId', {
            teacherId: teacher_id,
          })
          .andWhere('classroom_id = :classroomId', {
            classroomId: classroom_id,
          })
          .execute(),
    )
  }
}
