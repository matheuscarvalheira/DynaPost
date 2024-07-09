import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IPost } from './models/post.interface'

@Entity({ name: 'post' })
export class Post implements IPost {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id?: string | undefined

  @Column({
    name: 'title',
    type: 'varchar',
  })
  title: string

  @Column({
    name: 'content',
    type: 'text',
  })
  content: string

  @Column({
    name: 'author',
    type: 'varchar',
  })
  author: string

  @Column({
    name: 'team',
    type: 'varchar',
  })
  team: string

  @Column({
    name: 'creation_date',
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date

  constructor(
    title: string,
    content: string,
    author: string,
    team: string,
    createdAt: Date,
  ) {
    this.title = title
    this.content = content
    this.author = author
    this.team = team
    this.createdAt = createdAt
  }
}
