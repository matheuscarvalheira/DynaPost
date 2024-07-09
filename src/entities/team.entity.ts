import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ITeam } from './models/team.interface'

@Entity({ name: 'team' })
export class Team implements ITeam {
  @PrimaryGeneratedColumn('increment', {
    name: 'id',
  })
  id?: number | undefined

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string

  constructor(name: string) {
    this.name = name
  }
}
