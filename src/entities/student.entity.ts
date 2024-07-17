import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IStudent } from './models/student.interface'
import { env } from '@/env'

@Entity('students')
export class Student implements IStudent {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id?: string | undefined

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string

  @Column({
    name: 'active',
    type: env.NODE_ENV === 'test' ? 'integer' : 'boolean',
  })
  active: boolean

  @Column({
    name: 'created_at',
    type: env.NODE_ENV === 'test' ? 'datetime' : 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date

  @Column({
    name: 'modified_at',
    type: env.NODE_ENV === 'test' ? 'datetime' : 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  modifiedAt: Date
}
