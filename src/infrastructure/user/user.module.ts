import { Module } from "@nestjs/common";
import { UserController } from "../../adapters/controllers/user.controller";
import { UserService } from "../../usecases/services/user/user.service";
import { DataSource } from "typeorm";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../../core/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, DataSource],
})
export class UsersModule {}
