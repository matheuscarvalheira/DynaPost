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
    nullable: false,
  })
  title: string

  @Column({
    name: 'body',
    type: 'text',
    nullable: false,
  })
  body: string

  @Column({
    name: 'published',
    type: 'bool',
    default: true,
  })
  published: boolean

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    nullable: false,
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'modified_at',
    type: 'timestamp',
    nullable: false,
  })
  modifiedAt: Date
}
