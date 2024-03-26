import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common'
import { UserService } from '../../usecases/user/user.service'
import { AuthGuard } from '@nestjs/passport'
import type { User } from '../../core/entities/user.entity'
@Controller()
export class UserController {
  constructor (private readonly userService: UserService) {}

  @Get()
  getHello (): string {
    return this.userService.getHello()
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login (@Request() req): Promise<User | undefined> {
    return req.user
  }
}
