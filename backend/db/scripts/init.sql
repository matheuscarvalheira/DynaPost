CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS post (
  "id" uuid PRIMARY KEY,
  "title" varchar NOT NULL,
  "body" text NOT NULL,
  "published" bool,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE IF NOT EXISTS classroom (
  "id" uuid PRIMARY KEY,
  "name" varchar NOT NULL,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE IF NOT EXISTS student (
  "id" uuid PRIMARY KEY,
  "name" varchar NOT NULL,
  "active" bool NOT NULL,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE IF NOT EXISTS teacher (
  "id" uuid PRIMARY KEY,
  "name" varchar,
  "active" bool NOT NULL,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE IF NOT EXISTS post_teacher (
  "teacher_id" uuid,
  "post_id" uuid UNIQUE
);

CREATE TABLE IF NOT EXISTS post_student (
  "student_id" uuid,
  "post_id" uuid UNIQUE
);

CREATE TABLE IF NOT EXISTS post_classroom (
  "classroom_id" uuid,
  "post_id" uuid UNIQUE
);

CREATE TABLE IF NOT EXISTS student_classroom (
  "classroom_id" uuid,
  "student_id" uuid
);

ALTER TABLE post_teacher ADD FOREIGN KEY (teacher_id) REFERENCES teacher (id);

ALTER TABLE post_teacher ADD FOREIGN KEY (post_id) REFERENCES post (id);

ALTER TABLE post_student ADD FOREIGN KEY (student_id) REFERENCES student (id);

ALTER TABLE post_student ADD FOREIGN KEY (post_id) REFERENCES post (id);

ALTER TABLE post_classroom ADD FOREIGN KEY (post_id) REFERENCES post (id);

ALTER TABLE post_classroom ADD FOREIGN KEY (classroom_id) REFERENCES classroom (id);

ALTER TABLE student_classroom ADD FOREIGN KEY (classroom_id) REFERENCES classroom (id);

ALTER TABLE student_classroom ADD FOREIGN KEY (student_id) REFERENCES student (id);