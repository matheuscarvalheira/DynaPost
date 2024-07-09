import { Application } from 'express'
import { findAllPosts } from './find-all-posts'
import { findPost } from './find-post'

export async function postRoutes(app: Application) {
  app.get('/posts', findAllPosts)
  app.get('/posts/:id', findPost)
}
