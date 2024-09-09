import { MigrationInterface, QueryRunner } from 'typeorm'
import { classroomsData } from './1721345439928-classrooms'
import { studentsData } from './1721344741826-students'

const classroomStudentData = [
  { classroom_id: classroomsData[0].id, student_id: studentsData[0].id },
  { classroom_id: classroomsData[0].id, student_id: studentsData[1].id },
  { classroom_id: classroomsData[0].id, student_id: studentsData[2].id },
  { classroom_id: classroomsData[0].id, student_id: studentsData[3].id },
  { classroom_id: classroomsData[0].id, student_id: studentsData[4].id },
  { classroom_id: classroomsData[0].id, student_id: studentsData[5].id },
  { classroom_id: classroomsData[0].id, student_id: studentsData[6].id },
  { classroom_id: classroomsData[0].id, student_id: studentsData[7].id },
  { classroom_id: classroomsData[0].id, student_id: studentsData[8].id },
  { classroom_id: classroomsData[0].id, student_id: studentsData[9].id },
  { classroom_id: classroomsData[0].id, student_id: studentsData[10].id },
  { classroom_id: classroomsData[1].id, student_id: studentsData[0].id },
  { classroom_id: classroomsData[1].id, student_id: studentsData[1].id },
  { classroom_id: classroomsData[1].id, student_id: studentsData[2].id },
  { classroom_id: classroomsData[1].id, student_id: studentsData[3].id },
  { classroom_id: classroomsData[1].id, student_id: studentsData[6].id },
  { classroom_id: classroomsData[1].id, student_id: studentsData[7].id },
  { classroom_id: classroomsData[1].id, student_id: studentsData[8].id },
  { classroom_id: classroomsData[1].id, student_id: studentsData[9].id },
  { classroom_id: classroomsData[1].id, student_id: studentsData[10].id },
  { classroom_id: classroomsData[2].id, student_id: studentsData[0].id },
  { classroom_id: classroomsData[2].id, student_id: studentsData[1].id },
  { classroom_id: classroomsData[2].id, student_id: studentsData[3].id },
  { classroom_id: classroomsData[2].id, student_id: studentsData[4].id },
  { classroom_id: classroomsData[2].id, student_id: studentsData[7].id },
  { classroom_id: classroomsData[2].id, student_id: studentsData[8].id },
  { classroom_id: classroomsData[2].id, student_id: studentsData[9].id },
  { classroom_id: classroomsData[2].id, student_id: studentsData[10].id },
]

export class ClassroomStudent1721688305255 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('classroom_student')
      .values(classroomStudentData)
      .execute()
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    classroomStudentData.forEach(
      async ({ classroom_id, student_id }) =>
        await queryRunner.manager
          .createQueryBuilder()
          .delete()
          .from('classroom_student')
          .where('classroom_id = :classroomId', { classroomId: classroom_id })
          .andWhere('student_id = :studentId', { studentId: student_id })
          .execute(),
    )
  }
}
