import express from 'express';
import createError from 'http-errors';
import { globalErrorHandler } from './utils/global-error-handler';
import { postRouter } from './http/controllers/post/routes';

export const app = express();

app.use(postRouter);

app.use((_, __, next) => {
  next(createError(404, 'Endpoint not found'));
});

app.use(globalErrorHandler);
