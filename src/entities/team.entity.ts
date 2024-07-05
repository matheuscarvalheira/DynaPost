import { ITeam } from './models/team.interface'

export class Team implements ITeam {
  id?: number
  name: string

  constructor(name: string) {
    this.name = name
  }
}
