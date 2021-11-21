import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const port = 3000

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule)
  await app.listen(port)
}
void bootstrap()
