import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ITeacher } from './models/teacher.interface'

@Entity({
  name: 'teacher',
})
export class Teacher implements ITeacher {
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
    type: 'boolean',
  })
  active: boolean

  @Column({
    name: 'created_at',
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date

  @Column({
    name: 'modified_at',
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  modifiedAt: Date
}
