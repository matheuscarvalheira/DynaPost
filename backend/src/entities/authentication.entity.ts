import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { IAuthentication } from './models/authentication.interface'
import { env } from '@/env'

@Entity('auth')
export class Authentication implements IAuthentication {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id?: string | undefined

  @Column({
    name: 'email',
    type: 'varchar',
    nullable: false,
  })
  email: string

  @Column({
    name: 'password',
    type: 'varchar',
    nullable: false,
  })
  password: string

  @Column({
    name: 'accountType',
    type: 'varchar',
    nullable: false,
    default: 'student',
  })
  accountType: 'student' | 'teacher'

  @CreateDateColumn({
    name: 'created_at',
    type: env.NODE_ENV === 'test' ? 'datetime' : 'timestamp without time zone',
    nullable: false,
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'modified_at',
    type: env.NODE_ENV === 'test' ? 'datetime' : 'timestamp without time zone',
    nullable: false,
  })
  modifiedAt: Date
}
