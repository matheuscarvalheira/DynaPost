import { findAllPosts } from './find-all-posts'
import { findAllAdmin } from './find-admin'
import { findPost } from './find-post'
import { create } from './create'
import { update } from './update'
import { remove } from './remove'
import { search } from './search'
import { Application } from 'express'
import { asyncWrapper } from '@/utils/async-wrapper'

export async function postRoutes(app: Application) {
  app.get('/posts/admin', asyncWrapper(findAllAdmin))
  app.get('/posts/search/', asyncWrapper(search))
  app.get('/posts', asyncWrapper(findAllPosts))
  app.get('/posts/:id', asyncWrapper(findPost))
  app.post('/posts', asyncWrapper(create))
  app.put('/posts/:id', asyncWrapper(update))
  app.delete('/posts/:id', asyncWrapper(remove))
}
