import { env } from './env'
import { app } from '@/app'
import { appDataSource } from './lib/typeorm/typeorm'

app.listen(env.PORT, () => {
  console.log(`Server is running on http://localhost:${env.PORT}`)
  appDataSource
    .initialize()
    .then(() => {
      console.log('Database with typeorm connected')
      if (env.NODE_ENV === 'development' || env.NODE_ENV === 'production') {
        appDataSource.runMigrations().then(() => {
          console.log('Migrations done')
        })
      }
    })
    .catch((error) => {
      console.error('Error connecting to database with typeorm', error)
    })
})
