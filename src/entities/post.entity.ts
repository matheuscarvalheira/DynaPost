import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { IPost } from './models/post.interface'

@Entity('post')
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
    name: 'body',
    type: 'text',
  })
  body: string

  @Column({
    name: 'published',
    type: 'bool',
  })
  published: boolean

  @CreateDateColumn({
    name: 'created_at',
    type: 'time without time zone',
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'modified_at',
    type: 'time without time zone',
  })
  modifiedAt: Date

  constructor(title: string, body: string, published: boolean) {
    this.title = title
    this.body = body
    this.published = published
  }
}
