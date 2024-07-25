import { env } from './env'
import { app } from '@/app'
import { appDataSource } from './lib/typeorm/typeorm'

app.listen(env.PORT, async () => {
  console.log(`Server is running on http://localhost:${env.PORT}`)
  await appDataSource
    .initialize()
    .then(() => {
      console.log('Database with typeorm connected')
    })
    .catch((error) => {
      console.error('Error connecting to database with typeorm', error)
    })
})
