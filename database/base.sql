CREATE TABLE postagem (
  id UUID PRIMARY KEY,
  title VARCHAR(300) NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(255) NOT NULL,
  team VARCHAR(50) NOT NULL,
  creation_date TIMESTAMP WITHOUT TIME ZONE
);

CREATE TABLE team (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
