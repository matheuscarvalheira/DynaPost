CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS post (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR NOT NULL,
    team VARCHAR NOT NULL,
    creation_date TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "teacher" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "name" varchar,
  "active" bool,
  "created_at" timestamp,
  "modified_at" timestamp
);
