import { Module } from "@nestjs/common";
import { UserController } from "../../usecases/user/user.controller";
import { UserService } from "../../domain/user/user.service";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
