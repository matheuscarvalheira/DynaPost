import { Application } from 'express'
import { findAllPosts } from './find-all-posts'
import { findPost } from './find-post'
import { create } from './create'
import { update } from './update'
import { remove } from './remove'

export async function postRoutes(app: Application) {
  app.get('/posts', findAllPosts)
  app.get('/posts/:id', findPost)
  app.post('/posts', create)
  app.put('/posts/:id', update)
  app.delete('/posts/:id', remove)
}
