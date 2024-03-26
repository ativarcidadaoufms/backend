import { Module } from '@nestjs/common'
import { UserController } from '../../adapters/controllers/user.controller'
import { UserService } from '../../usecases/user/user.service'

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService]
})
export class UsersModule {}
