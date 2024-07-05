import { IPost } from './models/post.interface'

export class Post implements IPost {
  id?: number
  title: string
  content: string
  author: string
  team: string
  createdAt?: Date

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
