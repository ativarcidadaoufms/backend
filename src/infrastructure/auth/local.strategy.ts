import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../../usecases/services/auth/auth.service";
import type { User } from "../../core/entities/user.entity";

function isUser(obj: User): obj is User {
  return typeof obj.username === "string" && typeof obj.password === "string";
}

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(
    id: number,
    username: string,
    password: string,
  ): Promise<User | null> {
    const user = await this.authService.validateUser(id, username, password);
    if (!isUser(user as User)) {
      throw new UnauthorizedException();
    }
    return user;
  }
}