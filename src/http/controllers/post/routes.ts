import { Application } from 'express'
import { findAllPosts } from './find-all-posts'
import { findPost } from './find-post'
import { create } from './create'

export async function postRoutes(app: Application) {
  app.get('/posts', findAllPosts)
  app.get('/posts/:id', findPost)
  app.post('/post', create)
}
