import { IPost } from '@/entities/models/post.interface'

export interface IPostRepository {
  findAll(page: number, limit: number): Promise<IPost[]>
  findAllAdmin(page: number, limit: number): Promise<IPost[]>
  search({
    query,
    classroom_id,
  }: {
    query: string
    classroom_id: string
  }): Promise<IPost[] | undefined>
  findById(id: string): Promise<IPost | null>
  create(post: IPost): Promise<IPost>
  update(post: IPost): Promise<IPost>
  delete(id: string): Promise<void>
}
