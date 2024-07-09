import { Application } from 'express'
import { findAllPosts } from './find-all-posts'

export async function postRoutes(app: Application) {
  app.get('/posts', findAllPosts)
}
