import { ITeacher } from './models/teacher.interface'

export class Teacher implements ITeacher {
  id?: string
  name: string
  active: boolean
  createdAt: Date
  modifiedAt: Date

  constructor(
    name: string,
    active: boolean,
    createdAt: Date,
    modifiedAt: Date,
  ) {
    this.name = name
    this.active = active
    this.createdAt = createdAt
    this.modifiedAt = modifiedAt
  }
}
