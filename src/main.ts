import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { UserModule } from './infrastructure/user/user.module'

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create(UserModule)
  await app.listen(3000).then(() => {
    console.log('Server is running on port 3000!')
  }).catch((error) => {
    console.error('Error starting server', error)
  })
}
bootstrap().catch((error) => {
  console.error('Error starting server', error)
})
