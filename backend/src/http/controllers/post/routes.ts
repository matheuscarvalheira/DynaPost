import { findAllPosts } from './find-all-posts'
import { findAllAdmin } from './find-admin'
import { findPost } from './find-post'
import { create } from './create'
import { update } from './update'
import { remove } from './remove'
import { search } from './search'
import { Application } from 'express'
import { findPostsByClassroom } from './get-posts-by-classroom'

export async function postRoutes(app: Application) {
  app.get('/posts/admin', findAllAdmin)
  app.get('/posts/search/', search)
  app.get('/posts/classroom/:classroom_id', findPostsByClassroom)
  app.get('/posts', findAllPosts)
  app.get('/posts/:id', findPost)
  app.post('/posts', create)
  app.put('/posts/:id', update)
  app.delete('/posts/:id', remove)
}
