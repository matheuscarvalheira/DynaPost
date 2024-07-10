import { findAllPosts } from './find-all-posts'
import { findPost } from './find-post'
import express from 'express'

export const postRouter = express.Router()

postRouter.get('/posts', findAllPosts)
postRouter.get('/posts/:id', findPost)
