CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "posts" (
  "id" uuid PRIMARY KEY,
  "title" varchar NOT NULL,
  "body" text NOT NULL,
  "published" bool,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE "classrooms" (
  "id" uuid PRIMARY KEY,
  "name" varchar NOT NULL,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE "students" (
  "id" uuid PRIMARY KEY,
  "name" varchar NOT NULL,
  "active" bool NOT NULL,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE "teachers" (
  "id" uuid PRIMARY KEY,
  "name" varchar,
  "active" bool NOT NULL,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE "post_teacher" (
  "teacher_id" uuid,
  "post_id" uuid UNIQUE
);

CREATE TABLE "post_classroom" (
  "post_id" uuid UNIQUE,
  "classroom_id" uuid
);

CREATE TABLE "student_classroom" (
  "classroom_id" uuid,
  "student_id" uuid
);

ALTER TABLE "post_teacher" ADD FOREIGN KEY ("teacher_id") REFERENCES "teachers" ("id");

ALTER TABLE "post_teacher" ADD FOREIGN KEY ("post_id") REFERENCES "posts" ("id");

ALTER TABLE "post_classroom" ADD FOREIGN KEY ("post_id") REFERENCES "posts" ("id");

ALTER TABLE "post_classroom" ADD FOREIGN KEY ("classroom_id") REFERENCES "classrooms" ("id");

ALTER TABLE "student_classroom" ADD FOREIGN KEY ("classroom_id") REFERENCES "classrooms" ("id");

ALTER TABLE "student_classroom" ADD FOREIGN KEY ("student_id") REFERENCES "students" ("id");