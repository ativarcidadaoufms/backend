import { Module } from "@nestjs/common";
import { AuthService } from "../../usecases/services/auth/auth.service";
import { UsersModule } from "../../infrastructure/user/user.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
