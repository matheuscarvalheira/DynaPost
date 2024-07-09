import { IPost } from "@/entities/models/post.interface";
import { IPostRepository } from "../post.repository.interface";
import { Repository } from "typeorm";
import { Post } from "@/entities/post.entity";
import { appDataSource } from "@/lib/typeorm/typeorm";

export class PostReposiroey implements IPostRepository {

    private repository: Repository<Post>

    constructor(){
        this.repository = appDataSource.getRepository(Post)
    }

    findAll(page: number, limit: number): Promise<IPost[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<IPost | null> {
        throw new Error("Method not implemented.");
    }
    create(product: IPost): Promise<IPost> {
        throw new Error("Method not implemented.");
    }
    update(product: IPost): Promise<IPost> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}
