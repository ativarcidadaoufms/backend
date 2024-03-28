import { Module } from '@nestjs/common'
import { UsersController } from '../../adapters/controllers/user.controller'
import { UsersService } from '../../usecases/user/user.service'

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UserModule {}
