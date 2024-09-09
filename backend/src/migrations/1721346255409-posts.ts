import { MigrationInterface, QueryRunner } from 'typeorm'

export const postsData = [
  // classroom data 3
  {
    id: 'df9a087e-9612-43c1-a407-984b30b2837a',
    title: 'Mastering PostgreSQL: Advanced Techniques',
    body: 'Explore complex joins, query tuning, and high availability strategies in this deep dive into PostgreSQL',
    published: true,
  },
  {
    id: '2c42380e-9e62-49e1-b641-580e5cae1776',
    title: 'Level Up with PostgreSQL: Stored Procedures and Triggers',
    body: 'Learn how to harness the power of stored procedures and triggers to automate tasks and enhance database functionality.',
    published: true,
  },
  {
    id: 'fb0ae3ad-f611-4dc0-b811-8aa3a82880b2',
    title: 'Securing PostgreSQL: Best Practices',
    body: 'Discover essential techniques for protecting your PostgreSQL database from unauthorized access and security threats',
    published: true,
  },
  // classroom data 1
  {
    id: '38b3418d-52e1-4066-9bae-ce973fe502d6',
    title: 'Understanding Node.js Fundamentals',
    body: 'Master the core concepts of Node.js, including event-driven architecture, asynchronous programming, and module system.',
    published: true,
  },
  {
    id: 'e760ab51-3fa3-4fab-8516-4d9a4a377624',
    title: 'Node.js Essentials: Building Scalable Applications',
    body: 'Learn to develop scalable and efficient applications using Node.js, covering topics like streams, clustering, and microservices.',
    published: true,
  },
  {
    id: '2de19bc7-2fd6-4dbf-9683-e9f90a4f7bb3',
    title: 'Optimizing Performance in Node.js Applications',
    body: 'Discover techniques to enhance the performance of your Node.js applications, from memory management to optimizing I/O operations.',
    published: true,
  },
  // classroom data 2
  {
    id: '42b41489-8aeb-44c8-8061-3718da5b8210',
    title: 'JavaScript Tips: Boost Your Coding Efficiency',
    body: 'Explore practical tips and tricks to write cleaner, more efficient JavaScript code, covering best practices, debugging techniques, and ES6 features',
    published: true,
  },
  {
    id: '631854d3-2821-46d4-8830-6f32d712a45f',
    title: 'Advanced JavaScript Patterns and Techniques',
    body: 'Dive into advanced JavaScript patterns and techniques to enhance your coding skills, including functional programming concepts, design patterns, and asynchronous programming.',
    published: true,
  },
  {
    id: '4b99aac0-6dd4-4b44-9162-1f648bf09bfb',
    title: 'Mastering JavaScript: Beyond the Basics',
    body: 'Take your JavaScript skills to the next level with in-depth insights into closures, prototypes, scope, and more, empowering you to write robust and maintainable code.',
    published: true,
  },
]

export class Posts1721346255409 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('post')
      .values(postsData)
      .execute()
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    postsData.forEach(
      async ({ id }) =>
        await queryRunner.manager
          .createQueryBuilder()
          .delete()
          .from('post')
          .where('id = :postId', { postId: id })
          .execute(),
    )
  }
}
