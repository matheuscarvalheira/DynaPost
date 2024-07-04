// import { env } from './env'
import { app } from '@/app'
import { Response, Request } from 'express'

const port = 3000

app.get('/', (_: Request, res: Response) => {
  console.log('Received a request!')
  res.send('Hello, world!')
})

app.listen(port, () => {
  // eslint-disable-next-line no-template-curly-in-string
  console.log('Server is running on http://localhost:${port}')
})
