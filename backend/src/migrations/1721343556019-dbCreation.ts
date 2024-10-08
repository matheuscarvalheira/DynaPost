import { MigrationInterface, QueryRunner } from 'typeorm'

export class DbCreation1721343556019 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

            CREATE OR REPLACE FUNCTION update_modified_at_column()
            RETURNS TRIGGER AS $$
            BEGIN
                NEW.modified_at = current_timestamp;
                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;

            CREATE TABLE IF NOT EXISTS post (
                id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
                title varchar NOT NULL,
                body text NOT NULL,
                published bool DEFAULT true,
                created_at timestamp DEFAULT current_timestamp,
                modified_at timestamp DEFAULT current_timestamp
            );

            CREATE TRIGGER set_post_modified_at
            BEFORE UPDATE ON post
            FOR EACH ROW
            EXECUTE FUNCTION update_modified_at_column();

            CREATE TABLE IF NOT EXISTS classroom (
                id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
                name varchar NOT NULL,
                created_at timestamp,
                modified_at timestamp
            );

            CREATE TRIGGER set_classroom_modified_at
            BEFORE UPDATE ON classroom
            FOR EACH ROW
            EXECUTE FUNCTION update_modified_at_column();

            CREATE TABLE IF NOT EXISTS student (
                id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
                name varchar NOT NULL,
                active bool DEFAULT true,
                created_at timestamp,
                modified_at timestamp
            );

            CREATE TRIGGER set_student_modified_at
            BEFORE UPDATE ON student
            FOR EACH ROW
            EXECUTE FUNCTION update_modified_at_column();

            CREATE TABLE IF NOT EXISTS teacher (
                id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
                name varchar,
                active bool DEFAULT true,
                created_at timestamp,
                modified_at timestamp
            );

            CREATE TRIGGER set_teacher_modified_at
            BEFORE UPDATE ON teacher
            FOR EACH ROW
            EXECUTE FUNCTION update_modified_at_column();

            CREATE TABLE IF NOT EXISTS post_teacher (
                post_id uuid UNIQUE,
                teacher_id uuid
            );

            CREATE TABLE IF NOT EXISTS post_classroom (
                post_id uuid UNIQUE,
                classroom_id uuid
            );

            CREATE TABLE IF NOT EXISTS classroom_student (
                classroom_id uuid,
                student_id uuid
            );

            CREATE TABLE IF NOT EXISTS classroom_teacher (
                classroom_id uuid,
                teacher_id uuid
            );

            CREATE UNIQUE INDEX ON classroom_student (classroom_id, student_id);

            CREATE UNIQUE INDEX ON classroom_teacher (classroom_id, teacher_id);

            ALTER TABLE post_teacher ADD FOREIGN KEY (teacher_id) REFERENCES teacher (id) ON DELETE CASCADE;

            ALTER TABLE post_teacher ADD FOREIGN KEY (post_id) REFERENCES post (id) ON DELETE CASCADE;

            ALTER TABLE post_classroom ADD FOREIGN KEY (post_id) REFERENCES post (id) ON DELETE CASCADE;

            ALTER TABLE post_classroom ADD FOREIGN KEY (classroom_id) REFERENCES classroom (id) ON DELETE CASCADE;

            ALTER TABLE classroom_student ADD FOREIGN KEY (classroom_id) REFERENCES classroom (id) ON DELETE CASCADE;

            ALTER TABLE classroom_student ADD FOREIGN KEY (student_id) REFERENCES student (id) ON DELETE CASCADE;

            ALTER TABLE classroom_teacher ADD FOREIGN KEY (teacher_id) REFERENCES teacher (id) ON DELETE CASCADE;

            ALTER TABLE classroom_teacher ADD FOREIGN KEY (classroom_id) REFERENCES classroom (id) ON DELETE CASCADE;
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE classroom_teacher DROP CONSTRAINT IF EXISTS FK_classroom_teacher_classroom_id;
        ALTER TABLE classroom_teacher DROP CONSTRAINT IF EXISTS FK_classroom_teacher_teacher_id;
        ALTER TABLE classroom_student DROP CONSTRAINT IF EXISTS FK_classroom_student_classroom_id;
        ALTER TABLE classroom_student DROP CONSTRAINT IF EXISTS FK_classroom_student_student_id;
        ALTER TABLE post_classroom DROP CONSTRAINT IF EXISTS FK_post_classroom_classroom_id;
        ALTER TABLE post_classroom DROP CONSTRAINT IF EXISTS FK_post_classroom_post_id;
        ALTER TABLE post_teacher DROP CONSTRAINT IF EXISTS FK_post_teacher_teacher_id;
        ALTER TABLE post_teacher DROP CONSTRAINT IF EXISTS FK_post_teacher_post_id;
        DROP INDEX IF EXISTS classroom_teacher_classroom_id_teacher_id;
        DROP INDEX IF EXISTS classroom_student_classroom_id_student_id;
        DROP TABLE IF EXISTS classroom_teacher;
        DROP TABLE IF EXISTS classroom_student;
        DROP TABLE IF EXISTS post_classroom;
        DROP TABLE IF EXISTS post_teacher;
        DROP TABLE IF EXISTS teacher;
        DROP TABLE IF EXISTS student;
        DROP TABLE IF EXISTS classroom;
        DROP TABLE IF EXISTS post;
    `)
  }
}
